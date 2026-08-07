import React, { useState } from 'react';
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
    <div className="space-y-10">
      {/* FILTER BUTTONS */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-4">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 rounded-sm font-semibold border ${
                  isActive
                    ? 'bg-studio-gold text-white border-studio-gold shadow-md'
                    : 'bg-white text-studio-muted border-studio-border hover:border-studio-gold hover:text-studio-text shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

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
