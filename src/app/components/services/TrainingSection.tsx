import { GraduationCap, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const trainings = [
  {
    icon: Users,
    title: 'Formations Privées One-to-One',
    description: 'Des sessions individuelles adaptées au niveau, au rythme et aux besoins spécifiques de chaque apprenant. Ces formations personnalisées permettent d\'avancer plus vite et de maîtriser des compétences de cartographie, SIG, télédétection ou statistiques avec un accompagnement exclusif.',
    features: [
      'Accompagnement personnalisé',
      'Rythme adapté à vos besoins',
      'Flexibilité maximale',
    ],
  },
  {
    icon: BookOpen,
    title: 'Formations Modulées (Flexibles)',
    description: 'Des parcours sur mesure basés sur des modules indépendants. Les apprenants peuvent choisir uniquement les compétences dont ils ont besoin : SIG (QGIS, ArcGIS), Imagerie satellite, Analyse statistique, Data science géospatiale, Modélisation territoriale, Télédétection & traitement d\'images.',
    features: [
      'Modules courts et ciblés',
      'Choix à la carte',
      'Application immédiate',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Formations Complètes (Programmes Intégraux)',
    description: 'Des parcours structurés pour devenir opérationnel de A à Z. Ces programmes incluent : Théorie + pratique, Exercices guidés, Mini-projets, et Certification CCNTS. Ils s\'adressent aux débutants comme aux professionnels souhaitant monter en compétence.',
    features: [
      'Programme complet théorie + pratique',
      'Projets encadrés',
      'Certification CCNTS',
    ],
  },
];

export function TrainingSection() {
  return (
    <section id="nos-formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-blue-600 text-sm tracking-wide uppercase">Nos formations</span>
            <div className="h-px w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-gray-900 mb-4">
            Développez vos compétences géospatiales
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des formations professionnelles adaptées à tous les niveaux, du débutant au professionnel confirmé.
          </p>
        </div>

        {/* Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => {
            const Icon = training.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 group hover:border-blue-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 mb-4">
                  {training.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {training.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {training.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous souhaitez une formation personnalisée pour votre équipe ?
          </p>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">
              Contactez-nous pour un devis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}