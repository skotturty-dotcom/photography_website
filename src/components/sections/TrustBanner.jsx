import React from 'react';
import { Award, Star, Trophy, Sparkles, Heart, MapPin, Camera } from 'lucide-react';

export const TrustBanner = () => {
  const publications = [
    { name: "VOGUE WEDDINGS", icon: Sparkles },
    { name: "HARPER'S BAZAAR BRIDE", icon: Trophy },
    { name: "FEARLESS PHOTOGRAPHERS", icon: Award },
    { name: "WEDMEGOOD 4.9★", icon: Star },
    { name: "WEDDINGSUTRA", icon: Sparkles },
    { name: "BRIDES INDIA", icon: Trophy }
  ];

  const metrics = [
    {
      value: "10+",
      label: "YEARS EXPERIENCE",
      subtext: "Master Craftsmanship & Vision",
      icon: Camera
    },
    {
      value: "250+",
      label: "STORIES CAPTURED",
      subtext: "Luxury Weddings & Events",
      icon: Sparkles
    },
    {
      value: "150+",
      label: "HAPPY COUPLES",
      subtext: "5-Star Client Reviews",
      icon: Heart
    },
    {
      value: "25+",
      label: "CITIES COVERED",
      subtext: "India & Worldwide Destinations",
      icon: MapPin
    }
  ];

  return (
    <div className="bg-white border-b-2 border-purple-200">
      {/* 1. TOP PRESS & RECOGNITION TICKER RIBBON */}
      <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 border-y border-purple-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 shrink-0 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200 shadow-xs">
              <Trophy className="w-4 h-4 text-purple-700" />
              <span className="text-[10px] sm:text-xs font-body tracking-[0.25em] font-extrabold text-purple-950 uppercase">
                FEATURED IN & RECOGNIZED BY
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono tracking-widest text-[#000000] font-bold">
              {publications.map((pub, idx) => {
                const IconComponent = pub.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 group">
                    <IconComponent className="w-3.5 h-3.5 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-purple-700 transition-colors uppercase">{pub.name}</span>
                    {idx !== publications.length - 1 && (
                      <span className="text-purple-300 ml-4 font-normal">•</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. ACHIEVEMENTS & METRICS CARDS */}
      <div className="py-12 bg-gradient-to-b from-white via-white to-purple-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white border-2 border-purple-200 border-t-4 border-t-purple-700 p-6 rounded-sm text-center shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <span className="font-sans text-4xl sm:text-5xl font-black text-purple-700 tracking-tight leading-none pt-1">
                    {m.value}
                  </span>

                  <span className="text-xs uppercase tracking-[0.2em] text-[#000000] font-extrabold block">
                    {m.label}
                  </span>

                  <span className="text-[11px] text-[#475569] font-semibold block">
                    {m.subtext}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
