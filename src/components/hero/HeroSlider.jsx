import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Stories That Deserve To Be Remembered.",
      subtitle: "Authentic moments, beautifully composed and thoughtfully captured.",
      category: "ROYAL DESTINATION WEDDINGS",
      location: "Taj Lake Palace, Udaipur",
      image: heroWeddingCouple
    },
    {
      id: 2,
      title: "The Fine Art of Royal Bridal Storytelling.",
      subtitle: "Soft window sunlight highlighting quiet grace and intricate jewelry.",
      category: "FINE ART BRIDAL PORTRAITS",
      location: "Chowmahalla Palace, Hyderabad",
      image: heroRoyalBride
    },
    {
      id: 3,
      title: "Golden Hour Romance & Heritage Whispers.",
      subtitle: "Intimate pre-wedding portraiture in historical palace courtyards.",
      category: "PRE-WEDDING PORTRAIT SESSIONS",
      location: "Rambagh Palace, Jaipur",
      image: heroPreweddingRomance
    },
    {
      id: 4,
      title: "4K Motion Pictures & Cinematic Receptions.",
      subtitle: "Unscripted dancing, sparkling chandeliers, and soaring aerial coverage.",
      category: "CINEMATIC FEATURE FILMS",
      location: "Goa & Worldwide",
      image: heroCinematicReception
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automated Continuous Image Slide (Every 3.5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide] || slides[0];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Carousel - Crystal Clear & Vibrant Custom Generated Photography */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {/* High Definition Crystal Clear Photo */}
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
          />
          {/* Subtle Top & Bottom Gradient for Header & Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />
        </div>
      ))}

      {/* Hero Central Content with Drop Shadow */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-16">
        <div className="inline-block">
          <span className="text-[10px] sm:text-xs font-body tracking-[0.35em] text-studio-gold uppercase font-bold bg-black/60 backdrop-blur-md px-5 py-2 rounded-full border border-studio-gold/50 shadow-2xl">
            {slide.category}
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-normal leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-700">
          {slide.title}
        </h1>

        <p className="text-white text-sm sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {slide.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-all shadow-2xl flex items-center justify-center space-x-2"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-black/50 text-white border border-white/60 hover:bg-white hover:text-studio-text uppercase tracking-[0.2em] font-semibold text-xs rounded-sm backdrop-blur-md transition-all shadow-xl flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Date</span>
          </Link>
        </div>

        {/* Slide Counter & Location */}
        <div className="pt-2 text-xs text-white/90 font-mono tracking-widest flex items-center justify-center space-x-3 drop-shadow-md">
          <span className="text-studio-gold font-bold">0{currentSlide + 1}</span>
          <span>/</span>
          <span>0{slides.length}</span>
          <span className="text-white/40">•</span>
          <span className="text-white uppercase font-body font-semibold">{slide.location}</span>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-20 p-3.5 rounded-full bg-black/60 border border-white/30 text-white hover:border-studio-gold hover:text-studio-gold transition-all backdrop-blur-md hidden sm:block shadow-2xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-20 p-3.5 rounded-full bg-black/60 border border-white/30 text-white hover:border-studio-gold hover:text-studio-gold transition-all backdrop-blur-md hidden sm:block shadow-2xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Continuous Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 transition-all rounded-full ${
              i === currentSlide ? 'w-10 bg-studio-gold' : 'w-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
