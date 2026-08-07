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
    <section className="py-24 sm:py-32 bg-white border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="WHY WORK WITH US"
          title="Why Couples Choose Arjun"
          description="Built on absolute trust, technical mastery, and a passion for preserving your most sacred memories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-gradient-to-b from-white to-purple-50/60 border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-purple-700 font-extrabold bg-purple-100/80 px-3 py-1 rounded border border-purple-200">
                    PILLAR {pillar.id}
                  </span>
                </div>

                <h3 className="font-sans text-xl text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug tracking-normal">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#000000] font-semibold leading-relaxed">
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
