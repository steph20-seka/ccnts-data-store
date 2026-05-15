import { ReactNode, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FirebaseAuthModal } from './FirebaseAuthModal';
import { Button } from './ui/button';
import { Lock, CheckCircle2, User } from 'lucide-react';
import { Card } from './ui/card';

interface CourseAccessGateProps {
  children: ReactNode;
  courseName: string;
  showTeaser?: boolean;
  teaserContent?: ReactNode;
}

export function CourseAccessGate({ children, courseName, showTeaser = true, teaserContent }: CourseAccessGateProps) {
  const { isAuthenticated, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (isAuthenticated) {
    // Utilisateur connecté - afficher le contenu complet
    return (
      <>
        {/* Bandeau utilisateur connecté */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                <div>
                  <p className="font-bold text-lg">Connecté : {user?.fullName || user?.email}</p>
                  <p className="text-sm text-green-100">Accès complet au cours et au certificat</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm">Mon compte</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </>
    );
  }

  // Utilisateur non connecté - afficher le teaser et le blocage
  return (
    <>
      {/* Bandeau de blocage */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-6 mb-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">🔒 Cours verrouillé</h3>
              <p className="text-lg mb-4 text-white/90">
                Connecte-toi ou crée un compte pour accéder au contenu complet du cours <strong>"{courseName}"</strong> et obtenir ton certificat officiel CCNTS.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold px-6 py-6 text-lg shadow-xl"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Se connecter
                </Button>
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-6 text-lg shadow-xl"
                >
                  <User className="w-5 h-5 mr-2" />
                  Créer un compte gratuitement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaser du cours */}
      {showTeaser && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Card className="p-8 border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Aperçu du cours</h3>
                <p className="text-gray-600">Voici ce que vous allez apprendre (contenu limité)</p>
              </div>
            </div>

            {teaserContent}

            <div className="mt-8 p-6 bg-white rounded-xl border-2 border-orange-300 shadow-lg">
              <h4 className="font-bold text-gray-900 text-xl mb-4">🎯 Contenu complet disponible après connexion :</h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>Accès à tous les modules et exercices</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>Vidéos complètes et ressources téléchargeables</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>Quiz d'évaluation interactifs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>Suivi de progression personnalisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span><strong>Certificat officiel CCNTS</strong> téléchargeable en PDF</span>
                </li>
              </ul>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => setShowAuthModal(true)}
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-6 text-xl shadow-2xl"
                >
                  🚀 Débloquer le cours maintenant
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Modal d'authentification */}
      <FirebaseAuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab="signup"
        courseName={courseName}
      />
    </>
  );
}