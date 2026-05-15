import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Award, Lock, CheckCircle2, AlertCircle, Download, Share2 } from 'lucide-react';
import { FirebaseAuthModal } from './FirebaseAuthModal';
import { toast } from 'sonner';

interface CertificateGateProps {
  courseId: string;
  courseName: string;
  progress?: number; // 0-100
  quizPassed?: boolean;
  quizRequired?: boolean;
}

export function CertificateGate({
  courseId,
  courseName,
  progress = 0,
  quizPassed = false,
  quizRequired = true
}: CertificateGateProps) {
  const { isAuthenticated, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [generating, setGenerating] = useState(false);

  // Vérifier les conditions
  const isComplete = progress >= 100;
  const canGenerate = isAuthenticated && isComplete && (!quizRequired || quizPassed);

  const handleGenerateCertificate = async () => {
    if (!canGenerate) return;

    setGenerating(true);

    // Simuler la génération du certificat
    setTimeout(() => {
      const certificateId = `CCNTS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      // Sauvegarder dans localStorage
      const certificates = JSON.parse(localStorage.getItem('ccnts_certificates') || '[]');
      const newCertificate = {
        id: certificateId,
        userId: user?.id,
        userName: user?.fullName,
        userEmail: user?.email,
        courseId,
        courseName,
        issuedAt: new Date().toISOString(),
        verifyUrl: `${window.location.origin}/verify-certificate/${certificateId}`
      };
      certificates.push(newCertificate);
      localStorage.setItem('ccnts_certificates', JSON.stringify(certificates));

      toast.success('Certificat généré avec succès !', {
        description: 'Votre certificat est prêt à être téléchargé.'
      });

      // Ouvrir dans un nouvel onglet (simulé)
      window.open(`/certificate/${certificateId}`, '_blank');
      
      setGenerating(false);
    }, 2000);
  };

  // État 1 : Non connecté
  if (!isAuthenticated) {
    return (
      <>
        <Card className="p-8 border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                🔒 Certificat verrouillé
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Tu dois <strong>te connecter</strong> ou <strong>créer un compte</strong> pour débloquer le certificat officiel CCNTS.
              </p>
              
              <div className="bg-white rounded-xl p-6 border-2 border-red-200 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">📋 Pourquoi créer un compte ?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Suivre ta progression dans les cours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Obtenir des certificats officiels vérifiables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Accéder à tout le contenu des cours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Sécuriser tes données et résultats</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => setShowAuthModal(true)}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-8 py-6 text-xl shadow-xl w-full"
              >
                <Lock className="w-6 h-6 mr-2" />
                Se connecter pour débloquer le certificat
              </Button>
            </div>
          </div>
        </Card>

        <FirebaseAuthModal
          open={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          defaultTab="signup"
          courseName={courseName}
        />
      </>
    );
  }

  // État 2 : Connecté mais progression < 100%
  if (!isComplete) {
    return (
      <Card className="p-8 border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              ⏳ Presque fini !
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tu es connecté(e) en tant que <strong>{user?.fullName}</strong>. 
              Termine le cours pour débloquer ton certificat.
            </p>

            <div className="bg-white rounded-xl p-6 border-2 border-yellow-200 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-900">Progression du cours</span>
                <span className="text-2xl font-bold text-yellow-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Encore {Math.round(100 - progress)}% à compléter pour débloquer le certificat
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
              <p className="text-blue-900 font-medium">
                💡 <strong>Astuce :</strong> Parcours tous les modules et exercices pour atteindre 100% de progression.
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // État 3 : Progression 100% mais quiz non validé
  if (quizRequired && !quizPassed) {
    return (
      <Card className="p-8 border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              📝 Dernière étape !
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Bravo {user?.fullName}, tu as terminé le cours ! 
              Il te reste à <strong>valider le quiz d'évaluation</strong> pour obtenir ton certificat.
            </p>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-200 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="font-bold text-gray-900">Cours terminé : 100%</span>
              </div>
              <div className="flex items-center gap-3 text-purple-600">
                <div className="w-6 h-6 border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">?</span>
                </div>
                <span className="font-bold">Quiz d'évaluation : En attente</span>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">📋 Conditions pour obtenir le certificat :</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Score minimum au quiz (généralement 80%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Répondre à toutes les questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Une seule tentative par quiz</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-xl shadow-xl w-full"
            >
              📝 Passer le quiz d'évaluation
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // État 4 : Tout validé - Certificat disponible
  return (
    <Card className="p-8 border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            🎉 Félicitations {user?.fullName} !
          </h3>
          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            Tu as <strong>terminé le cours</strong> et <strong>validé l'évaluation</strong>. 
            Ton certificat officiel CCNTS est prêt !
          </p>

          <div className="bg-white rounded-xl p-6 border-2 border-green-200 mb-6">
            <h4 className="font-bold text-gray-900 text-xl mb-4">✅ Toutes les conditions validées :</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-gray-800 font-medium">Compte créé et connecté</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-gray-800 font-medium">Cours terminé à 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-gray-800 font-medium">Quiz d'évaluation réussi</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-gray-900 text-lg mb-3">📜 Ton certificat inclut :</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▸</span>
                <span>Ton nom complet : <strong>{user?.fullName}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▸</span>
                <span>Nom du cours : <strong>{courseName}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▸</span>
                <span>Date de délivrance : <strong>{new Date().toLocaleDateString('fr-FR')}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▸</span>
                <span>Identifiant unique de vérification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">▸</span>
                <span>Signature officielle CCNTS</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={handleGenerateCertificate}
              disabled={generating}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-6 text-xl shadow-2xl"
            >
              {generating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Génération...
                </>
              ) : (
                <>
                  <Download className="w-6 h-6 mr-2" />
                  Télécharger mon certificat (PDF)
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 text-xl"
            >
              <Share2 className="w-6 h-6 mr-2" />
              Partager mon certificat
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-6 text-center">
            💡 Ton certificat est stocké de manière sécurisée et peut être vérifié via son identifiant unique
          </p>
        </div>
      </div>
    </Card>
  );
}