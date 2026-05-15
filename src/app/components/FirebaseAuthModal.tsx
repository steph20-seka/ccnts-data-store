import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { CheckCircle2, AlertCircle, Eye, EyeOff, Lock, Mail, User, Shield, Info } from 'lucide-react';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { toast } from 'sonner';

interface FirebaseAuthModalProps {
  open: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup' | 'reset';
  courseName?: string;
}

export function FirebaseAuthModal({ open, onClose, defaultTab = 'login', courseName }: FirebaseAuthModalProps) {
  const { signIn, signUp, signInWithGoogle, resetPassword } = useFirebaseAuth();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Signup state
  const [signupFullName, setSignupFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  // Reset password state
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetCooldown, setResetCooldown] = useState(0);

  // Password strength
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(signupPassword);
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];
  const strengthLabels = ['Très faible', 'Faible', 'Moyen', 'Bon', 'Excellent'];

  const getErrorMessage = (error: any): string => {
    const errorCode = error?.code || '';
    const errorMessage = error?.message || '';
    
    // Messages d'erreur Firebase traduits en français
    if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
      return 'Email ou mot de passe incorrect. Vérifie tes identifiants.';
    }
    if (errorCode === 'auth/email-already-in-use') {
      return 'Cet email est déjà utilisé. Essaie de te connecter ou utilise un autre email.';
    }
    if (errorCode === 'auth/weak-password') {
      return 'Le mot de passe doit contenir au moins 6 caractères.';
    }
    if (errorCode === 'auth/invalid-email') {
      return 'Email invalide. Vérifie le format de ton adresse email.';
    }
    if (errorCode === 'auth/too-many-requests') {
      return 'Trop de tentatives. Réessaie dans quelques minutes.';
    }
    if (errorCode === 'auth/popup-closed-by-user') {
      return 'Connexion annulée.';
    }
    
    return 'Une erreur est survenue. Réessaie dans quelques instants.';
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const { error } = await signIn(loginEmail, loginPassword);
      
      if (error) {
        setLoginError(getErrorMessage(error));
      } else {
        toast.success('Connexion réussie !', {
          description: 'Bienvenue sur l\'Académie CCNTS'
        });
        onClose();
      }
    } catch (error) {
      setLoginError('Une erreur est survenue lors de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');

    // Validation
    if (!signupFullName.trim()) {
      setSignupError('Le nom complet est requis.');
      return;
    }
    if (signupPassword.length < 6) {
      setSignupError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setSignupError('Les mots de passe ne correspondent pas.');
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(signupEmail, signupPassword, signupFullName);
      
      if (error) {
        setSignupError(getErrorMessage(error));
      } else {
        toast.success('Compte créé avec succès !', {
          description: 'Tu peux maintenant te connecter'
        });
        // Basculer vers l'onglet de connexion
        setActiveTab('login');
        setLoginEmail(signupEmail);
        setLoginPassword(signupPassword);
      }
    } catch (error) {
      setSignupError('Une erreur est survenue lors de l\'inscription.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (resetCooldown > 0) {
      toast.error('Attends avant de renvoyer un email', {
        description: `Réessaie dans ${resetCooldown} secondes`
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await resetPassword(resetEmail);
      
      if (error) {
        toast.error('Erreur', {
          description: getErrorMessage(error)
        });
      } else {
        setResetSuccess(true);
        setResetCooldown(60);
        
        // Décompte du cooldown
        const interval = setInterval(() => {
          setResetCooldown((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        toast.success('Email envoyé !', {
          description: 'Vérifie ta boîte mail pour réinitialiser ton mot de passe'
        });
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi de l\'email');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setLoginError('');
    setSignupError('');

    try {
      const { error } = await signInWithGoogle();
      
      if (error) {
        const errorMsg = getErrorMessage(error);
        toast.error('Erreur de connexion Google', {
          description: errorMsg
        });
        if (activeTab === 'login') {
          setLoginError(errorMsg);
        } else {
          setSignupError(errorMsg);
        }
      } else {
        toast.success('Connexion réussie !', {
          description: 'Bienvenue sur l\'Académie CCNTS'
        });
        onClose();
      }
    } catch (error) {
      toast.error('Erreur lors de la connexion avec Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">
            Académie CCNTS
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {courseName ? (
              <>Connecte-toi pour accéder au cours <strong>{courseName}</strong></>
            ) : (
              'Connecte-toi ou crée un compte pour accéder aux cours'
            )}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="signup">Inscription</TabsTrigger>
            <TabsTrigger value="reset">Mot de passe</TabsTrigger>
          </TabsList>

          {/* LOGIN TAB */}
          <TabsContent value="login">
            <div className="space-y-4">
              {loginError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}

              {/* Google Sign In Button */}
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                variant="outline"
                className="w-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuer avec Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Ou avec email</span>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="ton-email@exemple.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-blue-900">
                    <p className="font-bold mb-1">Connexion sécurisée Firebase</p>
                    <p className="text-sm text-blue-900">
                      <strong>Sécurité :</strong> Ton mot de passe est chiffré (hashé) par Firebase. 
                      Si tu saisis un mot de passe incorrect, la connexion sera refusée.
                    </p>
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Connexion...' : 'Se connecter'}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Mot de passe oublié ?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('reset')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Réinitialiser
                  </button>
                </p>
              </form>
            </div>
          </TabsContent>

          {/* SIGNUP TAB */}
          <TabsContent value="signup">
            <div className="space-y-4">
              {signupError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{signupError}</AlertDescription>
                </Alert>
              )}

              {/* Google Sign In Button */}
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                variant="outline"
                className="w-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuer avec Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Ou avec email</span>
                </div>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom complet
                  </Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Ex: Jean Dupont"
                    value={signupFullName}
                    onChange={(e) => setSignupFullName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="ton-email@exemple.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                      minLength={6}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {signupPassword && (
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded ${
                              i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600">
                        Force : {strengthLabels[Math.max(0, passwordStrength - 1)]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirmer le mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={signupConfirmPassword}
                      onChange={(e) => setSignupConfirmPassword(e.target.value)}
                      required
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {signupConfirmPassword && signupPassword !== signupConfirmPassword && (
                    <p className="text-xs text-red-600">Les mots de passe ne correspondent pas</p>
                  )}
                </div>

                <Alert className="bg-amber-50 border-amber-200">
                  <Shield className="h-4 w-4 text-amber-600" />
                  <AlertDescription>
                    <div className="text-sm text-amber-900">
                      <p className="font-bold mb-1">Sécurité Firebase</p>
                      <p>Ton mot de passe sera automatiquement chiffré (hashé) avant d'être stocké. 
                      Même les administrateurs ne peuvent pas le voir en clair.</p>
                    </div>
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Création du compte...' : 'Créer mon compte'}
                </Button>
              </form>
            </div>
          </TabsContent>

          {/* RESET PASSWORD TAB */}
          <TabsContent value="reset">
            {resetSuccess ? (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-900">
                  <p className="font-bold mb-2">Email envoyé !</p>
                  <p className="text-sm mb-3">
                    Vérifie ta boîte mail <strong>{resetEmail}</strong> et clique sur le lien pour réinitialiser ton mot de passe.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setResetSuccess(false);
                      setResetEmail('');
                    }}
                    className="mt-2"
                  >
                    Renvoyer un email {resetCooldown > 0 && `(${resetCooldown}s)`}
                  </Button>
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-blue-900">
                    Entre ton adresse email pour recevoir un lien de réinitialisation de mot de passe.
                  </AlertDescription>
                </Alert>

                <div className="space-y-2">
                  <Label htmlFor="reset-email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="ton-email@exemple.com"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading || resetCooldown > 0}>
                  {loading ? 'Envoi...' : resetCooldown > 0 ? `Attendre ${resetCooldown}s` : 'Envoyer le lien'}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Retour à la connexion
                  </button>
                </p>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
