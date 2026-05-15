import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Youtube, Facebook, Linkedin, ArrowRight, Send, Sparkles, MessageCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';
import { SatelliteAnimation } from '../components/SatelliteAnimation';
import { SEOHead } from '../components/SEOHead';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Localisation',
    content: (
      <>
        <p className="text-gray-600 text-sm">
          Côte d'Ivoire<br />
          Bouaké & Abidjan
        </p>
        <div className="mt-3 space-y-2 text-xs text-gray-500">
          <div>
            <p className="font-medium text-gray-700">Bouaké:</p>
            <p className="font-mono">7.6934, -5.0279</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Abidjan:</p>
            <p className="font-mono">5.3252, -4.0243</p>
          </div>
        </div>
      </>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:ccnts.cabinet33@gmail.com" className="text-blue-600 hover:underline text-sm break-all">
        ccnts.cabinet33@gmail.com
      </a>
    ),
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: (
      <div className="space-y-1 text-sm">
        <a href="https://wa.me/2250759910843" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">
          +225 07 59 91 08 43
        </a>
        <a href="https://wa.me/2250787226589" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">
          +225 07 87 22 65 89
        </a>
        <a href="https://wa.me/2250103948876" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">
          +225 01 03 94 88 76
        </a>
      </div>
    ),
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: MessageCircle,
    title: 'Chaîne WhatsApp',
    content: (
      <a 
        href="https://whatsapp.com/channel/0029VbBlLEpKQuJFHF4uek2v" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline text-sm"
      >
        Suivre la chaîne CCNTS
      </a>
    ),
    gradient: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    content: (
      <a 
        href="https://youtube.com/@ccnts_media?si=vKc2KghtzDQ6sZp9" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline text-sm"
      >
        @ccnts_media
      </a>
    ),
    gradient: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    content: (
      <a 
        href="https://www.facebook.com/share/p/1DT1isrTz6/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline text-sm"
      >
        CCNTS Cabinet
      </a>
    ),
    gradient: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: (
      <a 
        href="https://www.linkedin.com/company/cabinet-de-cartographie-de-t%C3%A9l%C3%A9d%C3%A9tection-et-de-statistique/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline text-sm"
      >
        CCNTS sur LinkedIn
      </a>
    ),
    gradient: 'from-blue-700 to-blue-900',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: (
      <p className="text-gray-600 text-sm">
        Lundi - Vendredi<br />
        9h00 - 18h00
      </p>
    ),
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
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

export function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEOHead pageKey="contact" />
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 sm:py-24 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"
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
          <motion.div
            className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
                Besoin d'une expertise
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-yellow-200 to-pink-300">
                géospatiale ?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-10"
            >
              Notre équipe est prête à vous accompagner dans vos projets les plus ambitieux. 
              Demandez un devis personnalisé dès maintenant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            >
              <Button 
                size="lg" 
                asChild 
                className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                <Link to="/about" className="flex items-center gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  En savoir plus sur nous
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Contact Section - Two Columns */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Info Cards - Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-1 space-y-3 sm:space-y-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div key={index} variants={itemVariants} whileHover={{ x: 8, scale: 1.02 }}>
                    <Card className="p-4 sm:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
                      {/* Hover Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className="relative flex items-start gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-gray-900 text-sm sm:text-base mb-2">{info.title}</h3>
                          <div className="break-words">{info.content}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 sm:p-8 lg:p-10 border-0 shadow-2xl bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
                <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-30 -z-10" />

                <div className="relative">
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3 sm:mb-4">
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      <span className="text-xs sm:text-sm text-blue-700 tracking-wide">FORMULAIRE DE CONTACT</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2">
                      Envoyez-nous un{' '}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        message
                      </span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">Nous vous répondrons dans les plus brefs délais</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jean Dupont"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jean.dupont@example.com"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                          Téléphone / WhatsApp
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+225 07 XX XX XX XX"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                          Sujet <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Demande de devis"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre projet ou votre besoin..."
                        className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200 resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Envoyer le message
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Satellite Section - Geospatial Monitoring */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcnMiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Satellite Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 sm:h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              <SatelliteAnimation />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <Globe className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-200 tracking-wide font-medium">SURVEILLANCE GÉOSPATIALE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300">
                  Données satellitaires
                </span>
                <br />
                <span className="text-white">
                  en temps réel
                </span>
              </h2>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Grâce à la <strong className="text-white">télédétection multicapteurs</strong> et à l'analyse d'images satellites, 
                nous localisons avec précision vos zones d'intérêt et suivons les évolutions territoriales en temps réel.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Localisation GPS précise</h3>
                    <p className="text-blue-200 text-sm">Coordonnées exactes : Bouaké (7.6934, -5.0279) • Abidjan (5.3252, -4.0243)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Couverture nationale</h3>
                    <p className="text-blue-200 text-sm">Analyse de l'ensemble du territoire ivoirien et au-delà</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Technologies de pointe</h3>
                    <p className="text-blue-200 text-sm">Sentinel-2, Landsat, imagerie haute résolution et drones</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="relative py-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] sm:h-[500px] bg-gray-200 relative overflow-hidden"
        >
          {/* Map Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent z-10 pointer-events-none" />
          
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-5.2%2C5.1%2C-3.8%2C8.0&layer=mapnik&marker=7.6934%2C-5.0279&marker=5.3252%2C-4.0243"
            className="w-full h-full border-0"
            title="Map location"
          ></iframe>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 max-w-[calc(100%-2rem)] sm:max-w-sm"
          >
            <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-md shadow-2xl border-0">
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm sm:text-lg text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    CCNTS - Côte d'Ivoire
                  </p>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Bouaké:</span>
                  <span className="font-mono text-gray-600">7.6934, -5.0279</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Abidjan:</span>
                  <span className="font-mono text-gray-600">5.3252, -4.0243</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Final Touch */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl"
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
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-yellow-300" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
              Prêt à démarrer votre projet géospatial ?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Rejoignez les organisations qui nous font confiance pour leurs analyses territoriales
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg shadow-xl w-full sm:w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Remonter au formulaire
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;