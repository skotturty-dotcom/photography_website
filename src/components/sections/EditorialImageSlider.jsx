import React, { useState, useEffect } from 'react';

export const EditorialImageSlider = () => {
  const editorialImages = [
    {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
      caption: "Candid & Timeless Bridal Portrait",
      sub: "Natural window light highlighting quiet grace."
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      caption: "Golden-Hour Couple Moments",
      sub: "Royal destination wedding celebration in Rajasthan."
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      caption: "Heritage Courtyard Pre-Wedding",
      sub: "Architectural grandeur meets authentic emotion."
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      caption: "Sacred Traditional Rituals",
      sub: "Jeelakarra Bellam ceremony blessings."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % editorialImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [editorialImages.length]);

  const current = editorialImages[currentIndex] || editorialImages[0];

  return (
    <div className="relative group max-w-lg mx-auto">
      <div className="aspect-[4/3] overflow-hidden rounded-sm border border-studio-border shadow-2xl bg-white relative">
        {editorialImages.map((item, idx) => (
          <img
            key={idx}
            src={item.url}
            alt={item.caption}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter contrast-105 brightness-100 ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          />
        ))}
        {/* Subtle Bottom Card Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-10">
          <p className="text-[11px] text-studio-gold uppercase tracking-widest font-semibold">{current.caption}</p>
          <p className="text-xs text-white/90 font-light pt-0.5">{current.sub}</p>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute top-4 right-4 z-20 flex space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
        {editorialImages.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === currentIndex ? 'w-5 bg-studio-gold' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
