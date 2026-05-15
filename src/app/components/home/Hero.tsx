import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { ArrowRight, MapPin, Satellite, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Logo } from '../Logo';

export function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Image with Overlay - Improved visibility */}
      <div className="absolute inset-0">
        {/* Dark overlay pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/65 to-black/60 z-10"></div>
        
        {/* Image de fond - Nouvelle image professionnelle cartographie numérique */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1631016800686-1b3524982956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFwcGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4NDk0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cartographie numérique et technologie géospatiale"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden lg:block z-20">
        <svg className="absolute top-20 right-20 w-96 h-96" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
        <div className="max-w-4xl">
          {/* Logo Badge */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <Logo size="xl" />
          </div>

          {/* Main Headline - Responsive sizes avec hiérarchie améliorée */}
          <h1 className="text-white mb-6 sm:mb-8 lg:mb-10 max-w-3xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight drop-shadow-lg">
            {t('home.hero.title')}
          </h1>

          {/* Subheadline avec plus d'espace */}
          <p className="text-blue-100 text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 lg:mb-14 max-w-2xl leading-relaxed drop-shadow">
            {t('home.hero.subtitle')}
          </p>

          {/* Key Features avec plus d'espace */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-14 lg:mb-16 max-w-2xl">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3.5 sm:py-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">{t('home.hero.feature1')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3.5 sm:py-4">
              <Satellite className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">{t('home.hero.feature2')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3.5 sm:py-4">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">{t('home.hero.feature3')}</span>
            </div>
          </div>

          {/* CTAs - Plus visibles et plus grands */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button
              size="lg"
              onClick={() => navigate('/services')}
              className="bg-orange-600 hover:bg-orange-700 text-white border-0 w-full sm:w-auto px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm w-full sm:w-auto px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t('home.hero.ctaContact')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}