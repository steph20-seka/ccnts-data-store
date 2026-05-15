import { Award, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';

interface CertificationBadgeProps {
  variant?: 'compact' | 'full';
}

export function CertificationBadge({ variant = 'compact' }: CertificationBadgeProps) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-400 rounded-lg">
        <Award className="w-5 h-5 text-yellow-600" />
        <span className="font-medium text-yellow-800">Certification incluse</span>
      </div>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-300">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-gray-900 mb-2 flex items-center gap-2">
            <span>🎓 Certification CCNTS</span>
          </h4>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            À la fin de ce cours, en réussissant le quiz final avec un score minimum de <strong>80%</strong>, 
            vous obtenez automatiquement un <strong>certificat numérique de réussite</strong> délivré par le CCNTS.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Certificat personnalisé avec votre nom</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Numéro de certificat unique</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Téléchargeable et imprimable en PDF</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>100% gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
