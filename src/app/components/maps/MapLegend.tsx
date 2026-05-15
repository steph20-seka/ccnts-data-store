import { Card } from '../ui/card';
import { Book } from 'lucide-react';

interface LegendItem {
  label: string;
  color?: string;
  symbol?: string;
  description: string;
}

interface MapLegendProps {
  title: string;
  items: LegendItem[];
}

export function MapLegend({ title, items }: MapLegendProps) {
  return (
    <Card className="border-geospatial-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <Book className="w-5 h-5 text-geospatial-blue-600" />
        <h4 className="font-semibold text-geospatial-gray-900">{title}</h4>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3 group hover:bg-geospatial-gray-50 p-2 rounded-lg transition-colors">
            {/* Symbol or Color */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              {item.color ? (
                <div 
                  className="w-6 h-6 rounded border-2 border-geospatial-gray-300 shadow-sm"
                  style={{ backgroundColor: item.color }}
                />
              ) : (
                <span className="text-2xl text-geospatial-gray-700">{item.symbol}</span>
              )}
            </div>
            
            {/* Label and Description */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-geospatial-gray-900 text-sm mb-0.5">
                {item.label}
              </p>
              <p className="text-xs text-geospatial-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
