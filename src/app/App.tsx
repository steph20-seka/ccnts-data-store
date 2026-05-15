import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { FirebaseAuthProvider } from "./contexts/FirebaseAuthContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageTransition } from "./components/PageTransition";
import { AnimatePresence } from "motion/react";
import { Toaster } from "sonner";

// Import i18n configuration
import './lib/i18n';

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({
    default: m.HomePage,
  })),
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({
    default: m.ServicesPage,
  })),
);
const AcademyPage = lazy(() =>
  import("./pages/AcademyPage").then((m) => ({
    default: m.AcademyPage,
  })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({
    default: m.AboutPage,
  })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({
    default: m.ProjectsPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({
    default: m.ContactPage,
  })),
);
const SignUpPage = lazy(() =>
  import("./pages/SignUpPage").then((m) => ({
    default: m.SignUpPage,
  })),
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage").then((m) => ({
    default: m.LoginPage,
  })),
);
const ResetPasswordPage = lazy(() =>
  import("./pages/ResetPasswordPage").then((m) => ({
    default: m.ResetPasswordPage,
  })),
);
const MyCoursesPage = lazy(() =>
  import("./pages/MyCoursesPage").then((m) => ({
    default: m.MyCoursesPage,
  })),
);
const MyCertificatesPage = lazy(() =>
  import("./pages/MyCertificatesPage").then((m) => ({
    default: m.MyCertificatesPage,
  })),
);
const CourseQGISPage = lazy(() =>
  import("./pages/CourseQGISPage").then((m) => ({
    default: m.CourseQGISPage,
  })),
);
const CourseSentinel2Page = lazy(() =>
  import("./pages/CourseSentinel2Page").then((m) => ({
    default: m.CourseSentinel2Page,
  })),
);
const CourseThematicMappingPage = lazy(() =>
  import("./pages/CourseThematicMappingPage").then((m) => ({
    default: m.CourseThematicMappingPage,
  })),
);
const QuizQGISPage = lazy(() =>
  import("./pages/QuizQGISPage").then((m) => ({
    default: m.QuizQGISPage,
  })),
);
const QuizSentinel2Page = lazy(() =>
  import("./pages/QuizSentinel2Page").then((m) => ({
    default: m.QuizSentinel2Page,
  })),
);
const QuizThematicMappingPage = lazy(() =>
  import("./pages/QuizThematicMappingPage").then((m) => ({
    default: m.QuizThematicMappingPage,
  })),
);
const CourseBufferPage = lazy(() =>
  import("./pages/CourseBufferPage").then((m) => ({
    default: m.CourseBufferPage,
  })),
);
const QuizBufferPage = lazy(() =>
  import("./pages/QuizBufferPage").then((m) => ({
    default: m.QuizBufferPage,
  })),
);
const CourseHistoricalMapsPage = lazy(() =>
  import("./pages/CourseHistoricalMapsPage").then((m) => ({
    default: m.CourseHistoricalMapsPage,
  })),
);
const QuizHistoricalMapsPage = lazy(() =>
  import("./pages/QuizHistoricalMapsPage").then((m) => ({
    default: m.QuizHistoricalMapsPage,
  })),
);
const CourseGoogleEarthEnginePage = lazy(() =>
  import("./pages/CourseGoogleEarthEnginePage").then((m) => ({
    default: m.CourseGoogleEarthEnginePage,
  })),
);
const QuizGoogleEarthEnginePage = lazy(() =>
  import("./pages/QuizGoogleEarthEnginePage").then((m) => ({
    default: m.QuizGoogleEarthEnginePage,
  })),
);
const DataStorePage = lazy(() =>
  import("./pages/DataStorePage").then((m) => ({
    default: m.DataStorePage,
  })),
);
const VerifyEmailPage = lazy(() =>
  import("./pages/VerifyEmailPage").then((m) => ({
    default: m.VerifyEmailPage,
  })),
);
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage").then((m) => ({
    default: m.ForgotPasswordPage,
  })),
);

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-geospatial-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-geospatial-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-geospatial-gray-600">
          Chargement...
        </p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route
          path="/services"
          element={<PageTransition><ServicesPage /></PageTransition>}
        />
        <Route
          path="/academy"
          element={<PageTransition><AcademyPage /></PageTransition>}
        />
        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <PageTransition><MyCoursesPage /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-certificates"
          element={
            <ProtectedRoute>
              <PageTransition><MyCertificatesPage /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/academy/qgis"
          element={<PageTransition><CourseQGISPage /></PageTransition>}
        />
        <Route
          path="/academy/sentinel2"
          element={<PageTransition><CourseSentinel2Page /></PageTransition>}
        />
        <Route
          path="/academy/thematic-mapping"
          element={<PageTransition><CourseThematicMappingPage /></PageTransition>}
        />
        <Route
          path="/academy/qgis/quiz"
          element={<PageTransition><QuizQGISPage /></PageTransition>}
        />
        <Route
          path="/academy/sentinel2/quiz"
          element={<PageTransition><QuizSentinel2Page /></PageTransition>}
        />
        <Route
          path="/academy/thematic-mapping/quiz"
          element={<PageTransition><QuizThematicMappingPage /></PageTransition>}
        />
        <Route
          path="/academy/buffer/quiz"
          element={<PageTransition><QuizBufferPage /></PageTransition>}
        />
        <Route
          path="/academy/buffer"
          element={<PageTransition><CourseBufferPage /></PageTransition>}
        />
        <Route
          path="/academy/historical-maps"
          element={<PageTransition><CourseHistoricalMapsPage /></PageTransition>}
        />
        <Route
          path="/academy/historical-maps/quiz"
          element={<PageTransition><QuizHistoricalMapsPage /></PageTransition>}
        />
        <Route
          path="/academy/google-earth-engine"
          element={<PageTransition><CourseGoogleEarthEnginePage /></PageTransition>}
        />
        <Route
          path="/academy/google-earth-engine/quiz"
          element={<PageTransition><QuizGoogleEarthEnginePage /></PageTransition>}
        />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route
          path="/projects"
          element={<PageTransition><ProjectsPage /></PageTransition>}
        />
        <Route
          path="/contact"
          element={<PageTransition><ContactPage /></PageTransition>}
        />
        <Route
          path="/signup"
          element={<PageTransition><SignUpPage /></PageTransition>}
        />
        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
        <Route
          path="/reset-password"
          element={<PageTransition><ResetPasswordPage /></PageTransition>}
        />
        <Route
          path="/data-store"
          element={<PageTransition><DataStorePage /></PageTransition>}
        />
        <Route
          path="/verify-email"
          element={<PageTransition><VerifyEmailPage /></PageTransition>}
        />
        <Route
          path="/forgot-password"
          element={<PageTransition><ForgotPasswordPage /></PageTransition>}
        />
        {/* Redirections pour compatibilité */}
        <Route
          path="/academy/cours/qgis-introduction"
          element={
            <Navigate to="/academy/qgis" replace />
          }
        />
        <Route
          path="/academy/cours/sentinel-2"
          element={
            <Navigate to="/academy/sentinel2" replace />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Initialiser le favicon et le manifest au chargement de l'application
  useEffect(() => {
    // Supprimer tous les anciens favicons
    document.querySelectorAll('link[rel*="icon"]').forEach(link => link.remove());

    // Ajouter les favicons dans l'ordre de priorité (logo officiel CCNTS)
    const favicons = [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ];

    favicons.forEach(config => {
      const link = document.createElement('link');
      link.rel = config.rel;
      if (config.type) link.type = config.type;
      if (config.sizes) link.sizes = config.sizes;
      link.href = config.href;
      document.head.appendChild(link);
    });

    // Forcer le rafraîchissement du favicon
    const timestamp = new Date().getTime();
    document.querySelectorAll('link[rel*="icon"]').forEach((link: any) => {
      if (link.href.includes('favicon')) {
        link.href = link.href.split('?')[0] + '?v=' + timestamp;
      }
    });

    // Ajouter la couleur de thème
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#2563eb');
  }, []);

  return (
    <FirebaseAuthProvider>
      <AuthProvider>
        <Router>
          <Toaster position="top-right" richColors closeButton />
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <AnimatedRoutes />
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </FirebaseAuthProvider>
  );
}