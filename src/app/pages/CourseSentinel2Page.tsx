import { BookOpen, Download, ChevronRight, Home, CheckCircle2, Globe, Satellite, AlertCircle, Lightbulb, Info, Target, Zap, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { SEOHead } from '../components/SEOHead';

export function CourseSentinel2Page() {
  useTrackCourse({
    courseId: 'sentinel2',
    courseName: 'Traitement d\'images Sentinel-2',
    courseSlug: 'sentinel2'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Sentinel-2 - Télédétection Satellite"
        customDescription="Formation complète Sentinel-2 : traitement d'images satellites, indices de végétation, analyse multispectrale et applications environnementales."
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/academy" className="hover:text-blue-600 transition-colors">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Télédétection avec Sentinel-2</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Satellite className="w-10 h-10" />
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎓 Cours gratuit
            </span>
            <span className="px-4 py-1.5 bg-blue-500/80 rounded-full text-sm font-medium">
              📊 Intermédiaire
            </span>
            <span className="px-4 py-1.5 bg-green-500/80 rounded-full text-sm font-medium">
              ⏱️ 4h de formation
            </span>
            <span className="px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certification incluse</span>
            </span>
          </div>
          <h1 className="mb-4">
            Télédétection avec Sentinel-2
          </h1>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl">
            Maîtrisez l'exploitation des images satellites Sentinel-2 pour l'analyse territoriale, 
            agricole et environnementale avec ce cours complet de l'Académie CCNTS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">11 modules détaillés</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Certificat CCNTS</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Exercices pratiques</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          
          {/* MODULE 1 */}
          <Card className="p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">
                  Introduction à Sentinel-2
                </h2>
                <p className="text-gray-600">Découvrez la mission satellitaire européenne révolutionnant l'observation de la Terre</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Qu'est-ce que Sentinel-2 ?</p>
                    <p className="text-gray-700">
                      <strong>Sentinel-2</strong> est une mission satellitaire du programme européen <strong>Copernicus</strong>, 
                      le plus ambitieux programme d'observation de la Terre jamais mis en œuvre. Lancée par l'Agence Spatiale 
                      Européenne (ESA), cette mission est spécialement conçue pour fournir des <strong>données multispectrales 
                      à haute résolution spatiale, temporelle et spectrale</strong>, totalement gratuites et accessibles à tous.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Pourquoi Sentinel-2 est-il si important ?
                </h3>
                <p className="mb-4">
                  Sentinel-2 répond aux besoins croissants en données géospatiales pour le suivi et la gestion 
                  durable de notre planète. Les images fournies permettent de :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-medium text-gray-900 mb-2">🌾 Agriculture de précision</p>
                    <p className="text-sm text-gray-700">
                      Surveillance des cultures, détection du stress hydrique, estimation des rendements, 
                      cartographie des parcelles agricoles
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-medium text-gray-900 mb-2">🌍 Environnement & climat</p>
                    <p className="text-sm text-gray-700">
                      Suivi de la déforestation, détection des changements d'occupation du sol, 
                      monitoring de la qualité de l'air et de l'eau
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="font-medium text-gray-900 mb-2">🌲 Gestion des forêts</p>
                    <p className="text-sm text-gray-700">
                      Inventaire forestier, détection des coupes illégales, suivi de la santé 
                      des écosystèmes forestiers, cartographie de la biodiversité
                    </p>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <p className="font-medium text-gray-900 mb-2">💧 Ressources en eau</p>
                    <p className="text-sm text-gray-700">
                      Cartographie des zones humides, détection des inondations, suivi des 
                      réservoirs, évaluation de la qualité de l'eau
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-medium text-gray-900 mb-2">🏗️ Urbanisation</p>
                    <p className="text-sm text-gray-700">
                      Suivi de l'expansion urbaine, cartographie des infrastructures, 
                      planification territoriale, détection des changements
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-medium text-gray-900 mb-2">🔥 Gestion des risques</p>
                    <p className="text-sm text-gray-700">
                      Détection et suivi des incendies, cartographie des zones à risque, 
                      évaluation des dommages, planification post-catastrophe
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <Satellite className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-3">La constellation Sentinel-2</p>
                    <p className="text-gray-700 mb-3">
                      La mission est composée de <strong>deux satellites jumeaux</strong> en orbite polaire héliosynchrone :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg">
                        <p className="font-medium text-blue-600 mb-2">🛰️ Sentinel-2A</p>
                        <p className="text-sm text-gray-700">Lancé le 23 juin 2015</p>
                        <p className="text-sm text-gray-700">Altitude : 786 km</p>
                        <p className="text-sm text-gray-700">Temps de revisite : 10 jours</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <p className="font-medium text-blue-600 mb-2">🛰️ Sentinel-2B</p>
                        <p className="text-sm text-gray-700">Lancé le 7 mars 2017</p>
                        <p className="text-sm text-gray-700">Altitude : 786 km</p>
                        <p className="text-sm text-gray-700">Temps de revisite : 10 jours</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-sm text-gray-900">
                        <strong>💡 Avantage majeur :</strong> Grâce aux deux satellites, la <strong>fréquence 
                        de revisite est de 5 jours</strong> à l'équateur et peut atteindre <strong>2-3 jours 
                        aux latitudes moyennes</strong>, permettant un suivi quasi-continu de la surface terrestre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">💡 Le saviez-vous ?</p>
                    <p className="text-gray-700">
                      Sentinel-2 génère environ <strong>1,6 téraoctets de données par jour</strong> ! 
                      Toutes ces données sont <strong>gratuitement accessibles</strong> dans un délai de 24 heures 
                      après l'acquisition, permettant à des millions d'utilisateurs dans le monde entier de surveiller 
                      notre planète en temps quasi-réel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* MODULE 2 */}
          <Card className="p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">
                  Caractéristiques techniques essentielles
                </h2>
                <p className="text-gray-600">Comprendre les spécifications qui font de Sentinel-2 un outil puissant</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              {/* Résolution spatiale */}
              <div>
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  📌 Résolution spatiale : La force de Sentinel-2
                </h3>
                <p className="mb-4">
                  Sentinel-2 se distingue par sa capacité à capturer des images dans <strong>13 bandes spectrales</strong> 
                  avec <strong>trois niveaux de résolution spatiale</strong> différents. Cette configuration unique permet 
                  d'adapter la résolution à chaque type d'analyse :
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-300">
                    <div className="text-3xl font-bold text-green-700 mb-3">10 m</div>
                    <p className="font-medium text-gray-900 mb-3">Haute résolution</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B02</strong> - Bleu (490 nm)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B03</strong> - Vert (560 nm)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B04</strong> - Rouge (665 nm)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B08</strong> - Proche infrarouge (842 nm)</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg text-xs text-gray-700">
                      <strong>Idéal pour :</strong> Cartographie détaillée, détection des objets, 
                      analyse urbaine, suivi précis de la végétation
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300">
                    <div className="text-3xl font-bold text-blue-700 mb-3">20 m</div>
                    <p className="font-medium text-gray-900 mb-3">Résolution moyenne</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B05, B06, B07</strong> - Red Edge</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B8A</strong> - NIR étroit</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B11, B12</strong> - SWIR 1 & 2</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg text-xs text-gray-700">
                      <strong>Idéal pour :</strong> Analyse du stress végétal, humidité du sol, 
                      détection des zones brûlées, études atmosphériques
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300">
                    <div className="text-3xl font-bold text-purple-700 mb-3">60 m</div>
                    <p className="font-medium text-gray-900 mb-3">Basse résolution</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B01</strong> - Aérosols côtiers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B09</strong> - Vapeur d'eau</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span><strong>B10</strong> - SWIR Cirrus</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg text-xs text-gray-700">
                      <strong>Idéal pour :</strong> Correction atmosphérique, détection des nuages, 
                      caractérisation des aérosols
                    </div>
                  </div>
                </div>
              </div>

              {/* Largeur de fauchée */}
              <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                  📌 Largeur de fauchée (Swath Width)
                </h3>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-bold text-cyan-600">290</div>
                    <div className="text-gray-600 text-sm">kilomètres</div>
                  </div>
                  <div className="flex-1 text-gray-700">
                    <p className="mb-3">
                      Cette <strong>large bande d'observation de 290 km</strong> permet à Sentinel-2 de couvrir 
                      de vastes territoires en un seul passage. C'est l'une des raisons pour lesquelles les satellites 
                      peuvent revisiter la même zone tous les 5 jours.
                    </p>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-sm">
                        <strong>📏 À titre de comparaison :</strong> Cette largeur équivaut à la distance 
                        entre Paris et Nantes, ou presque la largeur de la Côte d'Ivoire d'est en ouest !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Type de données */}
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-600" />
                  📌 Type de données et capteur
                </h3>
                <div className="space-y-4">
                  <div className="p-5 bg-white rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900 mb-2">🛰️ Capteur MSI (MultiSpectral Instrument)</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Le capteur embarqué sur Sentinel-2 est un <strong>instrument multispectral optique de nouvelle génération</strong>, 
                      conçu spécifiquement pour l'observation des terres émergées et des zones côtières.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">13 bandes spectrales</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Domaine VNIR-SWIR</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Push-broom imaging</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="font-medium text-gray-900 mb-2">📦 Niveau L1C</p>
                      <p className="text-sm text-gray-700">
                        Réflectance au sommet de l'atmosphère (Top of Atmosphere - TOA). 
                        Correction géométrique et radiométrique appliquée.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="font-medium text-gray-900 mb-2">📦 Niveau L2A</p>
                      <p className="text-sm text-gray-700">
                        Réflectance de surface (Bottom of Atmosphere - BOA). 
                        Correction atmosphérique complète pour analyses environnementales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* MODULE 3 */}
          <Card className="p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">
                  Comprendre les niveaux de produits
                </h2>
                <p className="text-gray-600">Choisir le bon produit pour votre analyse : L1C ou L2A ?</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Sentinel-2 propose différents niveaux de traitement des données. Comprendre ces niveaux 
                est <strong>crucial</strong> pour choisir le produit adapté à votre projet.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* L1C */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                      L1C
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold">Niveau L1C (Level-1C)</h3>
                      <p className="text-sm text-gray-600">Top of Atmosphere Reflectance</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">📝 Qu'est-ce que c'est ?</p>
                      <p className="text-sm text-gray-700">
                        Les données L1C représentent la <strong>réflectance au sommet de l'atmosphère</strong>. 
                        Cela signifie que les valeurs mesurées incluent encore l'influence de l'atmosphère 
                        (nuages, aérosols, vapeur d'eau, etc.).
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">✅ Corrections appliquées :</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Correction radiométrique (calibration des capteurs)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Correction géométrique (orthorectification)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Projection cartographique (UTM/WGS84)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Pas de correction atmosphérique</strong></span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <p className="font-medium text-gray-900 mb-2 text-sm">🎯 Quand utiliser L1C ?</p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Analyses rapides et exploratoires</li>
                        <li>• Visualisation de zones d'intérêt</li>
                        <li>• Création de composites RGB simples</li>
                        <li>• Quand la précision absolue n'est pas critique</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-amber-100 rounded-lg">
                      <p className="text-xs text-gray-700">
                        <strong>⚡ Avantage :</strong> Disponibilité immédiate, fichiers plus légers
                      </p>
                    </div>
                  </div>
                </div>

                {/* L2A */}
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-400 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      L2A
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold">Niveau L2A (Level-2A)</h3>
                      <p className="text-sm text-gray-600">Bottom of Atmosphere Reflectance</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">📝 Qu'est-ce que c'est ?</p>
                      <p className="text-sm text-gray-700">
                        Les données L2A représentent la <strong>réflectance de surface</strong>, c'est-à-dire 
                        la vraie signature spectrale du terrain après avoir éliminé les effets atmosphériques. 
                        C'est le produit <strong>recommandé pour la plupart des analyses scientifiques</strong>.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">✅ Corrections appliquées :</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Toutes les corrections du L1C</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Correction atmosphérique complète</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Masque de nuages et d'ombres</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Détection des cirrus</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <p className="font-medium text-gray-900 mb-2 text-sm">🎯 Quand utiliser L2A ?</p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• <strong>Calcul d'indices</strong> (NDVI, NDWI, NBR...)</li>
                        <li>• <strong>Classification d'images</strong></li>
                        <li>• Analyses environnementales et agricoles</li>
                        <li>• Études multi-temporelles et comparaisons</li>
                        <li>• Recherche scientifique nécessitant précision</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-green-100 rounded-lg">
                      <p className="text-xs text-gray-700">
                        <strong>⭐ Recommandé :</strong> C'est le produit par défaut pour 90% des utilisations !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">💡 Conseil CCNTS</p>
                    <p className="text-gray-700 text-sm">
                      Pour vos projets en Côte d'Ivoire et en Afrique de l'Ouest, privilégiez toujours les 
                      <strong> produits L2A</strong>. La correction atmosphérique est particulièrement importante 
                      dans les zones tropicales où l'humidité et les aérosols peuvent fortement influencer 
                      les mesures satellitaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* MODULE 4 */}
          <Card className="p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">
                  Télécharger les images Sentinel-2
                </h2>
                <p className="text-gray-600">Guide complet des plateformes d'accès aux données satellites</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <p className="text-lg mb-4">
                  L'un des grands avantages de Sentinel-2 est que <strong>toutes les données sont gratuites 
                  et librement accessibles</strong>. Voici les meilleures plateformes pour télécharger vos images :
                </p>
              </div>

              <div className="grid gap-6">
                {/* Platform 1 */}
                <div className="p-6 bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 flex items-center gap-2">
                        🌐 1. Copernicus Data Space
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Officiel</span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Recommandé</span>
                      </h3>
                      <a 
                        href="https://dataspace.copernicus.eu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm mb-3 block"
                      >
                        🔗 https://dataspace.copernicus.eu
                      </a>
                      
                      <p className="text-gray-700 mb-4 text-sm">
                        La plateforme officielle du programme Copernicus, gérée par l'ESA. C'est la source 
                        primaire de toutes les données Sentinel.
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">✅ Avantages :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Accès direct aux produits L1C & L2A</li>
                            <li>• Recherche avancée (date, zone, nuages)</li>
                            <li>• API pour téléchargements automatisés</li>
                            <li>• Mise à jour en temps réel</li>
                            <li>• Visualisation avant téléchargement</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">📋 Caractéristiques :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Inscription gratuite requise</li>
                            <li>• Catalogue complet depuis 2015</li>
                            <li>• Téléchargement tuile par tuile</li>
                            <li>• Format SAFE complet ou bandes individuelles</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <p className="text-xs text-gray-700">
                          <strong>👨‍🏫 Tutoriel CCNTS :</strong> Cette plateforme peut sembler complexe au premier abord. 
                          Nous recommandons de suivre notre vidéo tutoriel sur YouTube (@ccnts_media) pour bien démarrer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform 2 */}
                <div className="p-6 bg-white rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 flex items-center gap-2">
                        🌐 2. EO Browser (Sentinel Hub)
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Débutants</span>
                      </h3>
                      <a 
                        href="https://apps.sentinel-hub.com/eo-browser" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm mb-3 block"
                      >
                        🔗 https://apps.sentinel-hub.com/eo-browser
                      </a>
                      
                      <p className="text-gray-700 mb-4 text-sm">
                        Une interface web intuitive et puissante pour visualiser et télécharger des images satellites 
                        sans installation de logiciel.
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">✅ Avantages :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• <strong>Interface très intuitive</strong></li>
                            <li>• Visualisation instantanée des images</li>
                            <li>• Calcul des indices en ligne (NDVI, etc.)</li>
                            <li>• Comparaison temporelle facile</li>
                            <li>• Pas d'installation nécessaire</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">🎨 Fonctionnalités :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Composites RGB prédéfinis</li>
                            <li>• Script custom pour analyses avancées</li>
                            <li>• Export en JPEG, PNG ou GeoTIFF</li>
                            <li>• Timelapse automatique</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs text-gray-700">
                          <strong>⭐ Parfait pour :</strong> Les débutants qui veulent explorer Sentinel-2 sans 
                          passer par des logiciels SIG complexes. Idéal pour une première approche !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform 3 */}
                <div className="p-6 bg-white rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2">
                        🌐 3. EarthExplorer (USGS)
                      </h3>
                      <a 
                        href="https://earthexplorer.usgs.gov" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm mb-3 block"
                      >
                        🔗 https://earthexplorer.usgs.gov
                      </a>
                      
                      <p className="text-gray-700 mb-4 text-sm">
                        La plateforme américaine USGS offre un accès aux données Sentinel-2 ainsi qu'à de nombreuses 
                        autres sources satellitaires (Landsat, MODIS, etc.).
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">✅ Avantages :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Catalogue très complet</li>
                            <li>• Plusieurs sources de données</li>
                            <li>• Interface classique et stable</li>
                            <li>• Recherche géographique précise</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">ℹ️ À savoir :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Interface moins moderne</li>
                            <li>• Inscription obligatoire</li>
                            <li>• Alternative solide à Copernicus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform 4 */}
                <div className="p-6 bg-white rounded-xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 flex items-center gap-2">
                        🌐 4. Google Earth Engine
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Avancé</span>
                      </h3>
                      <a 
                        href="https://earthengine.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm mb-3 block"
                      >
                        🔗 https://earthengine.google.com
                      </a>
                      
                      <p className="text-gray-700 mb-4 text-sm">
                        Une plateforme cloud de Google permettant d'analyser des pétaoctets de données 
                        géospatiales sans téléchargement. Nécessite des compétences en programmation (JavaScript ou Python).
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">✅ Avantages :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• <strong>Analyses à grande échelle</strong></li>
                            <li>• Séries temporelles complètes</li>
                            <li>• Traitement cloud (pas de téléchargement)</li>
                            <li>• Catalogue complet de Sentinel-2</li>
                            <li>• Partage de scripts et analyses</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-teal-50 rounded-lg">
                          <p className="font-medium text-sm text-gray-900 mb-2">🎓 Pré-requis :</p>
                          <ul className="space-y-1 text-xs text-gray-700">
                            <li>• Connaissances en programmation</li>
                            <li>• JavaScript ou Python</li>
                            <li>• Compte Google</li>
                            <li>• Courbe d'apprentissage importante</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-gray-700">
                          <strong>🚀 Pour les experts :</strong> Idéal pour les analyses régionales ou nationales, 
                          les études multi-temporelles sur plusieurs années, et les projets de recherche avancés.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-2">🏆 Recommandation CCNTS pour débutants</p>
                    <p className="text-blue-100 text-sm">
                      Commencez avec <strong>EO Browser</strong> pour vous familiariser avec les données, 
                      puis passez à <strong>Copernicus Data Space</strong> quand vous serez à l'aise avec QGIS. 
                      Cette progression garantit un apprentissage solide et progressif !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* MODULE 5 - Table des bandes */}
          <Card className="p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">
                  Structure d'une image Sentinel-2
                </h2>
                <p className="text-gray-600">Comprendre l'organisation et l'utilité de chaque bande spectrale</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Une image Sentinel-2 n'est pas un simple fichier photo ! C'est un <strong>ensemble de 13 bandes spectrales</strong>, 
                chacune capturant la lumière dans une longueur d'onde spécifique. Chaque bande est une image distincte 
                que vous pouvez combiner pour créer des analyses puissantes.
              </p>

              <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">💡 Qu'est-ce qu'une bande spectrale ?</p>
                    <p className="text-gray-700 text-sm">
                      Chaque bande capture la réflectance de la surface terrestre dans une portion spécifique 
                      du spectre électromagnétique. En combinant plusieurs bandes, on obtient des informations 
                      que l'œil humain ne peut pas voir (comme l'infrarouge proche pour la végétation).
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="border border-blue-700 px-4 py-4 text-left font-bold">Bande</th>
                      <th className="border border-blue-700 px-4 py-4 text-left font-bold">Nom</th>
                      <th className="border border-blue-700 px-4 py-4 text-left font-bold">Résolution</th>
                      <th className="border border-blue-700 px-4 py-4 text-left font-bold">Longueur d'onde</th>
                      <th className="border border-blue-700 px-4 py-4 text-left font-bold">Principales utilisations</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B01</td>
                      <td className="border border-gray-300 px-4 py-4">Aérosols côtiers</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">60 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">443 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Détection des aérosols atmosphériques, correction atmosphérique, études côtières</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-green-600">B02</td>
                      <td className="border border-gray-300 px-4 py-4">Bleu</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">10 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">490 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Analyse de l'eau, bathymétrie, différenciation sol/végétation, composites couleur naturelle</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-green-600">B03</td>
                      <td className="border border-gray-300 px-4 py-4">Vert</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">10 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">560 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Pic de réflectance de la végétation, urbanisation, composites couleur naturelle</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-green-600">B04</td>
                      <td className="border border-gray-300 px-4 py-4">Rouge</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">10 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">665 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm"><strong>Calcul NDVI</strong>, absorption chlorophylle, discrimination végétation</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B05</td>
                      <td className="border border-gray-300 px-4 py-4">Red Edge 1</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">705 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Stress végétal, état sanitaire des cultures, indice LAI (surface foliaire)</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B06</td>
                      <td className="border border-gray-300 px-4 py-4">Red Edge 2</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">740 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Analyse fine du stress végétal, classification des espèces végétales</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B07</td>
                      <td className="border border-gray-300 px-4 py-4">Red Edge 3</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">783 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Transition vers NIR, études de végétation dense</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-green-600">B08</td>
                      <td className="border border-gray-300 px-4 py-4">NIR (Proche infrarouge)</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">10 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">842 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm"><strong>NDVI, biomasse</strong>, vigueur végétale, contenuen eau de la végétation</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B8A</td>
                      <td className="border border-gray-300 px-4 py-4">NIR étroit</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">865 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Complément B08, amélioration des indices de végétation</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-purple-600">B09</td>
                      <td className="border border-gray-300 px-4 py-4">Vapeur d'eau</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">60 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">945 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Correction atmosphérique, détection de la vapeur d'eau</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-purple-600">B10</td>
                      <td className="border border-gray-300 px-4 py-4">SWIR - Cirrus</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">60 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">1375 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Détection des nuages cirrus, masque de nuages</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B11</td>
                      <td className="border border-gray-300 px-4 py-4">SWIR 1</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">1610 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Humidité du sol, différenciation neige/nuage, <strong>NBR (zones brûlées)</strong></td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-4 font-bold text-blue-600">B12</td>
                      <td className="border border-gray-300 px-4 py-4">SWIR 2</td>
                      <td className="border border-gray-300 px-4 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">20 m</span></td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">2190 nm</td>
                      <td className="border border-gray-300 px-4 py-4 text-sm">Géologie, humidité du sol, <strong>détection des feux</strong>, minéralogie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-5 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">4 bandes</div>
                  <p className="text-sm text-gray-700 mb-2">à <strong>10 mètres</strong></p>
                  <p className="text-xs text-gray-600">Les plus utilisées : B02, B03, B04, B08</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">6 bandes</div>
                  <p className="text-sm text-gray-700 mb-2">à <strong>20 mètres</strong></p>
                  <p className="text-xs text-gray-600">Red Edge et SWIR pour analyses avancées</p>
                </div>
                <div className="p-5 bg-purple-50 rounded-xl border-2 border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">3 bandes</div>
                  <p className="text-sm text-gray-700 mb-2">à <strong>60 mètres</strong></p>
                  <p className="text-xs text-gray-600">Correction atmosphérique et nuages</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">💡 Point clé à retenir</p>
                    <p className="text-gray-700 text-sm">
                      Pour 90% de vos projets, vous utiliserez principalement les <strong>4 bandes à 10m</strong> (B02, B03, B04, B08) 
                      et les <strong>2 bandes SWIR à 20m</strong> (B11, B12). Les bandes Red Edge sont précieuses pour l'agriculture de précision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* QUIZ SECTION */}
          <Card className="p-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 text-white text-center shadow-2xl">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h2 className="mb-4">
              🎓 Prêt à obtenir votre certification ?
            </h2>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
              Testez vos connaissances avec notre quiz de certification et obtenez votre <strong>certificat CCNTS gratuit</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
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

            <div className="flex flex-col items-center gap-4">
              <Link to="/academy/sentinel2/quiz" className="w-full max-w-md">
                <Button size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100 border-0 text-lg py-6">
                  <Award className="w-6 h-6 mr-3" />
                  Commencer le quiz de certification
                </Button>
              </Link>
              <p className="text-purple-200 text-sm">
                ⚠️ Le quiz se fait sur une page séparée pour garantir l'intégrité de votre certification
              </p>
            </div>
          </Card>

          {/* CTA Final */}
          <Card className="p-10 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl">
            <Satellite className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="mb-4">
              Continuez votre apprentissage !
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Vous venez de terminer les 5 premiers modules. Il reste encore 6 modules passionnants 
              à découvrir : composites RGB, calcul d'indices, applications concrètes, et bien plus !
            </p>
            <p className="text-sm text-blue-200 mb-8">
              ⬇️ Continuez à faire défiler pour accéder aux modules 6 à 11 ⬇️
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/academy">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-0">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Voir tous les cours
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-0">
                  Contactez-nous pour une formation
                </Button>
              </Link>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default CourseSentinel2Page;
