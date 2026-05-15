import { motion } from 'motion/react';
import { Calendar, ArrowRight, Newspaper, Megaphone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const newsItems = [
  {
    type: 'Actualité',
    date: 'À venir',
    title: 'Nouveaux services géospatiaux',
    description: 'Le CCNTS élargit continuellement son offre de services pour répondre aux besoins croissants en analyse territoriale.',
    icon: Megaphone,
    color: 'from-blue-500 to-cyan-500',
    badge: 'À venir',
  },
  {
    type: 'Formation',
    date: 'Prochainement',
    title: 'Sessions de formation avancée',
    description: 'Découvrez nos formations en SIG, télédétection et analyse de données géospatiales.',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    badge: 'Formation',
  },
  {
    type: 'Publication',
    date: 'En cours',
    title: 'Études et rapports techniques',
    description: 'Consultez nos publications et études de cas sur les projets de cartographie et d\'analyse spatiale.',
    icon: Newspaper,
    color: 'from-orange-500 to-red-500',
    badge: 'Publication',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function NewsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-geospatial-blue-100 to-geospatial-purple-100 rounded-full opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-geospatial-orange-600"></div>
            <span className="text-geospatial-orange-600 text-sm tracking-wide uppercase font-medium">
              Actualités
            </span>
            <div className="h-px w-12 bg-geospatial-orange-600"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Restez{' '}
            <span className="text-geospatial-orange-600">
              informés
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suivez nos dernières actualités, formations et publications
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-200 p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-geospatial-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}