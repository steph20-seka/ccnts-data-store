import { BookOpen, ChevronRight, Home, CheckCircle2, Award, Map, Satellite, Code, Download, Play, MapPin, Activity, Layers, Filter, Zap, AlertCircle, TrendingUp, Eye, Database } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CertificationBadge } from '../components/academy/CertificationBadge';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { useState } from 'react';
import { SEOHead } from '../components/SEOHead';

const objectives = [
  'Maîtriser l\'interface complète de Google Earth Engine',
  'Charger et filtrer des collections d\'images satellites',
  'Créer et manipuler des géométries vectorielles',
  'Calculer des indices spectraux (NDVI, NDWI, EVI)',
  'Appliquer des analyses spatiales et temporelles',
  'Créer des visualisations avancées',
  'Exporter des cartes et données traitées',
  'Comprendre l\'architecture cloud de GEE'
];

const finalSkills = [
  'Navigation experte dans l\'interface GEE',
  'Manipulation avancée des ImageCollections',
  'Création de géométries et features complexes',
  'Calcul d\'indices de végétation et d\'eau',
  'Filtrage temporel et spatial précis',
  'Visualisation multi-bandes personnalisée',
  'Export optimisé vers Drive et Asset',
  'Compréhension des limites et quotas GEE',
  'Application de masques de nuages',
  'Analyse de séries temporelles',
  'Création de composites d\'images',
  'Débogage et optimisation du code'
];

function ExerciseButton({ exercise }: { exercise: string }) {
  const [showExercise, setShowExercise] = useState(false);
  
  return (
    <div>
      <Button 
        onClick={() => setShowExercise(!showExercise)}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg"
      >
        {showExercise ? '✓ Exercice affiché' : '➡️ Voir exercice pratique'}
      </Button>
      {showExercise && (
        <div className="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-xl animate-in slide-in-from-top shadow-md">
          <p className="text-gray-900 font-bold mb-2 flex items-center gap-2">
            <span className="text-xl">📝</span>
            Exercice pratique
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">{exercise}</p>
        </div>
      )}
    </div>
  );
}

function CodeBlock({ code, language = 'javascript', title }: { code: string; language?: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 rounded-t-xl font-medium text-sm flex items-center gap-2">
          <Code className="w-4 h-4" />
          {title}
        </div>
      )}
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-all flex items-center gap-2 shadow-lg"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Copié !
            </>
          ) : (
            <>
              <Code className="w-4 h-4" />
              Copier
            </>
          )}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-b-xl overflow-x-auto border-2 border-gray-700 shadow-xl">
        <code className="text-sm font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

function TipBox({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' | 'danger' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-900',
    success: 'bg-green-50 border-green-500 text-green-900',
    danger: 'bg-red-50 border-red-500 text-red-900'
  };
  
  const icons = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    danger: '🚨'
  };
  
  return (
    <div className={`p-5 border-l-4 rounded-xl ${styles[type]} shadow-md`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icons[type]}</span>
        <div className="flex-1 text-lg leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function CourseGoogleEarthEnginePage() {
  useTrackCourse({
    courseId: 'google-earth-engine',
    courseName: 'Créer une carte simple avec Google Earth Engine',
    courseSlug: 'google-earth-engine'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Google Earth Engine"
        customDescription="Programmez avec Google Earth Engine : traitement massif d'images satellites, analyse temporelle, cloud computing géospatial."
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
            <span className="text-blue-900 font-medium">Google Earth Engine - Formation complète</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20 overflow-hidden">
        {/* Decorative grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Satellite className="w-12 h-12" />
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎁 Formation complète gratuite
            </span>
            <span className="px-4 py-2 bg-green-500/80 rounded-full text-sm font-medium">
              🟢 Tous niveaux
            </span>
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm flex items-center gap-2 font-bold">
              <Award className="w-5 h-5" />
              Certification CCNTS
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            🛰️ Google Earth Engine
          </h1>
          
          <p className="text-blue-100 text-2xl sm:text-3xl mb-4 max-w-4xl leading-relaxed font-medium">
            Formation complète : de débutant à utilisateur avancé
          </p>
          
          <p className="text-cyan-200 text-xl mb-10 max-w-3xl">
            Maîtrisez la plateforme cloud la plus puissante pour l'analyse géospatiale à grande échelle
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl border border-white/20 shadow-2xl">
            <p className="text-white/90 text-xl mb-6 leading-relaxed">
              Apprenez à exploiter les <strong>pétaoctets de données satellites</strong> disponibles gratuitement sur Google Earth Engine pour créer des analyses géospatiales professionnelles.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>10 modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Code pratique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Cas d'usage réels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Support vidéo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Aperçu du cours */}
          <Card className="p-10 shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Programme de la formation</h2>
                <p className="text-gray-600 text-lg mt-1">Ce que vous allez maîtriser</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
              <p className="text-gray-800 text-xl leading-relaxed">
                Cette formation complète vous guide à travers <strong>tous les aspects</strong> de Google Earth Engine, 
                de la prise en main de l'interface jusqu'aux analyses avancées de séries temporelles et calculs d'indices spectraux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-md border-2 border-blue-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    {idx + 1}
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{obj}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* MODULE 1 - Découvrir GEE (approfondi) */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-blue-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Map className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-blue-600">1️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Découvrir Google Earth Engine</h2>
                      <p className="text-gray-600 text-xl mt-2">Architecture, interface et premiers pas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qu'est-ce que GEE */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Database className="w-7 h-7 text-blue-600" />
                  Qu'est-ce que Google Earth Engine ?
                </h3>
                <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                  <p>
                    <strong>Google Earth Engine (GEE)</strong> est une plateforme cloud de calcul géospatial qui permet d'analyser 
                    des données satellites et autres données géospatiales à l'échelle planétaire.
                  </p>
                  <p>
                    GEE donne accès à un catalogue de <strong>plus de 50 pétaoctets</strong> de données géospatiales, incluant :
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 text-xl">▸</span>
                      <span>Images satellites (Landsat, Sentinel, MODIS...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 text-xl">▸</span>
                      <span>Données climatiques et météorologiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 text-xl">▸</span>
                      <span>Modèles numériques de terrain (DEM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 text-xl">▸</span>
                      <span>Données de couverture terrestre et occupation du sol</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Architecture GEE */}
              <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Layers className="w-7 h-7 text-cyan-600" />
                  Architecture et fonctionnement
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3">☁️ Cloud Computing</h4>
                    <p className="text-gray-700 leading-relaxed">
                      GEE utilise l'infrastructure cloud de Google pour traiter les données. 
                      Vous ne téléchargez jamais les images : tout est calculé côté serveur.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3">⚡ Parallélisation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Les calculs sont distribués sur des milliers de machines, permettant 
                      d'analyser des décennies d'images en quelques secondes.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3">📚 API JavaScript & Python</h4>
                    <p className="text-gray-700 leading-relaxed">
                      GEE propose des API en JavaScript (Code Editor) et Python (Earth Engine Python API) 
                      pour scripter vos analyses.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 border border-pink-200">
                    <h4 className="font-bold text-gray-900 text-xl mb-3">🆓 Gratuit pour la recherche</h4>
                    <p className="text-gray-700 leading-relaxed">
                      GEE est gratuit pour la recherche académique, l'éducation et les organisations 
                      à but non lucratif.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interface détaillée */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-blue-600" />
                  L'interface Code Editor en détail
                </h3>
                
                <TipBox type="info">
                  <strong>Accès à GEE :</strong> Rendez-vous sur{' '}
                  <a href="https://code.earthengine.google.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">
                    code.earthengine.google.com
                  </a>{' '}
                  et connectez-vous avec un compte Google.
                </TipBox>

                <div className="mt-6 space-y-6">
                  {/* Zone 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">📝 Éditeur de code (Code Editor)</h4>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          Zone principale où vous écrivez votre code JavaScript. 
                          Supporte la coloration syntaxique, l'auto-complétion et les raccourcis clavier.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-800 font-medium">💡 Raccourcis utiles :</p>
                          <ul className="mt-2 space-y-1 text-gray-700">
                            <li>• <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+Enter</code> : Exécuter le code</li>
                            <li>• <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+S</code> : Sauvegarder</li>
                            <li>• <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+/</code> : Commenter/décommenter</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zone 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border-l-4 border-green-500 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">📊 Console</h4>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          Affiche les résultats de vos commandes <code className="bg-gray-100 px-2 py-1 rounded">print()</code>, 
                          les messages d'erreur et les informations de débogage.
                        </p>
                        <CodeBlock 
                          title="Exemple d'utilisation de la console"
                          code={`// Afficher des informations dans la console
print('Bonjour GEE !');
print('Nombre de bandes:', image.bandNames());
print('Projection:', image.projection());`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Zone 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border-l-4 border-purple-500 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">🗺️ Carte interactive (Map)</h4>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          Zone de visualisation cartographique. Permet de zoomer, déplacer, mesurer et inspecter les données.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-4 border border-purple-200">
                            <p className="font-bold text-gray-900 mb-2">🛠️ Outils disponibles :</p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Inspector : analyser les valeurs pixel</li>
                              <li>• Geometry tools : dessiner des formes</li>
                              <li>• Layer manager : gérer l'affichage</li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-purple-200">
                            <p className="font-bold text-gray-900 mb-2">⚙️ Contrôles :</p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Zoom +/-</li>
                              <li>• Streetview</li>
                              <li>• Coordonnées curseur</li>
                              <li>• Échelle</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zone 4 */}
                  <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 border-l-4 border-orange-500 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">📁 Scripts & Assets</h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Gestion de vos scripts sauvegardés et de vos assets (données personnelles importées). 
                          Organisez vos projets en dossiers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Zone 5 */}
                  <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">📦 Tasks (Tâches)</h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Gère les exports (images, tables, vidéos) vers Google Drive, Google Cloud Storage ou Earth Engine Assets. 
                          Affiche la progression des tâches.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premier script */}
              <div className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-green-600" />
                  Votre premier script GEE
                </h3>
                
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                  Commençons par un script simple pour afficher une carte centrée sur une position et afficher un message dans la console :
                </p>

                <CodeBlock
                  title="hello_world.js"
                  code={`// Mon premier script Google Earth Engine
print('Bienvenue sur Google Earth Engine !');

// Centrer la carte sur Abidjan, Côte d'Ivoire
Map.setCenter(-4.03, 5.34, 10);

// Créer un point
var abidjan = ee.Geometry.Point([-4.03, 5.34]);

// Afficher le point sur la carte
Map.addLayer(abidjan, {color: 'red'}, 'Abidjan');

// Afficher les informations dans la console
print('Coordonnées:', abidjan.coordinates());
print('Type de géométrie:', abidjan.type());`}
                />

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <TipBox type="success">
                    <strong>✅ À faire :</strong> Copiez ce code dans l'éditeur, cliquez sur "Run" et observez les résultats dans la console et sur la carte.
                  </TipBox>
                  <TipBox type="info">
                    <strong>💡 Astuce :</strong> Modifiez les coordonnées pour centrer la carte sur votre ville et changez la couleur du point.
                  </TipBox>
                </div>
              </div>

              <ExerciseButton exercise="Créez un script qui affiche 3 points de couleurs différentes sur 3 villes de votre choix. Affichez les noms de ces villes dans la console avec print(). Centrez la carte pour voir les 3 points simultanément." />
            </Card>
          </div>

          {/* MODULE 2 - Comprendre les données (nouveau module approfondi) */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></div>
            
            <Card className="p-10 shadow-2xl border-2 border-cyan-100 bg-white">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-bold text-cyan-600">2️⃣</span>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">Comprendre les types de données</h2>
                      <p className="text-gray-600 text-xl mt-2">Images, ImageCollections, Features et FeatureCollections</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types de données */}
              <div className="space-y-8">
                {/* Image */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Satellite className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">ee.Image - Une image raster</h3>
                  </div>
                  
                  <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                    Un objet <code className="bg-gray-100 px-2 py-1 rounded font-mono">ee.Image</code> représente une image raster 
                    composée d'une ou plusieurs <strong>bandes</strong> (bands). Chaque bande contient des valeurs numériques pour chaque pixel.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                      <p className="font-bold text-blue-900 mb-2">📊 Bandes multiples</p>
                      <p className="text-gray-700 text-sm">
                        Une image peut contenir plusieurs bandes (RGB, infrarouge, thermique...)
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                      <p className="font-bold text-blue-900 mb-2">📐 Métadonnées</p>
                      <p className="text-gray-700 text-sm">
                        Date de capture, résolution, projection, zone de couverture
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                      <p className="font-bold text-blue-900 mb-2">🔢 Valeurs numériques</p>
                      <p className="text-gray-700 text-sm">
                        Chaque pixel stocke une valeur (réflectance, température, altitude...)
                      </p>
                    </div>
                  </div>

                  <CodeBlock
                    title="Exemple : Charger une image unique"
                    code={`// Charger une image Landsat 8
var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_015033_20200801');

// Afficher les informations de l'image
print('Image Landsat 8:', image);
print('Bandes disponibles:', image.bandNames());
print('Date:', image.date());
print('Projection:', image.projection());

// Afficher l'image en vraies couleurs (RGB)
Map.centerObject(image, 8);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.3}, 'Landsat 8 - True Color');`}
                  />
                </div>

                {/* ImageCollection */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200 shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">ee.ImageCollection - Collection d'images</h3>
                  </div>
                  
                  <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                    Un <code className="bg-gray-100 px-2 py-1 rounded font-mono">ee.ImageCollection</code> est un ensemble d'images. 
                    C'est le type le plus utilisé car il permet d'analyser des séries temporelles.
                  </p>

                  <TipBox type="info">
                    <strong>💡 Concept important :</strong> Une ImageCollection n'est pas chargée en mémoire. C'est une "promesse" d'images 
                    qui seront traitées uniquement quand vous en aurez besoin (lazy evaluation).
                  </TipBox>

                  <div className="mt-6">
                    <CodeBlock
                      title="Exemple : Filtrer une collection d'images"
                      code={`// Charger toute la collection Sentinel-2
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  // Filtrer par date
  .filterDate('2023-01-01', '2023-12-31')
  // Filtrer par zone géographique
  .filterBounds(ee.Geometry.Point([-4.03, 5.34]))
  // Filtrer par couverture nuageuse < 20%
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Afficher le nombre d'images
print('Nombre d\\'images disponibles:', collection.size());

// Obtenir la première image
var firstImage = collection.first();

// Créer un composite (médiane de toutes les images)
var composite = collection.median();

// Afficher le composite
Map.centerObject(ee.Geometry.Point([-4.03, 5.34]), 10);
Map.addLayer(composite, {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000
}, 'Composite Sentinel-2 2023');`}
                    />
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-6 border border-purple-200">
                    <p className="font-bold text-gray-900 mb-4 text-xl">🔑 Méthodes importantes pour ImageCollection :</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.filterDate()</code>
                        <p className="text-gray-700 text-sm mt-1">Filtrer par période de temps</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.filterBounds()</code>
                        <p className="text-gray-700 text-sm mt-1">Filtrer par zone géographique</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.filter()</code>
                        <p className="text-gray-700 text-sm mt-1">Filtrer selon critères personnalisés</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.first()</code>
                        <p className="text-gray-700 text-sm mt-1">Obtenir la première image</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.median()</code>
                        <p className="text-gray-700 text-sm mt-1">Créer un composite médian</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.mosaic()</code>
                        <p className="text-gray-700 text-sm mt-1">Créer une mosaïque</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.map()</code>
                        <p className="text-gray-700 text-sm mt-1">Appliquer une fonction à chaque image</p>
                      </div>
                      <div>
                        <code className="bg-purple-100 px-3 py-1 rounded font-mono text-purple-900">.size()</code>
                        <p className="text-gray-700 text-sm mt-1">Compter le nombre d'images</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature & FeatureCollection */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">ee.Feature & ee.FeatureCollection - Données vectorielles</h3>
                  </div>
                  
                  <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                    Un <code className="bg-gray-100 px-2 py-1 rounded font-mono">ee.Feature</code> est un objet géométrique 
                    (point, ligne, polygone) avec des <strong>propriétés attributaires</strong>. 
                    Une <code className="bg-gray-100 px-2 py-1 rounded font-mono">ee.FeatureCollection</code> est un ensemble de Features.
                  </p>

                  <CodeBlock
                    title="Exemple : Créer des Features avec propriétés"
                    code={`// Créer un point avec des propriétés
var ville = ee.Feature(
  ee.Geometry.Point([-4.03, 5.34]),
  {
    nom: 'Abidjan',
    pays: 'Côte d\\'Ivoire',
    population: 5600000,
    capitale: true
  }
);

// Créer plusieurs features
var villes = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([-4.03, 5.34]), {nom: 'Abidjan', pop: 5600000}),
  ee.Feature(ee.Geometry.Point([-5.27, 6.82]), {nom: 'Yamoussoukro', pop: 360000}),
  ee.Feature(ee.Geometry.Point([-7.54, 5.35]), {nom: 'San Pedro', pop: 700000})
]);

// Afficher les features
Map.addLayer(villes, {color: 'red'}, 'Villes de Côte d\\'Ivoire');
Map.centerObject(villes, 7);

// Afficher les informations
print('Nombre de villes:', villes.size());
print('Ville 1:', villes.first());`}
                  />

                  <div className="mt-6">
                    <TipBox type="success">
                      <strong>✅ Utilisation courante :</strong> Les FeatureCollections sont idéales pour représenter des limites administratives, 
                      des routes, des points d'intérêt, des zones d'étude, etc.
                    </TipBox>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ExerciseButton exercise="Créez une ImageCollection Sentinel-2 filtrée sur votre région et sur l'année 2023. Affichez le nombre d'images disponibles, créez un composite médian et affichez-le sur la carte. Ajoutez 5 points représentant des villes de votre pays avec leurs noms et populations." />
              </div>
            </Card>
          </div>

          {/* Je vais continuer avec les autres modules dans le prochain message... */}
          
        </div>
      </div>
    </div>
  );
}

export default CourseGoogleEarthEnginePage;
