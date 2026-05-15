import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Layers, TrendingUp, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProjectsCards() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
            <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">
              Nos domaines d'intervention
            </span>
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
          </div>
          <h2 className="text-gray-900 mb-5 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Projets & Expertises
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Des solutions géospatiales adaptées à vos besoins
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedCards.has(index);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <Card className="overflow-hidden border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Domain Badge */}
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3 self-start">
                      {project.domain}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Description with truncation */}
                    <div className="flex-1">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={isExpanded ? 'expanded' : 'collapsed'}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`text-gray-600 text-sm leading-relaxed ${
                            !isExpanded ? 'line-clamp-3' : ''
                          }`}
                        >
                          {project.description}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    {/* See More/Less Button */}
                    <button
                      onClick={() => toggleCard(index)}
                      className="mt-4 flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors group/btn"
                    >
                      <span>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
