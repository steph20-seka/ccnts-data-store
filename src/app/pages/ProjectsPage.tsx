import { motion } from 'motion/react';
import { MapPin, Layers, TrendingUp, Leaf, Building2, Globe2, Database, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';

const projects = [
  {
    title: 'Cartographie et planification urbaine',
    domain: 'Aménagement du territoire',
    description: 'Élaboration de cartes thématiques et modèles spatiaux pour la planification stratégique des espaces urbains. Analyse des infrastructures, zonage territorial et modélisation de croissance urbaine.',
    image: 'https://images.unsplash.com/photo-1762417420538-3735a7299b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwc3VydmV5fGVufDF8fHx8MTc2ODQ3OTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Plans d\'occupation des sols',
      'Études d\'impact territorial',
      'Cartographie des réseaux',
      'Modélisation 3D urbaine',
    ],
  },
  {
    title: 'Analyse de couverture terrestre',
    domain: 'Télédétection',
    description: 'Traitement d\'images satellites pour le suivi de l\'occupation du sol et des changements environnementaux. Utilisation de capteurs multispectraux et radar pour une analyse précise.',
    image: 'https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXMlMjBtYXBwaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3Njg0Nzk1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Classification d\'images satellites',
      'Détection de changements',
      'Cartographie de la végétation',
      'Analyse multitemporelle',
    ],
  },
  {
    title: 'Études statistiques territoriales',
    domain: 'Analyse de données',
    description: 'Modélisation statistique et analyse prédictive pour l\'aide à la décision stratégique. Développement d\'indicateurs et tableaux de bord pour le suivi territorial.',
    image: 'https://images.unsplash.com/photo-1727372059235-2eabafde56fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbW9uaXRvcmluZyUyMHJlbW90ZXxlbnwxfHx8fDE3Njg0Nzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    features: [
      'Analyses démographiques spatiales',
      'Modélisation prédictive',
      'Études de corrélation',
      'Tableaux de bord interactifs',
    ],
  },
  {
    title: 'Gestion des ressources naturelles',
    domain: 'Environnement',
    description: 'Cartographie et monitoring pour la gestion durable des ressources agricoles et forestières. Suivi de la biodiversité et évaluation environnementale.',
    image: 'https://images.unsplash.com/photo-1756737865087-4bbb8cae8d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGxhbmQlMjBhbmFseXNpc3xlbnwxfHx8fDE3Njg0Nzk1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Cartographie forestière',
      'Suivi des cultures',
      'Évaluation des ressources en eau',
      'Études d\'impact environnemental',
    ],
  },
];

const additionalDomains = [
  {
    icon: Building2,
    title: 'Infrastructure & Réseaux',
    description: 'Cartographie des réseaux routiers, électriques et télécommunications',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Globe2,
    title: 'Développement territorial',
    description: 'Plans directeurs et schémas d\'aménagement régionaux',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Database,
    title: 'Bases de données géospatiales',
    description: 'Conception et gestion de systèmes d\'information géographique',
    color: 'from-orange-600 to-red-600',
  },
  {
    icon: Shield,
    title: 'Gestion des risques',
    description: 'Cartographie des zones à risque et planification d\'urgence',
    color: 'from-green-600 to-emerald-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProjectsPage() {
  return (
    <>
      <SEOHead pageKey="projects" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXMlMjBtYXBwaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3Njg0Nzk1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Projets géospatiaux"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Nos réalisations &{' '}
              <span className="text-orange-400 drop-shadow-lg">
                domaines d'intervention
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Des projets géospatiaux concrets au service du développement territorial
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Projects Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                      
                      <div className="absolute bottom-6 left-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                      {project.domain}
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Domains */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Autres{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
                domaines d'expertise
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une palette complète de services géospatiaux pour tous vos besoins
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}>
                  <Card className="p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    <div className={`w-14 h-14 bg-gradient-to-br ${domain.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {domain.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {domain.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour discuter de vos besoins et vous proposer des solutions adaptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/services">
                  Voir nos services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;