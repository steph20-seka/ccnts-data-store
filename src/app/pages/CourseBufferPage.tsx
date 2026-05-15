import { BookOpen, ChevronRight, Home, CheckCircle2, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CertificationBadge } from '../components/academy/CertificationBadge';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { SEOHead } from '../components/SEOHead';

const sections = [
  {
    number: '1️⃣',
    title: "Qu'est-ce qu'un tampon (buffer) ?",
    content: `Un tampon (buffer en anglais) est une zone géographique créée autour d'un élément spatial (point, ligne ou polygone) à une distance déterminée.

C'est l'un des outils d'analyse spatiale les plus utilisés en SIG pour :`,
    list: [
      'Créer des zones de protection autour de ressources sensibles',
      'Définir des périmètres de sécurité',
      'Analyser la proximité et l\'accessibilité',
      'Identifier les zones d\'influence',
      'Modéliser des zones à risque',
      'Planifier l\'aménagement du territoire'
    ],
    examples: {
      title: '🎯 Exemples concrets :',
      items: [
        'Zone de protection de 100m autour d\'une rivière',
        'Périmètre de sécurité de 500m autour d\'un site industriel',
        'Zone d\'influence de 2km autour d\'une école',
        'Aire de protection de 50m autour d\'un monument historique'
      ]
    }
  },
  {
    number: '2️⃣',
    title: "Types de tampons",
    intro: '📐 Il existe plusieurs types de tampons selon vos besoins :',
    types: [
      {
        title: 'Tampon simple (fixe)',
        description: 'Une distance constante autour de tous les éléments',
        example: '100m autour de toutes les routes'
      },
      {
        title: 'Tampon variable',
        description: 'Distance qui varie selon un attribut',
        example: 'Distance basée sur la largeur de la route'
      },
      {
        title: 'Tampon négatif (interne)',
        description: 'Zone à l\'intérieur d\'un polygone',
        example: 'Zone tampon de -50m à l\'intérieur d\'une forêt'
      },
      {
        title: 'Tampon multi-anneaux',
        description: 'Plusieurs zones concentriques',
        example: 'Zones de 100m, 200m et 500m autour d\'un point'
      }
    ],
    note: 'Le choix du type dépend de votre objectif d\'analyse.'
  },
  {
    number: '3️⃣',
    title: "Créer un tampon dans QGIS",
    intro: '🔧 Méthode détaillée étape par étape :',
    steps: [
      {
        title: 'Étape 1 : Préparer vos données',
        items: [
          'Ouvrir QGIS et charger votre couche (points, lignes ou polygones)',
          'Vérifier que la couche est dans un système de projection métrique (UTM recommandé)',
          'Note : Si vos données sont en WGS84 (EPSG:4326), reprojeter d\'abord en UTM'
        ]
      },
      {
        title: 'Étape 2 : Accéder à l\'outil Tampon',
        items: [
          'Aller dans le menu Vecteur ➜ Outils de géotraitement ➜ Tampon',
          'Ou utiliser la boîte de traitement : Ctrl+Alt+T puis rechercher "tampon"'
        ]
      },
      {
        title: 'Étape 3 : Configurer les paramètres',
        items: [
          'Couche d\'entrée : sélectionner votre couche',
          'Distance : entrer la distance souhaitée (en unités de la couche)',
          'Segments : nombre de segments pour arrondir (25 par défaut)',
          'Dissoudre : cocher pour fusionner les tampons qui se chevauchent',
          'Choisir l\'emplacement de la couche résultat'
        ]
      },
      {
        title: 'Étape 4 : Exécuter et vérifier',
        items: [
          'Cliquer sur "Exécuter"',
          'Vérifier visuellement le résultat',
          'Contrôler les distances avec l\'outil de mesure',
          'Styliser la couche tampon (transparence, contour)'
        ]
      }
    ]
  },
  {
    number: '4️⃣',
    title: "Options avancées",
    intro: '⚙️ Maîtrisez les options pour des analyses plus sophistiquées :',
    options: [
      {
        title: 'Distance variable par attribut',
        description: 'Utiliser un champ numérique de votre table attributaire pour définir des distances différentes pour chaque entité.',
        usage: 'Utile pour des zones de protection adaptées à chaque élément'
      },
      {
        title: 'Dissolution des résultats',
        description: 'Fusionner les tampons qui se chevauchent en un seul polygone.',
        usage: 'Crée une zone de protection continue'
      },
      {
        title: 'Terminaisons des lignes',
        description: 'Pour les lignes : choisir entre terminaison ronde, plate ou carrée.',
        usage: 'Affecte l\'apparence aux extrémités des tampons de lignes'
      },
      {
        title: 'Côté du tampon',
        description: 'Pour les lignes : tampon à gauche, à droite ou des deux côtés.',
        usage: 'Modéliser des emprises routières asymétriques'
      }
    ]
  },
  {
    number: '5️⃣',
    title: "Cas pratiques d'application",
    intro: '🌍 Applications réelles des zones tampons :',
    cases: [
      {
        domain: 'Environnement',
        applications: [
          'Zones de protection des cours d\'eau et zones humides',
          'Périmètres de protection des parcs naturels',
          'Aires de protection de la faune sauvage',
          'Corridors écologiques'
        ]
      },
      {
        domain: 'Urbanisme',
        applications: [
          'Zones non constructibles autour des infrastructures',
          'Périmètres de servitude autour des lignes électriques',
          'Aires d\'accessibilité aux services publics',
          'Zones d\'influence commerciale'
        ]
      },
      {
        domain: 'Risques et sécurité',
        applications: [
          'Périmètres de sécurité autour de sites sensibles',
          'Zones à risque autour d\'installations dangereuses',
          'Aires d\'évacuation en cas d\'urgence',
          'Zones d\'exclusion aérienne'
        ]
      },
      {
        domain: 'Santé publique',
        applications: [
          'Zones de couverture des établissements de santé',
          'Périmètres de vaccination',
          'Aires d\'intervention rapide des services d\'urgence',
          'Zones de prévention sanitaire'
        ]
      }
    ]
  },
  {
    number: '6️⃣',
    title: "Bonnes pratiques",
    intro: '✅ Conseils pour une utilisation optimale :',
    tips: [
      {
        category: 'Projection',
        advice: 'Toujours travailler dans un système de projection métrique approprié (UTM). Les tampons en degrés (WGS84) sont géométriquement incorrects.'
      },
      {
        category: 'Unités',
        advice: 'Vérifier les unités de votre couche avant de créer un tampon. 100 en mètres ≠ 100 en degrés !'
      },
      {
        category: 'Performance',
        advice: 'Pour de grandes couches, simplifier d\'abord la géométrie peut accélérer le traitement.'
      },
      {
        category: 'Visualisation',
        advice: 'Utiliser la transparence (50-70%) pour visualiser les tampons sans masquer les données sous-jacentes.'
      },
      {
        category: 'Documentation',
        advice: 'Noter la distance utilisée dans le nom de la couche (ex: "rivieres_buffer_100m").'
      },
      {
        category: 'Validation',
        advice: 'Toujours vérifier quelques distances avec l\'outil de mesure pour confirmer la justesse du résultat.'
      }
    ]
  },
  {
    number: '7️⃣',
    title: "Exercice pratique",
    intro: '💪 Mise en pratique :',
    exercise: {
      title: 'Créer une zone de protection environnementale',
      scenario: 'Vous devez créer des zones de protection autour d\'un réseau de cours d\'eau pour préserver la biodiversité aquatique.',
      tasks: [
        'Charger une couche de cours d\'eau (lignes)',
        'Reprojeter en UTM si nécessaire',
        'Créer un tampon de 50 mètres de chaque côté',
        'Dissoudre les tampons pour créer une zone continue',
        'Calculer la superficie totale de la zone de protection',
        'Identifier les bâtiments situés dans cette zone tampon (intersection)',
        'Créer une carte finale avec légende appropriée'
      ]
    },
    reflection: 'Cette technique est utilisée dans la réglementation environnementale de nombreux pays.'
  }
];

export function CourseBufferPage() {
  useTrackCourse({
    courseId: 'buffer',
    courseName: 'Maîtriser les tampons pour créer des zones de protection',
    courseSlug: 'buffer'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Analyse de Zone Tampon"
        customDescription="Maîtrisez l'analyse de zone tampon (buffer) : création, paramétrage, applications pratiques en aménagement du territoire."
      />
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/academy" className="text-gray-600 hover:text-blue-600">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">Maîtriser les tampons</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Cours gratuit
              </span>
              <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm">
                Niveau Intermédiaire
              </span>
              <CertificationBadge />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">
              🛡️ Maîtriser les tampons pour créer des zones de protection
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Apprenez à créer et utiliser les zones tampons (buffers) dans QGIS pour l'analyse spatiale et la gestion des zones de protection.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Durée : 2h30</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>7 sections</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Certification disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">{section.number}</span>
                  {section.title}
                </h2>

                {section.content && (
                  <div className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                    {section.content}
                  </div>
                )}

                {section.intro && (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.intro}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-2 mb-4 ml-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.examples && (
                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <p className="font-medium text-gray-900 mb-3">{section.examples.title}</p>
                    <ul className="space-y-2">
                      {section.examples.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.types && (
                  <div className="space-y-4 mb-4">
                    {section.types.map((type, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">{type.title}</h4>
                        <p className="text-gray-700 text-sm mb-1">{type.description}</p>
                        <p className="text-gray-600 text-sm italic">Exemple : {type.example}</p>
                      </div>
                    ))}
                    {section.note && (
                      <p className="text-gray-600 italic mt-4">{section.note}</p>
                    )}
                  </div>
                )}

                {section.steps && (
                  <div className="space-y-6">
                    {section.steps.map((step, idx) => (
                      <div key={idx} className="border-l-4 border-blue-600 pl-6">
                        <h4 className="font-medium text-gray-900 mb-3">{step.title}</h4>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-gray-700 flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.options && (
                  <div className="space-y-4">
                    {section.options.map((option, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">⚙️ {option.title}</h4>
                        <p className="text-gray-700 mb-2">{option.description}</p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Usage :</span> {option.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.cases && (
                  <div className="space-y-5">
                    {section.cases.map((cas, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-5">
                        <h4 className="font-medium text-blue-900 mb-3">🏷️ {cas.domain}</h4>
                        <ul className="space-y-2">
                          {cas.applications.map((app, appIdx) => (
                            <li key={appIdx} className="text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600">▸</span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.tips && (
                  <div className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <p className="font-medium text-gray-900 mb-1">
                          ✓ {tip.category}
                        </p>
                        <p className="text-gray-700 text-sm">{tip.advice}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.exercise && (
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                      {section.exercise.title}
                    </h4>
                    <p className="text-gray-700 mb-4 italic">
                      📋 Scénario : {section.exercise.scenario}
                    </p>
                    <p className="font-medium text-gray-900 mb-3">À réaliser :</p>
                    <ol className="space-y-2 mb-4">
                      {section.exercise.tasks.map((task, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-3">
                          <span className="font-medium text-blue-600">{idx + 1}.</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ol>
                    {section.reflection && (
                      <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-gray-200">
                        💡 {section.reflection}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Quiz CTA */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl mb-4">
                Prêt à obtenir votre certification ?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Testez vos connaissances avec notre quiz de certification. Un score de 80% ou plus vous permettra d'obtenir un certificat officiel CCNTS.
              </p>
              <Link to="/academy/buffer/quiz">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Passer le quiz de certification
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default CourseBufferPage;