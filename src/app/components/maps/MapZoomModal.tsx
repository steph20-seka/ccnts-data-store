import { useState, useEffect } from 'react';
import { X, ZoomIn, Maximize2 } from 'lucide-react';
import { Button } from '../ui/button';

interface MapZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export function MapZoomModal({ isOpen, onClose, imageSrc, title }: MapZoomModalProps) {
  const [zoom, setZoom] = useState(1);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset zoom when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.3, 1));
  };

  const handleReset = () => {
    setZoom(1);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Header avec contrôles */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 mr-4">
            <h3 className="text-white font-semibold text-lg line-clamp-2">
              {title}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Cliquez et faites glisser pour explorer • Molette pour zoomer
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Zoom controls */}
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className="text-white hover:bg-white/20 disabled:opacity-50"
              >
                <span className="text-xl">−</span>
              </Button>
              <span className="text-white font-semibold text-sm px-2 min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="text-white hover:bg-white/20 disabled:opacity-50"
              >
                <span className="text-xl">+</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleReset}
                className="text-white hover:bg-white/20 ml-1"
                title="Réinitialiser le zoom"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Close button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="text-white hover:bg-white/20 ml-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image container with pan and zoom */}
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="max-w-none cursor-move transition-transform duration-200"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
          }}
          onWheel={(e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
              handleZoomIn();
            } else {
              handleZoomOut();
            }
          }}
          draggable={false}
        />
      </div>

      {/* Footer avec aide */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-6 text-white/70 text-xs">
            <span>🖱️ Molette de souris = Zoom</span>
            <span>🔍 Boutons +/− = Zoom manuel</span>
            <span>⎋ Échap ou cliquer à l'extérieur = Fermer</span>
          </div>
        </div>
      </div>
    </div>
  );
}