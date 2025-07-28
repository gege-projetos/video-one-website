import React from 'react';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const GalleryModal = ({ service, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [service]);

  if (!service || !service.gallery) return null;

  const hasGalleryItems = service.gallery.length > 0;

  const handleNext = () => {
    if (!hasGalleryItems) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.gallery.length);
  };

  const handlePrev = () => {
    if (!hasGalleryItems) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + service.gallery.length) % service.gallery.length);
  };

  const currentItem = hasGalleryItems ? service.gallery[currentIndex] : null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300">
        <div className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{service.name}</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex-grow p-4 relative flex items-center justify-center">
          {!hasGalleryItems && (
            <div className="text-center text-gray-400 flex flex-col items-center">
              <ImageOff className="w-16 h-16 mb-4" />
              <p className="text-lg">Nenhum item na galeria ainda.</p>
              <p className="text-sm">Em breve adicionaremos novos conteúdos aqui!</p>
            </div>
          )}
          {currentItem && currentItem.type === 'image' && (
            <div className="relative">
              <img  
                alt={currentItem.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                src={currentItem.src} 
              />
              {/* Botões de navegação sobrepostos na imagem */}
              {hasGalleryItems && service.gallery.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}
          {currentItem && currentItem.type === 'video' && (
            <div className="relative">
              <video
                src={currentItem.src}
                controls
                autoPlay
                muted
                loop
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              {/* Botões de navegação sobrepostos no vídeo */}
              {hasGalleryItems && service.gallery.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Contador de itens na parte inferior */}
        {hasGalleryItems && service.gallery.length > 1 && (
          <div className="flex justify-center items-center p-4 border-t border-slate-700">
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {service.gallery.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;