import React, { useState } from 'react';
import { Play, Film, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoModal } from '../modal/VideoModal';

export const CinematicReelsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'films', 'reels'

  const videoFilms = [
    {
      id: 1,
      type: 'film',
      title: "Echoes of Eternity — Cinematic Wedding Film",
      subtitle: "Royal destination wedding celebration with orchestral vows",
      duration: "3:45 MINS",
      tag: "4K FEATURE TRAILER",
      thumbnail: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 2,
      type: 'film',
      title: "The Sacred Vows — Heritage Wedding Trailer",
      subtitle: "Traditional pheras & grand courtyard reception",
      duration: "4:20 MINS",
      tag: "HERITAGE HIGHLIGHT",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 3,
      type: 'film',
      title: "Golden Sunset Romance — Pre-Wedding Film",
      subtitle: "Intimate beach whispers & sunset cliffside aerial drone shots",
      duration: "2:50 MINS",
      tag: "PRE-WEDDING CINEMA",
      thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 4,
      type: 'reel',
      title: "Bride's Emotional First Look Reaction",
      subtitle: "Tears of joy during the veil reveal",
      views: "1.4M VIEWS",
      tag: "EMOTIONAL MOMENTS",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 5,
      type: 'reel',
      title: "Drone Aerial View of Mandap Pheras",
      subtitle: "Soaring 5K drone shot over illuminated courtyard",
      views: "980K VIEWS",
      tag: "AERIAL CINEMATOGRAPHY",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 6,
      type: 'reel',
      title: "Sangeet Dance Performance & Fireworks",
      subtitle: "High energy celebration & sparklers reveal",
      views: "2.1M VIEWS",
      tag: "SANGEET NIGHT",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
  ];

  const filtered = activeTab === 'all'
    ? videoFilms
    : videoFilms.filter(item => item.type === (activeTab === 'films' ? 'film' : 'reel'));

  return (
    <section className="py-24 bg-[#FAF7FD] text-studio-text relative overflow-hidden border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 px-3.5 py-1.5 rounded-full">
              <Film className="w-4 h-4 text-purple-700" />
              <span className="text-[10px] font-body tracking-[0.3em] text-purple-900 uppercase font-bold">
                4K CINEMATIC FILMS & REELS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl text-studio-text font-normal tracking-wide">
              Motion Pictures That Tell Your Story.
            </h2>
            <p className="text-studio-text text-sm sm:text-base font-medium max-w-xl">
              Explore 4K feature trailers and viral wedding reels with acoustic soundtrack vows and drone aerial cinematography.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 bg-white p-1.5 rounded-full border border-purple-200 shadow-sm self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              All Releases
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('films')}
              className={`px-5 py-2 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'films' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>4K Films</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reels')}
              className={`px-5 py-2 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'reels' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Trending Reels</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid - NO LOCATION NAMES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo({ url: item.videoUrl, title: item.title })}
              className="group relative cursor-pointer rounded-sm overflow-hidden bg-white border-2 border-purple-200 border-t-4 border-t-purple-600 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-studio-elevated">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                {/* Duration or Views Badge */}
                <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm border border-white/30 text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                  {item.duration || item.views}
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 right-3 z-10 bg-[#7C3AED] text-white px-2.5 py-1 rounded-sm text-[9px] uppercase font-extrabold tracking-widest shadow-md">
                  {item.type === 'film' ? '4K FILM' : 'REEL'}
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Info - NO LOCATION */}
              <div className="p-5 space-y-2 bg-gradient-to-b from-white to-purple-50/60">
                <span className="text-[10px] text-purple-700 uppercase font-mono tracking-widest font-extrabold block">
                  {item.tag}
                </span>
                <h3 className="font-body text-lg sm:text-xl text-[#000000] font-bold tracking-normal group-hover:text-purple-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#334155] font-medium leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Videography Link */}
        <div className="text-center pt-4">
          <Link
            to="/videography"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#7C3AED] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#6D28D9] transition-all shadow-lg"
          >
            <span>Explore Complete Filmography</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.url}
          title={activeVideo.title}
        />
      )}
    </section>
  );
};
