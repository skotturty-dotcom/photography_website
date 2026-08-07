import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/SocialIcons';
import { photographerConfig } from '../../config/photographerConfig';

export const InstagramGrid = () => {
  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", likes: "1.2k" },
    { id: 2, image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", likes: "940" },
    { id: 3, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", likes: "1.8k" },
    { id: 4, image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", likes: "2.1k" },
    { id: 5, image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop", likes: "1.5k" },
    { id: 6, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", likes: "3.4k" },
  ];

  return (
    <section className="py-20 border-t border-studio-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-studio-gold font-semibold">
              {photographerConfig.instagram}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-studio-text font-normal pt-1">
              Follow The Latest Stories
            </h2>
          </div>

          <a
            href={photographerConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-studio-bg border border-studio-border hover:border-studio-gold text-studio-text text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors shadow-xs"
          >
            <InstagramIcon className="w-4 h-4 text-studio-gold" />
            <span>Follow On Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={photographerConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-studio-bg rounded-sm border border-studio-border shadow-xs"
            >
              <img
                src={post.image}
                alt="Instagram story"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-1.5 text-white text-xs font-medium">
                <InstagramIcon className="w-4 h-4 text-studio-gold" />
                <span>{post.likes}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
