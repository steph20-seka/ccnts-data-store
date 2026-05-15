import { ChevronRight, Home, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CourseQuiz } from '../components/academy/CourseQuiz';
import { SEOHead } from '../components/SEOHead';

const quizQuestions = [
  {
    id: 1,
    question: "Quel programme spatial européen gère la mission Sentinel-2 ?",
    options: [
      "NASA Earth Observation",
      "Copernicus",
      "ESA Earth Explorer",
      "SPOT Programme"
    ],
    correctAnswer: 1,
    explanation: "Sentinel-2 fait partie du programme Copernicus, le programme d'observation de la Terre de l'Union Européenne géré par l'ESA."
  },
  {
    id: 2,
    question: "Combien de satellites composent la constellation Sentinel-2 ?",
    options: [
      "1 satellite",
      "2 satellites",
      "3 satellites",
      "4 satellites"
    ],
    correctAnswer: 1,
    explanation: "La mission Sentinel-2 est composée de deux satellites jumeaux : Sentinel-2A (lancé en 2015) et Sentinel-2B (lancé en 2017)."
  },
  {
    id: 3,
    question: "Quelle est la fréquence de revisite de Sentinel-2 à l'équateur avec les deux satellites ?",
    options: [
      "1 jour",
      "5 jours",
      "10 jours",
      "16 jours"
    ],
    correctAnswer: 1,
    explanation: "Grâce aux deux satellites Sentinel-2A et 2B, la fréquence de revisite est de 5 jours à l'équateur, ce qui permet un suivi quasi-continu."
  },
  {
    id: 4,
    question: "Combien de bandes spectrales possède Sentinel-2 ?",
    options: [
      "7 bandes",
      "10 bandes",
      "13 bandes",
      "16 bandes"
    ],
    correctAnswer: 2,
    explanation: "Sentinel-2 capture les images dans 13 bandes spectrales allant du visible à l'infrarouge à ondes courtes (SWIR)."
  },
  {
    id: 5,
    question: "Quelle est la meilleure résolution spatiale disponible sur Sentinel-2 ?",
    options: [
      "5 mètres",
      "10 mètres",
      "20 mètres",
      "30 mètres"
    ],
    correctAnswer: 1,
    explanation: "La meilleure résolution de Sentinel-2 est de 10 mètres, disponible pour 4 bandes : B02 (Bleu), B03 (Vert), B04 (Rouge) et B08 (NIR)."
  },
  {
    id: 6,
    question: "Quelle est la différence principale entre les produits L1C et L2A ?",
    options: [
      "La résolution spatiale",
      "Le nombre de bandes",
      "La correction atmosphérique",
      "La zone géographique couverte"
    ],
    correctAnswer: 2,
    explanation: "Le L2A inclut une correction atmosphérique complète contrairement au L1C. Le L2A représente la réflectance de surface tandis que le L1C représente la réflectance au sommet de l'atmosphère."
  },
  {
    id: 7,
    question: "Quel niveau de produit Sentinel-2 est recommandé pour le calcul d'indices comme le NDVI ?",
    options: [
      "Niveau L1C",
      "Niveau L2A",
      "Les deux sont équivalents",
      "Aucun des deux"
    ],
    correctAnswer: 1,
    explanation: "Le niveau L2A est fortement recommandé car la correction atmosphérique améliore la précision des indices de végétation comme le NDVI."
  },
  {
    id: 8,
    question: "Quelle est la largeur de fauchée (swath width) de Sentinel-2 ?",
    options: [
      "185 km",
      "230 km",
      "290 km",
      "340 km"
    ],
    correctAnswer: 2,
    explanation: "Sentinel-2 possède une largeur de fauchée de 290 km, permettant de couvrir de vastes territoires en un seul passage."
  },
  {
    id: 9,
    question: "Quelles bandes sont utilisées pour calculer le NDVI ?",
    options: [
      "B02 et B03",
      "B03 et B04",
      "B04 et B08",
      "B08 et B11"
    ],
    correctAnswer: 2,
    explanation: "Le NDVI utilise les bandes B04 (Rouge) et B08 (NIR - Proche Infrarouge). Formule : NDVI = (B08 - B04) / (B08 + B04)"
  },
  {
    id: 10,
    question: "Quelle plateforme est recommandée pour les débutants souhaitant visualiser rapidement des images Sentinel-2 ?",
    options: [
      "Google Earth Engine",
      "EO Browser",
      "Python avec GDAL",
      "SNAP Toolbox"
    ],
    correctAnswer: 1,
    explanation: "EO Browser (Sentinel Hub) offre une interface web très intuitive permettant de visualiser et analyser les images Sentinel-2 sans installation de logiciel."
  },
  {
    id: 11,
    question: "Quelle bande Sentinel-2 est la plus adaptée pour détecter l'eau ?",
    options: [
      "B02 (Bleu)",
      "B04 (Rouge)",
      "B08 (NIR)",
      "B12 (SWIR 2)"
    ],
    correctAnswer: 0,
    explanation: "La bande B02 (Bleu) est particulièrement efficace pour détecter et cartographier les plans d'eau, grâce à sa sensibilité dans le domaine visible bleu."
  },
  {
    id: 12,
    question: "Quel est le principal avantage des bandes Red Edge de Sentinel-2 ?",
    options: [
      "Meilleure résolution spatiale",
      "Détection fine du stress végétal",
      "Correction atmosphérique",
      "Détection des nuages"
    ],
    correctAnswer: 1,
    explanation: "Les bandes Red Edge (B05, B06, B07) sont particulièrement sensibles au stress végétal et permettent une analyse fine de l'état sanitaire des cultures."
  },
  {
    id: 13,
    question: "Quelle est la résolution temporelle maximale de Sentinel-2 aux latitudes moyennes ?",
    options: [
      "1-2 jours",
      "2-3 jours",
      "5 jours",
      "10 jours"
    ],
    correctAnswer: 1,
    explanation: "Aux latitudes moyennes, grâce au chevauchement des fauchées, la fréquence de revisite peut atteindre 2-3 jours, permettant un suivi très régulier."
  },
  {
    id: 14,
    question: "Quel indice est le plus adapté pour détecter les zones brûlées ?",
    options: [
      "NDVI",
      "NDWI",
      "NBR",
      "SAVI"
    ],
    correctAnswer: 2,
    explanation: "Le NBR (Normalized Burn Ratio) utilisant les bandes B08 et B12 est spécifiquement conçu pour détecter et cartographier les zones brûlées."
  },
  {
    id: 15,
    question: "Toutes les données Sentinel-2 sont-elles vraiment gratuites ?",
    options: [
      "Non, uniquement pour les chercheurs",
      "Non, payantes après une période d'essai",
      "Oui, totalement gratuites pour tous",
      "Gratuites mais limitées en quantité"
    ],
    correctAnswer: 2,
    explanation: "Oui ! Toutes les données Sentinel-2 sont 100% gratuites et librement accessibles à tous, sans limitation, grâce au programme Copernicus."
  }
];

export function QuizSentinel2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz Sentinel-2"
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
            <Link to="/academy/sentinel2" className="hover:text-blue-600 transition-colors">
              Sentinel-2
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-20 h-20 mx-auto mb-6" />
          <h1 className="mb-4">
            Quiz de Certification
          </h1>
          <h2 className="text-2xl mb-6">
            Télédétection avec Sentinel-2
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Testez vos connaissances et obtenez votre certificat CCNTS gratuit
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold mb-1">15</div>
              <div className="text-sm text-purple-200">Questions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold mb-1">80%</div>
              <div className="text-sm text-purple-200">Score requis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold mb-1">~20min</div>
              <div className="text-sm text-purple-200">Durée estimée</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          
          {/* Instructions */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-3">📋 Instructions du quiz</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Le quiz contient <strong>15 questions</strong> sur le contenu du cours Sentinel-2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Vous devez obtenir au moins <strong>80% (12/15)</strong> pour obtenir le certificat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Vous pouvez refaire le quiz autant de fois que vous le souhaitez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Les explications détaillées seront affichées après la soumission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Le certificat sera généré immédiatement en cas de réussite</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Warning - Anti-triche */}
          <Card className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-2">⚠️ Important</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Pour garantir la valeur de votre certificat, le quiz se fait <strong>sans accès au cours</strong>. 
                  Assurez-vous d'avoir bien étudié le contenu avant de commencer.
                </p>
                <Link to="/academy/sentinel2">
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    📚 Retourner au cours pour réviser
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Quiz Component */}
          <CourseQuiz 
            courseTitle="Télédétection avec Sentinel-2"
            questions={quizQuestions}
            passingScore={80}
          />

        </div>
      </div>
    </div>
  );
}

export default QuizSentinel2Page;
