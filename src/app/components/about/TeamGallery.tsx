import { useState } from 'react';
import teamPhoto1 from 'figma:asset/421ad7f275db81daacf34d20398a808d77c87ab7.png';
import teamPhoto2 from 'figma:asset/4ca58fc1eea6daeebc78764f583d459e4c05a390.png';

export function TeamGallery() {
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [teamPhoto1, teamPhoto2];

  return (
    <div className="relative">
      {/* Main Photo Display */}
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
        <img
          src={photos[activePhoto]}
          alt={`Équipe CCNTS - Photo ${activePhoto + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-3 mt-4 justify-center">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setActivePhoto(index)}
            className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              activePhoto === index
                ? 'border-orange-600 scale-105'
                : 'border-gray-300 hover:border-orange-400 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={photo}
              alt={`Miniature ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-2xl -z-10"></div>
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
      
      {/* Team Label */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm text-gray-900">Notre équipe</p>
      </div>
    </div>
  );
}
