import { Card } from '../ui/card';
import { Database, Ruler, MapPin as MapPinIcon, Globe } from 'lucide-react';

interface MethodologyData {
  dataSource: string;
  technique: string;
  scale: string;
  projection: string;
}

interface MethodologyCardProps {
  data: MethodologyData;
}

export function MethodologyCard({ data }: MethodologyCardProps) {
  const items = [
    {
      icon: Database,
      label: 'Source de données',
      value: data.dataSource,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Ruler,
      label: 'Technique cartographique',
      value: data.technique,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPinIcon,
      label: 'Échelle',
      value: data.scale,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Globe,
      label: 'Système de projection',
      value: data.projection,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <Card className="border-geospatial-gray-200 bg-gradient-to-br from-geospatial-gray-50 to-white p-5">
      <h4 className="font-semibold text-geospatial-gray-900 mb-4">
        📐 Méthodologie cartographique
      </h4>
      <div className="space-y-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className={`${item.bgColor} p-2 rounded-lg flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-geospatial-gray-500 mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm text-geospatial-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
