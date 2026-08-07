import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

import heroRoyalBride from '../../assets/images/hero_royal_bride.png';

export const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-purple-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="ARTISANAL POST-PROCESSING"
          title="Raw Camera vs Master Handcrafted Color Grade"
          description="Drag the interactive slider below to reveal our signature golden-hour color grading and hand-retouched skin tones."
        />

        <div className="max-w-5xl mx-auto">
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
              src={heroRoyalBride}
              alt="Master Color Graded Edit"
              className="absolute inset-0 w-full h-full object-cover object-top filter contrast-110 saturate-110"
            />
            <div className="absolute top-4 right-4 bg-purple-900/90 text-white font-mono text-xs font-extrabold px-4 py-1.5 rounded-full backdrop-blur-md border border-purple-300 shadow-lg z-10 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
              <span>MASTER COLOR GRADE</span>
            </div>

            {/* BEFORE IMAGE (RAW Flat Profile - Clipped Container matching 1:1 outer width) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={heroRoyalBride}
                alt="RAW Flat Camera Profile"
                className="absolute top-0 left-0 h-full max-w-none object-cover object-top filter grayscale-[30%] brightness-90 contrast-90 saturate-75"
                style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }}
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg z-10 whitespace-nowrap">
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

          <p className="text-center text-xs font-mono text-purple-700 font-extrabold uppercase tracking-widest pt-4">
            👈 Drag Left or Right To Compare RAW vs Master Edit 👉
          </p>
        </div>
      </div>
    </section>
  );
};
