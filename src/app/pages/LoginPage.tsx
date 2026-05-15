import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { LogIn, Mail, Lock, ArrowRight, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';
import { SEOHead } from '../components/SEOHead';
import { SecurityBadge } from '../components/auth/SecurityBadge';
import { toast } from 'sonner';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(email, password);
    
    setIsLoading(false);

    if (result.success) {
      toast.success('Connexion réussie !', {
        description: 'Bienvenue sur votre espace CCNTS',
      });
      // Rediriger vers l'académie après connexion réussie
      navigate('/academy');
    } else {
      toast.error('Erreur de connexion', {
        description: result.error || 'Veuillez vérifier vos identifiants',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <SEOHead pageKey="login" noIndex={true} />
      <div className="max-w-md mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Logo size="sm" className="brightness-0 invert" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-gray-900 mb-2">Bienvenue</h1>
          <p className="text-gray-600">
            Connectez-vous pour accéder à votre espace CCNTS
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 shadow-xl border-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-orange-600" />
                  Adresse email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@exemple.com"
                  className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Mot de passe */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="flex items-center gap-2 text-gray-700">
                    <Lock className="w-4 h-4 text-orange-600" />
                    Mot de passe
                  </Label>
                  <Link
                    to="/reset-password"
                    className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Info */}
              <motion.div 
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-green-800 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Connectez-vous pour accéder aux cours, suivre votre progression et obtenir vos certificats.
                  </span>
                </p>
              </motion.div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
                disabled={isLoading}
              >
                <LogIn className="w-4 h-4 mr-2" />
                {isLoading ? 'Connexion...' : 'Se connecter'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Nouveau sur CCNTS ?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600 mb-3">
                  Créez votre compte pour accéder à nos cours et certifications
                </p>
                <Link 
                  to="/signup" 
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
                >
                  Créer un compte gratuitement
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <span>←</span>
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;