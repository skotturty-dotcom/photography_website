import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, ArrowUpRight, Sparkles, Gem } from 'lucide-react';

import heroWeddingCouple from '../../assets/images/hero_wedding_couple.png';
import heroRoyalBride from '../../assets/images/hero_royal_bride.png';
import heroPreweddingRomance from '../../assets/images/hero_prewedding_romance.png';
import heroCinematicReception from '../../assets/images/hero_cinematic_reception.png';

export const DestinationVenues = () => {
  const [activeVenue, setActiveVenue] = useState(0);

  const destinations = [
    {
      id: "01",
      name: "Visakhapatnam (Vizag)",
      title: "Rushikonda Beach, RK Beach & Kailasagiri",
      tagline: "Coastal Sunset Mandaps & Beachfront Romance",
      image: heroPreweddingRomance,
      desc: "Barefoot oceanfront Pheras, golden hour cliffside portraits along Beach Road, and luxury resort receptions overlooking the Bay of Bengal."
    },
    {
      id: "02",
      name: "Vijayawada & Amaravati",
      title: "Prakasam Barrage & Krishna Riverfront",
      tagline: "Heritage Riverfront Celebrations & Grand Lawns",
      image: heroWeddingCouple,
      desc: "Lush riverbank mandaps, illuminated boat processions on the Krishna River, and vibrant Sangeet celebrations at premier luxury venues."
    },
    {
      id: "03",
      name: "Tirupati & Chandragiri",
      title: "Chandragiri Fort & Temple Heritage",
      tagline: "Royal Heritage Traditions & Sacred Vows",
      image: heroRoyalBride,
      desc: "Traditional South Indian Muhurtham rituals, royal heritage fort photography, and divine sacred wedding celebrations."
    },
    {
      id: "04",
      name: "Araku Valley & Lambasingi",
      title: "Coffee Plantations & Mist Valley Hills",
      tagline: "Scenic Hill Station & Misty Mountain Shoots",
      image: heroCinematicReception,
      desc: "Ethereal morning mist pre-wedding portraiture, rolling green tea gardens, and enchanted pine forest sunset romance."
    },
    {
      id: "05",
      name: "Rajahmundry & Godavari Delta",
      title: "Godavari River Arch Bridge & Konaseema",
      tagline: "Majestic Riverlands & Royal Delta Estates",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
      desc: "Iconic Godavari sunset backdrops, traditional Konaseema coconut grove setups, and grand royal reception galas across Andhra Pradesh."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="ANDHRA PRADESH DESTINATION EXPERTISE"
          title="Premier Andhra Pradesh Wedding Destinations"
          description="Documenting unforgettable celebrations across Andhra Pradesh's most breathtaking coastal beaches, heritage forts, riverfront resorts, and misty hills."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Andhra Pradesh Destination List */}
          <div className="lg:col-span-7 space-y-4">
            {destinations.map((dst, idx) => {
              const isSelected = activeVenue === idx;
              return (
                <div
                  key={dst.id}
                  onClick={() => setActiveVenue(idx)}
                  onMouseEnter={() => setActiveVenue(idx)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-sm border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#FAF7FD] border-purple-600 shadow-xl border-t-4 border-t-purple-700 translate-x-2'
                      : 'bg-white border-purple-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 sm:space-x-5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                        isSelected ? 'bg-purple-700 text-white shadow-md' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {dst.id}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 text-purple-700" />
                          <span className="text-xs uppercase font-mono tracking-widest text-purple-800 font-bold">
                            {dst.name}
                          </span>
                        </div>

                        {/* AMERICAN DIAMOND LUXURY SHIMMER SERIF TITLE */}
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-purple-950 tracking-wide pt-1 flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-purple-600 shrink-0 inline-block animate-pulse" />
                          <span className="bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                            {dst.title}
                          </span>
                        </h3>

                        <p className="text-xs text-[#475569] font-medium pt-1 hidden sm:block">
                          {dst.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isSelected ? 'bg-purple-700 text-white shadow-md' : 'bg-purple-100 text-purple-700'
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Active Andhra Pradesh Destination Preview Card */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden border-4 border-purple-200 shadow-2xl group">
            <img
              src={destinations[activeVenue].image}
              alt={destinations[activeVenue].title}
              className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-8 text-white space-y-2">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest flex items-center space-x-1.5">
                <Gem className="w-3.5 h-3.5 text-purple-300" />
                <span>ANDHRA PRADESH • {destinations[activeVenue].name}</span>
              </span>
              <h4 className="font-serif text-3xl font-black text-white tracking-wide">
                {destinations[activeVenue].title}
              </h4>
              <p className="text-xs text-purple-100 font-medium leading-relaxed">
                {destinations[activeVenue].tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
