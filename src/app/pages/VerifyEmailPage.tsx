import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Mail, CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { SEOHead } from '../components/SEOHead';
import { toast } from 'sonner';

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const { user, sendVerificationEmail, reloadUser, checkEmailVerified } = useFirebaseAuth();
  const [isResending, setIsResending] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (user.emailVerified) {
      toast.success('Email vérifié !', {
        description: 'Vous pouvez maintenant accéder à tous nos services.',
      });
      navigate('/academy');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResendEmail = async () => {
    setIsResending(true);
    const { error } = await sendVerificationEmail();
    setIsResending(false);

    if (error) {
      toast.error('Erreur', {
        description: 'Impossible de renvoyer l\'email. Veuillez réessayer.',
      });
    } else {
      toast.success('Email envoyé !', {
        description: 'Vérifiez votre boîte de réception.',
      });
      setCountdown(60); // 60 secondes avant de pouvoir renvoyer
    }
  };

  const handleCheckVerification = async () => {
    setIsChecking(true);
    await reloadUser();
    
    const isVerified = await checkEmailVerified();
    setIsChecking(false);

    if (isVerified) {
      toast.success('Email vérifié !', {
        description: 'Redirection vers votre espace...',
      });
      setTimeout(() => navigate('/academy'), 1500);
    } else {
      toast.error('Email non vérifié', {
        description: 'Veuillez cliquer sur le lien dans l\'email reçu.',
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <SEOHead pageKey="verify-email" noIndex={true} />
      <div className="max-w-2xl mx-auto w-full">
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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Mail className="w-12 h-12 text-white" />
              </div>
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-3xl"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <h1 className="text-gray-900 mb-3">Vérifiez votre email</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Nous avons envoyé un lien de vérification à <strong>{user.email}</strong>
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 shadow-xl border-0">
            <div className="space-y-6">
              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Instructions
                </h3>
                <ol className="space-y-3 text-sm text-blue-800">
                  <li className="flex gap-3">
                    <span className="font-semibold flex-shrink-0">1.</span>
                    <span>Ouvrez votre boîte de réception email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold flex-shrink-0">2.</span>
                    <span>Recherchez un email de CCNTS (vérifiez les spams si nécessaire)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold flex-shrink-0">3.</span>
                    <span>Cliquez sur le lien de vérification dans l'email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold flex-shrink-0">4.</span>
                    <span>Revenez ici et cliquez sur "J'ai vérifié mon email"</span>
                  </li>
                </ol>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button 
                  onClick={handleCheckVerification}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                  disabled={isChecking}
                >
                  {isChecking ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Vérification...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      J'ai vérifié mon email
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <Button 
                  onClick={handleResendEmail}
                  variant="outline"
                  className="w-full h-12"
                  size="lg"
                  disabled={isResending || countdown > 0}
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Envoi...
                    </>
                  ) : countdown > 0 ? (
                    <>Renvoyer dans {countdown}s</>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Renvoyer l'email de vérification
                    </>
                  )}
                </Button>
              </div>

              {/* Help text */}
              <p className="text-sm text-gray-500 text-center">
                Vous n'avez pas reçu l'email ? Vérifiez vos spams ou contactez le support.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Cette étape garantit la sécurité de votre compte</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
