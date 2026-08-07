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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {guidePoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-sans text-xl text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug tracking-normal">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-[#000000] font-semibold leading-relaxed">
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
