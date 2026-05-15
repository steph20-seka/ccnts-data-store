import arcgisLogo from 'figma:asset/49cba69282315e01c4b9708e0427fbb7fa19d7ad.png';
import koboLogo from 'figma:asset/9a31c0768590b8e1e7c2246736ee5db977353933.png';
import qgisLogo from 'figma:asset/2915708209d1ada3262c0aad10e2f5d726f7c265.png';
import arcgisProLogo from 'figma:asset/f690e43a7d5032b06cd33f3dfc1e91f703076d56.png';
import enviLogo from 'figma:asset/468ba8fb41262119ffa55c0001e6a9d38035bc17.png';
import ibmSpssLogo from 'figma:asset/47ef69ceafe87b7a785ae5c3485a4efd5a0bc5b5.png';
import autocadLogo from 'figma:asset/b16952e24619f583632a6701306d3de50211acfd.png';
import googleEarthEngineLogo from 'figma:asset/101d377b9c980c0e1afee9b50c5f628a4fa13303.png';
import googleEarthLogo from 'figma:asset/c55da588453d581195ab87fe1a05c7e335799161.png';
import officeLogo from 'figma:asset/c08f5d523cc8142d2d2fe78118f8157c0e64ae98.png';
import covadisLogo from 'figma:asset/1c15da44eb69bbd09948ad396cf48f948177d8cd.png';
import draftsightLogo from 'figma:asset/380a13bf7f30ad21e144119e8db8342cbed20ca9.png';
import openlayersLogo from 'figma:asset/5ac9ecd2477622538a2088b891d5589424b4fc17.png';
import nanocadLogo from 'figma:asset/57894eb4a24acc2bad391be009eeac73bd473cf2.png';
import leafletLogo from 'figma:asset/2d32f85bb4bf1b0a47d60a596f8f9ed63343f145.png';

const tools = [
  {
    name: 'ArcGIS',
    logo: arcgisLogo,
    description: 'Système d\'information géographique professionnel',
  },
  {
    name: 'ArcGIS Pro',
    logo: arcgisProLogo,
    description: 'Solution SIG desktop avancée',
  },
  {
    name: 'ENVI',
    logo: enviLogo,
    description: 'Logiciel de traitement d\'images satellite et télédétection',
  },
  {
    name: 'QGIS',
    logo: qgisLogo,
    description: 'SIG open source puissant et flexible',
  },
  {
    name: 'Covadis',
    logo: covadisLogo,
    description: 'Extension AutoCAD pour géomatique et topographie',
  },
  {
    name: 'AutoCAD',
    logo: autocadLogo,
    description: 'Conception et dessin assisté par ordinateur',
  },
  {
    name: 'DraftSight',
    logo: draftsightLogo,
    description: 'Solution CAO professionnelle 2D et 3D',
  },
  {
    name: 'nanoCAD',
    logo: nanocadLogo,
    description: 'Logiciel de conception assistée par ordinateur',
  },
  {
    name: 'Google Earth Engine',
    logo: googleEarthEngineLogo,
    description: 'Plateforme d\'analyse géospatiale cloud',
  },
  {
    name: 'Google Earth',
    logo: googleEarthLogo,
    description: 'Exploration et visualisation géographique',
  },
  {
    name: 'Leaflet',
    logo: leafletLogo,
    description: 'Bibliothèque JavaScript pour cartes web interactives',
  },
  {
    name: 'OpenLayers',
    logo: openlayersLogo,
    description: 'Bibliothèque JavaScript pour cartes interactives',
  },
  {
    name: 'Microsoft Office',
    logo: officeLogo,
    description: 'Suite bureautique complète (Word, Excel, PowerPoint)',
  },
  {
    name: 'IBM SPSS Statistics',
    logo: ibmSpssLogo,
    description: 'Analyse statistique et modélisation prédictive',
  },
  {
    name: 'KoboToolbox',
    logo: koboLogo,
    description: 'Collecte de données sur le terrain',
  },
];

export function ToolsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-blue-600 text-sm tracking-wide uppercase">Nos outils</span>
            <div className="h-px w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-gray-900 mb-4">
            Technologies et logiciels professionnels
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous utilisons les meilleurs outils du marché pour garantir des résultats de haute qualité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-gray-900 mb-2 text-center">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}