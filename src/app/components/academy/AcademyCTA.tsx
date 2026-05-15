import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Link } from 'react-router-dom';

export function AcademyCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 sm:p-12 lg:p-16 text-center overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full opacity-20 -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-white mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              🚀 Envie d'aller plus loin ?
            </h2>
            
            <p className="text-blue-100 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos formations one-to-one, modulaires et programmes complets pour devenir 
              un expert en géomatique, SIG et analyse spatiale.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/services#nos-formations">
                  👉 Voir les Formations CCNTS
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Demander un devis personnalisé
                </Link>
              </Button>
            </div>

            <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center">
                <div className="space-y-3">
                  <div className="text-5xl mb-3">🎓</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">Formations certifiantes</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl mb-3">👥</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">Accompagnement personnalisé</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl mb-3">💼</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">Projets pratiques</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}