import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Events = () => {
  useEffect(() => {
    updateMetaTags(
      "Event Photography Studio | Arjun Mehra Photography",
      "Professional coverage for engagements, milestone birthdays, anniversaries, corporate galas, and private celebrations."
    );
  }, []);

  const eventTypes = [
    "Engagement Ceremonies",
    "Milestone Birthdays",
    "Anniversary Celebrations",
    "Corporate Galas & Keynotes",
    "Baby Showers & Naming Ceremonies",
    "Cultural & Religious Festivals",
    "Private Dinners & Cocktail Parties",
  ];

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="MILESTONE CELEBRATIONS"
        title="Every Event Deserves To Be Remembered."
        description="Preserving ambient venue lighting, guest laughter, key speeches, and spontaneous party energy."
        bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            subtitle="CELEBRATION TYPES"
            title="Events We Capture"
            description="From intimate family dinners to 500+ guest corporate galas."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-studio-border p-5 rounded-sm flex items-center space-x-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-studio-gold shrink-0" />
                <span className="text-xs font-semibold text-studio-text tracking-wider uppercase">{type}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-colors shadow-md"
            >
              <span>Enquire For Your Event</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FEATURED EVENTS"
            title="Recent Celebrations"
          />
          <PortfolioGrid initialCategory="EVENTS" limit={6} />
        </div>
      </section>

      <FinalCTA heading="Planning An Event?" subheading="Secure reliable professional photography coverage for your upcoming celebration." />
    </div>
  );
};
