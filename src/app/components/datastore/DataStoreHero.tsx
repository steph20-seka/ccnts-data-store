import { Database, MapPin, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DataStoreHero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white text-geospatial-blue-900 py-20 border-b-4 border-geospatial-orange-500">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-geospatial-blue-50 to-white opacity-60"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-geospatial-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-geospatial-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-geospatial-blue-100 px-4 py-2 rounded-full mb-6 border border-geospatial-blue-200">
            <Database className="w-4 h-4 text-geospatial-orange-600" />
            <span className="text-sm font-medium text-geospatial-blue-900">
              {t('dataStore.badge', 'Base de données géospatiale professionnelle')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-geospatial-blue-900">
            {t('dataStore.title', 'CCNTS Data Store')}
            <span className="block mt-2 text-geospatial-orange-600">
              {t('dataStore.subtitle', 'Vente de Données Géospatiales')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-geospatial-gray-700 mb-8 leading-relaxed">
            {t('dataStore.description', 'Téléchargez nos shapefiles professionnels : villes, limites administratives, couches SIG, cartes thématiques et données géolocalisées de haute précision.')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 border-2 border-geospatial-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-6 h-6 text-geospatial-orange-600" />
                <div className="text-3xl font-bold text-geospatial-blue-900">100+</div>
              </div>
              <div className="text-sm text-geospatial-gray-700 font-medium">
                {t('dataStore.stats.cities', 'Villes couvertes')}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-geospatial-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-6 h-6 text-geospatial-orange-600" />
                <div className="text-3xl font-bold text-geospatial-blue-900">4</div>
              </div>
              <div className="text-sm text-geospatial-gray-700 font-medium">
                {t('dataStore.stats.formats', 'Formats disponibles')}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-geospatial-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="w-6 h-6 text-geospatial-orange-600" />
                <div className="text-3xl font-bold text-geospatial-blue-900">ADM0-ADM3</div>
              </div>
              <div className="text-sm text-geospatial-gray-700 font-medium">
                {t('dataStore.stats.levels', 'Niveaux administratifs')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}