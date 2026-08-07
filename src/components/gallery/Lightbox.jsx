import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const Lightbox = ({ items = [], currentIndex = 0, isOpen, onClose, onNavigate }) => {
  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items, onClose, onNavigate]);

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fade-in p-4 sm:p-6"
      onClick={onClose}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center space-x-3">
          <span className="text-xs uppercase tracking-[0.25em] text-studio-gold bg-studio-elevated px-3 py-1 rounded border border-studio-gold/30">
            {currentItem.category}
          </span>
          <span className="text-xs text-studio-muted font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/10 hover:border-studio-gold text-studio-muted hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* PREV BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:border-studio-gold hover:text-studio-gold transition-all backdrop-blur-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* IMAGE DISPLAY */}
        <div className="max-w-6xl max-h-[75vh] relative flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl transition-all duration-300"
          />
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:border-studio-gold hover:text-studio-gold transition-all backdrop-blur-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* BOTTOM CAPTION BAR */}
      <div
        className="z-20 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-6xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-1">
          <h3 className="font-heading text-2xl sm:text-3xl text-white font-light">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-studio-muted font-light max-w-2xl">
            {currentItem.description}
          </p>
        </div>

        <div className="flex items-center space-x-4 shrink-0">
          <div className="text-right text-xs text-studio-muted hidden sm:block">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-studio-gold inline" />
              <span>{currentItem.location}</span>
            </span>
            <span className="flex items-center space-x-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-studio-gold inline" />
              <span>{currentItem.year}</span>
            </span>
          </div>

          <a
            href={getWhatsAppLink('wedding', { date: currentItem.year, location: currentItem.location })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs uppercase tracking-widest bg-studio-gold text-black hover:bg-studio-gold-hover font-semibold rounded-sm transition-colors flex items-center space-x-1.5"
          >
            <span>Enquire Similar Shoot</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
