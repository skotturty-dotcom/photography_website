import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, SlidersHorizontal, Image, Check } from 'lucide-react';

import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const BeforeAfterSection = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const examples = [
    {
      id: "01",
      title: "Royal Bridal Portrait",
      category: "FINE-ART RETOUCHING",
      rawStyle: "filter grayscale-[35%] brightness-85 contrast-85 saturate-65",
      editedStyle: "filter contrast-115 saturate-125 brightness-105",
      image: heroRoyalBride,
      desc: "Raw flat camera profile vs. signature golden-hour warmth & handcrafted skin tone retouching."
    },
    {
      id: "02",
      title: "Pre-Wedding Sunset Romance",
      category: "CINEMATIC TEAL & ORANGE",
      rawStyle: "filter brightness-110 contrast-80 saturate-60 sepia-[15%]",
      editedStyle: "filter contrast-120 saturate-130 brightness-100 hue-rotate-[-5deg]",
      image: heroPreweddingRomance,
      desc: "Overexposed sky RAW file vs. rich sunset sky recovery & vibrant romantic warm glow."
    },
    {
      id: "03",
      title: "Traditional Wedding Pheras",
      rawStyle: "filter brightness-90 contrast-80 saturate-70 blur-[0.2px]",
      editedStyle: "filter contrast-125 saturate-135 brightness-105 shadow-2xl",
      category: "JEWELRY & SILK COLOR GRADING",
      image: heroWeddingCouple,
      desc: "Dull indoor ambient light vs. vivid crimson silk tones & sparkling Kundan jewelry polish."
    },
    {
      id: "04",
      title: "Cinematic Gala Reception",
      category: "STAGE LIGHTING RESTORATION",
      rawStyle: "filter brightness-80 contrast-90 saturate-50 hue-rotate-[10deg]",
      editedStyle: "filter contrast-130 saturate-120 brightness-100 blur-none",
      image: heroCinematicReception,
      desc: "High-ISO stage noise RAW vs. crystal-clear chandelier warm highlights & filmic contrast."
    }
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [activeExample]);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const currentEx = examples[activeExample];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-purple-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          subtitle="ARTISANAL POST-PROCESSING"
          title="Raw Camera vs Master Handcrafted Color Grade"
          description="Select an example below and drag the interactive slider to reveal our signature golden-hour color grading and hand-retouched skin tones."
        />

        {/* 4 INTERACTIVE EXAMPLE SELECTOR TABS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {examples.map((ex, idx) => {
            const isSelected = activeExample === idx;
            return (
              <button
                type="button"
                key={ex.id}
                onClick={() => {
                  setActiveExample(idx);
                  setSliderPos(50);
                }}
                className={`p-4 rounded-sm border-2 transition-all duration-300 text-left cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-purple-50/90 border-purple-700 shadow-lg border-t-4 border-t-purple-800'
                    : 'bg-white border-purple-200 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-purple-800' : 'text-purple-400'}`}>
                    EXAMPLE {ex.id}
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className={`font-sans text-sm font-bold tracking-tight ${isSelected ? 'text-purple-950 font-black' : 'text-[#000000]'}`}>
                    {ex.title}
                  </h4>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-purple-700 font-extrabold pt-0.5">
                    {ex.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE SLIDER CONTAINER */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[650px] rounded-sm overflow-hidden border-4 border-purple-200 shadow-2xl select-none cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (Master Edited Color Grade - Full Container Size Underneath) */}
            <img
              src={currentEx.image}
              alt="Master Color Graded Edit"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 ${currentEx.editedStyle}`}
            />
            <div className="absolute top-4 right-4 bg-purple-900/95 text-white font-mono text-xs font-extrabold px-4 py-1.5 rounded-full backdrop-blur-md border border-purple-300 shadow-lg z-10 flex items-center space-x-1.5 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
              <span>MASTER COLOR GRADE</span>
            </div>

            {/* BEFORE IMAGE (RAW Flat Camera Profile - Identical 1:1 size clipped via CSS clip-path) */}
            <div
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={currentEx.image}
                alt="RAW Flat Camera Profile"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 ${currentEx.rawStyle}`}
              />
              <div className="absolute top-4 left-4 bg-black/85 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg whitespace-nowrap pointer-events-none">
                RAW UNEDITED CAMERA FILE
              </div>
            </div>

            {/* DRAGGING HANDLE BAR */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(167,139,250,0.9)] z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-700 text-white border-2 border-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 px-2">
            <p className="text-xs font-mono text-purple-800 font-extrabold uppercase tracking-widest">
              ◀ DRAG SLIDER TO COMPARE RAW VS MASTER GRADE ▶
            </p>
            <p className="text-xs font-sans text-[#334155] font-semibold text-center sm:text-right">
              {currentEx.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
