import { BookOpen, ChevronRight, Home, CheckCircle2, Award, Map, MapPin, Navigation, Layers, Palette, Share2, Download, Play, Eye, Edit } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CertificationBadge } from '../components/academy/CertificationBadge';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { useState } from 'react';
import { SEOHead } from '../components/SEOHead';

const objectives = [
  'Créer une carte interactive professionnelle',
  'Ajouter des points d\'intérêt avec informations',
  'Tracer des routes et chemins',
  'Délimiter des zones et quartiers',
  'Organiser la carte avec des calques',
  'Personnaliser le style et les couleurs',
  'Partager et exporter la carte'
];

const finalSkills = [
  'Créer une carte interactive',
  'Ajouter points, lignes et zones',
  'Organiser les données en calques',
  'Personnaliser le style visuel',
  'Partager et exporter une carte'
];

function ExerciseBox({ exercise, action }: { exercise: string; action?: string }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-white text-2xl">📝</span>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-3">🧪 Exercice pratique</h4>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">{exercise}</p>
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold shadow-lg">
            {action || '🚀 Faire maintenant'}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ExampleBox({ title, description, imageAlt }: { title: string; description: string; imageAlt?: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Eye className="w-6 h-6 text-blue-600" />
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      </div>
      
      {/* Placeholder pour image illustrative */}
      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-48 mb-4 flex items-center justify-center border-2 border-blue-200">
        <div className="text-center p-6">
          <Map className="w-16 h-16 text-blue-600 mx-auto mb-3" />
          <p className="text-blue-800 font-medium">{imageAlt || 'Illustration exemple'}</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function CourseInteractiveMapPage() {
  useTrackCourse({
    courseId: 'interactive-map',
    courseName: 'Créer une Carte Interactive en Ligne',
    courseSlug: 'interactive-map'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Cartes Interactives Web"
        customDescription="Créez des cartes interactives pour le web : Leaflet, QGIS2Web, Story Maps et visualisation de données géospatiales."
      />
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-700 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy" className="hover:text-blue-700 transition-colors">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-900 font-medium">Carte Interactive</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-green-800 to-teal-900 text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Map className="w-12 h-12" />
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎁 Cours gratuit
            </span>
            <span className="px-4 py-2 bg-green-500/80 rounded-full text-sm font-medium">
              🟢 Débutant
            </span>
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm flex items-center gap-2 font-bold">
              <Award className="w-5 h-5" />
              Certification incluse
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            🗺️ Carte Interactive
          </h1>
          
          <p className="text-blue-100 text-2xl sm:text-3xl mb-4 max-w-4xl leading-relaxed font-medium">
            Créer une Carte Interactive en Ligne
          </p>
          
          <p className="text-cyan-200 text-xl mb-10 max-w-3xl">
            Un guide visuel et pratique pour créer votre première carte interactive professionnelle
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl border border-white/20 shadow-2xl">
            <p className="text-white/90 text-xl mb-6 leading-relaxed">
              Apprenez étape par étape à créer des cartes interactives avec des <strong>points</strong>, 
              des <strong>lignes</strong> et des <strong>zones</strong>, le tout avec un style professionnel.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>7 modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Exemples visuels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Exercices pratiques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Projet final</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Programme */}
          <Card className="p-10 shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Programme du cours</h2>
                <p className="text-gray-600 text-lg mt-1">7 modules progressifs</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-md border-2 border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    {idx + 1}
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{obj}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* MODULE 1 - Créer la carte de base */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-blue-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Map className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-blue-600">1️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Créer la carte de base</h2>
                      <p className="text-gray-600 text-xl mt-2">Initialiser votre première carte interactive</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Créer une carte, la <strong>nommer correctement</strong> et définir une <strong>zone d'étude claire</strong>.
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-blue-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description='Interface "Créer une nouvelle carte" - Accédez au bouton de création'
                    imageAlt="Bouton créer une carte"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Carte renommée en 'Carte des équipements publics' pour identifier clairement son contenu"
                    imageAlt="Carte renommée"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Carte centrée sur une ville précise avec le niveau de zoom adapté"
                    imageAlt="Carte centrée"
                  />
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Ouvrir Google My Maps"
                    description="Rendez-vous sur google.com/mymaps et connectez-vous avec votre compte Google"
                  />
                  <StepCard
                    number={2}
                    title="Créer une nouvelle carte"
                    description='Cliquez sur le bouton "+ Créer une nouvelle carte"'
                  />
                  <StepCard
                    number={3}
                    title="Nommer votre carte"
                    description='Cliquez sur "Carte sans titre" et donnez-lui un nom descriptif (ex: "Équipements publics de ma ville")'
                  />
                  <StepCard
                    number={4}
                    title="Centrer la carte"
                    description="Recherchez votre ville dans la barre de recherche et ajustez le zoom pour avoir une vue d'ensemble"
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise='👉 Créez une carte nommée "Ma première carte interactive" et centrez-la sur votre ville. Ajustez le zoom pour voir votre quartier.'
              />
            </Card>
          </div>

          {/* MODULE 2 - Ajouter des points */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-red-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-red-600">2️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Ajouter des points (lieux)</h2>
                      <p className="text-gray-600 text-xl mt-2">Marquer des lieux importants sur votre carte</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Un point = un <strong>lieu</strong> + une <strong>information utile</strong>. 
                  Apprenez à créer des repères pertinents avec descriptions et images.
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-red-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description="Ajout d'un repère pour une école, un marché ou un hôpital avec icône personnalisée"
                    imageAlt="Point avec icône"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Fenêtre d'information complète avec nom, description et horaires"
                    imageAlt="Info-bulle détaillée"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Ajout d'une photo du lieu dans la fenêtre d'information"
                    imageAlt="Point avec image"
                  />
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Sélectionner l'outil Point"
                    description="Cliquez sur l'icône de marqueur sous la barre de recherche"
                  />
                  <StepCard
                    number={2}
                    title="Placer le point sur la carte"
                    description="Cliquez sur l'emplacement exact du lieu que vous souhaitez marquer"
                  />
                  <StepCard
                    number={3}
                    title="Ajouter les informations"
                    description="Remplissez le nom du lieu et ajoutez une description détaillée (adresse, horaires, services...)"
                  />
                  <StepCard
                    number={4}
                    title="Personnaliser l'icône (optionnel)"
                    description="Changez l'icône et la couleur pour identifier rapidement le type de lieu (santé = rouge, éducation = bleu...)"
                  />
                  <StepCard
                    number={5}
                    title="Ajouter une image (optionnel)"
                    description="Cliquez sur l'icône appareil photo pour ajouter une photo du lieu"
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Ajoutez 3 points sur votre carte :
• Un lieu d'éducation (école, université, bibliothèque)
• Un lieu de santé (hôpital, clinique, pharmacie)
• Un lieu commercial (marché, supermarché, boutique)

Pour chaque point, ajoutez au moins une phrase descriptive et une icône appropriée."
              />
            </Card>
          </div>

          {/* MODULE 3 - Tracer des lignes */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-500 to-amber-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-yellow-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Navigation className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-yellow-600">3️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Tracer des lignes (routes, chemins)</h2>
                      <p className="text-gray-600 text-xl mt-2">Représenter des déplacements et connexions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border-2 border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Les lignes servent à représenter des <strong>déplacements</strong> ou des <strong>connexions</strong> : 
                  routes principales, circuits touristiques, lignes de transport...
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-yellow-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description="Tracé d'une route principale avec nom et description"
                    imageAlt="Route tracée"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Ligne reliant deux quartiers pour montrer un itinéraire"
                    imageAlt="Ligne de connexion"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Modification de la couleur (jaune pour route principale) et de l'épaisseur (5px)"
                    imageAlt="Ligne personnalisée"
                  />
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Sélectionner l'outil Ligne"
                    description="Cliquez sur l'icône de tracé de ligne (à côté du marqueur de point)"
                  />
                  <StepCard
                    number={2}
                    title="Tracer la ligne"
                    description="Cliquez sur les points de passage pour créer votre ligne. Double-cliquez pour terminer."
                  />
                  <StepCard
                    number={3}
                    title="Nommer la ligne"
                    description='Donnez un nom descriptif (ex: "Avenue Principale", "Circuit Touristique A")'
                  />
                  <StepCard
                    number={4}
                    title="Personnaliser le style"
                    description="Changez la couleur et l'épaisseur de la ligne pour la rendre plus visible"
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Tracez une route importante de votre quartier et colorez-la en jaune. Ajoutez une description avec les quartiers qu'elle relie et son nom officiel si vous le connaissez."
              />
            </Card>
          </div>

          {/* MODULE 4 - Délimiter des zones */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-green-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Layers className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-green-600">4️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Délimiter des zones (polygones)</h2>
                      <p className="text-gray-600 text-xl mt-2">Représenter des quartiers et secteurs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Les zones (polygones) servent à représenter des <strong>quartiers</strong>, <strong>secteurs</strong> ou <strong>espaces précis</strong> : 
                  zones résidentielles, parcs, zones commerciales...
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-green-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description="Délimitation d'un quartier avec ses limites précises"
                    imageAlt="Zone délimitée"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Zone colorée avec transparence à 30% pour voir le fond de carte"
                    imageAlt="Zone transparente"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Zone avec description intégrée (population, caractéristiques...)"
                    imageAlt="Zone avec info"
                  />
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Sélectionner l'outil Polygone"
                    description="Cliquez sur l'icône de dessin de forme (à côté de l'outil ligne)"
                  />
                  <StepCard
                    number={2}
                    title="Dessiner la zone"
                    description="Cliquez sur les points de contour pour délimiter votre zone. Double-cliquez pour fermer le polygone."
                  />
                  <StepCard
                    number={3}
                    title="Nommer et décrire la zone"
                    description='Donnez un nom clair (ex: "Quartier Cocody") et ajoutez des informations (population, type de zone...)'
                  />
                  <StepCard
                    number={4}
                    title="Ajuster la transparence"
                    description="Réglez l'opacité à 30% pour que le fond de carte reste visible"
                  />
                  <StepCard
                    number={5}
                    title="Choisir une couleur adaptée"
                    description="Utilisez des couleurs cohérentes (vert pour espaces verts, bleu pour zones commerciales...)"
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Délimitez un quartier de votre ville et appliquez une transparence de 30%. Choisissez une couleur appropriée et ajoutez une description avec au moins 3 informations sur ce quartier (type, caractéristiques, points d'intérêt...)."
              />
            </Card>
          </div>

          {/* MODULE 5 - Organiser avec des calques */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-purple-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Layers className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-purple-600">5️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Organiser la carte avec des calques</h2>
                      <p className="text-gray-600 text-xl mt-2">Structurer et gérer vos données</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Une carte bien organisée = une carte <strong>lisible</strong> et <strong>professionnelle</strong>. 
                  Les calques permettent de grouper et gérer vos éléments par catégorie.
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-purple-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description='Calque "Points" contenant tous les lieux d\'intérêt'
                    imageAlt="Calque Points"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description='Calque "Routes" avec toutes les lignes de déplacement'
                    imageAlt="Calque Routes"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description='Calque "Zones" regroupant tous les polygones de quartiers'
                    imageAlt="Calque Zones"
                  />
                  <ExampleBox
                    title="Exemple 4"
                    description="Activation/désactivation des calques pour filtrer l'affichage"
                    imageAlt="Gestion calques"
                  />
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Créer un nouveau calque"
                    description='Cliquez sur "Ajouter un calque" dans le panneau de gauche'
                  />
                  <StepCard
                    number={2}
                    title="Nommer le calque"
                    description='Donnez-lui un nom clair (ex: "Points d\'intérêt", "Routes principales", "Quartiers")'
                  />
                  <StepCard
                    number={3}
                    title="Organiser les éléments existants"
                    description="Glissez-déposez vos points, lignes et zones dans les calques appropriés"
                  />
                  <StepCard
                    number={4}
                    title="Tester la visibilité"
                    description="Activez/désactivez les calques en cliquant sur l'œil pour vérifier l'organisation"
                  />
                </div>
              </div>

              {/* Bonnes pratiques */}
              <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  💡 Bonnes pratiques d'organisation
                </h3>
                <ul className="space-y-3 text-gray-800 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <span>Créez un calque par type d'élément (points, lignes, zones)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <span>Ou créez un calque par thématique (santé, éducation, transport...)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <span>Limitez le nombre de calques (3 à 5 maximum pour rester clair)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <span>Utilisez des noms courts et explicites</span>
                  </li>
                </ul>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Créez 3 calques et organisez votre carte :
• Calque 'Points' : tous vos lieux d'intérêt
• Calque 'Routes' : toutes vos lignes
• Calque 'Zones' : tous vos polygones

Testez l'activation/désactivation de chaque calque pour vérifier que tout est bien classé."
              />
            </Card>
          </div>

          {/* MODULE 6 - Personnaliser le style */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-pink-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-pink-600">6️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Personnaliser le style</h2>
                      <p className="text-gray-600 text-xl mt-2">Rendre votre carte visuellement cohérente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Le style aide à <strong>mieux lire</strong> et <strong>comprendre</strong> la carte. 
                  Utilisez des couleurs et icônes cohérentes pour identifier rapidement les informations.
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-pink-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description="Icônes différentes selon les catégories (école, hôpital, magasin...)"
                    imageAlt="Icônes variées"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Couleurs adaptées : rouge = santé, bleu = éducation, vert = commerce"
                    imageAlt="Code couleur"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Carte harmonisée visuellement avec palette cohérente"
                    imageAlt="Carte stylisée"
                  />
                </div>
              </div>

              {/* Code couleur recommandé */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Palette className="w-7 h-7 text-pink-600" />
                  Code couleur recommandé
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full mb-4 shadow-lg"></div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">🏥 Santé</h4>
                    <p className="text-gray-700">Rouge pour hôpitaux, cliniques, pharmacies</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 shadow-lg"></div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">📚 Éducation</h4>
                    <p className="text-gray-700">Bleu pour écoles, universités, bibliothèques</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
                    <div className="w-12 h-12 bg-green-600 rounded-full mb-4 shadow-lg"></div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">🏪 Commerce</h4>
                    <p className="text-gray-700">Vert pour marchés, boutiques, supermarchés</p>
                  </div>
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes à suivre
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Définir votre palette de couleurs"
                    description="Choisissez 3-5 couleurs principales selon vos catégories"
                  />
                  <StepCard
                    number={2}
                    title="Appliquer les couleurs aux points"
                    description="Cliquez sur chaque point > icône de pinceau > choisissez la couleur et l'icône appropriées"
                  />
                  <StepCard
                    number={3}
                    title="Styliser les lignes et zones"
                    description="Assurez-vous que vos lignes et zones utilisent aussi des couleurs cohérentes"
                  />
                  <StepCard
                    number={4}
                    title="Créer une légende mentale"
                    description="Vérifiez que quelqu'un peut comprendre votre code couleur sans explication"
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Appliquez un code couleur cohérent à tous vos éléments :
• Rouge = santé (hôpitaux, pharmacies...)
• Bleu = éducation (écoles, universités...)
• Vert = commerce (marchés, boutiques...)

Changez les icônes pour qu'elles correspondent au type de lieu (croix pour santé, livre pour éducation, caddie pour commerce)."
              />
            </Card>
          </div>

          {/* MODULE 7 - Partager et exporter */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-indigo-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Share2 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-indigo-600">7️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Partager et exporter la carte</h2>
                      <p className="text-gray-600 text-xl mt-2">Diffuser votre travail</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectif */}
              <div className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🎯 Ce que vous allez apprendre
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Une carte sert à être <strong>partagée</strong> et <strong>utilisée</strong>. 
                  Apprenez les différentes options de partage et d'export.
                </p>
              </div>

              {/* Exemples illustrés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-indigo-600" />
                  Exemples illustrés
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <ExampleBox
                    title="Exemple 1"
                    description="Paramètres de partage avec différentes options de visibilité"
                    imageAlt="Options partage"
                  />
                  <ExampleBox
                    title="Exemple 2"
                    description="Carte publique avec lien partageable et code d'intégration"
                    imageAlt="Lien public"
                  />
                  <ExampleBox
                    title="Exemple 3"
                    description="Export de la carte en image PNG ou PDF"
                    imageAlt="Export image"
                  />
                </div>
              </div>

              {/* Options de partage */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Share2 className="w-7 h-7 text-indigo-600" />
                  Options de partage
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                      <Share2 className="w-6 h-6 text-blue-600" />
                      Partage public
                    </h4>
                    <p className="text-gray-700 mb-3">
                      La carte est accessible à tous ceux qui ont le lien. Idéal pour diffuser largement.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="text-sm text-gray-600 font-mono">
                        https://www.google.com/maps/d/...
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                      <Download className="w-6 h-6 text-green-600" />
                      Export image
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Téléchargez votre carte en PNG ou PDF pour l'intégrer dans des documents.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white rounded-lg border border-green-200 text-sm font-medium">PNG</span>
                      <span className="px-3 py-1 bg-white rounded-lg border border-green-200 text-sm font-medium">PDF</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                      <Code className="w-6 h-6 text-purple-600" />
                      Code d'intégration
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Intégrez la carte directement dans un site web avec un code iframe.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="text-xs text-gray-600 font-mono">
                        {'<iframe src="..." ...>'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                      <Download className="w-6 h-6 text-orange-600" />
                      Export KML
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Téléchargez au format KML pour utiliser dans d'autres logiciels SIG.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white rounded-lg border border-orange-200 text-sm font-medium">KML</span>
                      <span className="px-3 py-1 bg-white rounded-lg border border-orange-200 text-sm font-medium">KMZ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étapes */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Étapes pour partager
                </h3>
                <div className="space-y-6">
                  <StepCard
                    number={1}
                    title="Ouvrir les paramètres de partage"
                    description='Cliquez sur le bouton "Partager" en haut de votre carte'
                  />
                  <StepCard
                    number={2}
                    title="Définir la visibilité"
                    description='Choisissez "Public" pour que tout le monde puisse voir la carte avec le lien'
                  />
                  <StepCard
                    number={3}
                    title="Copier le lien"
                    description="Copiez l'URL de partage et envoyez-la par email, SMS ou réseaux sociaux"
                  />
                  <StepCard
                    number={4}
                    title="(Optionnel) Exporter en image"
                    description='Cliquez sur les 3 points > "Exporter au format KML/KMZ" ou faites une capture d\'écran'
                  />
                </div>
              </div>

              {/* Exercice */}
              <ExerciseBox
                exercise="👉 Mettez votre carte en mode public et copiez le lien de partage. Testez le lien dans un autre navigateur ou en mode navigation privée pour vérifier que la carte est bien accessible. Bonus : exportez votre carte en image PNG."
              />
            </Card>
          </div>

          {/* RÉSULTAT FINAL */}
          <Card className="p-10 shadow-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Félicitations ! 🎉</h2>
                <p className="text-gray-600 text-lg mt-1">Vous avez terminé la formation</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">À la fin de ce cours, vous savez :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {finalSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 shadow-sm border border-green-200">
                    <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Pour aller plus loin</h3>
              <ul className="space-y-3 text-gray-800 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">▸</span>
                  <span>Créez une carte collaborative en invitant d'autres personnes à contribuer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">▸</span>
                  <span>Importez des données existantes (fichiers CSV, KML) pour enrichir votre carte</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">▸</span>
                  <span>Explorez les cartes thématiques (tourisme, urbanisme, environnement...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">▸</span>
                  <span>Apprenez à utiliser QGIS pour des cartes plus avancées</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* CERTIFICATION */}
          <Card className="p-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center shadow-2xl">
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-4xl font-bold mb-4">Obtenez votre certification</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Validez vos compétences avec notre quiz de certification et obtenez votre <strong>certificat CCNTS gratuit</strong>.
            </p>
            
            <CertificationBadge />
            
            <Button 
              size="lg" 
              asChild
              className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 py-6 text-lg shadow-xl"
            >
              <Link to="/academy/interactive-map/quiz">
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

export default CourseInteractiveMapPage;
