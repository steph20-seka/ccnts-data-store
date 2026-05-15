import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityBadgeProps {
  variant?: 'default' | 'compact';
}

export function SecurityBadge({ variant = 'default' }: SecurityBadgeProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Shield className="w-4 h-4 text-green-600" />
        <span>Connexion sécurisée SSL</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-green-900 mb-2">Vos données sont sécurisées</h3>
          <div className="space-y-1.5">
            <SecurityFeature icon={Lock} text="Cryptage SSL 256-bit" />
            <SecurityFeature icon={Eye} text="Aucune donnée partagée avec des tiers" />
            <SecurityFeature icon={CheckCircle} text="Authentification Firebase sécurisée" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SecurityFeature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-green-800">
      <Icon className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  );
}
