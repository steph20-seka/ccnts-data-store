import { useState, useMemo } from 'react';
import { DataStoreHero } from '../components/datastore/DataStoreHero';
import { DataStoreFilters, FilterState } from '../components/datastore/DataStoreFilters';
import { DatasetCard } from '../components/datastore/DatasetCard';
import { ivoryCitiesDatasets, CityDataset } from '../data/ivoryCitiesData';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function DataStorePage() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    dataType: 'all',
    priceRange: 'all',
  });

  // Filtrage des datasets
  const filteredDatasets = useMemo(() => {
    return ivoryCitiesDatasets.filter((dataset: CityDataset) => {
      // Filtre de recherche
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = dataset.name.toLowerCase().includes(query);
        const matchesRegion = dataset.adm1.toLowerCase().includes(query);
        const matchesDepartment = dataset.adm2.toLowerCase().includes(query);
        if (!matchesName && !matchesRegion && !matchesDepartment) return false;
      }

      // Filtre de catégorie
      if (filters.category !== 'all' && dataset.category !== filters.category) {
        return false;
      }

      // Filtre de type de données
      if (filters.dataType !== 'all') {
        const typeMap: { [key: string]: string } = {
          shapefile: 'SHP',
          geojson: 'GeoJSON',
          kml: 'KML',
          geopackage: 'GeoPackage',
        };
        const requiredFormat = typeMap[filters.dataType];
        if (!dataset.format.includes(requiredFormat)) return false;
      }

      // Filtre de prix
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'low' && dataset.price >= 10000) return false;
        if (filters.priceRange === 'medium' && (dataset.price < 10000 || dataset.price > 15000)) return false;
        if (filters.priceRange === 'high' && dataset.price <= 15000) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-geospatial-gray-50">
      <SEOHead pageKey="dataStore" />
      {/* Hero Section */}
      <DataStoreHero />

      {/* Catalogue Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <div className="mb-8">
            <DataStoreFilters
              filters={filters}
              onFilterChange={setFilters}
              resultsCount={filteredDatasets.length}
            />
          </div>

          {/* Grille de datasets */}
          {filteredDatasets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-geospatial-gray-100 rounded-full mb-4">
                <Loader2 className="w-8 h-8 text-geospatial-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-geospatial-gray-900 mb-2">
                {t('dataStore.noResults.title', 'Aucun dataset trouvé')}
              </h3>
              <p className="text-geospatial-gray-600 max-w-md mx-auto">
                {t('dataStore.noResults.description', 'Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section d\'information */}
      <section className="py-16 bg-white border-t border-geospatial-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-geospatial-blue-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-geospatial-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-geospatial-gray-900 mb-2">
                {t('dataStore.features.quality.title', 'Données certifiées')}
              </h3>
              <p className="text-sm text-geospatial-gray-600">
                {t('dataStore.features.quality.description', 'Toutes nos données sont vérifiées et validées par nos experts géomaticiens.')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-geospatial-orange-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-geospatial-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-geospatial-gray-900 mb-2">
                {t('dataStore.features.instant.title', 'Téléchargement instantané')}
              </h3>
              <p className="text-sm text-geospatial-gray-600">
                {t('dataStore.features.instant.description', 'Accédez immédiatement à vos données après achat via Chariow.')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-geospatial-gray-900 mb-2">
                {t('dataStore.features.support.title', 'Support technique')}
              </h3>
              <p className="text-sm text-geospatial-gray-600">
                {t('dataStore.features.support.description', 'Notre équipe est disponible pour vous accompagner dans l\'utilisation des données.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataStorePage;