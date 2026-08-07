import React from 'react';
import { Sparkles, Heart, Eye, ShieldCheck, Clock, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      id: "01",
      title: "Authentic Storytelling",
      desc: "Zero forced poses or artificial smiles. We focus on unscripted candid emotions, silent glances, and natural laughter.",
      icon: Heart,
      cardBg: "bg-gradient-to-b from-[#2A103C] via-[#1C0B2A] to-[#12071C] border-2 border-purple-500/80 border-t-4 border-t-purple-400 hover:border-purple-300 shadow-purple-950/60",
      iconBg: "bg-purple-600 group-hover:bg-purple-500",
      pillBg: "bg-purple-900/90 text-purple-200 border-purple-400/50"
    },
    {
      id: "02",
      title: "Cinematic Visuals",
      desc: "Flagship 5K camera bodies, Leica optical lenses, and dedicated color grading create magazine-worthy heirloom imagery.",
      icon: Sparkles,
      cardBg: "bg-gradient-to-b from-[#141B42] via-[#0E132F] to-[#090D20] border-2 border-indigo-500/80 border-t-4 border-t-indigo-400 hover:border-indigo-300 shadow-indigo-950/60",
      iconBg: "bg-indigo-600 group-hover:bg-indigo-500",
      pillBg: "bg-indigo-900/90 text-indigo-200 border-indigo-400/50"
    },
    {
      id: "03",
      title: "Attention To Detail",
      desc: "From intricate hand embroidery on lehengas to heritage architecture lighting, every detail is preserved flawlessly.",
      icon: Eye,
      cardBg: "bg-gradient-to-b from-[#3B0E20] via-[#280916] to-[#18050D] border-2 border-rose-500/80 border-t-4 border-t-rose-400 hover:border-rose-300 shadow-rose-950/60",
      iconBg: "bg-rose-600 group-hover:bg-rose-500",
      pillBg: "bg-rose-900/90 text-rose-200 border-rose-400/50"
    },
    {
      id: "04",
      title: "Personalized Experience",
      desc: "Custom timeline planning, dedicated location recces, and responsive communication throughout your entire journey.",
      icon: ShieldCheck,
      cardBg: "bg-gradient-to-b from-[#092B22] via-[#051D17] to-[#03130E] border-2 border-emerald-500/80 border-t-4 border-t-emerald-400 hover:border-emerald-300 shadow-emerald-950/60",
      iconBg: "bg-emerald-600 group-hover:bg-emerald-500",
      pillBg: "bg-emerald-900/90 text-emerald-200 border-emerald-400/50"
    },
    {
      id: "05",
      title: "Professional Delivery",
      desc: "Instant real-time dual memory card data backups, rapid 3-week digital gallery turnarounds, and luxury print albums.",
      icon: Clock,
      cardBg: "bg-gradient-to-b from-[#38200B] via-[#261507] to-[#180D04] border-2 border-amber-500/80 border-t-4 border-t-amber-400 hover:border-amber-300 shadow-amber-950/60",
      iconBg: "bg-amber-600 group-hover:bg-amber-500",
      pillBg: "bg-amber-900/90 text-amber-200 border-amber-400/50"
    },
    {
      id: "06",
      title: "Trusted By Couples",
      desc: "Over 150+ happy couples and 10+ years of continuous craftsmanship recognized across Vogue & WedMeGood.",
      icon: Award,
      cardBg: "bg-gradient-to-b from-[#360D33] via-[#250823] to-[#180516] border-2 border-fuchsia-500/80 border-t-4 border-t-fuchsia-400 hover:border-fuchsia-300 shadow-fuchsia-950/60",
      iconBg: "bg-fuchsia-600 group-hover:bg-fuchsia-500",
      pillBg: "bg-fuchsia-900/90 text-fuchsia-200 border-fuchsia-400/50"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0C0817] border-b border-purple-900/60 relative overflow-hidden">
      {/* Soft Ambient Halo Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/80 border border-purple-500/50 px-4 py-1.5 rounded-full shadow-md mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
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

        {/* 6 UNIQUE DISTINCT COLOR THEME CARDS WITH CRISP WHITE FONTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`${pillar.cardBg} p-8 rounded-sm space-y-5 shadow-2xl transition-all duration-300 group hover:-translate-y-1.5`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-full ${pillar.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-xs font-extrabold px-3 py-1 rounded border ${pillar.pillBg}`}>
                    PILLAR {pillar.id}
                  </span>
                </div>

                <h3 className="font-sans text-xl text-white font-black leading-snug tracking-wide group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed drop-shadow-xs">
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
