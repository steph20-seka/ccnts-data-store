import { motion } from 'motion/react';

export function SatelliteAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbite */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 border-2 border-dashed border-blue-300 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Terre au centre */}
      <motion.div
        className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 shadow-2xl overflow-hidden"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Continents simulés */}
        <div className="absolute top-2 left-3 w-4 h-3 bg-green-600 rounded-full opacity-60" />
        <div className="absolute bottom-3 right-2 w-5 h-4 bg-green-600 rounded-sm opacity-60" />
        <div className="absolute top-1/2 left-1 w-3 h-5 bg-green-600 rounded-full opacity-60" />
        
        {/* Nuages */}
        <div className="absolute top-4 right-2 w-3 h-2 bg-white rounded-full opacity-40 blur-[1px]" />
        <div className="absolute bottom-2 left-4 w-4 h-2 bg-white rounded-full opacity-30 blur-[1px]" />
      </motion.div>

      {/* Satellite en orbite */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute -top-2 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Corps du satellite */}
          <div className="relative">
            {/* Panneau solaire gauche */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-7 h-12 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 border border-yellow-400 shadow-lg">
              <div className="grid grid-cols-2 gap-[2px] p-[2px] h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-blue-800 border border-blue-400" />
                ))}
              </div>
            </div>

            {/* Corps principal */}
            <div className="w-6 h-6 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded shadow-xl border border-gray-400 relative">
              {/* Antenne */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gray-400" />
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-lg animate-pulse" />
              
              {/* Détails */}
              <div className="absolute inset-1 border border-gray-500 rounded-sm" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
            </div>

            {/* Panneau solaire droit */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-7 h-12 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 border border-yellow-400 shadow-lg">
              <div className="grid grid-cols-2 gap-[2px] p-[2px] h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-blue-800 border border-blue-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Signaux du satellite */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
          <motion.div
            className="absolute w-16 h-16 border-2 border-green-400 rounded-full opacity-0"
            animate={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute w-16 h-16 border-2 border-blue-400 rounded-full opacity-0"
            animate={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>

      {/* Étoiles scintillantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-200 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
