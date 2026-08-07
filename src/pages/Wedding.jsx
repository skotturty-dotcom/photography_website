import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Wedding = () => {
  useEffect(() => {
    updateMetaTags(
      "Luxury Wedding Photography | Arjun Mehra Photography",
      "Cinematic wedding photography capturing sacred rituals, candid emotions, and royal celebrations across India and destination venues."
    );
  }, []);

  const approachItems = [
    { title: "Candid Storytelling", desc: "Observing genuine laughter, spontaneous tears, and sacred family blessings without interrupting the moment." },
    { title: "Natural Emotions", desc: "Focusing on authentic human connection between the couple, parents, and cherished guests." },
    { title: "Editorial Couple Portraits", desc: "Artfully directed portraiture taking full advantage of golden-hour light and architectural splendor." },
    { title: "Detail & Decor Focus", desc: "High-resolution macro coverage of bridal lehengas, jewelry, mandap floral arrangements, and stationery." },
    { title: "Documentary-Style Moments", desc: "Full coverage of traditional rituals, bidaai emotion, and late-night reception energy." },
  ];

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="SACRED CELEBRATIONS"
        title="Your Once-In-A-Lifetime Moments, Beautifully Preserved."
        description="Capturing royal destination weddings, intimate ceremonies, and emotional family vows with cinematic grace."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      {/* APPROACH SECTION */}
      <section className="py-20 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            subtitle="THE PHILOSOPHY"
            title="Our Approach To Wedding Photography"
            description="How we create heirloom images you will cherish for generations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {approachItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-studio-border p-6 rounded-sm space-y-2 shadow-xs hover:border-studio-gold transition-colors">
                <span className="text-xs text-studio-gold font-mono font-semibold">0{idx + 1}</span>
                <h3 className="font-heading text-xl text-studio-text font-normal">{item.title}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-colors text-center shadow-md"
            >
              Check Our Wedding Packages
            </Link>
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 border border-studio-border bg-white text-studio-text hover:border-studio-gold uppercase tracking-[0.2em] font-semibold text-xs rounded-sm transition-colors text-center shadow-xs"
            >
              Check Date Availability
            </Link>
          </div>
        </div>
      </section>

      {/* WEDDING GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FEATURED WEDDING STORIES"
            title="Real Weddings & Vows"
            description="Explore our recent destination weddings."
          />
          <PortfolioGrid initialCategory="WEDDINGS" limit={9} />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
