import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { UserPlus, Mail, Lock, User, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { SEOHead } from '../components/SEOHead';
import { PasswordStrengthIndicator } from '../components/auth/PasswordStrengthIndicator';
import { SecurityBadge } from '../components/auth/SecurityBadge';
import { toast } from 'sonner@2.0.3';

export function SignUpPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { sendVerificationEmail } = useFirebaseAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier que les mots de passe correspondent
    if (formData.password !== formData.confirmPassword) {
      toast.error('Erreur de validation', {
        description: 'Les mots de passe ne correspondent pas.',
      });
      return;
    }

    // Vérifier la longueur du mot de passe
    if (formData.password.length < 8) {
      toast.error('Erreur de validation', {
        description: 'Le mot de passe doit contenir au moins 8 caractères.',
      });
      return;
    }

    setIsLoading(true);

    const result = await signup({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      password: formData.password,
    });

    if (result.success) {
      // Envoyer l'email de vérification
      await sendVerificationEmail();
      
      toast.success('Compte créé avec succès !', {
        description: 'Un email de vérification a été envoyé.',
        duration: 5000,
      });
      
      // Rediriger vers la page de vérification d'email
      navigate('/verify-email');
    } else {
      setIsLoading(false);
      toast.error('Erreur lors de la création du compte', {
        description: result.error || 'Veuillez réessayer',
      });
    }
  };

  const benefits = [
    'Accès aux cours gratuits et certifications',
    'Suivi de votre progression d\'apprentissage',
    'Téléchargement de certificats professionnels',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead pageKey="signup" noIndex={true} />
      <div className="max-w-2xl mx-auto">
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
                <Logo size="sm" className="brightness-0 invert" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-gray-900 mb-2">Rejoignez CCNTS</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Créez votre compte et accédez à nos formations en cartographie numérique et géospatial
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-8 shadow-xl border-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nom complet */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4 text-blue-600" />
                    Nom complet
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Ex: Jean Kouassi"
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Téléphone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Téléphone (optionnel)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+225 XX XX XX XX XX"
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Localisation */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Localisation (optionnel)
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Ex: Abidjan, Côte d'Ivoire"
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Mot de passe */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2 text-gray-700">
                    <Lock className="w-4 h-4 text-blue-600" />
                    Mot de passe
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Min. 8 caractères"
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <PasswordStrengthIndicator password={formData.password} />
                </div>

                {/* Confirmer mot de passe */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-gray-700">
                    <Lock className="w-4 h-4 text-blue-600" />
                    Confirmer le mot de passe
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirmer"
                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
                disabled={isLoading}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                {isLoading ? 'Création du compte...' : 'Créer mon compte'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Déjà membre ?</span>
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-600 mb-3">
                  Connectez-vous pour accéder à vos cours et certifications
                </p>
                <Link 
                  to="/login" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                >
                  Se connecter à mon compte
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
          transition={{ delay: 0.5 }}
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

export default SignUpPage;