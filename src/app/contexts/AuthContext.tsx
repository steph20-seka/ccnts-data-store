import { createContext, useContext, ReactNode } from 'react';
import { useFirebaseAuth } from './FirebaseAuthContext';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: firebaseUser, signIn, signUp, signOut } = useFirebaseAuth();

  // Convertir l'utilisateur Firebase en format User de l'ancien contexte
  const user: User | null = firebaseUser
    ? {
        id: firebaseUser.uid,
        fullName: firebaseUser.displayName || firebaseUser.email || 'Utilisateur',
        email: firebaseUser.email || '',
        createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
      }
    : null;

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await signIn(email, password);
      if (error) {
        // Traduire les erreurs Firebase en français
        let errorMessage = 'Une erreur est survenue lors de la connexion.';
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          errorMessage = 'Email ou mot de passe incorrect.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Adresse email invalide.';
        } else if (error.code === 'auth/user-disabled') {
          errorMessage = 'Ce compte a été désactivé.';
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard.';
        } else if (error.code === 'auth/network-request-failed') {
          errorMessage = 'Erreur de connexion réseau. Vérifiez votre connexion internet.';
        }
        return { success: false, error: errorMessage };
      }
      return { success: true };
    } catch (error: any) {
      console.error('Login error:', error);
      return { success: false, error: 'Une erreur inattendue est survenue.' };
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await signUp(userData.email, userData.password, userData.fullName);
      if (error) {
        // Traduire les erreurs Firebase en français
        let errorMessage = 'Une erreur est survenue lors de la création du compte.';
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'Cette adresse email est déjà utilisée.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Adresse email invalide.';
        } else if (error.code === 'auth/operation-not-allowed') {
          errorMessage = 'L\'inscription est temporairement désactivée.';
        } else if (error.code === 'auth/weak-password') {
          errorMessage = 'Le mot de passe est trop faible. Utilisez au moins 8 caractères.';
        } else if (error.code === 'auth/network-request-failed') {
          errorMessage = 'Erreur de connexion réseau. Vérifiez votre connexion internet.';
        }
        return { success: false, error: errorMessage };
      }
      return { success: true };
    } catch (error: any) {
      console.error('Signup error:', error);
      return { success: false, error: 'Une erreur inattendue est survenue.' };
    }
  };

  const logout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
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