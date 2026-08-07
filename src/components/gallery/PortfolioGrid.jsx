import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData, portfolioCategories } from '../../data/portfolioData';
import { PortfolioCard } from './PortfolioCard';
import { Lightbox } from './Lightbox';

export const PortfolioGrid = ({ initialCategory = 'ALL', limit }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = portfolioData.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.categoryKey === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleCardClick = (item) => {
    const indexInFiltered = displayedItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(indexInFiltered >= 0 ? indexInFiltered : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-12">
      {/* ELEGANT PLAYFAIR DISPLAY SERIF FILTER CATEGORY TABS */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-4">
        {portfolioCategories.map((cat) => {
          const isActive = activeCategory === cat;
          const displayLabel = cat === 'ALL' ? 'All' : cat === 'PRE-WEDDINGS' ? 'Pre-Weddings' : cat.charAt(0) + cat.slice(1).toLowerCase();
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 font-serif font-bold text-sm sm:text-base tracking-wide transition-all duration-300 rounded-full cursor-pointer flex items-center space-x-2 border-2 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-white border-white shadow-[0_10px_30px_rgba(124,58,237,0.45)] scale-105 z-10'
                  : 'bg-white text-purple-950 border-purple-300/80 hover:border-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-900 hover:text-white shadow-md hover:shadow-xl hover:scale-105'
              }`}
            >
              {isActive && <Sparkles className="w-4 h-4 text-purple-200 animate-pulse shrink-0" />}
              <span>{displayLabel}</span>
            </button>
          );
        })}
      </div>

      {/* GALLERY EDITORIAL GRID */}
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={handleCardClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-studio-muted">
          <p className="text-sm font-light">No photographs found in this category.</p>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      <Lightbox
        items={displayedItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
};
