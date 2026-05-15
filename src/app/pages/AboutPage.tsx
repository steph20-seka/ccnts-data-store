import { Target, Eye, Briefcase, CheckCircle, Globe, TrendingUp, Sparkles, Zap, Award, Users } from 'lucide-react';
import { Card } from '../components/ui/card';
import { TeamGallery } from '../components/about/TeamGallery';
import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';

const approaches = [
  {
    icon: Globe,
    title: 'Exploitation experte des images satellites et aériennes',
    description: 'Maîtrise avancée de la télédétection multicapteurs pour une observation précise du territoire.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Analyses SIG de haute précision',
    description: 'Traitement géospatial rigoureux pour des résultats fiables et certifiés.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Modèles statistiques robustes',
    description: 'Approches méthodologiques éprouvées pour des analyses prédictives solides.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: CheckCircle,
    title: 'Interprétation fiable et reproductible',
    description: 'Processus standardisés garantissant la qualité et la traçabilité des résultats.',
    color: 'from-green-500 to-emerald-500',
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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function AboutPage() {
  return (
    <>
      <SEOHead pageKey="about" />
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm tracking-wide">À PROPOS DE NOUS</span>
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
                Cabinet de Cartographie
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300">
                Numérique & Télédétection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              💻🌍 Une <strong className="text-white">intelligence géospatiale</strong> au service du territoire
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 text-blue-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-sm">Cartographie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-sm">Télédétection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-sm">Statistiques</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Who We Are - Redesigned */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium tracking-wide">QUI SOMMES-NOUS ?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                L'excellence géospatiale{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  au service de vos projets
                </span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le CCNTS est un cabinet spécialisé dans la <strong className="text-blue-600">cartographie numérique</strong>,{' '}
                  la <strong className="text-purple-600">télédétection multicapteurs</strong> et l'<strong className="text-orange-600">analyse statistique</strong>{' '}
                  appliquée aux dynamiques territoriales.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous mettons la science, la technologie et la rigueur méthodologique au service 
                  du <strong className="text-green-600">développement durable</strong>, de la <strong className="text-blue-600">planification</strong>,{' '}
                  de la <strong className="text-orange-600">gestion des ressources</strong> et de l'<strong className="text-purple-600">aide à la décision</strong>.
                </p>

                <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-2xl border-2 border-blue-200 mt-8">
                  <p className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    Nous développons une <strong className="text-blue-600">intelligence géospatiale</strong> au service du territoire.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleVariants} className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-200 rounded-3xl -z-10" />
              <TeamGallery />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach - Bold Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium tracking-wide">NOTRE APPROCHE</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Excellence scientifique et{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                rigueur méthodologique
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} className="h-full">
                  <Card className="p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden group">
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative flex flex-col h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${approach.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {approach.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-10 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white border-0 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Une exigence qualité respectant les standards internationaux
                </h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                  Nos processus et méthodologies sont alignés sur les meilleures pratiques internationales 
                  en matière de géomatique et d'analyse spatiale.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Engagement - Stunning Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} whileHover={{ y: -12 }}>
              <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Garantir à chaque partenaire une <strong className="text-blue-600">donnée fiable</strong>,{' '}
                    une <strong className="text-blue-600">compréhension solide du territoire</strong> et des{' '}
                    <strong className="text-blue-600">solutions analytiques de haute valeur stratégique</strong>.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} whileHover={{ y: -12 }}>
              <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Faire du CCNTS un <strong className="text-orange-600">acteur majeur de l'information géospatiale</strong>,{' '}
                    capable d'anticiper les enjeux, d'innover constamment et de contribuer 
                    de manière audacieuse à la transformation des territoires.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Engagement */}
            <motion.div variants={itemVariants} whileHover={{ y: -12 }}>
              <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-300 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre engagement institutionnel</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Accompagner les <strong className="text-green-600">administrations publiques</strong>,{' '}
                    les <strong className="text-green-600">organisations internationales</strong>, les <strong className="text-green-600">collectivités</strong>,{' '}
                    les <strong className="text-green-600">ONG</strong> et les <strong className="text-green-600">entreprises</strong>.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Provide - Sleek Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium tracking-wide">CE QUE NOUS FOURNISSONS</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Des solutions qui font{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                la différence
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: CheckCircle,
                title: 'Données certifiées et vérifiables',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: TrendingUp,
                title: 'Analyses stratégiques claires',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                icon: Globe,
                title: 'Cartes opérationnelles, accessibles et durables',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: Eye,
                title: 'Outils de visualisation intelligents',
                gradient: 'from-purple-500 to-pink-500',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.05 }}>
                  <Card className="p-8 h-full border-0 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;