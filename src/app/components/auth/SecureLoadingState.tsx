import { Shield, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface SecureLoadingStateProps {
  message?: string;
}

export function SecureLoadingState({ message = 'Chargement sécurisé...' }: SecureLoadingStateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Security Shield Animation */}
          <div className="relative mb-6 flex justify-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-blue-400 rounded-full"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* Loading Text */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {message}
          </h3>
          
          <p className="text-gray-600 mb-6">
            Vérification de vos informations sécurisées
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Security Badge */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Lock className="w-4 h-4 text-green-600" />
              <span>Connexion sécurisée SSL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
