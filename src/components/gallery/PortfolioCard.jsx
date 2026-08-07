import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export const PortfolioCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative cursor-pointer overflow-hidden studio-card rounded-sm bg-white border border-studio-border shadow-sm hover:shadow-xl transition-all"
    >
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-studio-elevated">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Video Play Badge for Cinematic category */}
        {item.categoryKey === 'CINEMATIC' && (
          <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-studio-gold flex items-center justify-center text-studio-gold shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
        )}

        {/* Floating Top Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.25em] text-white bg-studio-gold backdrop-blur-md px-2.5 py-1 rounded-sm shadow-md font-semibold">
            {item.category}
          </span>
        </div>

        {/* Bottom Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="space-y-1">
            <span className="text-[10px] text-white/80 uppercase tracking-widest block font-medium">
              {item.location} • {item.year}
            </span>
            <h3 className="font-heading text-2xl text-white font-normal group-hover:text-studio-gold transition-colors leading-snug">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-white/70 line-clamp-1 font-light">
                {item.subtitle}
              </p>
            )}
          </div>

          <div className="w-9 h-9 rounded-full bg-studio-gold text-white flex items-center justify-center group-hover:bg-white group-hover:text-studio-gold transition-all shrink-0 ml-3 shadow-md">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
