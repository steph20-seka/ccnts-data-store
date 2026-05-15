import { BookOpen, Clock, BarChart } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import bufferThumbnail from 'figma:asset/9a9c7713fb7cec4a6f1c7ad59697ffeb8415763c.png';

const freeCourses = [
  {
    title: 'Introduction à QGIS',
    description: 'Apprenez les bases de QGIS, le logiciel SIG open source le plus populaire.',
    level: 'Débutant',
    category: 'SIG',
    duration: '2h30',
    format: 'Vidéo + texte',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    link: '/academy/qgis',
  },
  {
    title: 'Cartographie thématique',
    description: 'Créez des cartes professionnelles et efficaces pour vos projets.',
    level: 'Intermédiaire',
    category: 'Cartographie',
    duration: '3h',
    format: 'Vidéo + exercices',
    image: 'https://images.unsplash.com/photo-1713815712004-1f80e2e844e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVtYXRpYyUyMG1hcCUyMGNhcnRvZ3JhcGh5fGVufDF8fHx8MTc2MzU0MjEyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/academy/thematic-mapping',
  },
  {
    title: 'Télédétection avec Sentinel-2',
    description: 'Exploitez les images satellites Sentinel-2 pour l\'analyse territoriale.',
    level: 'Intermédiaire',
    category: 'Télédétection',
    duration: '4h',
    format: 'Vidéo + pratique',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06',
    link: '/academy/sentinel2',
  },
  {
    title: 'Maîtriser les tampons pour créer des zones de protection',
    description: 'Apprenez à créer et utiliser les zones tampons (buffers) pour l\'analyse spatiale.',
    level: 'Intermédiaire',
    category: 'SIG',
    duration: '2h30',
    format: 'Texte + exercices',
    image: bufferThumbnail,
    link: '/academy/buffer',
  },
  {
    title: 'Comprendre, acquérir et produire des cartes historiques',
    description: 'Maîtrisez l\'art de la cartographie historique : acquisition, géoréférencement et analyse critique.',
    level: 'Intermédiaire',
    category: 'Cartographie',
    duration: '4h30',
    format: 'Texte + ateliers',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBtYXAlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2ODQ5NjUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/academy/historical-maps',
  },
  {
    title: 'Créer une carte simple avec Google Earth Engine',
    description: '4 actions simples pour afficher, manipuler et exporter une carte satellite avec GEE.',
    level: 'Débutant',
    category: 'Télédétection',
    duration: '2h',
    format: 'Code + exercices',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbWFnZXJ5JTIwZWFydGh8ZW58MXx8fHwxNzY4NTA2MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/academy/google-earth-engine',
  },
];

const levelColors = {
  'Débutant': 'bg-green-100 text-green-700',
  'Intermédiaire': 'bg-blue-100 text-blue-700',
  'Avancé': 'bg-purple-100 text-purple-700',
};

export function FreeCoursesSection() {
  return (
    <section id="cours-gratuits" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-blue-600"></div>
            <span className="text-blue-600 text-xs sm:text-sm tracking-wide uppercase">Cours gratuits</span>
            <div className="h-px w-8 sm:w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl">
            📘 Cours gratuits disponibles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Découvrez notre sélection de cours gratuits pour développer vos compétences en géomatique
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {freeCourses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    Gratuit
                  </span>
                  <span className={`px-2 py-1 text-xs rounded ${levelColors[course.level as keyof typeof levelColors]}`}>
                    {course.level}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {course.category}
                  </span>
                </div>
                
                <h3 className="text-gray-900 mb-2 text-base sm:text-lg">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{course.format}</span>
                  </div>
                </div>

                <Link to={course.link} className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                    Voir le cours
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto text-sm sm:text-base">
            ➡️ Voir tous les cours gratuits
          </Button>
        </div>
      </div>
    </section>
  );
}