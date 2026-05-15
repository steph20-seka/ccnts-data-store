import { ChevronRight, Home, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CourseQuiz } from '../components/academy/CourseQuiz';
import { SEOHead } from '../components/SEOHead';

const geeQuizQuestions = [
  {
    id: 1,
    question: "Quelle est l'URL pour accéder à Google Earth Engine ?",
    options: [
      "www.google.com/earthengine",
      "code.earthengine.google.com",
      "earthengine.google.fr",
      "gee.google.com"
    ],
    correctAnswer: 1,
    explanation: "L'URL correcte pour accéder à Google Earth Engine Code Editor est : code.earthengine.google.com"
  },
  {
    id: 2,
    question: "Quelles sont les trois zones principales de l'interface GEE ?",
    options: [
      "Header, Body, Footer",
      "Code, Console, Map",
      "Input, Output, Display",
      "Editor, Preview, Export"
    ],
    correctAnswer: 1,
    explanation: "Les trois zones principales de GEE sont : Code (éditeur de code), Console (affichage des résultats), et Map (visualisation cartographique)."
  },
  {
    id: 3,
    question: "Quelle collection d'images satellites utilise-t-on pour Sentinel-2 ?",
    options: [
      "SENTINEL/S2",
      "COPERNICUS/S2",
      "ESA/SENTINEL2",
      "SATELLITE/SENTINEL"
    ],
    correctAnswer: 1,
    explanation: "La collection Sentinel-2 dans GEE s'appelle 'COPERNICUS/S2', nommée d'après le programme européen Copernicus."
  },
  {
    id: 4,
    question: "Quelles bandes (bands) utilise-t-on pour afficher une image en couleurs naturelles (true-color) ?",
    options: [
      "B1, B2, B3",
      "B4, B3, B2",
      "B8, B4, B3",
      "B2, B3, B4"
    ],
    correctAnswer: 1,
    explanation: "Pour une vue en couleurs naturelles, on utilise B4 (Rouge), B3 (Vert), B2 (Bleu) - dans cet ordre RGB."
  },
  {
    id: 5,
    question: "Que fait la fonction .filterDate() ?",
    options: [
      "Trie les dates par ordre croissant",
      "Filtre les images par période de temps",
      "Change le format de date",
      "Supprime les dates incorrectes"
    ],
    correctAnswer: 1,
    explanation: ".filterDate() permet de sélectionner uniquement les images capturées pendant une période de temps spécifique."
  },
  {
    id: 6,
    question: "Comment crée-t-on un point (Point) dans GEE ?",
    options: [
      "ee.Point([lon, lat])",
      "ee.Geometry.Point([lon, lat])",
      "ee.Feature.Point(lon, lat)",
      "new Point(lon, lat)"
    ],
    correctAnswer: 1,
    explanation: "La syntaxe correcte est ee.Geometry.Point([longitude, latitude]) pour créer un point géométrique."
  },
  {
    id: 7,
    question: "Quelle méthode utilise-t-on pour ajouter une couche à la carte ?",
    options: [
      "Map.add()",
      "Map.display()",
      "Map.addLayer()",
      "Map.show()"
    ],
    correctAnswer: 2,
    explanation: "Map.addLayer() est la méthode standard pour ajouter une couche (image ou géométrie) à la carte GEE."
  },
  {
    id: 8,
    question: "À quoi sert le paramètre 'scale' lors de l'export ?",
    options: [
      "Il change la taille du fichier",
      "Il définit la résolution spatiale en mètres",
      "Il ajuste le contraste",
      "Il modifie le système de coordonnées"
    ],
    correctAnswer: 1,
    explanation: "Le paramètre 'scale' définit la résolution spatiale de l'image exportée en mètres par pixel."
  },
  {
    id: 9,
    question: "Que signifie ee.Geometry.LineString ?",
    options: [
      "Une ligne de texte",
      "Une chaîne de caractères géographique",
      "Une géométrie de type ligne (polyligne)",
      "Un chemin d'accès fichier"
    ],
    correctAnswer: 2,
    explanation: "ee.Geometry.LineString crée une géométrie de type ligne (polyligne) reliant plusieurs coordonnées."
  },
  {
    id: 10,
    question: "Où trouve-t-on les tâches d'export en cours dans GEE ?",
    options: [
      "Dans le menu File",
      "Dans l'onglet Console",
      "Dans l'onglet Tasks",
      "Dans Google Drive directement"
    ],
    correctAnswer: 2,
    explanation: "L'onglet Tasks (à droite de l'interface) affiche toutes les tâches d'export en cours ou terminées."
  },
  {
    id: 11,
    question: "Quel format de fichier est généralement utilisé pour exporter une image depuis GEE ?",
    options: [
      "JPG",
      "PNG",
      "GeoTIFF",
      "BMP"
    ],
    correctAnswer: 2,
    explanation: "GeoTIFF est le format standard pour exporter des images géoréférencées depuis GEE, car il conserve les métadonnées spatiales."
  },
  {
    id: 12,
    question: "Que fait la méthode .first() sur une ImageCollection ?",
    options: [
      "Retourne la première lettre",
      "Retourne la première image de la collection",
      "Crée une nouvelle collection",
      "Trie la collection"
    ],
    correctAnswer: 1,
    explanation: ".first() retourne la première image d'une ImageCollection, utile quand on veut travailler avec une seule image."
  },
  {
    id: 13,
    question: "Comment définit-on la couleur d'une géométrie lors de l'affichage ?",
    options: [
      "En utilisant le paramètre 'color'",
      "En utilisant le paramètre 'fill'",
      "En utilisant le paramètre 'style'",
      "En utilisant le paramètre 'rgb'"
    ],
    correctAnswer: 0,
    explanation: "Le paramètre 'color' dans Map.addLayer() permet de définir la couleur d'affichage d'une géométrie."
  },
  {
    id: 14,
    question: "Que signifie GEE ?",
    options: [
      "Global Earth Engine",
      "Google Earth Engine",
      "Geospatial Editing Engine",
      "Geographic Environment Engine"
    ],
    correctAnswer: 1,
    explanation: "GEE signifie Google Earth Engine, la plateforme cloud de Google pour l'analyse géospatiale."
  },
  {
    id: 15,
    question: "Quel est l'avantage principal de Google Earth Engine ?",
    options: [
      "C'est gratuit pour tous",
      "Il permet de traiter d'énormes volumes de données satellites sans téléchargement",
      "Il crée des cartes en 3D",
      "Il remplace QGIS"
    ],
    correctAnswer: 1,
    explanation: "Le principal avantage de GEE est sa capacité à traiter des pétaoctets de données satellites dans le cloud, sans avoir à télécharger les images."
  }
];

export function QuizGoogleEarthEnginePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz Google Earth Engine"
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
            <Link to="/academy/google-earth-engine" className="hover:text-blue-600 transition-colors">
              Google Earth Engine
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-cyan-700 to-teal-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h1 className="mb-4">
            🎓 Quiz de certification
          </h1>
          <p className="text-blue-100 text-lg mb-2">
            Google Earth Engine - Académie CCNTS
          </p>
          <p className="text-blue-200 text-sm">
            15 questions pour valider vos compétences
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6 mb-8 border-l-4 border-blue-600">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
                  <Link to="/academy/google-earth-engine">
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
          courseTitle="Créer une carte simple avec Google Earth Engine"
          questions={geeQuizQuestions}
          passingScore={80}
        />
      </div>
    </div>
  );
}

export default QuizGoogleEarthEnginePage;