import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Clock, Award, PlayCircle, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { SEOHead } from '../components/SEOHead';

interface CourseProgress {
  courseId: string;
  courseName: string;
  courseSlug: string;
  startedAt: string;
  completed: boolean;
  completedAt?: string;
  hasCertificate?: boolean;
}

const availableCourses = [
  {
    id: 'qgis',
    name: 'Introduction à QGIS',
    slug: 'qgis',
    description: 'Maîtrisez les fondamentaux du logiciel QGIS pour créer vos premières cartes',
    duration: '4 heures',
    level: 'Débutant',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'sentinel2',
    name: 'Traitement d\'images Sentinel-2',
    slug: 'sentinel2',
    description: 'Apprenez à analyser et traiter les images satellites Sentinel-2',
    duration: '5 heures',
    level: 'Intermédiaire',
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'thematic-mapping',
    name: 'Cartographie Thématique Avancée',
    slug: 'thematic-mapping',
    description: 'Créez des cartes thématiques professionnelles et percutantes',
    duration: '6 heures',
    level: 'Avancé',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'buffer',
    name: 'Maîtriser les tampons pour créer des zones de protection',
    slug: 'buffer',
    description: 'Apprenez à utiliser les zones tampons dans vos analyses spatiales',
    duration: '3 heures',
    level: 'Intermédiaire',
    color: 'from-orange-600 to-red-600',
  },
];

export function MyCoursesPage() {
  const { user, isAuthenticated } = useAuth();
  const [coursesProgress, setCoursesProgress] = useState<CourseProgress[]>([]);

  useEffect(() => {
    if (user) {
      // Charger la progression des cours depuis localStorage
      const progressData = localStorage.getItem(`ccnts_courses_${user.id}`);
      if (progressData) {
        setCoursesProgress(JSON.parse(progressData));
      }
    }
  }, [user]);

  useEffect(() => {
    // Vérifier les certificats obtenus pour marquer les cours comme complétés
    if (user) {
      const certificatesData = localStorage.getItem('ccnts_certificates');
      if (certificatesData) {
        const certificates = JSON.parse(certificatesData);
        const userCertificates = certificates.filter(
          (cert: any) => cert.userId === user.id
        );

        // Mettre à jour la progression avec les certificats
        setCoursesProgress((prev) => {
          const updated = [...prev];
          userCertificates.forEach((cert: any) => {
            const existingIndex = updated.findIndex(
              (p) => p.courseId === cert.courseId
            );
            if (existingIndex >= 0) {
              updated[existingIndex] = {
                ...updated[existingIndex],
                completed: true,
                completedAt: cert.issuedAt,
                hasCertificate: true,
              };
            } else {
              // Ajouter le cours s'il n'existe pas encore dans la progression
              const course = availableCourses.find((c) => c.id === cert.courseId);
              if (course) {
                updated.push({
                  courseId: cert.courseId,
                  courseName: course.name,
                  courseSlug: course.slug,
                  startedAt: cert.issuedAt,
                  completed: true,
                  completedAt: cert.issuedAt,
                  hasCertificate: true,
                });
              }
            }
          });
          return updated;
        });
      }
    }
  }, [user]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="mb-2 text-gray-900">Connexion requise</h2>
          <p className="text-gray-600 mb-6">
            Vous devez être connecté pour accéder à vos cours.
          </p>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link to="/login">Se connecter</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const enrolledCourses = coursesProgress.map((progress) => {
    const course = availableCourses.find((c) => c.id === progress.courseId);
    return { ...progress, ...course };
  });

  const availableToEnroll = availableCourses.filter(
    (course) => !coursesProgress.some((p) => p.courseId === course.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <SEOHead pageKey="myCourses" noIndex={true} />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-white" />
            <h1 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">Mes Cours</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
              Suivez votre progression et continuez votre apprentissage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 mb-12 sm:mb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 sm:p-6 bg-white shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Cours en cours</p>
                  <p className="text-xl sm:text-2xl text-gray-900">
                    {enrolledCourses.filter((c) => !c.completed).length}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 bg-white shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Cours complétés</p>
                  <p className="text-xl sm:text-2xl text-gray-900">
                    {enrolledCourses.filter((c) => c.completed).length}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 sm:p-6 bg-white shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Total de cours</p>
                  <p className="text-xl sm:text-2xl text-gray-900">{enrolledCourses.length}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enrolled Courses Section */}
      {enrolledCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <h2 className="mb-6 sm:mb-8 text-gray-900 text-xl sm:text-2xl">Mes cours inscrits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {enrolledCourses.map((course, index) => (
              <motion.div
                key={course.courseId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl mb-2 text-gray-900">{course.courseName}</h3>
                        <p className="text-gray-600 text-sm mb-3 sm:mb-4">{course.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                            {course.level}
                          </span>
                          <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                          {course.completed && (
                            <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              Complété
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                        <Link to={`/academy/${course.courseSlug}`}>
                          {course.completed ? 'Revoir le cours' : 'Continuer'}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      {course.hasCertificate && (
                        <Button asChild variant="outline" className="text-sm sm:text-base">
                          <Link to="/my-certificates">
                            <Award className="w-4 h-4 mr-2" />
                            Certificat
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {enrolledCourses.length === 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-gray-400" />
          <h2 className="mb-3 sm:mb-4 text-gray-900 text-xl sm:text-2xl">Aucun cours commencé</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Explorez notre académie et commencez votre première formation dès aujourd'hui !
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <Link to="/academy">
              Découvrir les cours
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </section>
      )}
    </div>
  );
}

export default MyCoursesPage;