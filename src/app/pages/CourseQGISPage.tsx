import { BookOpen, Download, ChevronRight, Home, CheckCircle2, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CertificationBadge } from '../components/academy/CertificationBadge';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { SEOHead } from '../components/SEOHead';
import qgisInterface from 'figma:asset/5a6f7ad49ce3c8e5f7a34e64845bf00ea931c381.png';
import qgisToolbar from 'figma:asset/d5c311df5f107fb4afdacb26646f6e8b78fe7278.png';
import qgisMenuBar from 'figma:asset/970e301aac9fcfa6af0bb65441217a628c55a74e.png';
import qgisExplorer from 'figma:asset/7926cfe19fe6fc1a8144d50462b17ef2a08a9ab4.png';
import qgisLayersPanel from 'figma:asset/d16bfdbd316b82cdd303e2ecfd5ae6ab0e127db2.png';
import qgisMapCanvas from 'figma:asset/44ed48bdd20c42c0e0bd06a149f349e9306b207d.png';
import qgisStatusBar from 'figma:asset/70caec1467a628c7bfa3a8fb4169cacdd2c228d7.png';

const sections = [
  {
    number: '1️⃣',
    title: "Qu'est-ce que QGIS ?",
    content: `QGIS est un logiciel SIG (Système d'Information Géographique) gratuit, open source et multiplateforme.
Il permet de visualiser, analyser, traiter et produire des données géographiques.

Aujourd'hui, QGIS est devenu l'un des outils les plus utilisés dans :`,
    list: [
      'la cartographie professionnelle,',
      "l'aménagement du territoire,",
      'la gestion des ressources,',
      "l'environnement,",
      "l'analyse géospatiale,",
      "la data science appliquée à l'espace."
    ],
    advantages: {
      title: '➤ Ses atouts majeurs :',
      items: [
        '100% gratuit et accessible',
        'Très puissant pour la cartographie et l\'analyse spatiale',
        'Compatible avec une grande variété de formats',
        'Immense bibliothèque de plugins',
        'Interface intuitive et moderne',
        'Utilisé mondialement par les experts SIG'
      ]
    },
    conclusion: 'QGIS est la porte d\'entrée idéale pour découvrir le monde des SIG.'
  },
  {
    number: '2️⃣',
    title: "Installer QGIS",
    steps: {
      title: '✔ Étapes d\'installation :',
      items: [
        'Aller sur le site officiel : https://qgis.org',
        'Cliquer sur Download Now',
        'Choisir votre système (Windows, macOS, Linux)',
        'Télécharger la version LTR (Long Term Release) → la plus stable',
        'Installer en suivant les instructions',
        'Ouvrir QGIS'
      ]
    },
    note: 'À l\'ouverture, vous découvrirez une interface pensée pour travailler avec des données géographiques.'
  },
  {
    number: '3️⃣',
    title: "Découverte de l'interface",
    intro: "L'interface de QGIS se compose de plusieurs zones essentielles :",
    zones: {
      title: '📌 Les zones principales :',
      items: [
        'Barre de menus : accès aux fonctions complètes (Fichier, Édition, Analyse…)',
        'Barres d\'outils : outils rapides (zoom, mesure, sélection…)',
        'Explorateur : vos dossiers, bases de données, connexions web',
        'Panneau des couches : liste des couches chargées dans le projet',
        'Vue cartographique (Map Canvas) : zone d\'affichage de la carte',
        'Barre d\'état : coordonnées, projections, messages du système'
      ]
    },
    conclusion: 'Chaque élément est conçu pour simplifier votre workflow cartographique.'
  },
  {
    number: '4️⃣',
    title: "Ajouter des données dans QGIS",
    intro: '🎯 QGIS accepte de nombreux formats :',
    formats: [
      {
        category: 'Vecteurs',
        items: 'Shapefile (.shp), GeoJSON (.geojson), KML, GPKG, CSV géographique, etc.'
      },
      {
        category: 'Rasters',
        items: 'GeoTIFF, JPEG, PNG géoréférencés, images satellite, MNT/DEM…'
      },
      {
        category: 'Données web',
        items: 'WMS, WMTS, WFS, XYZ Tiles (Google, OSM, Bing…)'
      },
      {
        category: 'Bases de données',
        items: 'PostGIS, Spatialite, Geopackage'
      }
    ],
    actions: [
      {
        title: '➕ Ajouter une couche vecteur',
        steps: [
          'Menu : Layer > Add Layer > Add Vector Layer',
          'Choisir un fichier',
          'Cliquer sur Add'
        ]
      },
      {
        title: '🗺️ Ajouter un raster',
        steps: [
          'Menu : Layer > Add Layer > Add Raster Layer',
          'Choisir votre fichier .tif',
          'Ajouter'
        ]
      }
    ],
    conclusion: 'Votre première carte apparaît !'
  },
  {
    number: '5️⃣',
    title: "Modifier le style d'une couche (Symbologie)",
    intro: 'La symbologie permet de personnaliser l\'apparence de vos données.',
    types: [
      {
        title: '✔ Pour une couche vecteur :',
        steps: [
          'Clic droit → Properties',
          'Onglet Symbology',
          'Choisir :'
        ],
        options: [
          'Couleur simple',
          'Style catégorisé (valeurs qualitatives)',
          'Style gradué (valeurs numériques)',
          'Heatmap (données de densité)',
          'Symboles personnalisés'
        ]
      },
      {
        title: '✔ Pour une couche raster :',
        options: [
          'Palette de couleurs',
          'Luminosité / contraste',
          'Rendu pseudocolor',
          'Courbes d\'élévation'
        ]
      }
    ],
    conclusion: 'Une carte claire et lisible démarre par une bonne symbologie.'
  },
  {
    number: '6️⃣',
    title: "Outils essentiels (Manipulations de base)",
    tools: [
      {
        category: '🎚 Navigation',
        items: [
          'Zoomer / dézoomer',
          'Se déplacer sur la carte',
          'Recentrer sur une couche'
        ]
      },
      {
        category: '🧭 Sélection',
        items: [
          'Sélection par rectangle',
          'Sélection par attribut (ex : sélectionner toutes les communes > 50 000 hab.)',
          'Sélection par localisation'
        ]
      },
      {
        category: '🗂 Géotraitement (Processing Toolbox)',
        items: [
          'Buffer (tampon)',
          'Clip (découper)',
          'Dissolve (fusionner)',
          'Intersection',
          'Union',
          'Merge (assembler)',
          'Reprojeter une couche'
        ]
      }
    ],
    conclusion: 'Ces outils permettent d\'enchaîner des analyses spatiales puissantes.'
  },
  {
    number: '7️⃣',
    title: "Créer une carte prête à l'impression",
    subtitle: '🖼 Mise en page :',
    steps: [
      'Menu : Project > New Print Layout',
      'Ajouter la vue carte',
      'Ajouter : Titre, Légende, Nord, Barre d\'échelle, Échelle numérique',
      'Ajuster la mise en page',
      'Exporter en PDF / PNG / JPG'
    ],
    conclusion: 'QGIS permet de produire des cartes professionnelles et présentables.'
  },
  {
    number: '8️⃣',
    title: "Les plugins indispensables",
    subtitle: '🔌 Plugins recommandés :',
    plugins: [
      'QuickMapServices → Ajouter Google, OSM, Bing',
      'MMQGIS → outils avancés vecteurs',
      'TimeManager → animations temporelles',
      'Profile Tool → profils altimétriques',
      'OpenLayers → fonds cartographiques'
    ],
    conclusion: 'Les plugins élargissent considérablement les capacités de QGIS.'
  },
  {
    number: '9️⃣',
    title: "Sauvegarder et gérer votre projet",
    save: {
      title: '✔ Sauvegarder :',
      steps: [
        'Menu Project > Save',
        'Format : .qgz'
      ]
    },
    tips: {
      title: '✔ Conseils professionnels :',
      items: [
        'Garder toutes les données dans un dossier organisé',
        'Ne jamais déplacer les fichiers originaux après les avoir chargés',
        'Toujours documenter les données utilisées (sources, projections)'
      ]
    },
    conclusion: 'Un projet bien organisé = un travail professionnel.'
  },
  {
    number: '🔟',
    title: "Conclusion du cours",
    intro: 'Vous maîtrisez maintenant les bases pour travailler avec QGIS.',
    skills: {
      title: '🎯 Compétences acquises :',
      items: [
        'Comprendre ce qu\'est QGIS',
        'Charger des données raster et vecteur',
        'Styliser et interpréter des couches',
        'Utiliser les outils d\'analyse de base',
        'Créer une mise en page cartographique',
        'Installer des plugins',
        'Gérer un projet SIG complet'
      ]
    },
    nextSteps: {
      title: 'Ce cours constitue une base solide pour :',
      items: [
        'L\'analyse spatiale avancée',
        'La télédétection avec QGIS',
        'Les bases de données géographiques',
        'La modélisation spatiale',
        'Python pour QGIS (PyQGIS)'
      ]
    }
  }
];

export function CourseQGISPage() {
  useTrackCourse({
    courseId: 'qgis',
    courseName: 'Introduction à QGIS',
    courseSlug: 'qgis'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead pageKey="courseQGIS" />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy" className="hover:text-blue-600 transition-colors">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Introduction à QGIS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <BookOpen className="w-8 h-8" />
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              Cours gratuit
            </span>
            <span className="px-3 py-1 bg-green-500/80 rounded-full text-sm">
              Débutant
            </span>
            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm flex items-center gap-1.5 font-medium">
              <Award className="w-4 h-4" />
              <span>Certification incluse</span>
            </span>
          </div>
          <h1 className="mb-4">
            🎓 COURS COMPLET : INTRODUCTION À QGIS
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            Par l'Académie CCNTS – Cabinet de Cartographie Numérique, de Télédétection et de Statistiques
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>10 modules complets</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Niveau débutant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Pratique guidée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section 1 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[0].number}</span>
              {sections[0].title}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="whitespace-pre-line">{sections[0].content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {sections[0].list?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              {sections[0].advantages && (
                <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-3">{sections[0].advantages.title}</p>
                  <ul className="space-y-2">
                    {sections[0].advantages.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <p className="text-blue-600 font-medium mt-4">{sections[0].conclusion}</p>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[1].number}</span>
              {sections[1].title}
            </h2>
            <div className="space-y-4 text-gray-700">
              {sections[1].steps && (
                <div>
                  <p className="font-medium text-gray-900 mb-3">{sections[1].steps.title}</p>
                  <ol className="space-y-2">
                    {sections[1].steps.items.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                          {idx + 1}
                        </span>
                        <span className="mt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <p className="text-gray-600 italic mt-4">{sections[1].note}</p>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[2].number}</span>
              {sections[2].title}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>{sections[2].intro}</p>
              
              {/* Image de démonstration de l'interface QGIS */}
              <div className="my-6 p-4 bg-gray-100 rounded-lg border-2 border-blue-200">
                <img 
                  src={qgisInterface} 
                  alt="Interface QGIS - Vue d'ensemble"
                  className="w-full rounded shadow-lg"
                />
                <p className="text-sm text-gray-600 text-center mt-3 italic">
                  Vue d'ensemble de l'interface QGIS avec ses différentes zones
                </p>
              </div>
              
              {sections[2].zones && (
                <div className="mt-6 space-y-6">
                  <p className="font-medium text-gray-900 mb-4 text-lg">{sections[2].zones.title}</p>
                  
                  {/* Zone 1: Barre de menus */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[0]}</span>
                    </div>
                    {/* IMAGE À VENIR : Barre de menus */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisMenuBar} 
                        alt="Barre de menus QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Zone 2: Barres d'outils */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[1]}</span>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisToolbar} 
                        alt="Barres d'outils QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Zone 3: Explorateur */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[2]}</span>
                    </div>
                    {/* IMAGE À VENIR : Explorateur */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisExplorer} 
                        alt="Explorateur QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Zone 4: Panneau des couches */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[3]}</span>
                    </div>
                    {/* IMAGE À VENIR : Panneau des couches */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisLayersPanel} 
                        alt="Panneau des couches QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Zone 5: Vue cartographique */}
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-teal-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[4]}</span>
                    </div>
                    {/* IMAGE À VENIR : Vue cartographique */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisMapCanvas} 
                        alt="Vue cartographique QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Zone 6: Barre d'état */}
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded mb-3">
                      <ChevronRight className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{sections[2].zones.items[5]}</span>
                    </div>
                    {/* IMAGE À VENIR : Barre d'état */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <img 
                        src={qgisStatusBar} 
                        alt="Barre d'état QGIS"
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-blue-600 font-medium mt-6">{sections[2].conclusion}</p>
            </div>
          </Card>

          {/* Section 4 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[3].number}</span>
              {sections[3].title}
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>{sections[3].intro}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections[3].formats?.map((format, idx) => (
                  <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-2">{format.category}</p>
                    <p className="text-sm">{format.items}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mt-6">
                {sections[3].actions?.map((action, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-2">{action.title}</p>
                    <ol className="space-y-1 text-sm">
                      {action.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="ml-4">• {step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <p className="text-green-600 font-medium text-lg">✨ {sections[3].conclusion}</p>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[4].number}</span>
              {sections[4].title}
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>{sections[4].intro}</p>
              
              {sections[4].types?.map((type, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-3">{type.title}</p>
                  {type.steps && (
                    <ul className="space-y-1 mb-3 text-sm">
                      {type.steps.map((step, stepIdx) => (
                        <li key={stepIdx}>• {step}</li>
                      ))}
                    </ul>
                  )}
                  <ul className="space-y-2 ml-6">
                    {type.options?.map((option, optIdx) => (
                      <li key={optIdx} className="flex items-start gap-2">
                        <span className="text-blue-600">▸</span>
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="text-blue-600 font-medium mt-4">{sections[4].conclusion}</p>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[5].number}</span>
              {sections[5].title}
            </h2>
            <div className="space-y-6 text-gray-700">
              {sections[5].tools?.map((tool, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                  <p className="font-medium text-gray-900 mb-3 text-lg">{tool.category}</p>
                  <ul className="space-y-2">
                    {tool.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-blue-600 font-medium">{sections[5].conclusion}</p>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[6].number}</span>
              {sections[6].title}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">{sections[6].subtitle}</p>
              <ol className="space-y-3">
                {sections[6].steps?.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-blue-600 font-medium mt-6">{sections[6].conclusion}</p>
            </div>
          </Card>

          {/* Section 8 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[7].number}</span>
              {sections[7].title}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">{sections[7].subtitle}</p>
              <div className="grid gap-3">
                {sections[7].plugins?.map((plugin, idx) => (
                  <div key={idx} className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start gap-3">
                    <Download className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{plugin}</span>
                  </div>
                ))}
              </div>
              <p className="text-blue-600 font-medium mt-4">{sections[7].conclusion}</p>
            </div>
          </Card>

          {/* Section 9 */}
          <Card className="p-8">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[8].number}</span>
              {sections[8].title}
            </h2>
            <div className="space-y-6 text-gray-700">
              {sections[8].save && (
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-2">{sections[8].save.title}</p>
                  <ul className="space-y-1 ml-4">
                    {sections[8].save.steps.map((step, idx) => (
                      <li key={idx}>• {step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sections[8].tips && (
                <div className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <p className="font-medium text-gray-900 mb-3">{sections[8].tips.title}</p>
                  <ul className="space-y-2">
                    {sections[8].tips.items.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-600 flex-shrink-0">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-blue-600 font-medium">{sections[8].conclusion}</p>
            </div>
          </Card>

          {/* Section 10 - Conclusion */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">{sections[9].number}</span>
              {sections[9].title}
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">{sections[9].intro}</p>

              {sections[9].skills && (
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-900 mb-4 text-lg">{sections[9].skills.title}</p>
                  <div className="grid gap-3">
                    {sections[9].skills.items.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sections[9].nextSteps && (
                <div className="p-6 bg-blue-600 text-white rounded-lg">
                  <p className="font-medium mb-4 text-lg">{sections[9].nextSteps.title}</p>
                  <ul className="space-y-2">
                    {sections[9].nextSteps.items.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="flex-shrink-0">🚀</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Card>

          {/* QUIZ SECTION */}
          <Card className="p-10 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white text-center shadow-2xl">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h2 className="mb-4">
              🎓 Prêt à obtenir votre certification ?
            </h2>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              Validez vos acquis avec notre quiz de certification et obtenez votre <strong>certificat CCNTS gratuit</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold mb-1">15</div>
                <div className="text-sm text-green-200">Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold mb-1">80%</div>
                <div className="text-sm text-green-200">Score requis</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold mb-1">~15min</div>
                <div className="text-sm text-green-200">Durée estimée</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link to="/academy/qgis/quiz" className="w-full max-w-md">
                <Button size="lg" className="w-full bg-white text-green-600 hover:bg-gray-100 border-0 text-lg py-6">
                  <Award className="w-6 h-6 mr-3" />
                  Commencer le quiz de certification
                </Button>
              </Link>
              <p className="text-green-200 text-sm">
                ⚠️ Le quiz se fait sur une page séparée pour garantir l'intégrité de votre certification
              </p>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <h3 className="mb-4">Prêt à aller plus loin ?</h3>
            <p className="mb-6 text-blue-100">
              Découvrez nos formations avancées et certifiantes en SIG et Télédétection
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/academy">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  Voir tous les cours
                </Button>
              </Link>
              <Link to="/services#formations">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Formations certifiantes
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CourseQGISPage;