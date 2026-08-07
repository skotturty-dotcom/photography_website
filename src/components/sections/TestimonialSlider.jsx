import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[index];

  return (
    <div className="relative bg-white border border-studio-border rounded-sm p-6 sm:p-12 max-w-4xl mx-auto shadow-md">
      <div className="absolute top-6 right-6 text-studio-gold/15">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Star Rating */}
        <div className="flex items-center space-x-1 text-studio-gold">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <p className="font-body text-sm sm:text-base md:text-lg text-studio-text font-medium leading-relaxed">
          "{current.quote}"
        </p>

        {/* Client Meta */}
        <div className="flex items-center space-x-4 pt-4 border-t border-studio-border">
          <img
            src={current.avatar}
            alt={current.clientName}
            className="w-12 h-12 rounded-full object-cover border border-studio-gold"
          />
          <div>
            <h4 className="font-heading text-xl text-studio-text font-medium">
              {current.clientName}
            </h4>
            <p className="text-xs text-studio-gold uppercase tracking-wider font-body font-semibold">
              {current.eventType} • {current.year}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-6">
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all rounded-full ${
                  i === index ? 'w-8 bg-studio-gold' : 'w-2 bg-studio-border'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-studio-border hover:border-studio-gold text-studio-muted hover:text-studio-text transition-colors bg-studio-bg"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-studio-border hover:border-studio-gold text-studio-muted hover:text-studio-text transition-colors bg-studio-bg"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
