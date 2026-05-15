import { Card } from '../ui/card';
import { MapPin } from 'lucide-react';

interface Hotspot {
  label: string;
  description: string;
  coordinates?: string;
}

interface HotspotsCardProps {
  hotspots: Hotspot[];
}

export function HotspotsCard({ hotspots }: HotspotsCardProps) {
  return (
    <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-red-600" />
        <h4 className="font-semibold text-geospatial-gray-900">Points d'intérêt clés</h4>
      </div>
      <div className="space-y-3">
        {hotspots.map((hotspot, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <p className="font-semibold text-geospatial-gray-900 text-sm">
                    {hotspot.label}
                  </p>
                  {hotspot.coordinates && (
                    <span className="text-xs text-geospatial-gray-500 font-mono flex-shrink-0">
                      📍 {hotspot.coordinates}
                    </span>
                  )}
                </div>
                <p className="text-xs text-geospatial-gray-600 leading-relaxed bg-white/50 p-2 rounded group-hover:bg-white transition-colors">
                  {hotspot.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
