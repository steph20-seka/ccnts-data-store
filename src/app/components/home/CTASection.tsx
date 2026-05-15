import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white p-8 sm:p-12 lg:p-16 shadow-2xl rounded-xl border border-white/10">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl -mr-36 -mt-36"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-orange-400/40">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-bold text-white">Prêt à démarrer votre projet ?</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-lg">
                Transformez vos données en décisions stratégiques
              </h2>

              {/* Subheading */}
              <p className="text-blue-100 text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
                Contactez-nous dès aujourd'hui pour discuter de votre projet de cartographie, 
                d'analyse SIG ou de télédétection.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white border-0 w-full sm:w-auto px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/contact">
                    Démarrer un projet
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Link>
                </Button>

                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-blue-900 border-2 border-white w-full sm:w-auto px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://wa.me/2250759910843" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-3 w-6 h-6" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-white/30">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-orange-400 drop-shadow-lg">10+</div>
                    <p className="text-white text-base sm:text-lg font-semibold">Années d'expérience</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-orange-400 drop-shadow-lg">100+</div>
                    <p className="text-white text-base sm:text-lg font-semibold">Étudiants formés</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-orange-400 drop-shadow-lg">50+</div>
                    <p className="text-white text-base sm:text-lg font-semibold">Projets réalisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}