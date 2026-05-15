import { Map, Satellite, Database, LineChart, Globe, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '../ui/card';

export function Expertises() {
  const { t } = useTranslation();

  const expertises = [
    {
      icon: Map,
      title: t('home.expertises.items.cartography.title'),
      description: t('home.expertises.items.cartography.description'),
    },
    {
      icon: Layers,
      title: t('home.expertises.items.gis.title'),
      description: t('home.expertises.items.gis.description'),
    },
    {
      icon: Satellite,
      title: t('home.expertises.items.remote.title'),
      description: t('home.expertises.items.remote.description'),
    },
    {
      icon: Globe,
      title: t('home.expertises.items.modeling.title'),
      description: t('home.expertises.items.modeling.description'),
    },
    {
      icon: Database,
      title: t('home.expertises.items.stats.title'),
      description: t('home.expertises.items.stats.description'),
    },
    {
      icon: LineChart,
      title: t('home.expertises.items.thematic.title'),
      description: t('home.expertises.items.thematic.description'),
    },
  ];
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Plus d'espace et hiérarchie claire */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
            <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">{t('home.expertises.badge')}</span>
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
          </div>
          <h2 className="text-gray-900 mb-5 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t('home.expertises.title')}
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('home.expertises.subtitle')}
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