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
      title: "Echoes of Eternity — Udaipur Wedding Film",
      subtitle: "Royal destination wedding celebration at Taj Lake Palace",
      duration: "3:45 MINS",
      location: "Udaipur, Rajasthan",
      thumbnail: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 2,
      type: 'film',
      title: "The Sacred Vows — Jaipur Heritage Trailer",
      subtitle: "Traditional pheras & palace grand reception at Rambagh Palace",
      duration: "4:20 MINS",
      location: "Jaipur, Rajasthan",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 3,
      type: 'film',
      title: "Golden Sunset Romance — Goa Pre-Wedding Film",
      subtitle: "Intimate beach whispers & sunset cliffside aerial drone shots",
      duration: "2:50 MINS",
      location: "Goa Beaches",
      thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 4,
      type: 'reel',
      title: "Bride's Emotional First Look Reaction",
      subtitle: "Tears of joy during the veil reveal",
      views: "1.4M VIEWS",
      location: "Hyderabad Studio",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 5,
      type: 'reel',
      title: "Drone Aerial View of Mandap Pheras",
      subtitle: "Soaring 5K drone shot over lit palace courtyard",
      views: "980K VIEWS",
      location: "Udaipur Fort",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 6,
      type: 'reel',
      title: "Sangeet Dance Performance & Fireworks",
      subtitle: "High energy celebration & sparklers reveal",
      views: "2.1M VIEWS",
      location: "Chowmahalla Palace",
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
        
        {/* Section Header (Bright Theme) */}
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

          {/* Filter Tabs (Bright Theme) */}
          <div className="flex items-center space-x-2 bg-white p-1.5 rounded-full border border-purple-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'all' ? 'bg-[#A78BFA] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveTab('films')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center space-x-1.5 ${
                activeTab === 'films' ? 'bg-[#A78BFA] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>4K Films</span>
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center space-x-1.5 ${
                activeTab === 'reels' ? 'bg-[#A78BFA] text-white shadow-md' : 'text-studio-text hover:text-purple-700'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Trending Reels</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid (Bright Lavender & White Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo({ url: item.videoUrl, title: item.title })}
              className="group relative cursor-pointer rounded-sm overflow-hidden bg-white border-2 border-purple-200 border-t-4 border-t-purple-500 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between"
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
                <div className="absolute top-3 right-3 z-10 bg-[#A78BFA] text-white px-2.5 py-1 rounded-sm text-[9px] uppercase font-bold tracking-widest shadow-md">
                  {item.type === 'film' ? '4K FILM' : 'REEL'}
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#A78BFA] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Info (Bright Theme) */}
              <div className="p-5 space-y-2 bg-gradient-to-b from-white to-purple-50/60">
                <span className="text-[10px] text-purple-700 uppercase font-mono tracking-widest font-bold block">
                  {item.location}
                </span>
                <h3 className="font-body text-lg sm:text-xl text-[#000000] font-bold tracking-normal group-hover:text-purple-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#000000] font-semibold line-clamp-2">
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
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#A78BFA] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#9333EA] transition-all shadow-lg"
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
