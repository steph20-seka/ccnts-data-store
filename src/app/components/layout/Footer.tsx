import { useLocation } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Youtube, Facebook, MapPin } from 'lucide-react';
import { TransitionLink } from '../TransitionLink';
import { Logo } from '../Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Navigation links
  const navigationLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projets' },
    { path: '/academy', label: 'Académie' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  // Services links
  const servicesLinks = [
    'Cartographie numérique',
    'Analyse spatiale SIG',
    'Télédétection',
    'Modélisation territoriale',
    'Statistiques & Data science',
  ];

  // Filter out the current page from navigation
  const filteredLinks = navigationLinks.filter(link => link.path !== location.pathname);

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-sm sm:text-base mb-6 leading-relaxed text-gray-200 font-medium">
              Cabinet de Cartographie Numérique, de Télédétection et de Statistiques
            </p>
            <p className="text-sm text-blue-200 mb-6 leading-relaxed">
              Excellence scientifique et rigueur méthodologique au service de vos projets géospatiaux.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@ccnts_media"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573009203231"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/num%C3%A9rique-de-t%C3%A9l%C3%A9d%C3%A9tection-et-de-statistique-cabinet-de-cartographie-0b339a396/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-5 sm:mb-6 text-lg sm:text-xl font-bold">Navigation rapide</h3>
            <ul className="space-y-3">
              {filteredLinks.map(link => (
                <li key={link.path}>
                  <TransitionLink to={link.path} className="text-sm sm:text-base text-gray-200 hover:text-orange-400 transition-colors flex items-center gap-2 group font-medium">
                    <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300"></span>
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-5 sm:mb-6 text-lg sm:text-xl font-bold">Nos expertises</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-200">
              {servicesLinks.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1 font-bold">•</span>
                  <span className="hover:text-orange-400 transition-colors cursor-pointer font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-5 sm:mb-6 text-lg sm:text-xl font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-400" />
                <span className="text-gray-200 font-medium">
                  Côte d'Ivoire<br />
                  Bouaké & Abidjan
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <Mail className="w-5 h-5 flex-shrink-0 text-orange-400" />
                <a href="mailto:ccnts.cabinet33@gmail.com" className="hover:text-orange-400 transition-colors break-all text-gray-200 font-medium">
                  ccnts.cabinet33@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-400" />
                <div className="space-y-2 text-gray-200 font-medium">
                  <a href="tel:+2250759910843" className="hover:text-orange-400 transition-colors block">
                    +225 07 59 91 08 43
                  </a>
                  <a href="tel:+2250787226589" className="hover:text-orange-400 transition-colors block">
                    +225 07 87 22 65 89
                  </a>
                  <a href="tel:+2250103948876" className="hover:text-orange-400 transition-colors block">
                    +225 01 03 94 88 76
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 sm:mt-16 pt-8 sm:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-gray-200 text-center md:text-left font-medium">
              &copy; {currentYear} CCNTS. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-200 font-medium">
              <TransitionLink to="/about" className="hover:text-orange-400 transition-colors">
                À propos
              </TransitionLink>
              <span className="text-gray-400">•</span>
              <TransitionLink to="/services" className="hover:text-orange-400 transition-colors">
                Services
              </TransitionLink>
              <span className="text-gray-400">•</span>
              <TransitionLink to="/contact" className="hover:text-orange-400 transition-colors">
                Contact
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}