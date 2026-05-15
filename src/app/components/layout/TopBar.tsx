import { Sparkles } from 'lucide-react';

export function TopBar() {
  const message = "L'expertise fait la différence au CCNTS";
  
  return (
    <div className="bg-geospatial-orange-600 text-white py-2.5 px-4 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-scroll">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap px-8">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}