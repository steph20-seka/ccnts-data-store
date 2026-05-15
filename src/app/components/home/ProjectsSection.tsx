import { motion } from 'motion/react';
import { MapPin, Layers, TrendingUp, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const projects = [
  {
    title: 'Cartographie et planification urbaine',
    domain: 'Aménagement du territoire',
    description: 'Élaboration de cartes thématiques et modèles spatiaux pour la planification stratégique des espaces urbains.',
    image: 'https://images.unsplash.com/photo-1762417420538-3735a7299b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwc3VydmV5fGVufDF8fHx8MTc2ODQ3OTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Analyse de couverture terrestre',
    domain: 'Télédétection',
    description: 'Traitement d\'images satellites pour le suivi de l\'occupation du sol et des changements environnementaux.',
    image: 'https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXMlMjBtYXBwaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3Njg0Nzk1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Études statistiques territoriales',
    domain: 'Analyse de données',
    description: 'Modélisation statistique et analyse prédictive pour l\'aide à la décision stratégique.',
    image: 'https://images.unsplash.com/photo-1727372059235-2eabafde56fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbW9uaXRvcmluZyUyMHJlbW90ZXxlbnwxfHx8fDE3Njg0Nzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Gestion des ressources naturelles',
    domain: 'Environnement',
    description: 'Cartographie et monitoring pour la gestion durable des ressources agricoles et forestières.',
    image: 'https://images.unsplash.com/photo-1756737865087-4bbb8cae8d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGxhbmQlMjBhbmFseXNpc3xlbnwxfHx8fDE3Njg0Nzk1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ProjectsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-geospatial-blue-600"></div>
            <span className="text-geospatial-blue-600 text-sm tracking-wide uppercase font-medium">
              Nos Réalisations
            </span>
            <div className="h-px w-12 bg-geospatial-blue-600"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Projets et{' '}
            <span className="text-gray-900">
              domaines d'intervention
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions géospatiales concrètes pour des projets d'envergure
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    
                    {/* Domain Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow-lg">
                        {project.domain}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-geospatial-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-geospatial-blue-600 hover:bg-geospatial-blue-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              Discuter de votre projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}