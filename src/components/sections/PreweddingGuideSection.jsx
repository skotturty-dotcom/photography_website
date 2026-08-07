import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Camera, Sun, Palette, HeartHandshake } from 'lucide-react';

export const PreweddingGuideSection = () => {
  const guidePoints = [
    {
      title: "Location Recce & Palette",
      desc: "Selecting heritage palaces, golden sand dunes, or serene beaches that complement your personal aesthetic.",
      icon: Palette
    },
    {
      title: "Golden Hour Lighting",
      desc: "Optimized 90-minute sunset and dawn schedules when natural light is soft, warm, and romantic.",
      icon: Sun
    },
    {
      title: "Wardrobe & Color Alignment",
      desc: "Guidance on complementary lehengas, tuxedos, and flowing gowns to contrast against venue backgrounds.",
      icon: Camera
    },
    {
      title: "Candid Posing Direction",
      desc: "Zero stiff poses. We guide natural movement, walking prompts, and genuine interactions so you feel 100% comfortable.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7FD] border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="COUPLE PREPARATION"
          title="Pre-Wedding & Romantic Styling Guide"
          description="Everything you need to know for a relaxed, fun, and breathtaking shoot."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {guidePoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-3 border-t-[#C084FC] p-5 sm:p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs space-y-3 shadow-xl hover:shadow-[0_15px_35px_rgba(192,132,252,0.3)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden animated-border-card-active"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 border border-white transition-transform">
                      <IconComp className="w-5 h-5 !text-white stroke-[2.2]" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-extrabold text-[#C084FC] bg-white/15 border border-white/25 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                      0{idx + 1} STEP
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl text-white font-black group-hover:text-[#C084FC] transition-colors leading-snug tracking-tight">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/95 font-semibold leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
