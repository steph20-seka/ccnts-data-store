import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { Lock, LogIn, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Afficher une page d'avertissement élégante au lieu de rediriger immédiatement
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Lock className="w-12 h-12 text-orange-600" />
              </motion.div>
            </div>

            {/* Message Card */}
            <Card className="p-8 shadow-xl border-0 text-center">
              <h1 className="text-gray-900 mb-4">Accès restreint</h1>
              <p className="text-gray-600 mb-8 text-lg">
                Cette page est réservée aux membres connectés. Vous devez créer un compte ou vous connecter pour accéder à vos cours et certificats.
              </p>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-gray-900 mb-4">Avec un compte CCNTS, vous pouvez :</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Accéder à tous nos cours de cartographie et télédétection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Suivre votre progression en temps réel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Obtenir des certificats officiels CCNTS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Télécharger vos certificats en PDF</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/signup" state={{ from: location }}>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Créer un compte gratuit
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  <Link to="/login" state={{ from: location }}>
                    <LogIn className="w-5 h-5 mr-2" />
                    Se connecter
                  </Link>
                </Button>
              </div>

              {/* Info */}
              <p className="text-sm text-gray-500 mt-6">
                La création de compte est gratuite et ne prend que quelques secondes
              </p>
            </Card>

            {/* Back Link */}
            <div className="text-center mt-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <span>←</span>
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
