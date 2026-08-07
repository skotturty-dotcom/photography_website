import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export const PortfolioCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative cursor-pointer overflow-hidden studio-card rounded-sm bg-white border border-purple-200 shadow-sm hover:shadow-xl transition-all"
    >
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-purple-50">
        <img
          src={item.image}
          alt={item.category || "Portfolio"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Video Play Badge for Cinematic category */}
        {item.categoryKey === 'CINEMATIC' && (
          <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-purple-300 flex items-center justify-center text-purple-700 shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
        )}

        {/* Floating Top Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.25em] text-white bg-purple-700 backdrop-blur-md px-3 py-1 rounded-full shadow-md font-extrabold">
            {item.category}
          </span>
        </div>

        {/* Bottom Details Overlay - NO COUPLE NAMES */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-center justify-between transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="space-y-0.5">
            <span className="text-sm sm:text-base text-white font-bold uppercase tracking-wider block drop-shadow-md">
              {item.location}
            </span>
            <span className="text-xs text-purple-200 uppercase tracking-widest font-mono block font-semibold">
              {item.year} COLLECTION
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center group-hover:bg-white group-hover:text-purple-700 transition-all shrink-0 ml-3 shadow-md">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
