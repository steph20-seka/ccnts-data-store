import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Mail, ArrowRight, CheckCircle, AlertCircle, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { SEOHead } from '../components/SEOHead';
import { SecurityBadge } from '../components/auth/SecurityBadge';
import { toast } from 'sonner';

export function ForgotPasswordPage() {
  const { resetPassword } = useFirebaseAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await resetPassword(email);
    setIsLoading(false);

    if (error) {
      let errorMessage = 'Une erreur est survenue.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Aucun compte associé à cette adresse email.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Adresse email invalide.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard.';
      }

      toast.error('Erreur', {
        description: errorMessage,
      });
    } else {
      setEmailSent(true);
      toast.success('Email envoyé !', {
        description: 'Vérifiez votre boîte de réception.',
      });
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <SEOHead pageKey="forgot-password" noIndex={true} />
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
            </div>

            <motion.h1
              className="text-gray-900 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Email envoyé !
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 shadow-xl border-0 mb-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Nous avons envoyé un lien de réinitialisation à :
                  </p>
                  <p className="font-semibold text-blue-600">{email}</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Prochaines étapes
                    </h3>
                    <ol className="space-y-2 ml-6 list-decimal">
                      <li>Ouvrez votre boîte email</li>
                      <li>Cliquez sur le lien de réinitialisation</li>
                      <li>Créez votre nouveau mot de passe</li>
                      <li>Connectez-vous avec vos nouveaux identifiants</li>
                    </ol>
                  </div>

                  <p className="text-sm text-gray-500">
                    Le lien expire dans <strong>1 heure</strong>
                  </p>

                  <Button
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Renvoyer l'email
                  </Button>
                </div>
              </Card>

              <Link 
                to="/login" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>←</span>
                Retour à la connexion
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <SEOHead pageKey="forgot-password" noIndex={true} />
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <KeyRound className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-gray-900 mb-2">Mot de passe oublié ?</h1>
          <p className="text-gray-600">
            Pas de problème ! Entrez votre email et nous vous enverrons un lien de réinitialisation.
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
                  <Mail className="w-4 h-4 text-blue-600" />
                  Adresse email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@exemple.com"
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-sm text-gray-500">
                  Entrez l'email associé à votre compte CCNTS
                </p>
              </div>

              {/* Security Info */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-800">
                    <p className="font-medium mb-1">Sécurité garantie</p>
                    <p>Le lien de réinitialisation sera valide pendant 1 heure et ne pourra être utilisé qu'une seule fois.</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer le lien de réinitialisation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">ou</span>
                </div>
              </div>

              {/* Back to Login */}
              <div className="text-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                >
                  <span>←</span>
                  Retour à la connexion
                </Link>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SecurityBadge variant="compact" />
        </motion.div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
