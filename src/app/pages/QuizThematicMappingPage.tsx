import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CourseQuiz } from '../components/academy/CourseQuiz';
import { SEOHead } from '../components/SEOHead';

const questions = [
  {
    id: 1,
    question: "Qu'est-ce qui distingue une carte thématique d'une carte générale ?",
    options: [
      "Elle couvre un plus grand territoire",
      "Elle met en évidence un thème particulier dans l'espace",
      "Elle est toujours en couleur",
      "Elle ne contient pas de légende"
    ],
    correctAnswer: 1,
    explanation: "Une carte thématique se distingue par sa capacité à représenter une information précise (population, climat, santé, etc.) contrairement à une carte générale qui montre l'ensemble du territoire."
  },
  {
    id: 2,
    question: "Quel type de carte thématique utilise des couleurs appliquées sur des régions pour représenter des données ?",
    options: [
      "Cartes de flux",
      "Cartes choroplèthes",
      "Cartes de densité",
      "Cartes isarithmiques"
    ],
    correctAnswer: 1,
    explanation: "Les cartes choroplèthes utilisent des couleurs sur des zones (communes, régions) pour représenter des taux, densités ou pourcentages."
  },
  {
    id: 3,
    question: "Pour quel type de données les cartes par symboles proportionnels sont-elles particulièrement adaptées ?",
    options: [
      "Les températures",
      "Les altitudes",
      "Les volumes et quantités",
      "Les flux migratoires"
    ],
    correctAnswer: 2,
    explanation: "Les cartes par symboles proportionnels (cercles, carrés dont la taille varie) sont idéales pour représenter des volumes, quantités et permettre une comparaison rapide."
  },
  {
    id: 4,
    question: "Quel type de carte utilise des lignes d'égale valeur (isobares, isohyètes) ?",
    options: [
      "Cartes choroplèthes",
      "Cartes en points",
      "Cartes isarithmiques",
      "Heatmaps"
    ],
    correctAnswer: 2,
    explanation: "Les cartes isarithmiques utilisent des courbes d'égale valeur comme les isobares (pression), isohyètes (précipitation) ou iso-altitude."
  },
  {
    id: 5,
    question: "Quels sont les deux types de données nécessaires pour créer une carte thématique ?",
    options: [
      "Données textuelles et visuelles",
      "Données géographiques et statistiques",
      "Données satellitaires et radar",
      "Données temporelles et spatiales"
    ],
    correctAnswer: 1,
    explanation: "Une carte thématique combine des données géographiques (limites, routes, zones) avec des données statistiques (population, agriculture, santé, etc.)."
  },
  {
    id: 6,
    question: "Quelle est la première étape pour créer une carte thématique dans QGIS ?",
    options: [
      "Appliquer un style thématique",
      "Charger les données géographiques",
      "Exporter en PDF",
      "Ajouter une légende"
    ],
    correctAnswer: 1,
    explanation: "La première étape consiste à charger les données géographiques (limites communales, régions, zones rurales, etc.) qui serviront de base à la carte."
  },
  {
    id: 7,
    question: "Quelle opération permet de relier les données statistiques aux données géographiques dans QGIS ?",
    options: [
      "Le merge",
      "Le clip",
      "Le join (jointure)",
      "Le buffer"
    ],
    correctAnswer: 2,
    explanation: "Le join (jointure) permet de relier les données statistiques à la carte géographique via un identifiant unique (ex: code commune)."
  },
  {
    id: 8,
    question: "Parmi ces palettes de couleurs, laquelle est recommandée pour la cartographie thématique ?",
    options: [
      "Des couleurs aléatoires",
      "ColorBrewer et palettes SIG",
      "Uniquement du noir et blanc",
      "Les couleurs fluorescentes"
    ],
    correctAnswer: 1,
    explanation: "ColorBrewer et les palettes SIG sont recommandées car elles offrent des schémas de couleurs scientifiquement étudiés pour la lisibilité et l'accessibilité."
  },
  {
    id: 9,
    question: "Pour représenter des valeurs continues comme la pollution ou les températures, quel type de carte est le plus approprié ?",
    options: [
      "Cartes en points",
      "Cartes de flux",
      "Cartes en plages de valeurs (graduées)",
      "Cartes par symboles proportionnels"
    ],
    correctAnswer: 2,
    explanation: "Les cartes en plages de valeurs (graduées) avec dégradé de couleurs sont idéales pour montrer des valeurs continues comme la pollution, températures ou altitude."
  },
  {
    id: 10,
    question: "Quel type de carte thématique est particulièrement utile pour visualiser la criminalité ou l'activité humaine ?",
    options: [
      "Cartes choroplèthes",
      "Cartes de densité (heatmaps)",
      "Cartes isarithmiques",
      "Cartes de flux"
    ],
    correctAnswer: 1,
    explanation: "Les heatmaps (cartes de densité) montrent des zones plus ou moins intenses et sont parfaites pour visualiser la criminalité, présence d'espèces ou activité humaine."
  },
  {
    id: 11,
    question: "Quelle est une erreur fréquente à éviter en cartographie thématique ?",
    options: [
      "Utiliser une légende",
      "Ajouter les sources",
      "Créer une carte trop chargée",
      "Indiquer la date"
    ],
    correctAnswer: 2,
    explanation: "Une carte trop chargée nuit à la lisibilité. Il faut éviter de surcharger la carte avec trop d'informations ou de symboles."
  },
  {
    id: 12,
    question: "Quels éléments doivent obligatoirement figurer dans la mise en page finale d'une carte thématique ?",
    options: [
      "Uniquement le titre",
      "Titre, légende, nord, échelle, sources, date",
      "Seulement les couleurs",
      "Uniquement les données"
    ],
    correctAnswer: 1,
    explanation: "Une carte professionnelle doit contenir : titre, légende, nord, échelle, sources, date et auteur pour être complète et utilisable."
  },
  {
    id: 13,
    question: "Dans quel domaine la cartographie thématique est-elle utilisée pour visualiser la déforestation et la qualité des sols ?",
    options: [
      "Urbanisme",
      "Démographie",
      "Environnement",
      "Risques"
    ],
    correctAnswer: 2,
    explanation: "En environnement, la cartographie thématique permet de visualiser la déforestation, la qualité des sols et les zones humides."
  },
  {
    id: 14,
    question: "Quelle méthode de classification est recommandée pour ajuster la légende dans QGIS ?",
    options: [
      "Uniquement une seule classe",
      "Quantiles, intervalles égaux, Jenks",
      "Classification alphabétique",
      "Ordre aléatoire"
    ],
    correctAnswer: 1,
    explanation: "Les méthodes comme quantiles, intervalles égaux ou Jenks (ruptures naturelles) permettent de classifier efficacement les données selon leur distribution."
  },
  {
    id: 15,
    question: "Pourquoi la cartographie thématique est-elle considérée comme un outil essentiel en SIG ?",
    options: [
      "Elle est facile à créer",
      "Elle permet de visualiser rapidement des phénomènes spatiaux et de soutenir la décision",
      "Elle ne nécessite pas de données",
      "Elle remplace les bases de données"
    ],
    correctAnswer: 1,
    explanation: "La cartographie thématique est essentielle car elle permet de visualiser rapidement des phénomènes dans l'espace, comparer des zones et soutenir la prise de décision en aménagement et planification."
  }
];

export function QuizThematicMappingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz Cartographie Thématique"
        noIndex={true}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy" className="hover:text-blue-600 transition-colors">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy/thematic-mapping" className="hover:text-blue-600 transition-colors">
              Cartographie Thématique
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-12 h-12" />
            <div>
              <h1 className="mb-2">Quiz de certification</h1>
              <p className="text-indigo-100">Cartographie Thématique - Académie CCNTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Instructions */}
        <Card className="p-6 mb-8 bg-blue-50 border-2 border-blue-200">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Instructions du quiz
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Ce quiz contient <strong>15 questions</strong> sur la cartographie thématique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Score minimum requis : <strong>80%</strong> (12/15 bonnes réponses)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Répondez à toutes les questions avant de soumettre</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>En cas de réussite, vous obtiendrez votre <strong>certificat CCNTS gratuit</strong></span>
            </li>
          </ul>
        </Card>

        {/* Warning anti-triche */}
        <Card className="p-6 mb-8 bg-orange-50 border-2 border-orange-300">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-orange-900 font-medium mb-2">⚠️ Avertissement</h3>
              <p className="text-orange-800 text-sm mb-3">
                Ce quiz est conçu pour évaluer vos connaissances acquises pendant le cours. 
                Pour une certification valide et reconnue, nous vous recommandons de :
              </p>
              <ul className="space-y-1 text-orange-800 text-sm">
                <li>• Passer le quiz sans consulter le cours</li>
                <li>• Répondre de manière honnête et autonome</li>
                <li>• Réviser le cours si nécessaire avant de commencer</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <Link to="/academy/thematic-mapping">
                  <Button variant="outline" size="sm" className="border-orange-400 text-orange-700 hover:bg-orange-100">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Retour au cours pour réviser
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Quiz Component */}
        <CourseQuiz 
          courseTitle="Cartographie Thématique"
          questions={questions}
          passingScore={80}
        />
      </div>
    </div>
  );
}

export default QuizThematicMappingPage;
