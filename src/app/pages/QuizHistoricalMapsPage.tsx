import { ChevronRight, Home, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CourseQuiz } from '../components/academy/CourseQuiz';
import { SEOHead } from '../components/SEOHead';

const historicalMapsQuizQuestions = [
  {
    id: 1,
    question: "Qu'est-ce qu'une carte historique ?",
    options: [
      "Une carte très ancienne sans valeur scientifique",
      "Une représentation cartographique d'un territoire à une époque donnée",
      "Une carte dessinée à la main",
      "Une carte avec des erreurs"
    ],
    correctAnswer: 1,
    explanation: "Une carte historique est une représentation cartographique d'un territoire à une époque donnée, témoignant de l'état des connaissances et du contexte de cette période."
  },
  {
    id: 2,
    question: "Quel est le principal danger dans l'analyse d'une carte historique ?",
    options: [
      "L'anachronisme : projeter des concepts modernes sur le passé",
      "La taille du document",
      "La langue utilisée",
      "Le coût d'acquisition"
    ],
    correctAnswer: 0,
    explanation: "L'anachronisme est un danger majeur : il faut éviter de projeter nos concepts et connaissances actuels sur les représentations et compréhensions du passé."
  },
  {
    id: 3,
    question: "Quelle période a vu l'apparition des projections cartographiques modernes ?",
    options: [
      "Antiquité",
      "Moyen Âge",
      "Renaissance",
      "XXe siècle"
    ],
    correctAnswer: 2,
    explanation: "La Renaissance a marqué une révolution avec l'apparition des projections mathématiques modernes, notamment grâce à Mercator et aux grandes découvertes."
  },
  {
    id: 4,
    question: "Quelle plateforme numérique française offre un accès à de nombreuses cartes historiques ?",
    options: [
      "MapBox",
      "Gallica (BnF)",
      "Google Maps",
      "OpenStreetMap"
    ],
    correctAnswer: 1,
    explanation: "Gallica, la bibliothèque numérique de la Bibliothèque nationale de France, offre un accès gratuit à des milliers de cartes historiques numérisées."
  },
  {
    id: 5,
    question: "Combien de points de contrôle minimum sont recommandés pour un géoréférencement précis ?",
    options: [
      "2 points",
      "3 points",
      "4 à 6 points",
      "10 points minimum"
    ],
    correctAnswer: 2,
    explanation: "Il est recommandé d'utiliser au minimum 4 à 6 points de contrôle bien répartis sur la carte pour obtenir un géoréférencement précis et fiable."
  },
  {
    id: 6,
    question: "Que signifie RMS dans le processus de géoréférencement ?",
    options: [
      "Root Mean Square (erreur quadratique moyenne)",
      "Rapid Mapping System",
      "Raster Map Standard",
      "Reference Map Scale"
    ],
    correctAnswer: 0,
    explanation: "RMS (Root Mean Square) représente l'erreur quadratique moyenne, un indicateur de la précision du géoréférencement. Plus il est faible, meilleure est la précision."
  },
  {
    id: 7,
    question: "Quelle famille a réalisé la première carte topographique générale de France au XVIIIe siècle ?",
    options: [
      "Famille Mercator",
      "Famille Ptolémée",
      "Famille Cassini",
      "Famille Sanson"
    ],
    correctAnswer: 2,
    explanation: "La famille Cassini a réalisé la première carte topographique générale de la France au XVIIIe siècle, grâce à des méthodes de triangulation scientifique."
  },
  {
    id: 8,
    question: "Quelle information est ESSENTIELLE à documenter lors de l'acquisition d'une carte historique ?",
    options: [
      "La couleur du papier uniquement",
      "Date, auteur, échelle, projection et contexte",
      "Le prix d'achat",
      "Le format de fichier numérique"
    ],
    correctAnswer: 1,
    explanation: "Il est essentiel de documenter : la date, l'auteur, l'échelle, la projection utilisée et le contexte historique pour garantir une analyse scientifique rigoureuse."
  },
  {
    id: 9,
    question: "Au Moyen Âge, quel type de carte était le plus répandu en Occident ?",
    options: [
      "Cartes topographiques précises",
      "Cartes T-O (mappae mundi) avec vision religieuse",
      "Cartes satellites",
      "Cartes thématiques statistiques"
    ],
    correctAnswer: 1,
    explanation: "Les cartes T-O (mappae mundi) dominaient au Moyen Âge en Occident, reflétant une vision religieuse du monde centrée sur Jérusalem."
  },
  {
    id: 10,
    question: "Pourquoi faut-il analyser l'intention du cartographe ?",
    options: [
      "Pour connaître son salaire",
      "Parce que toute carte reflète un point de vue et des objectifs (militaires, commerciaux, politiques...)",
      "Pour savoir s'il était professionnel",
      "Ce n'est pas important"
    ],
    correctAnswer: 1,
    explanation: "Toute carte reflète l'intention de son créateur : objectifs militaires, commerciaux, scientifiques, propagande... Comprendre cette intention est crucial pour une analyse critique."
  },
  {
    id: 11,
    question: "Que désigne le terme 'terra incognita' sur les cartes anciennes ?",
    options: [
      "Les territoires conquis",
      "Les zones inconnues ou inexplorées",
      "Les territoires interdits",
      "Les zones agricoles"
    ],
    correctAnswer: 1,
    explanation: "Terra incognita désigne les zones inconnues ou inexplorées, souvent laissées vierges ou ornées de créatures imaginaires sur les cartes anciennes."
  },
  {
    id: 12,
    question: "Lors de la digitalisation d'une carte historique, quel type de géométrie utilise-t-on pour les bâtiments ?",
    options: [
      "Points",
      "Lignes",
      "Polygones",
      "Raster"
    ],
    correctAnswer: 2,
    explanation: "Les bâtiments sont généralement représentés par des polygones, les routes par des lignes et les points d'intérêt par des points."
  },
  {
    id: 13,
    question: "Quelle plateforme internationale offre plus de 150 000 cartes historiques numérisées ?",
    options: [
      "Google Earth",
      "David Rumsey Map Collection",
      "MapQuest",
      "Waze"
    ],
    correctAnswer: 1,
    explanation: "La David Rumsey Map Collection est une ressource majeure avec plus de 150 000 cartes historiques numérisées et librement accessibles."
  },
  {
    id: 14,
    question: "Quel style graphique est recommandé pour une carte historique reconstituée ?",
    options: [
      "Style moderne et épuré",
      "Style sépia, textures de parchemin, polices d'époque",
      "Style 3D avec effets spéciaux",
      "Style satellite haute résolution"
    ],
    correctAnswer: 1,
    explanation: "Pour une carte historique reconstituée, on recommande un style évoquant l'époque : teintes sépia, textures de parchemin, polices anciennes, symboles historiques."
  },
  {
    id: 15,
    question: "Pourquoi est-il important de croiser plusieurs cartes d'une même époque ?",
    options: [
      "Pour avoir plus de couleurs",
      "Pour identifier les divergences, biais et obtenir une vision plus complète",
      "Pour remplir l'espace",
      "Ce n'est pas nécessaire"
    ],
    correctAnswer: 1,
    explanation: "Croiser plusieurs cartes permet d'identifier les divergences, de détecter les biais de représentation et d'obtenir une compréhension plus complète et nuancée du territoire."
  }
];

export function QuizHistoricalMapsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz Cartes Historiques"
        noIndex={true}
      />
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
            <Link to="/academy/historical-maps" className="hover:text-blue-600 transition-colors">
              Cartes historiques
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-700 via-orange-700 to-red-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h1 className="mb-4">
            🎓 Quiz de certification
          </h1>
          <p className="text-orange-100 text-lg mb-2">
            Cartes historiques - Académie CCNTS
          </p>
          <p className="text-orange-200 text-sm">
            15 questions pour valider vos compétences
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6 mb-8 border-l-4 border-amber-600">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-gray-900 mb-2 text-xl font-semibold">
                Instructions importantes
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Vous devez obtenir au moins <strong>12/15 (80%)</strong> pour réussir le quiz</li>
                <li>• Prenez le temps de bien lire chaque question</li>
                <li>• Une explication détaillée sera fournie pour chaque réponse</li>
                <li>• Vous pouvez revenir au cours si nécessaire</li>
              </ul>
              <div className="mt-4">
                <Button variant="outline" asChild className="mr-3">
                  <Link to="/academy/historical-maps">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Retour au cours
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Quiz Component */}
        <CourseQuiz
          courseTitle="Comprendre, acquérir et produire des cartes historiques"
          questions={historicalMapsQuizQuestions}
          passingScore={80}
        />
      </div>
    </div>
  );
}

export default QuizHistoricalMapsPage;