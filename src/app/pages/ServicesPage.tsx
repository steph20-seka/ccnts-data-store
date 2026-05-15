import { Link } from 'react-router-dom';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { TrainingSection } from '../components/services/TrainingSection';
import { ToolsSection } from '../components/services/ToolsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function ServicesPage() {
  return (
    <>
      <SEOHead pageKey="services" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-0.5 w-12 sm:w-16 bg-orange-400"></div>
              <span className="text-orange-300 font-semibold text-sm sm:text-base tracking-wider uppercase">Nos services</span>
            </div>
            <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Solutions géospatiales complètes
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Du traitement d'images satellites à la création de cartes thématiques, 
              notre expertise couvre l'ensemble de vos besoins en analyse spatiale et géomatique.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid />
        </div>
      </section>

      {/* Training Section */}
      <TrainingSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
}

export default ServicesPage;