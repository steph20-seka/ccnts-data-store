import { Award, Users, Zap, Shield, GraduationCap } from 'lucide-react';
import whyChooseImage from 'figma:asset/494d8b48e6304bf2253a02ba88eb41856647e880.png';

const reasons = [
  {
    icon: Award,
    title: 'Expertise reconnue',
    description: '5 ans d\'expérience dans le domaine de la géomatique et de l\'analyse spatiale.',
  },
  {
    icon: Users,
    title: 'Équipe qualifiée',
    description: 'Géographes, data scientists et ingénieurs spécialisés en géospatial.',
  },
  {
    icon: GraduationCap,
    title: 'Plus de 100 étudiants formés',
    description: 'Formation de qualité en géomatique, SIG et analyse de données spatiales.',
  },
  {
    icon: Zap,
    title: 'Technologies de pointe',
    description: 'Utilisation des outils les plus avancés : QGIS, ArcGIS, Python, R, imagerie satellite.',
  },
  {
    icon: Shield,
    title: 'Précision & rigueur',
    description: 'Méthodologie scientifique rigoureuse pour des résultats fiables et précis.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={whyChooseImage}
                alt="Pourquoi choisir CCNTS"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
          </div>

          {/* Right: Content - Plus d'espace et hiérarchie claire */}
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
              <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">Pourquoi nous choisir</span>
            </div>
            
            <h2 className="text-gray-900 mb-5 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Votre partenaire de confiance en solutions géospatiales
            </h2>
            
            <p className="text-gray-600 text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed">
              CCNTS combine expertise scientifique, technologies de pointe et approche personnalisée 
              pour vous offrir des solutions géospatiales adaptées à vos défis les plus complexes.
            </p>

            <div className="space-y-7 sm:space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-5 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2 text-xl sm:text-2xl font-semibold leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}