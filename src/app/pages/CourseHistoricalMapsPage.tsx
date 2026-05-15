import { BookOpen, ChevronRight, Home, CheckCircle2, Award, MapPin, Clock, Archive, Search, Database, FileText, Eye, Map } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CertificationBadge } from '../components/academy/CertificationBadge';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { SEOHead } from '../components/SEOHead';

const modules = [
  {
    number: '1️⃣',
    title: 'Introduction aux cartes historiques',
    icon: MapPin,
    objectives: [
      'Comprendre ce qu\'est une carte historique',
      'Identifier les usages et les limites de ce type de carte',
      'Développer les attitudes essentielles avant toute analyse ou création'
    ],
    content: [
      {
        subtitle: 'Définition et rôle des cartes historiques',
        text: 'Une carte historique est une représentation cartographique d\'un territoire à une époque donnée. Elle témoigne de l\'état des connaissances géographiques, des frontières, des infrastructures et de l\'occupation du sol à un moment précis du passé.'
      },
      {
        subtitle: 'Pourquoi étudier l\'histoire à travers les cartes ?',
        points: [
          'Comprendre l\'évolution territoriale et urbaine',
          'Visualiser les changements géopolitiques',
          'Analyser les transformations environnementales',
          'Reconstituer des espaces disparus',
          'Étudier les représentations mentales d\'une époque'
        ]
      },
      {
        subtitle: 'Les erreurs fréquentes et biais possibles',
        points: [
          'Anachronisme : projeter des concepts modernes sur le passé',
          'Biais de représentation : toute carte reflète une vision du monde',
          'Erreurs de géoréférencement : déformations et imprécisions',
          'Interprétation hâtive sans contexte historique',
          'Négliger l\'état de conservation du document'
        ]
      },
      {
        subtitle: 'Attitudes professionnelles : esprit critique, vérification, prudence',
        points: [
          'Toujours vérifier les sources primaires',
          'Croiser plusieurs documents d\'époque',
          'Contextualiser systématiquement',
          'Documenter toutes les étapes de travail',
          'Rester humble face aux incertitudes'
        ]
      }
    ],
    workshop: '🎯 Mini-atelier : "Reconnaître les éléments qui datent une carte ancienne"'
  },
  {
    number: '2️⃣',
    title: 'Les grandes étapes de l\'histoire de la cartographie',
    icon: Clock,
    objectives: [
      'Comprendre les évolutions techniques',
      'Savoir replacer une carte dans son époque',
      'Identifier le niveau de précision possible selon la période'
    ],
    periods: [
      {
        title: 'Antiquité : Babylone, Grèce, Rome',
        description: 'Premières représentations du monde connu, tablettes babyloniennes, carte d\'Ératosthène, Ptolémée et sa géographie.'
      },
      {
        title: 'Moyen Âge : carte T-O, cartographie arabe',
        description: 'Vision religieuse du monde (mappae mundi), héritage grec préservé par les savants arabes, tables d\'Al-Idrisi.'
      },
      {
        title: 'Renaissance : projections, navigation, Mercator',
        description: 'Grandes découvertes, révolution des projections cartographiques, naissance de la cartographie mathématique moderne.'
      },
      {
        title: 'Période scientifique : triangulation, Cassini',
        description: 'Mesure géodésique du territoire, carte de Cassini (première carte topographique générale d\'un pays), précision accrue.'
      },
      {
        title: 'Époque moderne : photo aérienne → satellite → SIG',
        description: 'Photogrammétrie, télédétection, GPS, numérisation, cartographie collaborative, big data géographique.'
      }
    ],
    workshop: '🎯 Mini-atelier : "Classer une série de cartes par époque"'
  },
  {
    number: '3️⃣',
    title: 'Méthodes d\'acquisition des données historiques',
    icon: Database,
    badge: 'Module clé',
    objectives: [
      'Savoir où trouver des données fiables',
      'Apprendre à sélectionner les bonnes sources',
      'Vérifier l\'authenticité d\'une carte ou d\'un document'
    ],
    content: [
      {
        subtitle: 'Sources primaires',
        text: 'Archives nationales, bibliothèques, manuscrits, registres, cartes originales',
        examples: [
          'Archives nationales et départementales',
          'Bibliothèques universitaires spécialisées',
          'Musées et collections privées',
          'Services cartographiques nationaux'
        ]
      },
      {
        subtitle: 'Sources numériques fiables',
        platforms: [
          { name: 'Gallica', description: 'Bibliothèque numérique de la BnF (France)' },
          { name: 'IGN - Institut Géographique National', description: 'Cartes historiques officielles' },
          { name: 'Old Maps Online', description: 'Portail international de cartes anciennes' },
          { name: 'David Rumsey Map Collection', description: 'Plus de 150 000 cartes historiques' },
          { name: 'Europeana', description: 'Patrimoine culturel européen numérisé' }
        ]
      },
      {
        subtitle: 'Méthodologie d\'acquisition',
        steps: [
          'Recherche : définir période, zone géographique, type de carte',
          'Sélection : évaluer la pertinence et la qualité',
          'Analyse : examiner les métadonnées disponibles',
          'Validation : vérifier l\'authenticité et la fiabilité',
          'Numérisation : acquérir en haute résolution si besoin'
        ]
      },
      {
        subtitle: 'Critères de qualité',
        criteria: [
          'Date : année de production confirmée',
          'Auteur : cartographe ou institution identifié(e)',
          'Échelle : échelle d\'origine documentée',
          'Projection : système de projection utilisé',
          'Contexte historique : raison d\'être de la carte',
          'État de conservation : altérations visibles'
        ]
      }
    ],
    workshop: '🎯 Mini-atelier : "Trouver une carte ancienne de la ville X et analyser ses métadonnées"'
  },
  {
    number: '4️⃣',
    title: 'Analyse critique d\'une carte historique',
    icon: Eye,
    objectives: [
      'Lire une carte historique comme un document scientifique',
      'Identifier les biais et erreurs',
      'Comprendre le contexte historique derrière une carte'
    ],
    content: [
      {
        subtitle: 'Décrypter les symboles, couleurs, toponymes anciens',
        text: 'Chaque élément graphique a une signification. Les symboles peuvent varier selon l\'époque et la région. Les toponymes peuvent avoir changé au fil du temps.'
      },
      {
        subtitle: 'Comprendre l\'intention du cartographe',
        points: [
          'Objectif militaire, commercial ou scientifique ?',
          'Vision coloniale ou locale ?',
          'Propagande ou documentation neutre ?',
          'Quel public visé ?'
        ]
      },
      {
        subtitle: 'Repérer les incohérences spatiales',
        points: [
          'Déformations volontaires ou techniques',
          'Zones laissées vierges (terra incognita)',
          'Proportions inexactes',
          'Orientations non standardisées',
          'Éléments mythologiques ou imaginaires'
        ]
      },
      {
        subtitle: 'Lien entre contexte politique / religieux / économique et cartographie',
        text: 'Les cartes reflètent toujours le contexte de leur création : pouvoir politique, croyances religieuses, enjeux économiques, conflits territoriaux.'
      }
    ],
    workshop: '🎯 Mini-atelier : "Comparer deux cartes divergentes d\'une même époque"'
  },
  {
    number: '5️⃣',
    title: 'Production d\'une carte historique en SIG',
    icon: Map,
    objectives: [
      'Apprendre à géoréférencer une carte ancienne',
      'Digitaliser selon les normes modernes',
      'Créer des cartes historiques visuellement cohérentes'
    ],
    content: [
      {
        subtitle: 'Choix du système de coordonnées (SCR)',
        text: 'Sélectionner un système de référence approprié, en tenant compte de la zone géographique et de la période.',
        examples: [
          'WGS84 pour une approche globale',
          'Systèmes locaux historiques si documentés',
          'Lambert ou UTM selon la zone d\'étude'
        ]
      },
      {
        subtitle: 'Géoréférencement précis',
        steps: [
          'Identifier des points de contrôle reconnaissables (monuments, carrefours, cours d\'eau)',
          'Placer au minimum 4-6 points bien répartis',
          'Choisir le type de transformation (polynomiale, spline)',
          'Vérifier le RMS (erreur quadratique moyenne)',
          'Ajuster jusqu\'à obtenir une précision acceptable'
        ]
      },
      {
        subtitle: 'Digitalisation : polygones, lignes, points',
        text: 'Créer des couches vectorielles pour représenter les éléments cartographiés : bâtiments (polygones), routes (lignes), points d\'intérêt (points).'
      },
      {
        subtitle: 'Style historique',
        techniques: [
          'Utiliser des teintes sépia ou vieillies',
          'Imiter les textures de parchemin',
          'Adopter des traits et symboles anciens',
          'Choisir des polices d\'époque',
          'Respecter les codes graphiques historiques'
        ]
      },
      {
        subtitle: 'Export final : titres, légende, échelle, sources',
        text: 'Une carte historique professionnelle doit comporter tous les éléments cartographiques standards : titre explicite, légende complète, échelle, orientation, sources documentaires.'
      }
    ],
    workshop: '🎯 Mini-atelier : "Géoréférencer une carte du XIXe siècle et digitaliser un quartier disparu"'
  },
  {
    number: '6️⃣',
    title: 'Études de cas appliquées',
    icon: FileText,
    objectives: [
      'Appliquer toute la méthodologie sur un cas réel',
      'Produire une carte historique complète',
      'Présenter un mini-projet'
    ],
    caseStudies: [
      {
        title: 'Évolution d\'une ville',
        description: 'Exemple : Abidjan, Athènes, Bamako... Comparer plusieurs périodes et identifier les transformations urbaines.'
      },
      {
        title: 'Reconstitution d\'anciens quartiers',
        description: 'Digitaliser des quartiers disparus à partir de plans anciens, créer des reconstructions 3D si possible.'
      },
      {
        title: 'Analyse cartographique d\'un événement',
        description: 'Bataille historique, colonisation, expansion urbaine : cartographier les acteurs, mouvements, conséquences spatiales.'
      }
    ],
    finalProject: '📌 Mini-projet final : créer une carte historique géoréférencée avec légende & sources'
  }
];

const expectedOutcomes = [
  'Chercher des cartes anciennes fiables',
  'Géoréférencer une carte avec précision',
  'Analyser le contexte historique avec méthode',
  'Digitaliser et styliser une carte historique',
  'Produire une carte complète, propre et validée scientifiquement',
  'Comprendre l\'évolution des territoires grâce à la cartographie'
];

export function CourseHistoricalMapsPage() {
  useTrackCourse({
    courseId: 'historical-maps',
    courseName: 'Comprendre, acquérir et produire des cartes historiques',
    courseSlug: 'historical-maps'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Cartes Historiques - Géoréférencement"
        customDescription="Géoréférencez des cartes historiques : numérisation, transformation, intégration dans un SIG moderne."
      />
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-amber-700 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy" className="hover:text-amber-700 transition-colors">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-900 font-medium">Cartes historiques</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Plus visuel */}
      <div className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <BookOpen className="w-10 h-10" />
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎁 Cours gratuit
            </span>
            <span className="px-4 py-2 bg-orange-500/80 rounded-full text-sm font-medium">
              📊 Intermédiaire
            </span>
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm flex items-center gap-2 font-bold">
              <Award className="w-5 h-5" />
              Certification incluse
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            🗺️ Cartes Historiques
          </h1>
          
          <p className="text-amber-100 text-xl sm:text-2xl mb-8 max-w-3xl leading-relaxed">
            Comprendre, acquérir et produire des cartes historiques de qualité scientifique
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl border border-white/20">
            <p className="text-white/90 text-lg mb-4">
              Par l'<strong>Académie CCNTS</strong> – Cabinet de Cartographie Numérique, de Télédétection et de Statistiques
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>6 modules complets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Mini-ateliers pratiques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Études de cas réels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* MODULE 1 - Design élégant */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-2 border-amber-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-amber-600">{modules[0].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[0].title}</h2>
                  </div>
                </div>
              </div>

              {/* Objectifs - Design premium */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[0].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu avec meilleur espacement */}
              <div className="space-y-8">
                {modules[0].content.map((section, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      {section.subtitle}
                    </h3>
                    {section.text && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-4 pl-11">{section.text}</p>
                    )}
                    {section.points && (
                      <ul className="space-y-3 pl-11">
                        {section.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <span className="text-2xl text-amber-600 flex-shrink-0">▸</span>
                            <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Workshop - Design attractif */}
              <div className="mt-8 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-lg font-bold">{modules[0].workshop}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* MODULE 2 - Timeline design */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-2 border-blue-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-blue-600">{modules[1].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[1].title}</h2>
                  </div>
                </div>
              </div>

              {/* Objectifs */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[1].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline des périodes */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">📚 Voyage à travers l'histoire</h3>
                  <div className="h-1 flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                </div>
                
                {modules[1].periods?.map((period, idx) => (
                  <div key={idx} className="relative pl-8 pb-8 border-l-4 border-blue-200 last:border-l-0 last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 ml-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">⏰</span>
                        {period.title}
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">{period.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workshop */}
              <div className="mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-lg font-bold">{modules[1].workshop}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* MODULE 3 - Module clé avec design premium */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-4 border-green-300 bg-gradient-to-br from-white to-green-50">
              {/* Badge "Module clé" */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl transform rotate-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="font-bold text-lg">MODULE CLÉ</span>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-8 mt-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-green-600">{modules[2].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[2].title}</h2>
                  </div>
                  <p className="text-green-700 font-medium text-lg">
                    🔑 Le cœur de votre apprentissage
                  </p>
                </div>
              </div>

              {/* Objectifs avec style premium */}
              <div className="mb-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[2].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu structuré */}
              <div className="space-y-8">
                {modules[2].content.map((section, idx) => (
                  <div key={idx}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md">
                          {idx + 1}
                        </span>
                        {section.subtitle}
                      </h3>
                      
                      {section.text && (
                        <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
                          <p className="text-gray-700 text-lg leading-relaxed">{section.text}</p>
                        </div>
                      )}
                      
                      {section.examples && (
                        <div className="grid gap-3 mb-4">
                          {section.examples.map((example, exIdx) => (
                            <div key={exIdx} className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-white rounded-lg p-4 border border-green-200">
                              <span className="text-2xl text-green-600 flex-shrink-0">📍</span>
                              <span className="text-gray-700 text-lg">{example}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.platforms && (
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          {section.platforms.map((platform, platIdx) => (
                            <div key={platIdx} className="bg-gradient-to-br from-white to-green-50 border-2 border-green-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow">
                              <div className="flex items-start gap-3 mb-2">
                                <span className="text-2xl">🌐</span>
                                <p className="font-bold text-gray-900 text-lg">{platform.name}</p>
                              </div>
                              <p className="text-gray-600 text-sm pl-11">{platform.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.steps && (
                        <div className="space-y-4">
                          {section.steps.map((step, stepIdx) => (
                            <div key={stepIdx} className="flex items-start gap-4 bg-gradient-to-r from-white to-green-50 rounded-lg p-4 border border-green-200">
                              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                                {stepIdx + 1}
                              </span>
                              <span className="text-gray-700 text-lg mt-1.5">{step}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.criteria && (
                        <div className="grid md:grid-cols-2 gap-3 mt-4">
                          {section.criteria.map((criterion, critIdx) => (
                            <div key={critIdx} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                              <p className="text-gray-700 font-medium">{criterion}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Workshop */}
              <div className="mt-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-lg font-bold">{modules[2].workshop}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* MODULE 4 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-2 border-purple-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-purple-600">{modules[3].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[3].title}</h2>
                  </div>
                </div>
              </div>

              {/* Objectifs */}
              <div className="mb-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[3].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div className="space-y-8">
                {modules[3].content.map((section, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      {section.subtitle}
                    </h3>
                    {section.text && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-4 pl-11">{section.text}</p>
                    )}
                    {section.points && (
                      <ul className="space-y-3 pl-11">
                        {section.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-3">
                            <span className="text-2xl text-amber-600 flex-shrink-0">▸</span>
                            <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Workshop */}
              <div className="mt-8 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-lg font-bold">{modules[3].workshop}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* MODULE 5 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-2 border-indigo-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Map className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-indigo-600">{modules[4].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[4].title}</h2>
                  </div>
                </div>
              </div>

              {/* Objectifs */}
              <div className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[4].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div className="space-y-8">
                {modules[4].content.map((section, idx) => (
                  <div key={idx}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md">
                          {idx + 1}
                        </span>
                        {section.subtitle}
                      </h3>
                      
                      {section.text && (
                        <div className="bg-indigo-50 rounded-lg p-4 mb-4 border-l-4 border-indigo-500">
                          <p className="text-gray-700 text-lg leading-relaxed">{section.text}</p>
                        </div>
                      )}
                      
                      {section.examples && (
                        <div className="grid gap-3 mb-4">
                          {section.examples.map((example, exIdx) => (
                            <div key={exIdx} className="flex items-start gap-3 bg-gradient-to-r from-indigo-50 to-white rounded-lg p-4 border border-indigo-200">
                              <span className="text-2xl text-indigo-600 flex-shrink-0">📍</span>
                              <span className="text-gray-700 text-lg">{example}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.steps && (
                        <div className="space-y-4">
                          {section.steps.map((step, stepIdx) => (
                            <div key={stepIdx} className="flex items-start gap-4 bg-gradient-to-r from-white to-indigo-50 rounded-lg p-4 border border-indigo-200">
                              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                                {stepIdx + 1}
                              </span>
                              <span className="text-gray-700 text-lg mt-1.5">{step}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.techniques && (
                        <div className="grid md:grid-cols-2 gap-3 mt-4">
                          {section.techniques.map((tech, techIdx) => (
                            <div key={techIdx} className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500 shadow-sm">
                              <p className="text-gray-700 font-medium">{tech}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Workshop */}
              <div className="mt-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-lg font-bold">{modules[4].workshop}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* MODULE 6 - Études de cas */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            
            <Card className="p-8 sm:p-10 shadow-2xl border-2 border-orange-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-orange-600">{modules[5].number}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{modules[5].title}</h2>
                  </div>
                </div>
              </div>

              {/* Objectifs */}
              <div className="mb-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Objectifs d'apprentissage</h3>
                </div>
                <div className="grid gap-3">
                  {modules[5].objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Études possibles */}
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📂 Études possibles</h3>
                {modules[5].caseStudies?.map((study, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg border border-orange-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{study.title}</h4>
                    <p className="text-gray-700">{study.description}</p>
                  </div>
                ))}
              </div>

              {/* Mini-projet final */}
              <div className="mt-6 p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg">
                <p className="font-bold text-lg">{modules[5].finalProject}</p>
              </div>
            </Card>
          </div>

          {/* RÉSULTAT FINAL ATTENDU */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
            <h2 className="text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-10 h-10 text-green-600" />
              🎯 RÉSULTAT FINAL ATTENDU
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Une fois le cours terminé, l'élève doit être capable de :
            </p>
            <div className="grid gap-3">
              {expectedOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* QUIZ SECTION */}
          <Card className="p-10 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 text-white text-center shadow-2xl">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h2 className="mb-4">
              🎓 Prêt à obtenir votre certification ?
            </h2>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              Validez vos acquis avec notre quiz de certification et obtenez votre <strong>certificat CCNTS gratuit</strong> en cartographie historique.
            </p>
            <CertificationBadge />
            <Button 
              size="lg" 
              asChild
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-6 text-lg shadow-xl"
            >
              <Link to="/academy/historical-maps/quiz">
                Passer le quiz de certification
                <Award className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CourseHistoricalMapsPage;