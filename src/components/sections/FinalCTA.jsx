import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const FinalCTA = ({
  heading = "Your Story Is Worth Remembering.",
  subheading = "Let's turn your moments into photographs you'll return to for years."
}) => {
  const ctaImages = [
    heroWeddingCouple,
    heroRoyalBride,
    heroPreweddingRomance,
    heroCinematicReception
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automated Continuous Image Slide (Every 3.5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ctaImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [ctaImages.length]);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-purple-200 bg-black">
      {/* Animated Background Image Carousel - Crystal Clear & Vibrant with Cross-fade */}
      {ctaImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {/* High Definition Crystal Clear Photo (No Darkening Filter) */}
          <img
            src={img}
            alt="Luxury wedding story"
            className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
          />
          {/* Soft Gradient for Header & Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-[#A78BFA]/50 px-5 py-2 rounded-full shadow-2xl">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#A78BFA] font-bold">
            RESERVE YOUR EVENT DATE
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {heading}
        </h2>

        <p className="!text-white text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
          {subheading}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-[#A78BFA] text-white uppercase tracking-[0.2em] font-bold text-xs rounded-sm hover:bg-[#9333EA] transition-all flex items-center justify-center space-x-2 shadow-2xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Date</span>
          </Link>

          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white uppercase tracking-[0.2em] font-bold text-xs rounded-sm transition-all flex items-center justify-center space-x-2 shadow-2xl"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Slide Progress Indicators */}
        <div className="pt-6 flex items-center justify-center space-x-2">
          {ctaImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all rounded-full ${
                i === currentIndex ? 'w-8 bg-[#A78BFA]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
