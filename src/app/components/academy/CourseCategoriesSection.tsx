import { Map, Satellite, BarChart, Globe, Layers, Camera } from 'lucide-react';
import { Button } from '../ui/button';

const categories = [
  {
    name: 'SIG (QGIS, ArcGIS)',
    icon: Map,
    color: 'blue',
    count: 2,
  },
  {
    name: 'Télédétection',
    icon: Satellite,
    color: 'purple',
    count: 1,
  },
  {
    name: 'Statistiques & Data Science',
    icon: BarChart,
    color: 'green',
    count: 0,
  },
  {
    name: 'Modélisation territoriale',
    icon: Globe,
    color: 'orange',
    count: 0,
  },
  {
    name: 'Drones & orthophotos',
    icon: Camera,
    color: 'teal',
    count: 0,
  },
  {
    name: 'Cartographie thématique',
    icon: Layers,
    color: 'indigo',
    count: 1,
  },
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300',
  purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300',
  green: 'bg-green-100 text-green-700 hover:bg-green-200 border-green-300',
  orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300',
  teal: 'bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-300',
  indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-300',
};

export function CourseCategoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-blue-600 text-sm tracking-wide uppercase">Catégories</span>
            <div className="h-px w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-gray-900 mb-4">
            📂 Catégories de cours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez nos cours par domaine d'expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <a
                key={index}
                href="#cours-gratuits"
                className={`h-auto py-6 px-6 justify-start border-2 transition-all rounded-lg flex items-center ${colorClass}`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${category.color === 'blue' ? 'bg-blue-600' : category.color === 'purple' ? 'bg-purple-600' : category.color === 'green' ? 'bg-green-600' : category.color === 'orange' ? 'bg-orange-600' : category.color === 'teal' ? 'bg-teal-600' : 'bg-indigo-600'}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium mb-1">{category.name}</div>
                    <div className="text-sm opacity-70">{category.count} cours disponibles</div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}