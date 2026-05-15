import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Badge } from '../ui/badge';
import { useTranslation } from 'react-i18next';
import { DATASET_CATEGORIES, DATA_TYPES } from '../../data/ivoryCitiesData';

export interface FilterState {
  searchQuery: string;
  category: string;
  dataType: string;
  priceRange: 'all' | 'low' | 'medium' | 'high';
}

interface DataStoreFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  resultsCount: number;
}

export function DataStoreFilters({ filters, onFilterChange, resultsCount }: DataStoreFiltersProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, searchQuery: value });
  };

  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value });
  };

  const handleDataTypeChange = (value: string) => {
    onFilterChange({ ...filters, dataType: value });
  };

  const handlePriceRangeChange = (value: string) => {
    onFilterChange({ ...filters, priceRange: value as FilterState['priceRange'] });
  };

  const resetFilters = () => {
    onFilterChange({
      searchQuery: '',
      category: 'all',
      dataType: 'all',
      priceRange: 'all',
    });
  };

  const activeFiltersCount = [
    filters.category !== 'all',
    filters.dataType !== 'all',
    filters.priceRange !== 'all',
    filters.searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <div className="bg-white border border-geospatial-gray-200 rounded-lg shadow-sm">
      {/* Barre de recherche principale */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Champ de recherche */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-geospatial-gray-400" />
            <Input
              type="text"
              placeholder={t('dataStore.filters.searchPlaceholder', 'Rechercher une ville...')}
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>

          {/* Bouton de filtres avancés */}
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative"
          >
            <Filter className="w-4 h-4 mr-2" />
            {t('dataStore.filters.advancedFilters', 'Filtres')}
            {activeFiltersCount > 0 && (
              <Badge className="ml-2 bg-geospatial-orange-600 text-white px-2 py-0 h-5">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Filtres avancés (dépliables) */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-geospatial-gray-200 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Catégorie */}
            <div>
              <label className="text-sm font-medium text-geospatial-gray-700 mb-2 block">
                {t('dataStore.filters.category', 'Catégorie')}
              </label>
              <Select value={filters.category} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DATASET_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {t(`dataStore.categoryLabels.${cat.value}`, cat.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type de données */}
            <div>
              <label className="text-sm font-medium text-geospatial-gray-700 mb-2 block">
                {t('dataStore.filters.dataType', 'Type de données')}
              </label>
              <Select value={filters.dataType} onValueChange={handleDataTypeChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DATA_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {t(`dataStore.dataTypeLabels.${type.value}`, type.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Fourchette de prix */}
            <div>
              <label className="text-sm font-medium text-geospatial-gray-700 mb-2 block">
                {t('dataStore.filters.priceRange', 'Fourchette de prix')}
              </label>
              <Select value={filters.priceRange} onValueChange={handlePriceRangeChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {t('dataStore.priceRanges.all', 'Tous les prix')}
                  </SelectItem>
                  <SelectItem value="low">
                    {t('dataStore.priceRanges.low', 'Moins de 10 000 FCFA')}
                  </SelectItem>
                  <SelectItem value="medium">
                    {t('dataStore.priceRanges.medium', '10 000 - 15 000 FCFA')}
                  </SelectItem>
                  <SelectItem value="high">
                    {t('dataStore.priceRanges.high', 'Plus de 15 000 FCFA')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bouton de réinitialisation */}
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full text-geospatial-gray-600 hover:text-geospatial-gray-900"
                disabled={activeFiltersCount === 0}
              >
                <X className="w-4 h-4 mr-2" />
                {t('dataStore.filters.reset', 'Réinitialiser')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Résultats */}
      <div className="px-4 py-3 bg-geospatial-gray-50 border-t border-geospatial-gray-200 rounded-b-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-geospatial-gray-600">
            {t('dataStore.filters.resultsCount', { count: resultsCount }, `${resultsCount} dataset(s) trouvé(s)`)}
          </span>
          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-geospatial-blue-600 hover:text-geospatial-blue-700 font-medium"
            >
              {t('dataStore.filters.clearAll', 'Effacer tous les filtres')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
