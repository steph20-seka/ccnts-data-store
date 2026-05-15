import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Eye, EyeOff, Lightbulb, Map, BookOpen, Database, MapPin, X } from 'lucide-react';
import { InsightCard } from './InsightCard';
import { MapLegend } from './MapLegend';
import { ReadingGuide } from './ReadingGuide';
import { MethodologyCard } from './MethodologyCard';
import { HotspotsCard } from './HotspotsCard';
import { mapInsightsData } from '../../data/mapInsightsData';

type TabType = 'insights' | 'legend' | 'guide' | 'methodology' | 'hotspots';

interface IntelligentMapPanelProps {
  mapId: number;
}

export function IntelligentMapPanel({ mapId }: IntelligentMapPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('insights');

  const mapData = mapInsightsData.find(m => m.id === mapId);
  
  if (!mapData) return null;

  const tabs = [
    { id: 'insights' as TabType, label: 'Insights', icon: Lightbulb, count: 3 },
    { id: 'legend' as TabType, label: 'Légende', icon: Map, count: mapData.legend.items.length },
    { id: 'guide' as TabType, label: 'Guide de lecture', icon: BookOpen, count: mapData.readingGuide.steps.length },
    { id: 'methodology' as TabType, label: 'Méthodologie', icon: Database, count: null },
    { id: 'hotspots' as TabType, label: 'Points clés', icon: MapPin, count: mapData.hotspots.length },
  ];

  return (
    <div className="relative">
      {/* Toggle Button - Always visible */}
      <div className="flex justify-center mb-4">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="lg"
          className={`${
            isExpanded 
              ? 'bg-geospatial-blue-600 hover:bg-geospatial-blue-700' 
              : 'bg-gradient-to-r from-geospatial-blue-600 to-geospatial-orange-600 hover:from-geospatial-blue-700 hover:to-geospatial-orange-700 shadow-xl animate-pulse'
          } text-white transition-all duration-300`}
        >
          {isExpanded ? (
            <>
              <EyeOff className="w-5 h-5 mr-2" />
              Masquer l'assistant cartographique
            </>
          ) : (
            <>
              <Eye className="w-5 h-5 mr-2" />
              Afficher l'assistant cartographique intelligent
              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">IA</span>
            </>
          )}
        </Button>
      </div>

      {/* Expanded Panel */}
      {isExpanded && (
        <Card className="border-2 border-geospatial-blue-200 bg-white shadow-2xl mb-6 overflow-hidden animate-in slide-in-from-top-4 duration-300">
          {/* Header with close button */}
          <div className="bg-gradient-to-r from-geospatial-blue-600 to-geospatial-blue-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Assistant Cartographique Intelligent</h3>
                <p className="text-sm text-geospatial-blue-100">Comprenez mieux ce que révèle cette carte</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-geospatial-gray-200 bg-geospatial-gray-50 px-4 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-geospatial-blue-600 text-geospatial-blue-600 bg-white'
                        : 'border-transparent text-geospatial-gray-600 hover:text-geospatial-blue-600 hover:bg-white/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{tab.label}</span>
                    {tab.count && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        activeTab === tab.id
                          ? 'bg-geospatial-blue-100 text-geospatial-blue-600'
                          : 'bg-geospatial-gray-200 text-geospatial-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'insights' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-sm text-geospatial-gray-600 mb-4 italic">
                  🤖 L'IA a analysé cette carte et identifié 3 insights majeurs :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InsightCard
                    icon={mapData.insights.key.icon}
                    title={mapData.insights.key.title}
                    description={mapData.insights.key.description}
                    color={mapData.insights.key.color as 'blue' | 'orange' | 'red'}
                  />
                  <InsightCard
                    icon={mapData.insights.pattern.icon}
                    title={mapData.insights.pattern.title}
                    description={mapData.insights.pattern.description}
                    color={mapData.insights.pattern.color as 'blue' | 'orange' | 'red'}
                  />
                  <InsightCard
                    icon={mapData.insights.attention.icon}
                    title={mapData.insights.attention.title}
                    description={mapData.insights.attention.description}
                    color={mapData.insights.attention.color as 'blue' | 'orange' | 'red'}
                  />
                </div>
              </div>
            )}

            {activeTab === 'legend' && (
              <div className="animate-in fade-in duration-300">
                <MapLegend
                  title={mapData.legend.title}
                  items={mapData.legend.items}
                />
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="animate-in fade-in duration-300">
                <ReadingGuide
                  title={mapData.readingGuide.title}
                  steps={mapData.readingGuide.steps}
                />
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="animate-in fade-in duration-300">
                <MethodologyCard data={mapData.methodology} />
              </div>
            )}

            {activeTab === 'hotspots' && (
              <div className="animate-in fade-in duration-300">
                <HotspotsCard hotspots={mapData.hotspots} />
              </div>
            )}
          </div>

          {/* Footer Tip */}
          <div className="bg-geospatial-gray-50 border-t border-geospatial-gray-200 px-6 py-3">
            <p className="text-xs text-geospatial-gray-600 text-center">
              💡 <strong>Astuce :</strong> Basculez entre les onglets pour explorer différentes facettes de l'analyse cartographique
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
