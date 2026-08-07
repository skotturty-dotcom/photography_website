import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const PreWedding = () => {
  useEffect(() => {
    updateMetaTags(
      "Pre-Wedding Shoot & Couple Photography | Arjun Mehra Photography",
      "Cinematic pre-wedding sessions in palace courtyards, mountain hills, beaches, and studio environments."
    );
  }, []);

  const categories = [
    { title: "Outdoor & Nature", desc: "Golden-hour mountain landscapes, secluded beaches, and natural light sunset walks." },
    { title: "Heritage & Palaces", desc: "Regal archways, majestic fort courtyard vistas, and royal Indian architecture." },
    { title: "Minimal Studio", desc: "Clean studio key-lighting highlighting fashion styling and intimate portraiture." },
    { title: "Destination Love", desc: "Multi-day travel shoots across Udaipur, Jaipur, Goa, Munnar, or international cities." },
  ];

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="COUPLE PORTRAITURE"
        title="Before The Wedding, There Is A Story."
        description="Intimate, relaxed pre-wedding sessions designed around your romance, chemistry, and favorite places."
        bgImage="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            subtitle="SHOOT STYLES"
            title="Pre-Wedding Concepts & Locations"
            description="Choose a theme that fits your personality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-studio-border p-6 rounded-sm space-y-3 shadow-xs hover:border-studio-gold transition-colors">
                <span className="text-xs text-studio-gold font-mono font-semibold">0{idx + 1}</span>
                <h3 className="font-heading text-xl text-studio-text font-normal">{cat.title}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-colors shadow-md"
            >
              <span>Plan Your Pre-Wedding</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FEATURED SESSIONS"
            title="Pre-Wedding Stories"
          />
          <PortfolioGrid initialCategory="PRE-WEDDINGS" limit={6} />
        </div>
      </section>

      <FinalCTA heading="Ready To Tell Your Love Story?" subheading="Let's select the perfect location for your pre-wedding shoot." />
    </div>
  );
};
