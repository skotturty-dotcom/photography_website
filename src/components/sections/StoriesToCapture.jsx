import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const StoriesToCapture = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: '01',
      title: "Wedding Stories",
      subtitle: "Sacred pheras, royal mandap rituals, & grand multi-day celebrations",
      link: "/wedding",
      image: heroRoyalBride,
      count: "150+ CAPTURED"
    },
    {
      id: '02',
      title: "Pre-Wedding Romance",
      subtitle: "Intimate golden-hour sessions across heritage palaces & beaches",
      link: "/pre-wedding",
      image: heroPreweddingRomance,
      count: "80+ SESSIONS"
    },
    {
      id: '03',
      title: "Event Celebrations",
      subtitle: "Milestone birthdays, sangeet night fireworks, & gala evenings",
      link: "/events",
      image: heroCinematicReception,
      count: "60+ EVENTS"
    },
    {
      id: '04',
      title: "Fine Art Portraits",
      subtitle: "Heirloom family portraits, editorial fashion, & bridal singles",
      link: "/portraits",
      image: heroWeddingCouple,
      count: "100+ PORTRAITS"
    },
    {
      id: '05',
      title: "Cinematic 4K Films",
      subtitle: "Vow acoustic soundtracks, documentary trailers, & aerial drone motion",
      link: "/videography",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
      count: "45+ FILMS"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7FD] text-studio-text border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          subtitle="SPECIALTY CATEGORIES"
          title="Stories I Love To Capture"
          description="Explore visual genres curated with editorial precision and authentic emotional depth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* LEFT: Category Rows */}
          <div className="lg:col-span-7 space-y-3">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.link}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`group block p-6 sm:p-7 rounded-sm border-2 transition-all duration-300 ${
                  activeCategory === idx
                    ? 'bg-white border-purple-500 shadow-xl translate-x-2'
                    : 'bg-white/60 border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <span className="font-mono text-xs text-purple-700 font-extrabold bg-purple-100 px-3 py-1 rounded">
                      {cat.id}
                    </span>
                    <div>
                      <h3 className="font-sans text-xl sm:text-2xl text-[#000000] font-bold tracking-normal group-hover:text-purple-700 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] font-medium pt-1">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                      {cat.count}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-[#A78BFA] group-hover:text-white transition-colors shadow-xs">
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT: Dynamic High-Res Photography Preview Box */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border-4 border-white shadow-2xl bg-purple-100 group">
              <img
                src={categories[activeCategory].image}
                alt={categories[activeCategory].title}
                className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A78BFA] font-bold block">
                  CATEGORY PREVIEW
                </span>
                <h4 className="font-sans text-2xl font-bold tracking-normal drop-shadow-md">
                  {categories[activeCategory].title}
                </h4>
                <p className="text-xs text-white/90 font-medium">
                  {categories[activeCategory].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
