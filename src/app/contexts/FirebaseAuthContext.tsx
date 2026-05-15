import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updatePassword as firebaseUpdatePassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  updateProfile,
  sendEmailVerification,
  reload,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { auth, db, storage } from '../lib/firebaseClient';

export interface ExtendedProfile {
  phone?: string;
  birthdate?: string;
  address?: string;
  city?: string;
  country?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: Error | null }>;
  updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<{ error: Error | null }>;
  uploadProfilePhoto: (file: File) => Promise<{ url?: string; error: Error | null }>;
  deleteProfilePhoto: () => Promise<{ error: Error | null }>;
  getExtendedProfile: () => Promise<{ data?: ExtendedProfile; error: Error | null }>;
  updateExtendedProfile: (data: Partial<ExtendedProfile> & { displayName?: string }) => Promise<{ error: Error | null }>;
  sendVerificationEmail: () => Promise<{ error: Error | null }>;
  checkEmailVerified: () => Promise<boolean>;
  reloadUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Resize an image file client-side using Canvas
async function resizeImage(file: File, maxSize = 512): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const ratio = Math.min(maxSize / img.width, maxSize / img.height, 1);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('Canvas not supported')); return; }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Image conversion failed'));
      }, 'image/jpeg', 0.88);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Image load failed')); };
    img.src = url;
  });
}

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (fullName) {
        await updateProfile(user, { displayName: fullName });
      }
      await setDoc(doc(db, 'profiles', user.uid), {
        id: user.uid,
        email: user.email,
        full_name: fullName || null,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      });
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, 'profiles', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'profiles', user.uid), {
          id: user.uid,
          email: user.email,
          full_name: user.displayName || null,
          created_at: serverTimestamp(),
          updated_at: serverTimestamp(),
        });
      }
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      if (!user) throw new Error('No user logged in');
      await firebaseUpdatePassword(user, newPassword);
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const updateUserProfile = async (data: { displayName?: string; photoURL?: string }) => {
    try {
      if (!user) throw new Error('No user logged in');
      await updateProfile(user, data);
      await setDoc(doc(db, 'profiles', user.uid), {
        ...(data.displayName && { full_name: data.displayName }),
        updated_at: serverTimestamp(),
      }, { merge: true });
      await reload(user);
      setUser({ ...user });
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const uploadProfilePhoto = async (file: File): Promise<{ url?: string; error: Error | null }> => {
    try {
      if (!user) throw new Error('No user logged in');
      const resized = await resizeImage(file, 512);
      const storageRef = ref(storage, `profile-photos/${user.uid}`);
      await uploadBytes(storageRef, resized, { contentType: 'image/jpeg' });
      const url = await getDownloadURL(storageRef);
      await updateProfile(user, { photoURL: url });
      await setDoc(doc(db, 'profiles', user.uid), {
        photo_url: url,
        updated_at: serverTimestamp(),
      }, { merge: true });
      await reload(user);
      setUser({ ...user });
      return { url, error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const deleteProfilePhoto = async (): Promise<{ error: Error | null }> => {
    try {
      if (!user) throw new Error('No user logged in');
      // Supprimer la photo du Storage si elle existe
      if (user.photoURL) {
        try {
          const storageRef = ref(storage, `profile-photos/${user.uid}`);
          await deleteObject(storageRef);
        } catch (e: any) {
          // Ignorer l'erreur si la photo n'existe pas
          if (!e.code?.includes('object-not-found')) throw e;
        }
      }
      // Supprimer l'URL de la photo dans Auth et Firestore
      await updateProfile(user, { photoURL: null });
      await setDoc(doc(db, 'profiles', user.uid), {
        photo_url: null,
        updated_at: serverTimestamp(),
      }, { merge: true });
      await reload(user);
      setUser({ ...user });
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const getExtendedProfile = async (): Promise<{ data?: ExtendedProfile; error: Error | null }> => {
    try {
      if (!user) throw new Error('No user logged in');
      const snap = await getDoc(doc(db, 'profiles', user.uid));
      if (snap.exists()) {
        const d = snap.data();
        return {
          data: {
            phone: d.phone || '',
            birthdate: d.birthdate || '',
            address: d.address || '',
            city: d.city || '',
            country: d.country || '',
            location: d.location || '',
          },
          error: null,
        };
      }
      return { data: {}, error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const updateExtendedProfile = async (
    data: Partial<ExtendedProfile> & { displayName?: string }
  ): Promise<{ error: Error | null }> => {
    try {
      if (!user) throw new Error('No user logged in');
      const { displayName, ...firestoreData } = data;
      if (displayName) {
        await updateProfile(user, { displayName });
      }
      const updatePayload: Record<string, any> = { updated_at: serverTimestamp() };
      if (displayName) updatePayload.full_name = displayName;
      if (firestoreData.phone !== undefined) updatePayload.phone = firestoreData.phone;
      if (firestoreData.birthdate !== undefined) updatePayload.birthdate = firestoreData.birthdate;
      if (firestoreData.address !== undefined) updatePayload.address = firestoreData.address;
      if (firestoreData.city !== undefined) updatePayload.city = firestoreData.city;
      if (firestoreData.country !== undefined) updatePayload.country = firestoreData.country;
      if (firestoreData.location !== undefined) updatePayload.location = firestoreData.location;
      await setDoc(doc(db, 'profiles', user.uid), updatePayload, { merge: true });
      await reload(user);
      setUser({ ...user });
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const sendVerificationEmail = async () => {
    try {
      if (!user) throw new Error('No user logged in');
      await sendEmailVerification(user);
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const checkEmailVerified = async () => {
    if (!user) throw new Error('No user logged in');
    return user.emailVerified;
  };

  const reloadUser = async () => {
    try {
      if (!user) throw new Error('No user logged in');
      await reload(user);
      setUser({ ...user });
    } catch (error: any) {
      console.error('Error reloading user:', error);
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    resetPassword,
    updatePassword,
    updateUserProfile,
    uploadProfilePhoto,
    deleteProfilePhoto,
    getExtendedProfile,
    updateExtendedProfile,
    sendVerificationEmail,
    checkEmailVerified,
    reloadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useFirebaseAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useFirebaseAuth must be used within a FirebaseAuthProvider');
  }
  return context;
}
