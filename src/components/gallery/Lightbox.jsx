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
          <span className="text-xs uppercase tracking-[0.25em] text-white bg-purple-700 px-3 py-1 rounded-full font-extrabold">
            {currentItem.category}
          </span>
          <span className="text-xs text-purple-200 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/20 hover:border-purple-400 text-white transition-colors cursor-pointer"
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
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:border-purple-400 hover:text-purple-300 transition-all backdrop-blur-md cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* IMAGE DISPLAY */}
        <div className="max-w-6xl max-h-[75vh] relative flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.category}
            className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl transition-all duration-300"
          />
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:border-purple-400 hover:text-purple-300 transition-all backdrop-blur-md cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* BOTTOM CAPTION BAR - NO NAMES */}
      <div
        className="z-20 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-6xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
            {currentItem.location}
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 font-medium max-w-2xl">
            {currentItem.description}
          </p>
        </div>

        <div className="flex items-center space-x-4 shrink-0">
          <div className="text-right text-xs text-purple-200 hidden sm:block">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400 inline" />
              <span>{currentItem.location}</span>
            </span>
            <span className="flex items-center space-x-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-purple-400 inline" />
              <span>{currentItem.year} COLLECTION</span>
            </span>
          </div>

          <a
            href={getWhatsAppLink('wedding', { date: currentItem.year, location: currentItem.location })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs uppercase tracking-widest bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-sm transition-colors flex items-center space-x-1.5 shadow-md"
          >
            <span>Enquire Similar Shoot</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
