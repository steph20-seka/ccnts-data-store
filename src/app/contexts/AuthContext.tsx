import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useFirebaseAuth, type ExtendedProfile } from './FirebaseAuthContext';

export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
  photoURL?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
}

export interface FullProfile extends User, ExtendedProfile {}

interface AuthContextType {
  user: User | null;
  extendedProfile: ExtendedProfile | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
  updateProfile: (data: { displayName?: string; photoURL?: string }) => Promise<{ success: boolean; error?: string }>;
  uploadProfilePhoto: (file: File) => Promise<{ success: boolean; url?: string; error?: string }>;
  deleteProfilePhoto: () => Promise<{ success: boolean; error?: string }>;
  updateExtendedProfile: (data: Partial<ExtendedProfile> & { displayName?: string }) => Promise<{ success: boolean; error?: string }>;
  refreshExtendedProfile: () => Promise<void>;
  sendVerificationEmail: () => Promise<{ success: boolean; error?: string }>;
  reloadUser: () => Promise<void>;
}

interface SignupData {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function friendlyError(error: any): string {
  const msg: string = error?.message || error?.code || '';

  // Erreurs de permissions
  if (msg.includes('permission') || msg.includes('insufficient')) {
    return 'Vous n\'avez pas les permissions nécessaires pour modifier ce profil.';
  }

  // Erreurs de stockage
  if (msg.includes('storage/unauthorized')) {
    return 'Impossible d\'importer la photo. Vérifiez le format ou la taille du fichier.';
  }
  if (msg.includes('storage/canceled')) return 'Téléchargement annulé.';
  if (msg.includes('storage/quota-exceeded')) return 'La photo dépasse la taille maximale autorisée.';
  if (msg.includes('storage/unauthenticated')) return 'Vous devez être connecté pour modifier votre photo.';

  // Erreurs réseau
  if (msg.includes('network') || msg.includes('offline')) {
    return 'Connexion instable. Vérifiez votre réseau.';
  }

  // Erreur générique
  return 'Impossible d\'enregistrer les informations du profil. Veuillez réessayer.';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const {
    user: firebaseUser,
    signIn, signUp, signOut,
    updateUserProfile,
    uploadProfilePhoto: fbUploadPhoto,
    deleteProfilePhoto: fbDeletePhoto,
    getExtendedProfile,
    updateExtendedProfile: fbUpdateExtended,
    sendVerificationEmail: fbSendVerification,
    reloadUser,
  } = useFirebaseAuth();

  const [extendedProfile, setExtendedProfile] = useState<ExtendedProfile | null>(null);

  // Load extended profile from Firestore whenever the Firebase user changes
  useEffect(() => {
    if (firebaseUser) {
      getExtendedProfile().then(({ data }) => {
        if (data) setExtendedProfile(data);
      });
    } else {
      setExtendedProfile(null);
    }
  }, [firebaseUser?.uid]);

  const user: User | null = firebaseUser
    ? {
        id: firebaseUser.uid,
        fullName: firebaseUser.displayName || firebaseUser.email || 'Utilisateur',
        email: firebaseUser.email || '',
        createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
        photoURL: firebaseUser.photoURL || undefined,
        emailVerified: firebaseUser.emailVerified,
        phoneNumber: firebaseUser.phoneNumber || undefined,
      }
    : null;

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await signIn(email, password);
      if (error) {
        let errorMessage = 'Une erreur est survenue lors de la connexion.';
        const code = (error as any).code || '';
        if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
          errorMessage = 'Email ou mot de passe incorrect.';
        } else if (code === 'auth/invalid-email') {
          errorMessage = 'Adresse email invalide.';
        } else if (code === 'auth/user-disabled') {
          errorMessage = 'Ce compte a été désactivé.';
        } else if (code === 'auth/too-many-requests') {
          errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard.';
        } else if (code === 'auth/network-request-failed') {
          errorMessage = 'Erreur de connexion réseau.';
        }
        return { success: false, error: errorMessage };
      }
      return { success: true };
    } catch {
      return { success: false, error: 'Une erreur inattendue est survenue.' };
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await signUp(userData.email, userData.password, userData.fullName);
      if (error) {
        let errorMessage = 'Une erreur est survenue lors de la création du compte.';
        const code = (error as any).code || '';
        if (code === 'auth/email-already-in-use') errorMessage = 'Cette adresse email est déjà utilisée.';
        else if (code === 'auth/invalid-email') errorMessage = 'Adresse email invalide.';
        else if (code === 'auth/weak-password') errorMessage = 'Mot de passe trop faible (min. 8 caractères).';
        return { success: false, error: errorMessage };
      }
      return { success: true };
    } catch {
      return { success: false, error: 'Une erreur inattendue est survenue.' };
    }
  };

  const logout = async () => {
    try { await signOut(); } catch (e) { console.error('Logout error:', e); }
  };

  const updateProfile = async (data: { displayName?: string; photoURL?: string }): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await updateUserProfile(data);
      if (error) return { success: false, error: friendlyError(error) };
      return { success: true };
    } catch (e: any) {
      return { success: false, error: friendlyError(e) };
    }
  };

  const uploadProfilePhoto = async (file: File): Promise<{ success: boolean; url?: string; error?: string }> => {
    try {
      const { url, error } = await fbUploadPhoto(file);
      if (error) return { success: false, error: friendlyError(error) };
      return { success: true, url };
    } catch (e: any) {
      return { success: false, error: friendlyError(e) };
    }
  };

  const deleteProfilePhoto = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await fbDeletePhoto();
      if (error) return { success: false, error: friendlyError(error) };
      return { success: true };
    } catch (e: any) {
      return { success: false, error: friendlyError(e) };
    }
  };

  const updateExtendedProfile = async (
    data: Partial<ExtendedProfile> & { displayName?: string }
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await fbUpdateExtended(data);
      if (error) return { success: false, error: friendlyError(error) };
      // Refresh local extended profile
      const { data: refreshed } = await getExtendedProfile();
      if (refreshed) setExtendedProfile(refreshed);
      return { success: true };
    } catch (e: any) {
      return { success: false, error: friendlyError(e) };
    }
  };

  const refreshExtendedProfile = async () => {
    const { data } = await getExtendedProfile();
    if (data) setExtendedProfile(data);
  };

  const sendVerificationEmail = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await fbSendVerification();
      if (error) return { success: false, error: friendlyError(error) };
      return { success: true };
    } catch (e: any) {
      return { success: false, error: friendlyError(e) };
    }
  };

  const value = {
    user,
    extendedProfile,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    updateProfile,
    uploadProfilePhoto,
    deleteProfilePhoto,
    updateExtendedProfile,
    refreshExtendedProfile,
    sendVerificationEmail,
    reloadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
