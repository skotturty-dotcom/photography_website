import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Portfolio = () => {
  useEffect(() => {
    updateMetaTags(
      "Photography Portfolio Stories | Arjun Mehra Photography",
      "Browse our curated photography portfolio featuring luxury destination weddings, intimate pre-wedding sessions, corporate galas, and fine art portraits."
    );
  }, []);

  return (
    <div className="space-y-0">
      <PageHero
        subtitle="CURATED GALLERY"
        title="Every Celebration Has A Story."
        description="Filter by category to explore authentic wedding moments, couple portraits, events, and cinematic films."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid initialCategory="ALL" />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
