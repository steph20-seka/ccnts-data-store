import { Quote } from 'lucide-react';
import { Card } from '../ui/card';
import princeOumarImage from 'figma:asset/13dd0925c48e482d0f6ede094312782c9b0c6ff9.png';
import joseMorelImage from 'figma:asset/849b4768ee2b645bbce8398280c03ae92ae2671a.png';
import sarhaKenzyImage from 'figma:asset/48942d12ff43c212fe12598208839774cda1f800.png';
import yvesKouassiImage from 'figma:asset/19e752a0614b2488f19d076fcd2143c0d59c2953.png';
import ndaFidelImage from 'figma:asset/5abbf524c3ba38b4f9ae8576b652fdfc1abf33cf.png';
import themongomaimoImage from 'figma:asset/324a52093db6652c257e8884cacdfd9f1fc9b58c.png';

const testimonials = [
  {
    name: 'Prince Oumar',
    role: 'Étudiant en géographie',
    content: 'Le meilleur cabinet de formation de cartographie numérique, de télédétection et statistiques ❤️',
    image: princeOumarImage,
  },
  {
    name: 'José Morel Hounnadé',
    role: 'Client, Bouaké',
    content: 'Jusque là le CCNTS reste le meilleur cabinet de cartographie de Bouaké',
    image: joseMorelImage,
  },
  {
    name: 'Sarha Kenzy',
    role: 'Étudiante en cartographie',
    content: 'Très belle expérience, je recommande leur cabinet à tout ceux qui veulent apprendre la cartographie car ce sont les meilleurs. Merci à vous chers formateurs que Dieu dans sa bonté vous récompense merci à vous. 🙏🙏',
    image: sarhaKenzyImage,
  },
  {
    name: 'Yves Kouassi',
    role: 'Étudiant formé',
    content: 'Une formation de niveau très élevé, remplie de compétences avec des formateurs de niveau très élevé. J\'en suis témoin.',
    image: yvesKouassiImage,
  },
  {
    name: 'N\'da Fidel Kouadio',
    role: 'Géographe',
    content: 'Mes félicitations à tous. Très belle expérience professionnelle pour nous les géographes et les utilisateurs de la cartographie numérique. Grand merci aux éminents formateurs et surtout au premier responsable M. Derka.',
    image: ndaFidelImage,
  },
  {
    name: 'Thémongomaïmouna Koné',
    role: 'Étudiante formée',
    content: 'Une formation pleine d\'expérience, vous êtes les meilleurs chers formateurs. Merci infiniment pour l\'opportunité.',
    image: themongomaimoImage,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Plus d'espace et hiérarchie claire */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
            <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wider uppercase">Témoignages clients</span>
            <div className="h-0.5 w-12 sm:w-16 bg-orange-600"></div>
          </div>
          <h2 className="text-gray-900 mb-5 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos clients disent de notre expertise et de nos solutions géospatiales.
          </p>
        </div>

        {/* Testimonials Grid - Plus d'espace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 sm:p-8 bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Quote className="w-12 h-12 text-blue-200 mb-5" />
              
              {/* Avatar (if available) */}
              {testimonial.image && (
                <div className="mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-md"
                  />
                </div>
              )}
              
              <p className="text-gray-700 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-5 sm:pt-6 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-lg mb-1">{testimonial.name}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-2">{testimonial.role}</p>
                {testimonial.project && (
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                    {testimonial.project}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}