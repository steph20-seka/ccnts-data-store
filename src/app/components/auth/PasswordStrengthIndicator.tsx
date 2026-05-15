import { useMemo } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const strength = useMemo(() => {
    let score = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };

    if (checks.length) score++;
    if (checks.uppercase) score++;
    if (checks.lowercase) score++;
    if (checks.number) score++;
    if (checks.special) score++;

    return { score, checks };
  }, [password]);

  const getStrengthColor = () => {
    if (strength.score <= 2) return 'bg-red-500';
    if (strength.score === 3) return 'bg-orange-500';
    if (strength.score === 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (strength.score <= 2) return 'Faible';
    if (strength.score === 3) return 'Moyen';
    if (strength.score === 4) return 'Bon';
    return 'Excellent';
  };

  const getStrengthTextColor = () => {
    if (strength.score <= 2) return 'text-red-600';
    if (strength.score === 3) return 'text-orange-600';
    if (strength.score === 4) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      {/* Barre de force */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Force du mot de passe</span>
          <span className={`text-sm font-medium ${getStrengthTextColor()}`}>
            {getStrengthText()}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${getStrengthColor()} transition-all duration-300`}
            initial={{ width: 0 }}
            animate={{ width: `${(strength.score / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Critères */}
      <div className="space-y-1.5">
        <Criterion met={strength.checks.length} text="Au moins 8 caractères" />
        <Criterion met={strength.checks.uppercase} text="Une lettre majuscule" />
        <Criterion met={strength.checks.lowercase} text="Une lettre minuscule" />
        <Criterion met={strength.checks.number} text="Un chiffre" />
        <Criterion met={strength.checks.special} text="Un caractère spécial" />
      </div>
    </motion.div>
  );
}

function Criterion({ met, text }: { met: boolean; text: string }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${met ? 'text-green-600' : 'text-gray-400'}`}>
      {met ? (
        <Check className="w-4 h-4 flex-shrink-0" />
      ) : (
        <X className="w-4 h-4 flex-shrink-0" />
      )}
      <span>{text}</span>
    </div>
  );
}
