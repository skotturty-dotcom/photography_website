import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Calendar, Camera, CheckCircle2 } from 'lucide-react';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';

export const WeddingExperience = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "01",
      title: "Getting To Know You",
      subtitle: "Initial Consultation & Vision Alignment",
      desc: "We begin with an in-depth conversation over coffee or video call to understand your love story, family traditions, and personal preferences.",
      image: heroPreweddingRomance
    },
    {
      id: "02",
      title: "Planning The Story",
      subtitle: "Location Recce & Lighting Schedule",
      desc: "Custom shot lists, timeline planning, and lighting coordination with your wedding planner to ensure stress-free coverage on the big day.",
      image: heroRoyalBride
    },
    {
      id: "03",
      title: "Capturing The Moments",
      subtitle: "Unobtrusive Dual Camera Coverage",
      desc: "Prismatic 5K optics, natural low-light prime lenses, and silent continuous shooting capture every unscripted laugh, tear, and ritual.",
      image: heroWeddingCouple
    },
    {
      id: "04",
      title: "Delivering The Memories",
      subtitle: "Dedicated Color Grading & Archival Albums",
      desc: "Handcrafted color grading, private online cloud gallery delivery within 3 weeks, and luxury Italian leather heirloom album print books.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7FD] border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="THE CREATIVE PROCESS"
          title="More Than A Photographer."
          description="A seamless four-step journey designed to give you complete peace of mind and heirloom memories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: 4 Interactive Stage Cards */}
          <div className="lg:col-span-7 space-y-4">
            {stages.map((stg, idx) => (
              <div
                key={stg.id}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                className={`cursor-pointer p-6 sm:p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border-2 transition-all duration-300 ${
                  activeStage === idx
                    ? 'bg-white border-purple-500 shadow-2xl translate-x-2 animated-border-card-active'
                    : 'bg-white/90 border-purple-200 hover:border-purple-400 hover:shadow-lg animated-border-card'
                }`}
              >
                <div className="flex items-start space-x-5">
                  <span className={`font-mono text-xl sm:text-2xl font-extrabold px-3.5 py-1.5 rounded ${
                    activeStage === idx ? 'bg-purple-700 text-white shadow-md' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {stg.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-sans text-xl sm:text-2xl text-[#000000] font-bold tracking-normal">
                      {stg.title}
                    </h3>

                    {/* AMERICAN DIAMOND LUXURY SHIMMER SERIF SUBHEADING */}
                    <p className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase pt-1 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0 inline-block animate-pulse" />
                      <span className="bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                        {stg.subtitle}
                      </span>
                    </p>

                    <p className="text-sm text-[#000000] font-semibold leading-relaxed pt-1">
                      {stg.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Dynamic Image Display */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-4 border-white shadow-2xl bg-purple-100 group">
              <img
                src={stages[activeStage].image}
                alt={stages[activeStage].title}
                className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A78BFA] font-bold block">
                  STAGE {stages[activeStage].id} OF 04
                </span>
                <h4 className="font-serif text-2xl font-bold">
                  {stages[activeStage].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
