import React from 'react';
import { SectionHeading } from '../common/SectionHeading';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const HorizontalStory = () => {
  const storyFrames = [
    {
      id: "01",
      tag: "THE BEGINNING",
      title: "Bridal Preparation & Veil Reveal",
      image: heroRoyalBride,
      location: "Taj Lake Palace, Udaipur"
    },
    {
      id: "02",
      tag: "THE PROMISE",
      title: "Sacred Pheras & Vow Exchanges",
      image: heroWeddingCouple,
      location: "Rambagh Palace, Jaipur"
    },
    {
      id: "03",
      tag: "THE CELEBRATION",
      title: "Royal Sangeet & Sparkler Fireworks",
      image: heroCinematicReception,
      location: "Chowmahalla Palace"
    },
    {
      id: "04",
      tag: "THE DETAILS",
      title: "Intricate Kundan Jewelry & Lehengas",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      location: "Heritage Suite"
    },
    {
      id: "05",
      tag: "THE PEOPLE",
      title: "Unscripted Family Tears & Smiles",
      image: heroPreweddingRomance,
      location: "Goa Cliffside"
    },
    {
      id: "06",
      tag: "THE MEMORY",
      title: "Heirloom Albums & Digital Vows",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
      location: "Worldwide Destination"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-purple-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          subtitle="HORIZONTAL VISUAL JOURNEY"
          title="Every Frame Tells A Story."
          description="A sequential narrative capturing every chapter of your celebration from dawn until the final dance."
        />

        {/* Scrollable Story Row */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {storyFrames.map((frame) => (
            <div
              key={frame.id}
              className="shrink-0 w-80 sm:w-96 snap-center bg-gradient-to-b from-white to-purple-50/60 border-2 border-purple-200 border-t-4 border-t-purple-700 p-5 rounded-sm space-y-4 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-purple-100 relative">
                <img
                  src={frame.image}
                  alt={frame.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                  {frame.id} • {frame.tag}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-purple-700 font-bold block">
                  {frame.location}
                </span>
                <h3 className="font-body text-lg text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug">
                  {frame.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
