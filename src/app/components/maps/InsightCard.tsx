import { Card } from '../ui/card';
import { LucideIcon } from 'lucide-react';

interface InsightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'red';
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-900',
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    titleColor: 'text-orange-900',
  },
  red: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    titleColor: 'text-red-900',
  },
};

export function InsightCard({ icon: Icon, title, description, color }: InsightCardProps) {
  const colors = colorClasses[color];
  
  return (
    <Card className={`${colors.bg} border-none p-4 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start gap-3">
        <div className={`${colors.iconBg} p-2 rounded-lg flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${colors.iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold mb-1 ${colors.titleColor}`}>
            {title}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
