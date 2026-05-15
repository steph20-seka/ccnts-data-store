import { ChevronRight, Home, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CourseQuiz } from '../components/academy/CourseQuiz';
import { SEOHead } from '../components/SEOHead';

const qgisQuizQuestions = [
  {
    id: 1,
    question: "Que signifie l'acronyme QGIS ?",
    options: [
      "Quality Geographic Information System",
      "Quantum GIS",
      "Quick Geographic Information Software",
      "Qualified Geospatial Information System"
    ],
    correctAnswer: 1,
    explanation: "QGIS signifie Quantum GIS. C'est un logiciel SIG open source créé en 2002."
  },
  {
    id: 2,
    question: "QGIS est-il un logiciel gratuit ?",
    options: [
      "Non, il est payant",
      "Oui, il est entièrement gratuit et open source",
      "Gratuit pour les étudiants uniquement",
      "Freemium avec version payante"
    ],
    correctAnswer: 1,
    explanation: "QGIS est 100% gratuit et open source sous licence GNU GPL. Vous pouvez l'utiliser, le modifier et le distribuer librement."
  },
  {
    id: 3,
    question: "Sur quels systèmes d'exploitation QGIS peut-il fonctionner ?",
    options: [
      "Windows uniquement",
      "Windows et Mac uniquement",
      "Windows, Mac et Linux",
      "Linux uniquement"
    ],
    correctAnswer: 2,
    explanation: "QGIS est multiplateforme et fonctionne sur Windows, Mac OS et Linux."
  },
  {
    id: 4,
    question: "Quelle est la zone de l'interface QGIS où s'affiche la carte ?",
    options: [
      "Le panneau des couches",
      "La vue cartographique",
      "L'explorateur",
      "La barre d'outils"
    ],
    correctAnswer: 1,
    explanation: "La vue cartographique (Map Canvas) est la zone centrale où s'affiche la carte avec toutes les couches actives."
  },
  {
    id: 5,
    question: "À quoi sert le panneau des couches dans QGIS ?",
    options: [
      "À importer de nouvelles données",
      "À gérer l'ordre et la visibilité des couches",
      "À modifier les attributs",
      "À exporter la carte"
    ],
    correctAnswer: 1,
    explanation: "Le panneau des couches permet de gérer l'ordre d'affichage, la visibilité et l'organisation de toutes les couches de votre projet."
  },
  {
    id: 6,
    question: "Quels types de données QGIS peut-il traiter ?",
    options: [
      "Données vectorielles uniquement",
      "Données raster uniquement",
      "Données vectorielles et raster",
      "Données tabulaires uniquement"
    ],
    correctAnswer: 2,
    explanation: "QGIS peut traiter à la fois des données vectorielles (points, lignes, polygones) et raster (images, modèles numériques de terrain)."
  },
  {
    id: 7,
    question: "Comment s'appelle le format de projet QGIS ?",
    options: [
      ".qgs ou .qgz",
      ".shp",
      ".map",
      ".gis"
    ],
    correctAnswer: 0,
    explanation: "Les projets QGIS sont enregistrés au format .qgs (XML) ou .qgz (compressé). Le .qgz est recommandé car il regroupe tous les fichiers."
  },
  {
    id: 8,
    question: "Quelle barre d'outils permet d'ajouter rapidement des couches dans QGIS ?",
    options: [
      "Barre d'outils de navigation",
      "Barre d'outils de gestion des couches",
      "Barre d'outils d'attributs",
      "Barre d'outils de numérisation"
    ],
    correctAnswer: 1,
    explanation: "La barre d'outils de gestion des couches contient les boutons pour ajouter rapidement des couches vectorielles, raster, CSV, etc."
  },
  {
    id: 9,
    question: "Où trouver les coordonnées du curseur dans QGIS ?",
    options: [
      "Dans la barre de menus",
      "Dans le panneau des couches",
      "Dans la barre d'état (en bas)",
      "Dans l'explorateur"
    ],
    correctAnswer: 2,
    explanation: "La barre d'état, située en bas de l'interface, affiche les coordonnées du curseur en temps réel, l'échelle et le système de projection."
  },
  {
    id: 10,
    question: "Quel est l'avantage principal de l'open source pour QGIS ?",
    options: [
      "Il n'y a aucun avantage",
      "Gratuité, transparence et communauté active",
      "Meilleure performance que les logiciels payants",
      "Moins de bugs"
    ],
    correctAnswer: 1,
    explanation: "L'open source garantit la gratuité, la transparence du code, une communauté mondiale de développeurs et d'utilisateurs, et une évolution continue."
  },
  {
    id: 11,
    question: "Quel format de fichier est le plus couramment utilisé pour les données vectorielles dans QGIS ?",
    options: [
      ".jpg",
      ".shp (Shapefile)",
      ".pdf",
      ".doc"
    ],
    correctAnswer: 1,
    explanation: "Le Shapefile (.shp) est le format vectoriel le plus couramment utilisé dans les SIG, bien que QGIS supporte de nombreux autres formats comme GeoJSON, KML, etc."
  },
  {
    id: 12,
    question: "Quelle est la fonction principale de l'explorateur (Browser) dans QGIS ?",
    options: [
      "Modifier les attributs",
      "Naviguer et prévisualiser les données géospatiales",
      "Créer des graphiques",
      "Exporter des cartes"
    ],
    correctAnswer: 1,
    explanation: "L'explorateur permet de parcourir votre système de fichiers, de prévisualiser les données géospatiales et de les ajouter facilement à votre projet."
  },
  {
    id: 13,
    question: "Que représente le système de coordonnées (SCR/CRS) dans QGIS ?",
    options: [
      "Le format de fichier",
      "La référence spatiale des données",
      "La résolution de la carte",
      "Le type de couche"
    ],
    correctAnswer: 1,
    explanation: "Le Système de Coordonnées de Référence (SCR/CRS) définit comment les coordonnées géographiques sont projetées sur une carte plane. C'est essentiel pour positionner correctement les données."
  },
  {
    id: 14,
    question: "QGIS peut-il être utilisé pour créer des cartes imprimables de qualité professionnelle ?",
    options: [
      "Non, uniquement pour la visualisation",
      "Oui, grâce au composeur d'impression",
      "Seulement avec des plugins payants",
      "Non, il faut utiliser un autre logiciel"
    ],
    correctAnswer: 1,
    explanation: "QGIS dispose d'un composeur d'impression (Print Layout) très puissant permettant de créer des cartes professionnelles avec légende, échelle, titre, etc."
  },
  {
    id: 15,
    question: "Quelle est la meilleure source pour télécharger QGIS officiellement ?",
    options: [
      "Sites de téléchargement tiers",
      "Le site officiel qgis.org",
      "Réseaux sociaux",
      "Plateformes de partage de fichiers"
    ],
    correctAnswer: 1,
    explanation: "Pour garantir la sécurité et obtenir la dernière version stable, téléchargez toujours QGIS depuis le site officiel qgis.org."
  }
];

export function QuizQGISPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz QGIS"
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
            <Link to="/academy/qgis" className="hover:text-blue-600 transition-colors">
              QGIS
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-20 h-20 mx-auto mb-6" />
          <h1 className="mb-4">
            Quiz de Certification
          </h1>
          <h2 className="text-2xl mb-6">
            Introduction à QGIS
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Validez vos acquis et obtenez votre certificat CCNTS gratuit
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
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
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          
          {/* Instructions */}
          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-3">📋 Instructions du quiz</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Le quiz contient <strong>15 questions</strong> sur le contenu du cours QGIS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Vous devez obtenir au moins <strong>80% (12/15)</strong> pour obtenir le certificat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Vous pouvez refaire le quiz autant de fois que vous le souhaitez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Les explications détaillées seront affichées après la soumission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
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
                <Link to="/academy/qgis">
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    📚 Retourner au cours pour réviser
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Quiz Component */}
          <CourseQuiz 
            courseTitle="Introduction à QGIS"
            questions={qgisQuizQuestions}
            passingScore={80}
          />

        </div>
      </div>
    </div>
  );
}

export default QuizQGISPage;
