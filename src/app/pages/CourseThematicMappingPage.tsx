import { Map, ChevronRight, Home, CheckCircle2, Award, MapPin, Palette, BarChart3, Layers, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTrackCourse } from '../hooks/useTrackCourse';
import { SEOHead } from '../components/SEOHead';

export function CourseThematicMappingPage() {
  useTrackCourse({
    courseId: 'thematic-mapping',
    courseName: 'Cartographie Thématique Avancée',
    courseSlug: 'thematic-mapping'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Formation Cartographie Thématique"
        customDescription="Créez des cartes thématiques professionnelles : symbologie, classification, mise en page et export pour publication."
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
            <span className="text-gray-900">Cartographie Thématique</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Map className="w-10 h-10" />
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎓 Cours gratuit
            </span>
            <span className="px-4 py-1.5 bg-indigo-500/80 rounded-full text-sm font-medium">
              📊 Intermédiaire
            </span>
            <span className="px-4 py-1.5 bg-purple-500/80 rounded-full text-sm font-medium">
              ⏱️ 3h de formation
            </span>
            <span className="px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certification incluse</span>
            </span>
          </div>
          <h1 className="mb-4">
            Cartographie Thématique
          </h1>
          <p className="text-purple-100 text-xl mb-8 max-w-3xl">
            Maîtrisez l'art de créer des cartes thématiques professionnelles pour visualiser et communiquer 
            vos données géospatiales avec impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">8 modules complets</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Types de cartes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Pratique QGIS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Cas d'usage réels</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section 1 */}
          <Card className="p-8 border-l-4 border-l-blue-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">1️⃣ Introduction à la cartographie thématique</h2>
                <p className="text-gray-600">
                  La cartographie thématique est une branche de la cartographie qui met en évidence un thème particulier 
                  dans l'espace : population, relief, climat, santé, agriculture, risques, etc.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 ml-16">
              <p className="text-gray-700">
                Contrairement à une carte générale, une carte thématique représente une information précise à partir 
                de données géographiques et statistiques.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-blue-900 mb-3">📌 Objectifs d'une carte thématique :</p>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Visualiser rapidement un phénomène dans l'espace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Comparer des zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Comprendre des dynamiques spatiales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Soutenir la décision (aménagement, gestion, planification)</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 font-medium">
                💡 La cartographie thématique est l'un des outils les plus utilisés en SIG.
              </p>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="p-8 border-l-4 border-l-purple-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">2️⃣ Les différents types de cartes thématiques</h2>
                <p className="text-gray-600">Voici les catégories les plus courantes :</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              {/* Type 1 */}
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-blue-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Cartes choroplèthes
                </h3>
                <p className="text-gray-700 mb-2">Couleurs appliquées sur des régions (communes, régions…).</p>
                <p className="text-sm text-gray-600"><strong>Utilité :</strong> population, densité, taux, pourcentages, indicateurs sociaux</p>
              </div>

              {/* Type 2 */}
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-green-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Cartes par symboles proportionnels
                </h3>
                <p className="text-gray-700 mb-2">Symboles (cercles, carrés) dont la taille varie selon la valeur.</p>
                <p className="text-sm text-gray-600"><strong>Utilité :</strong> volumes, quantités, comparaison rapide</p>
              </div>

              {/* Type 3 */}
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="text-orange-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Cartes en points (dot density map)
                </h3>
                <p className="text-gray-700 mb-2">Des points représentent une quantité.</p>
                <p className="text-sm text-gray-600"><strong>Utilité :</strong> répartition spatiale (ex : population, bétail)</p>
              </div>

              {/* Type 4 */}
              <div className="bg-red-50 p-5 rounded-lg">
                <h3 className="text-red-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                  Cartes en plages de valeurs (graduées)
                </h3>
                <p className="text-gray-700 mb-2">Dégradé de couleurs pour montrer des valeurs continues.</p>
                <p className="text-sm text-gray-600"><strong>Utilité :</strong> pollution, températures, altitude</p>
              </div>

              {/* Type 5 */}
              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                  Cartes isarithmiques (courbes)
                </h3>
                <p className="text-gray-700">Lignes d'égal valeur, ex. : isobares, isohyètes, iso-altitude.</p>
              </div>

              {/* Type 6 */}
              <div className="bg-yellow-50 p-5 rounded-lg">
                <h3 className="text-yellow-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm">6</span>
                  Cartes de flux
                </h3>
                <p className="text-gray-700">Fleuves, migrations, transport, commerce.</p>
              </div>

              {/* Type 7 */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm">7</span>
                  Cartes de densité (heatmaps)
                </h3>
                <p className="text-gray-700 mb-2">Zones plus ou moins intenses.</p>
                <p className="text-sm text-gray-600"><strong>Utilité :</strong> criminalité, présence d'espèces, activité humaine</p>
              </div>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="p-8 border-l-4 border-l-green-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">3️⃣ Les données utilisées en cartographie thématique</h2>
                <p className="text-gray-600">Pour réaliser une carte thématique, il faut combiner :</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-blue-900 mb-3">🔹 Données géographiques :</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Limites administratives</li>
                    <li>• Parcelles</li>
                    <li>• Routes</li>
                    <li>• Zones géographiques</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-green-900 mb-3">🔹 Données statistiques :</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Population</li>
                    <li>• Démographie</li>
                    <li>• Agriculture</li>
                    <li>• Environnement</li>
                    <li>• Santé</li>
                    <li>• Socio-économie</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="text-purple-900 mb-3">📊 Ces données peuvent provenir :</h3>
                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <div>• de l'INSTAT / INS (statistiques officielles)</div>
                  <div>• d'enquêtes</div>
                  <div>• d'imagerie satellite</div>
                  <div>• de bases SIG</div>
                  <div className="md:col-span-2">• d'organisations sectorielles (eau, agriculture, santé…)</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 4 */}
          <Card className="p-8 border-l-4 border-l-indigo-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">4️⃣ Créer une carte thématique avec QGIS (méthode simple)</h2>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="space-y-3">
                {[
                  { step: 1, title: 'Charger les données géographiques', desc: 'Ex : limites communales, régions, zones rurales…' },
                  { step: 2, title: 'Ajouter les données statistiques', desc: 'Format possible : CSV, Excel, table attributaire' },
                  { step: 3, title: 'Joindre les données (Join)', desc: 'Relier la statistique à la carte via un identifiant unique (ex : code commune).' },
                  { step: 4, title: 'Appliquer un style thématique', desc: 'Clic droit sur la couche → Properties → Symbology → Choisir un type : gradué, catégorisé, symboles…' },
                  { step: 5, title: 'Ajuster la légende', desc: 'Nombre de classes, Mode : quantiles, intervalles égaux, Jenks…' },
                  { step: 6, title: 'Mise en page finale', desc: 'Titre, Légende, Nord, Échelle, Sources, Date, Auteur' },
                  { step: 7, title: 'Export', desc: 'PDF, PNG, JPG' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="p-8 border-l-4 border-l-pink-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">5️⃣ Choisir les bonnes couleurs</h2>
                <p className="text-gray-600">La couleur influence la lecture</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-5 rounded-lg">
                <h3 className="text-gray-900 mb-3">🌡️ Pour des valeurs continues :</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span>→</span>
                    <div className="w-4 h-4 bg-red-600 rounded"></div>
                    <span className="ml-2 text-sm">(jaune → rouge)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                    <span>→</span>
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span className="ml-2 text-sm">(bleu → vert)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span>→</span>
                    <div className="w-4 h-4 bg-gray-900 rounded"></div>
                    <span className="ml-2 text-sm">(gris → noir)</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-green-900 mb-3">🎨 Bonnes pratiques :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Éviter les couleurs trop proches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Éviter trop de couleurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Utiliser les palettes officielles : ColorBrewer, QGIS presets, palettes SIG</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
                <h3 className="text-red-900 mb-3">⚠ À éviter :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ Couleurs agressives</li>
                  <li>❌ Contrastes trop faibles</li>
                  <li>❌ Symboles trop gros</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="p-8 border-l-4 border-l-red-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">6️⃣ Erreurs fréquentes en cartographie thématique</h2>
              </div>
            </div>

            <div className="ml-16">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Couleurs mal choisies',
                  'Classes mal définies',
                  'Légende absente',
                  'Carte trop chargée',
                  'Données mal jointes',
                  'Absence de sources',
                  'Projection incorrecte',
                ].map((error, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <span className="text-xl">❌</span>
                    <span className="text-gray-700">{error}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 text-green-800">
                ✅ Une bonne carte thématique doit être <strong>claire, lisible, professionnelle</strong>.
              </p>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="p-8 border-l-4 border-l-orange-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">7️⃣ Applications de la cartographie thématique</h2>
                <p className="text-gray-600">La cartographie thématique est utilisée pour :</p>
              </div>
            </div>

            <div className="ml-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🌍</span>
                    Environnement
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Déforestation</li>
                    <li>• Qualité des sols</li>
                    <li>• Zones humides</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h3 className="text-yellow-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🧑‍🌾</span>
                    Agriculture
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Cultures</li>
                    <li>• Stress végétal</li>
                    <li>• Occupation du sol</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-blue-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🏙</span>
                    Urbanisme
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Densité</li>
                    <li>• Occupation spatiale</li>
                    <li>• Logements</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-purple-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">👨‍👩‍👧</span>
                    Démographie
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Population</li>
                    <li>• Scolarité</li>
                    <li>• Santé</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-5 rounded-lg md:col-span-2">
                  <h3 className="text-red-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🚨</span>
                    Risques
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Inondations</li>
                    <li>• Feux</li>
                    <li>• Zones vulnérables</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 8 - Conclusion */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-2">8️⃣ Conclusion</h2>
                <p className="text-gray-600">À la fin de ce cours, vous savez :</p>
              </div>
            </div>

            <div className="ml-16 space-y-3 mb-6">
              {[
                'Ce qu\'est une carte thématique',
                'Les types de représentations thématiques',
                'Les données nécessaires',
                'Comment créer une carte dans QGIS',
                'Comment choisir les bonnes couleurs',
                'Les erreurs à éviter',
                'Les domaines d\'application',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-blue-600 text-white rounded-lg ml-16">
              <p className="text-lg font-medium text-center">
                💡 La cartographie thématique est l'un des fondements des SIG et une compétence essentielle 
                pour tout géomaticien.
              </p>
            </div>
          </Card>

          {/* CTA Quiz */}
          <Card className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
              <h2 className="text-gray-900 mb-3">🎓 Prêt à obtenir votre certification ?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Testez vos connaissances avec notre quiz de validation et obtenez votre 
                <strong> certificat CCNTS gratuit</strong> en cas de réussite (score minimum : 80%).
              </p>
              <Link to="/academy/thematic-mapping/quiz">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Award className="w-5 h-5 mr-2" />
                  Commencer le quiz de certification
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                ⏱️ Durée estimée : 15 minutes • 15 questions
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CourseThematicMappingPage;