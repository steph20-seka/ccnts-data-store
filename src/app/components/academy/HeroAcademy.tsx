import { GraduationCap, BookOpen } from 'lucide-react';

export function HeroAcademy() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            🎓 Bienvenue dans l'Académie CCNTS
          </h1>
          
          <p className="text-blue-100 text-xl sm:text-2xl lg:text-3xl mb-10 sm:mb-12 leading-relaxed">
            Accédez à nos cours gratuits et nos formations en ligne pour renforcer vos compétences 
            en cartographie, SIG, télédétection et statistiques.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-blue-200">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3 sm:py-3.5">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base font-medium">Cours gratuits</span>
            </div>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3 sm:py-3.5">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm sm:text-base font-medium">Vidéos YouTube</span>
            </div>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3 sm:py-3.5">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base font-medium">Formations certifiantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}