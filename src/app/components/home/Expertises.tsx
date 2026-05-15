import { Map, Satellite, Database, LineChart, Globe, Layers } from 'lucide-react';
import { Card } from '../ui/card';

const expertises = [
  {
    icon: Map,
    title: 'Cartographie numérique',
    description: 'Création de cartes précises et esthétiques adaptées à vos besoins spécifiques.',
  },
  {
    icon: Layers,
    title: 'Analyse spatiale SIG',
    description: 'Analyses géospatiales avancées avec QGIS, ArcGIS et solutions open source.',
  },
  {
    icon: Satellite,
    title: 'Télédétection',
    description: 'Traitement d\'images satellites et drones pour surveiller et analyser le territoire.',
  },
  {
    icon: Globe,
    title: 'Modélisation territoriale',
    description: 'Modèles prédictifs et simulations spatiales pour l\'aménagement du territoire.',
  },
  {
    icon: Database,
    title: 'Statistiques & Data science',
    description: 'Analyses statistiques avancées et apprentissage automatique sur données géographiques.',
  },
  {
    icon: LineChart,
    title: 'Cartes thématiques',
    description: 'Production de cartographies thématiques pour la communication et la décision.',
  },
];

export function Expertises() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Plus d'espace et hiérarchie claire */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
            <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">Nos expertises</span>
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
          </div>
          <h2 className="text-gray-900 mb-5 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Des solutions géospatiales complètes
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts met à votre service des compétences de pointe 
            en analyse spatiale et science des données géographiques.
          </p>
        </div>

        {/* Expertises Grid - Plus d'espace entre les cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <Card key={index} className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-gray-200 hover:border-blue-300 hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3 text-xl sm:text-2xl font-semibold leading-tight">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {expertise.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}