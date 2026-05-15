import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Info, Layers, MapPin, HardDrive, Globe2 } from 'lucide-react';
import { CityDataset, getDatasetDescription } from '../../data/ivoryCitiesData';
import { useTranslation } from 'react-i18next';

interface DatasetCardProps {
  dataset: CityDataset;
}

// Composant pour générer une miniature cartographique stylisée
function MapThumbnail({ cityName, category }: { cityName: string; category: string }) {
  const gradients = {
    capital: 'from-geospatial-blue-900 to-geospatial-blue-700',
    major: 'from-geospatial-blue-800 to-geospatial-blue-600',
    medium: 'from-geospatial-blue-700 to-geospatial-blue-500',
    administrative: 'from-geospatial-gray-700 to-geospatial-gray-500',
    coastal: 'from-blue-600 to-cyan-400',
    northern: 'from-geospatial-orange-600 to-geospatial-orange-400',
  };

  const gradient = gradients[category as keyof typeof gradients] || gradients.medium;

  return (
    <div className={`relative w-full h-48 bg-gradient-to-br ${gradient} overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Abstract map lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 200 200" preserveAspectRatio="none">
        {/* Routes principales */}
        <path d="M 20 100 Q 60 60, 100 100 T 180 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 100 20 L 100 180" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        
        {/* Limites de quartiers */}
        <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
        
        {/* Points d'intérêt */}
        <circle cx="100" cy="100" r="4" fill="#FFA726" opacity="0.8" />
        <circle cx="70" cy="80" r="3" fill="#FFA726" opacity="0.6" />
        <circle cx="130" cy="120" r="3" fill="#FFA726" opacity="0.6" />
      </svg>

      {/* Map pin indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MapPin className="w-8 h-8 text-geospatial-orange-400 drop-shadow-lg" />
      </div>

      {/* City name overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="text-white font-bold text-lg drop-shadow-lg">{cityName}</div>
      </div>
    </div>
  );
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  const { t } = useTranslation();
  const description = getDatasetDescription(dataset);

  // Prix promo: Tous les datasets sont à 9900 FCFA
  const promoPrice = 9900;
  const originalPrice = dataset.price;
  const showPromo = originalPrice > promoPrice;

  // Badges de catégorie
  const categoryColors = {
    capital: 'bg-geospatial-blue-900 text-white',
    major: 'bg-geospatial-blue-700 text-white',
    medium: 'bg-geospatial-blue-500 text-white',
    administrative: 'bg-geospatial-gray-600 text-white',
    coastal: 'bg-cyan-600 text-white',
    northern: 'bg-geospatial-orange-600 text-white',
  };

  const categoryLabels = {
    capital: t('dataStore.categories.capital', 'Capitale'),
    major: t('dataStore.categories.major', 'Ville majeure'),
    medium: t('dataStore.categories.medium', 'Ville moyenne'),
    administrative: t('dataStore.categories.administrative', 'Administrative'),
    coastal: t('dataStore.categories.coastal', 'Côtière'),
    northern: t('dataStore.categories.northern', 'Nord'),
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-geospatial-gray-200">
      {/* Miniature cartographique */}
      <MapThumbnail cityName={dataset.name} category={dataset.category} />

      {/* Contenu de la card */}
      <div className="p-6">
        {/* Header with badges */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-geospatial-gray-900 mb-1">
              {dataset.name}
            </h3>
            <p className="text-sm text-geospatial-gray-500">
              Shapefile – {dataset.adm2}
            </p>
          </div>
          <Badge className={categoryColors[dataset.category]}>
            {categoryLabels[dataset.category]}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-geospatial-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Hiérarchie administrative SIG */}
        <div className="bg-geospatial-gray-50 rounded-lg p-3 mb-4 border border-geospatial-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-geospatial-blue-600" />
            <span className="text-xs font-semibold text-geospatial-gray-700">
              {t('dataStore.adminHierarchy', 'Hiérarchie Administrative')}
            </span>
          </div>
          <div className="space-y-1 text-xs text-geospatial-gray-600">
            <div><span className="font-medium">ADM0:</span> {dataset.adm0}</div>
            <div><span className="font-medium">ADM1:</span> {dataset.adm1}</div>
            <div><span className="font-medium">ADM2:</span> {dataset.adm2}</div>
            <div><span className="font-medium">ADM3:</span> {dataset.adm3}</div>
          </div>
        </div>

        {/* Métadonnées */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-start gap-2">
            <Globe2 className="w-4 h-4 text-geospatial-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-geospatial-gray-700">
                {t('dataStore.metadata.formats', 'Formats')}
              </div>
              <div className="text-xs text-geospatial-gray-600">
                {dataset.format.join(', ')}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <HardDrive className="w-4 h-4 text-geospatial-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-geospatial-gray-700">
                {t('dataStore.metadata.size', 'Taille')}
              </div>
              <div className="text-xs text-geospatial-gray-600">
                {dataset.size}
              </div>
            </div>
          </div>
        </div>

        {/* Couches incluses */}
        <div className="mb-4">
          <div className="text-xs font-medium text-geospatial-gray-700 mb-2">
            {t('dataStore.metadata.layers', 'Couches incluses')}
          </div>
          <div className="flex flex-wrap gap-1">
            {dataset.layers.slice(0, 4).map((layer, index) => (
              <Badge key={index} variant="outline" className="text-xs py-0 px-2">
                {layer}
              </Badge>
            ))}
            {dataset.layers.length > 4 && (
              <Badge variant="outline" className="text-xs py-0 px-2">
                +{dataset.layers.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Prix et Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-geospatial-gray-200">
          <div>
            <div className="text-xs text-geospatial-gray-500 mb-1">
              Prix
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-geospatial-orange-600">
                5 900 FCFA
              </div>
              {showPromo && (
                <div className="text-sm text-geospatial-gray-400 line-through">
                  {originalPrice.toLocaleString()} FCFA
                </div>
              )}
            </div>
            {showPromo && (
              <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-semibold mt-1">
                🔥 PROMO
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-geospatial-blue-600 text-geospatial-blue-600 hover:bg-geospatial-blue-50"
            >
              <Info className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-geospatial-orange-600 hover:bg-geospatial-orange-700 text-white"
              asChild
            >
              <a href="https://flpadqkb.mychariow.shop/" target="_blank" rel="noopener noreferrer">
                Acheter sur Chariow
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}