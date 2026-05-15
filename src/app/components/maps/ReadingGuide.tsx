import { Card } from '../ui/card';
import { Navigation } from 'lucide-react';

interface ReadingStep {
  order: number;
  instruction: string;
  focus: string;
}

interface ReadingGuideProps {
  title: string;
  steps: ReadingStep[];
}

export function ReadingGuide({ title, steps }: ReadingGuideProps) {
  return (
    <Card className="border-geospatial-orange-200 bg-gradient-to-br from-geospatial-orange-50 to-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <Navigation className="w-5 h-5 text-geospatial-orange-600" />
        <h4 className="font-semibold text-geospatial-gray-900">{title}</h4>
      </div>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.order} className="flex gap-3 group">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-geospatial-orange-600 text-white flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                {step.order}
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-geospatial-gray-900 text-sm mb-1">
                {step.instruction}
              </p>
              <p className="text-xs text-geospatial-gray-600 leading-relaxed border-l-2 border-geospatial-orange-200 pl-3">
                {step.focus}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Tip */}
      <div className="mt-4 pt-4 border-t border-geospatial-orange-200">
        <p className="text-xs text-geospatial-gray-500 italic">
          💡 Suivez ces étapes dans l'ordre pour une lecture optimale de la carte
        </p>
      </div>
    </Card>
  );
}
