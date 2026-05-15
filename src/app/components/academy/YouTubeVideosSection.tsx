import { Play, ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import videoThumbnail from 'figma:asset/56499ee16afa3f1b06b4aadcec38d96f8be5a3de.png';

const youtubeVideos = [
  {
    title: 'Maîtriser le tracé automatique en numérisation avancée',
    description: 'Dans cette vidéo, découvrez comment maîtriser le tracé automatique en numérisation avancée pour optimiser vos projets de cartographie et de géospatial. Apprenez à exploiter les outils et techniques essentiels pour gagner en précision et en efficacité dans vos travaux numériques. Que vous soyez débutant ou utilisateur avancé, cette formation vous guide pas à pas vers une meilleure maîtrise des fonctions automatiques de numérisation.',
    thumbnail: videoThumbnail,
    videoUrl: 'https://youtu.be/KW9JJOKiVcU?si=i4ytDyvyiUY1kkJ_',
    duration: '10:15',
    views: '850',
  },
  {
    title: 'La méthode efficace pour corriger une couche déjà numérisée sans tout reprendre 😮',
    description: 'Il t\'est déjà arrivé de terminer une numérisation dans QGIS… puis de te rendre compte qu\'il y a une erreur ? Pas besoin de tout supprimer ! Découvre une méthode simple pour modifier une couche polygonale sans perdre ton travail.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    videoUrl: 'https://youtu.be/bQyYFPOLN7A?si=IaBZ900rasiqbkPJ',
    duration: '8:45',
    views: '1.2K',
  },
  {
    title: 'Transformer un fichier CSV en fichier vectoriel sur QGIS',
    description: 'Je vous montre étape par étape comment transformer un fichier CSV contenant des coordonnées GPS en un fichier vectoriel exploitable dans QGIS. Méthode indispensable pour cartographier vos points GPS collectés sur le terrain.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    videoUrl: 'https://youtu.be/B7TQYkop2K4?si=RwqnNQ2qrvF5N28t',
    duration: '12:30',
    views: '2.8K',
  },
  {
    title: '✨ Astuce SIG : Le mosaïquage facile dans ArcMap (Guide Complet)',
    description: 'Le mosaïquage consiste à assembler plusieurs images satellites ou tuiles de MNT pour obtenir une seule image continue et homogène. Apprenez à réaliser cette opération essentielle pas à pas avec ArcMap.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    videoUrl: 'https://youtu.be/PYq9RtvbnOM?si=RSywbwbqHFDIdxez',
    duration: '15:20',
    views: '3.1K',
  },
  // Ajoutez vos autres vidéos YouTube CCNTS ici
];

export function YouTubeVideosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-red-600"></div>
            <span className="text-red-600 text-sm tracking-wide uppercase">Vidéos YouTube</span>
            <div className="h-px w-12 bg-red-600"></div>
          </div>
          <h2 className="text-gray-900 mb-4">
            ▶️ Nos cours disponibles sur YouTube
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Accédez à toutes nos vidéos pédagogiques publiées sur la chaîne YouTube du CCNTS
          </p>
          <Button 
            variant="outline" 
            className="border-red-600 text-red-600 hover:bg-red-50"
            asChild
          >
            <a href="https://www.youtube.com/@ccnts_media" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Visiter notre chaîne YouTube
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeVideos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {video.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {video.views} vues
                  </span>
                  <Button 
                    className="bg-red-600 hover:bg-red-700"
                    asChild
                  >
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                      Regarder la vidéo
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}