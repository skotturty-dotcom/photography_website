import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight, Star, Sparkles, Award, MapPin } from 'lucide-react';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const HeroCollage = () => {
  // Collage Image Sets that rotate smoothly
  const imageSets = [
    {
      main: heroRoyalBride,
      topRight: heroWeddingCouple,
      bottomLeft: heroPreweddingRomance,
      tag: "Taj Lake Palace, Udaipur"
    },
    {
      main: heroWeddingCouple,
      topRight: heroPreweddingRomance,
      bottomLeft: heroCinematicReception,
      tag: "Rambagh Palace, Jaipur"
    },
    {
      main: heroPreweddingRomance,
      topRight: heroCinematicReception,
      bottomLeft: heroRoyalBride,
      tag: "Goa & Worldwide"
    },
    {
      main: heroCinematicReception,
      topRight: heroRoyalBride,
      bottomLeft: heroWeddingCouple,
      tag: "Hyderabad & Destination"
    }
  ];

  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % imageSets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imageSets.length]);

  const currentSet = imageSets[activeSet];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-[#FAF7FD] via-white to-[#FAF7FD] overflow-hidden border-b border-purple-200">
      {/* Decorative Subtle Background Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CALLS TO ACTION */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 px-4 py-2 rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span className="text-[11px] font-body tracking-[0.25em] text-purple-900 uppercase font-bold">
                LUXURY WEDDING & PORTRAIT STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#000000] tracking-tight leading-[1.15]">
              Stories That <br />
              <span className="font-cursive text-4xl sm:text-6xl lg:text-7xl font-normal text-purple-700 normal-case tracking-normal">Deserve To Be</span> <br />
              Remembered.
            </h1>

            {/* Subtitle */}
            <p className="text-studio-text text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Authentic moments, sacred vows, and timeless romantic portraiture thoughtfully captured across India & worldwide destinations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-[#A78BFA] text-white uppercase tracking-[0.2em] font-bold text-xs rounded-sm hover:bg-[#9333EA] transition-all shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-studio-text border-2 border-purple-300 hover:border-purple-600 hover:bg-purple-50 uppercase tracking-[0.2em] font-bold text-xs rounded-sm transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-purple-700" />
                <span>Book Your Date</span>
              </Link>
            </div>

            {/* Trust Metrics Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-purple-200 text-xs font-body font-semibold text-studio-text">
              <div className="flex items-center space-x-1.5 text-purple-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-studio-text font-bold ml-1">4.9 / 5.0 Rating</span>
              </div>
              <div className="text-purple-300 hidden sm:block">•</div>
              <div className="flex items-center space-x-1 text-studio-text">
                <Award className="w-4 h-4 text-purple-700" />
                <span>150+ Happy Couples</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-IMPACT EDITORIAL PHOTO COLLAGE */}
          <div className="lg:col-span-6 relative overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[330px] sm:max-w-lg mx-auto aspect-[4/5]">
              
              {/* 1. Main Large Vertical Frame */}
              <div className="absolute top-0 left-0 w-[72%] h-[82%] rounded-sm overflow-hidden border-4 border-white shadow-2xl z-10 group bg-purple-100">
                <img
                  src={currentSet.main}
                  alt="Royal Wedding Photography"
                  className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-20 text-white space-y-0.5">
                  <span className="text-[9px] uppercase tracking-widest text-purple-300 font-bold block">FEATURED STORY</span>
                  <p className="font-heading text-lg font-normal drop-shadow-md">Royal Bridal Elegance</p>
                </div>
              </div>

              {/* 2. Top Right Stacked Overlapping Frame */}
              <div className="absolute top-8 right-0 w-[50%] h-[52%] rounded-sm overflow-hidden border-4 border-white shadow-2xl z-20 group bg-purple-200">
                <img
                  src={currentSet.topRight}
                  alt="Destination Couple Photography"
                  className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter contrast-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* 3. Bottom Left Overlapping Floating Detail Card */}
              <div className="absolute bottom-2 right-4 w-[54%] h-[42%] rounded-sm overflow-hidden border-4 border-white shadow-2xl z-30 group bg-purple-300">
                <img
                  src={currentSet.bottomLeft}
                  alt="Pre-wedding Moments"
                  className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter contrast-105"
                />
                {/* Location Badge Tag */}
                <div className="absolute bottom-3 left-3 z-30 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-purple-300/40 text-white flex items-center space-x-1.5 shadow-lg">
                  <MapPin className="w-3 h-3 text-purple-300" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold">{currentSet.tag}</span>
                </div>
              </div>

              {/* 4. Decorative Gold & Lavender Accent Box Badge */}
              <div className="absolute -bottom-4 -left-4 z-40 bg-white border-2 border-purple-300 p-4 rounded-sm shadow-xl flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-purple-700">10+ Years</p>
                  <p className="text-xs text-studio-text font-semibold">Excellence in Photography</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
