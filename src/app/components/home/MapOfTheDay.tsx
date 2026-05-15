import { Card } from '../ui/card';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { IntelligentMapPanel } from '../maps/IntelligentMapPanel';
import { MapZoomModal } from '../maps/MapZoomModal';
import { motion, AnimatePresence } from 'motion/react';
import mapImage1 from 'figma:asset/1d75de4946f35ee77b5487fe735c23ea0834fe3a.png';
import mapImage2 from 'figma:asset/6f10ad541ee22c5005854a27f918f9c64910e3ba.png';
import mapImage3 from 'figma:asset/f62648d702f87362c6a817aa0fbdbbed2fad2bd7.png';
import mapImage4 from 'figma:asset/29ca58f468c332ab18f5950fed6220050f534d53.png';
import mapImage5 from 'figma:asset/39f8dfdc866254a6800cd12c6d13e3e2d72cf35e.png';

const maps = [
  {
    id: 1,
    title: 'Situation démographique des 14 districts de la Côte d\'Ivoire (RGPH 2021)',
    image: mapImage1,
    content: (
      <>
        <p>
          La carte du jour présente la situation démographique des 14 districts de la Côte d'Ivoire 
          selon les données du <strong>RGPH 2021</strong>. Elle révèle d'abord une répartition très 
          contrastée de la densité de population.
        </p>
        <p>
          Les districts du Nord et du Nord-Est se caractérisent par des <strong>densités faibles</strong>, 
          souvent inférieures à 38 hab/km², traduisant des espaces à dominante rurale, faiblement 
          urbanisés et économiquement moins attractifs. À l'inverse, les districts du Sud, plus urbanisés, 
          affichent des densités élevées voire très élevées, concentrant une part importante des activités 
          économiques et des infrastructures.
        </p>
        <p>
          La taille de la population vient confirmer cette opposition Nord–Sud. <strong>Abidjan</strong> apparaît 
          comme le district le plus peuplé, rassemblant une proportion majeure de la population nationale. 
          Les districts du Sud-Ouest et du Centre-Ouest présentent également d'importants effectifs démographiques, 
          tandis que ceux du Nord enregistrent des populations nettement plus faibles.
        </p>
        <p>
          La structure par sexe montre une répartition relativement homogène sur l'ensemble du territoire, 
          avec une légère prédominance des hommes dans la majorité des districts (<strong>52 % contre 48 %</strong> pour les femmes).
        </p>
        <p className="text-blue-900">
          <strong>En somme</strong>, la carte met en lumière une organisation démographique marquée par 
          une forte concentration au Sud, autour des pôles urbains et économiques, contrastant avec 
          une sous-population relative du Nord.
        </p>
      </>
    ),
    source: 'RGPH 2021 / ANStat',
    author: 'DERKA cartographie, 2025',
  },
  {
    id: 2,
    title: 'Éclairage public des lampadaires - Quartier Batesti, Séguéla',
    image: mapImage2,
    content: (
      <>
        <p>
          La carte présente l'éclairage public des lampadaires dans le <strong>quartier Batesti</strong>, 
          un quartier de la ville de Séguéla (Nord-Ouest de la Côte d'Ivoire). Elle met en évidence le 
          caractère ponctuel de l'éclairage public actuel ainsi que le besoin potentiel de densification 
          du réseau pour assurer une meilleure continuité lumineuse dans le quartier.
        </p>
        <p>
          Il s'agit d'un outil indispensable pour :
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-1">•</span>
            <span>
              Identifier les zones prioritaires nécessitant l'installation de nouveaux lampadaires 
              afin d'améliorer la sécurité et l'accessibilité nocturne.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-1">•</span>
            <span>
              Planifier l'extension ou la rénovation du réseau d'éclairage public du quartier Batesti.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 mt-1">•</span>
            <span>
              Évaluer l'efficacité du dispositif actuel en termes de couverture spatiale pour les habitants.
            </span>
          </li>
        </ul>
      </>
    ),
    source: 'Enquêtes BTP / SCP, ESRS 3763b, WGS 84 / UTM zone 30N',
    author: 'DERKA cartographie, 2025',
  },
  {
    id: 3,
    title: 'Types de sols en Côte d\'Ivoire',
    image: mapImage3,
    content: (
      <>
        <p>
          La carte présente une représentation spatiale détaillée des types de sols en Côte d'Ivoire, 
          établie à partir des données de la <strong>FAO</strong>. Cette carte des sols de la Côte d'Ivoire 
          révèle une variété pédologique remarquable, étroitement liée aux conditions climatiques, 
          géologiques et géomorphologiques du pays.
        </p>
        <p>
          La répartition des sols explique en grande partie les différences régionales en termes de 
          pratiques agricoles, de productivité, mais aussi les enjeux environnementaux (érosion, 
          dégradation, fertilité).
        </p>
        <p className="text-blue-900">
          Elle constitue un outil indispensable pour la <strong>gestion durable du territoire</strong>, 
          la planification agricole, l'aménagement rural et les politiques de conservation.
        </p>
      </>
    ),
    source: 'Data de FAO, EPSG 4326 (WGS 84)',
    author: 'CCNTS / Ivory Coast Engineer, 2025',
  },
  {
    id: 4,
    title: 'Mobilités économiques agropastorales : Exportation du manioc et importation des bœufs de Bouaké au Burkina Faso',
    image: mapImage4,
    content: (
      <>
        <p>
          La carte présente les mobilités économiques agropastorales entre <strong>Bouaké</strong>, 
          au cœur de la région de Gbêkê en Côte d'Ivoire, et plusieurs villes du Burkina Faso, 
          notamment Banfora, Bobo-Dioulasso et Ouagadougou. Elle met en évidence un double mouvement 
          commercial structurant : l'exportation du manioc depuis Bouaké vers le Burkina Faso et 
          l'importation massive de bovins burkinabè à destination de Bouaké.
        </p>
        <p>
          Les <strong>flèches noires</strong> symbolisent les flux de manioc, avec des volumes variant 
          entre <strong>207 et 571 tonnes</strong> selon les destinations, tandis que les 
          <strong> flèches rouges</strong> représentent les flux de bœufs, beaucoup plus importants, 
          atteignant entre <strong>6 102 et 24 356 têtes</strong>.
        </p>
        <p>
          Cette différence de volume montre clairement le rôle du Burkina Faso comme grand bassin 
          d'élevage sahélien, tandis que Bouaké s'affirme comme un centre majeur de production, de 
          transformation et de redistribution de produits agricoles, notamment le manioc.
        </p>
        <p>
          La carte met également en évidence le rôle stratégique du <strong>réseau ferroviaire SITARAIL</strong>, 
          qui facilite le transport transfrontalier et renforce l'intégration entre les deux pays.
        </p>
        <p className="text-blue-900">
          <strong>Dans l'ensemble</strong>, cette représentation cartographique révèle une forte 
          interdépendance économique entre la Côte d'Ivoire et le Burkina Faso, organisée autour 
          de flux agropastoraux complémentaires.
        </p>
      </>
    ),
    source: 'SCR, EPSG 4326 WGS 84 / Enquête exploratoire',
    author: 'DERKA cartographie, 2025 / Structure : CCNTS',
  },
  {
    id: 5,
    title: 'Isohyètes des précipitations moyennes annuelles au Ghana en 2023',
    image: mapImage5,
    content: (
      <>
        <p>
          La carte montre la répartition des précipitations moyennes annuelles au Ghana en 2023 
          grâce aux <strong>isohyètes</strong>. Elle révèle une forte variation Nord–Sud : 
          les pluies les plus abondantes, dépassant <strong>2 000 mm</strong>, se concentrent 
          dans le Sud-Ouest, influencé par les vents humides du golfe de Guinée.
        </p>
        <p>
          En se dirigeant vers le centre puis le nord du pays, les précipitations diminuent 
          progressivement pour atteindre moins de <strong>1 200 mm</strong> dans les zones 
          soudano-sahéliennes.
        </p>
        <p className="text-blue-900">
          Cette structure pluviométrique met en évidence l'impact de la mousson, du relief et 
          de la distance à l'océan, tout en soulignant les <strong>zones les plus favorables 
          à l'agriculture</strong> et celles plus exposées au déficit hydrique.
        </p>
      </>
    ),
    source: 'NCEI / NOAA, EPSG 4326 WGS 84',
    author: 'DERKA cartographer, 2025 / Structure : CCNTS',
  },
];

export function MapOfTheDay() {
  const [activeMap, setActiveMap] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const currentMap = maps[activeMap];

  const nextMap = () => {
    setActiveMap((prev) => (prev + 1) % maps.length);
    setIsDescriptionExpanded(false); // Reset expansion on map change
  };

  const prevMap = () => {
    setActiveMap((prev) => (prev - 1 + maps.length) % maps.length);
    setIsDescriptionExpanded(false); // Reset expansion on map change
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Plus d'espace et hiérarchie claire */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
            <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">Cartographie numérique</span>
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
          </div>
          <h2 className="text-gray-900 mb-5 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight px-4">
            {currentMap.title}
          </h2>
        </div>

        {/* Intelligent Map Panel - NEW */}
        <IntelligentMapPanel mapId={currentMap.id} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Map Image - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-gray-200 shadow-2xl relative hover:shadow-3xl transition-shadow duration-300 group">
              {/* Zoom Hint Badge - Bottom Left */}
              <div className="absolute bottom-20 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 z-10">
                <ZoomIn className="w-4 h-4" />
                <span className="text-sm font-medium">Survolez et cliquez pour agrandir</span>
              </div>
              
              <img
                src={currentMap.image}
                alt={currentMap.title}
                className="w-full h-auto cursor-pointer"
                onClick={() => setIsZoomModalOpen(true)}
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                <Button
                  onClick={prevMap}
                  size="icon"
                  variant="secondary"
                  className="pointer-events-auto bg-white/95 hover:bg-white shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextMap}
                  size="icon"
                  variant="secondary"
                  className="pointer-events-auto bg-white/95 hover:bg-white shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Indicator Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5">
                {maps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMap(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeMap
                        ? 'bg-orange-600 w-10'
                        : 'bg-white/80 hover:bg-white w-2.5'
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Description - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 border-gray-200 h-full bg-gradient-to-br from-blue-50 to-white shadow-lg flex flex-col">
              <h3 className="text-gray-900 mb-5 sm:mb-6 text-xl sm:text-2xl font-semibold leading-tight">
                Analyse cartographique
              </h3>
              
              {/* Scrollable content with fixed height and "See more" functionality */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div 
                  className={`${
                    isDescriptionExpanded 
                      ? 'overflow-y-auto' 
                      : 'overflow-hidden'
                  } flex-1 transition-all duration-300`}
                  style={{
                    maxHeight: isDescriptionExpanded ? '500px' : '280px'
                  }}
                >
                  <div className={`space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed ${
                    !isDescriptionExpanded ? 'relative' : ''
                  }`}>
                    {currentMap.content}
                    
                    {/* Fade overlay when collapsed */}
                    {!isDescriptionExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* See More/Less Button */}
                <button
                  onClick={toggleDescription}
                  className="mt-4 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-all group/btn py-2 border-t border-gray-200"
                >
                  <span>{isDescriptionExpanded ? 'Voir moins' : 'Voir plus'}</span>
                  {isDescriptionExpanded ? (
                    <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>

              {/* Source Badge */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-300">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Source :</strong> {currentMap.source}<br />
                  <strong className="text-gray-800">Auteur :</strong> {currentMap.author}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Counter */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Carte {activeMap + 1} sur {maps.length}
          </p>
        </div>
      </div>

      {/* Zoom Modal */}
      <MapZoomModal
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        imageSrc={currentMap.image}
        title={currentMap.title}
      />
    </section>
  );
}