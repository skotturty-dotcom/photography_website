import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Heart, Sparkles, Eye, ShieldCheck, Clock, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      id: "01",
      title: "Authentic Storytelling",
      desc: "Zero forced poses or artificial smiles. We focus on unscripted candid emotions, silent glances, and natural laughter.",
      icon: Heart
    },
    {
      id: "02",
      title: "Cinematic Visuals",
      desc: "Flagship 5K camera bodies, Leica optical lenses, and dedicated color grading create magazine-worthy heirloom imagery.",
      icon: Sparkles
    },
    {
      id: "03",
      title: "Attention To Detail",
      desc: "From intricate hand embroidery on lehengas to heritage architecture lighting, every detail is preserved flawlessly.",
      icon: Eye
    },
    {
      id: "04",
      title: "Personalized Experience",
      desc: "Custom timeline planning, dedicated location recces, and responsive communication throughout your entire journey.",
      icon: ShieldCheck
    },
    {
      id: "05",
      title: "Professional Delivery",
      desc: "Instant real-time dual memory card data backups, rapid 3-week digital gallery turnarounds, and luxury print albums.",
      icon: Clock
    },
    {
      id: "06",
      title: "Trusted By Couples",
      desc: "Over 150+ happy couples and 10+ years of continuous craftsmanship recognized across Vogue & WedMeGood.",
      icon: Award
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0F0A1C] border-b border-purple-900/60 relative overflow-hidden">
      {/* Soft Ambient Halo Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/80 border border-purple-500/50 px-4 py-1.5 rounded-full shadow-md mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span className="text-[11px] font-body tracking-[0.25em] text-purple-200 uppercase font-extrabold">
              WHY WORK WITH US
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl">
            Why Couples Choose Arjun
          </h2>
          <p className="text-purple-200 font-medium text-base sm:text-lg max-w-2xl leading-relaxed pt-1">
            Built on absolute trust, technical mastery, and a passion for preserving your most sacred memories.
          </p>
          <div className="w-20 h-[3.5px] bg-gradient-to-r from-purple-500 via-[#A78BFA] to-purple-400 rounded-full mt-3 shadow-xs" />
        </div>

        {/* 6 DARK LUXURY CARDS WITH WHITE FONTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-gradient-to-b from-[#1C1236] via-[#160E2E] to-[#120A26] border-2 border-purple-600/50 border-t-4 border-t-purple-500 p-8 rounded-sm space-y-5 shadow-2xl hover:border-purple-400 hover:shadow-purple-900/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-purple-600 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-purple-200 font-extrabold bg-purple-900/80 px-3 py-1 rounded border border-purple-500/40">
                    PILLAR {pillar.id}
                  </span>
                </div>

                <h3 className="font-sans text-xl text-white font-bold group-hover:text-purple-300 transition-colors leading-snug tracking-wide">
                  {pillar.title}
                </h3>

                <p className="text-sm text-purple-100 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
