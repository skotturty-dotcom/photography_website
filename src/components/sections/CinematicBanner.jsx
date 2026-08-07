import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';
import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';

export const CinematicBanner = () => {
  const images = [
    {
      url: heroCinematicReception,
      title: "Chowmahalla Sangeet Night",
      location: "Hyderabad"
    },
    {
      url: heroWeddingCouple,
      title: "Royal Mandap Pheras",
      location: "Udaipur"
    },
    {
      url: heroRoyalBride,
      title: "Bridal Lehenga Portrait",
      location: "Jaipur"
    },
    {
      url: heroPreweddingRomance,
      title: "Sunset Beach Romance",
      location: "Goa"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative py-32 sm:py-44 overflow-hidden border-y border-purple-200 bg-black group">
      {/* Edge-to-Edge Auto-Changing Background Slideshow */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover object-center filter contrast-105 brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/55" />
        </div>
      ))}

      {/* Manual Change Controls (Left & Right Arrows) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all shadow-xl opacity-80 hover:opacity-100"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all shadow-xl opacity-80 hover:opacity-100"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-[#A78BFA]/50 px-5 py-2 rounded-full shadow-2xl">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#A78BFA] font-bold">
            UNSCRIPTED MOMENTS • {images[currentIndex].location}
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          THE MOMENTS BETWEEN <br />
          <span className="font-serif italic font-normal text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#C4B5FD] tracking-normal leading-none">The Moments.</span>
        </h2>

        <div className="pt-2 max-w-2xl mx-auto">
          <p className="font-sans !text-white text-base sm:text-xl font-bold tracking-wide leading-relaxed drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            "Because sometimes the most beautiful photographs aren't planned."
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#A78BFA] text-white uppercase tracking-[0.2em] font-bold text-xs rounded-sm hover:bg-[#9333EA] transition-all shadow-2xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Discover Selected Stories</span>
          </Link>
        </div>

        {/* Interactive Indicator Dots */}
        <div className="pt-6 flex items-center justify-center space-x-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#A78BFA]' : 'w-2.5 bg-white/40 hover:bg-white/80'
              }`}
              title={`View ${img.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
