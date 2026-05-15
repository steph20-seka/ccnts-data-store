import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color?: string;
}

export function ServiceCard({ icon: Icon, title, description, features, color = 'blue' }: ServiceCardProps) {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600',
    green: 'bg-gradient-to-br from-green-100 to-green-50 text-green-600',
    purple: 'bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600',
    orange: 'bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600',
    teal: 'bg-gradient-to-br from-teal-100 to-teal-50 text-teal-600',
    indigo: 'bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600',
  };

  return (
    <Card className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-gray-200 flex flex-col h-full hover:border-blue-300 hover:-translate-y-1">
      <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl flex items-center justify-center mb-5 sm:mb-6 shadow-sm ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}>
        <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
      </div>
      
      <h3 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3 mb-6 sm:mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base shadow-md hover:shadow-lg transition-all duration-300" 
        asChild
      >
        <Link to="/contact">En savoir plus</Link>
      </Button>
    </Card>
  );
}