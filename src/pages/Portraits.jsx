import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Portraits = () => {
  useEffect(() => {
    updateMetaTags(
      "Fine Art Portrait Photography | Arjun Mehra Photography",
      "Individual, family, bridal solo, and professional editorial portrait sessions shot with master natural lighting."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="FINE ART PORTRAIT ART"
        title="Portraits With Personality."
        description="Capturing character, confidence, and quiet elegance with minimal distraction and natural light."
        bgImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            subtitle="PORTRAIT CATEGORIES"
            title="Individual, Couple & Family Sessions"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <h3 className="font-heading text-2xl text-studio-gold font-semibold">Individual & Solo Portraits</h3>
              <p className="text-xs text-studio-muted font-light leading-relaxed">
                Empowering solo sessions celebrating personal milestones, personal branding, or bridal heirlooms.
              </p>
            </div>

            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <h3 className="font-heading text-2xl text-studio-gold font-semibold">Family & Generations</h3>
              <p className="text-xs text-studio-muted font-light leading-relaxed">
                Relaxed lifestyle sessions bringing multiple generations together without stiff, uncomfortable studio poses.
              </p>
            </div>

            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <h3 className="font-heading text-2xl text-studio-gold font-semibold">Editorial & Creative</h3>
              <p className="text-xs text-studio-muted font-light leading-relaxed">
                High-fashion lighting, dramatic shadows, and magazine-quality retouching for artists and professionals.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-colors shadow-md"
            >
              <span>Book A Portrait Session</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="PORTRAIT PORTFOLIO"
            title="Selected Portraits"
          />
          <PortfolioGrid initialCategory="PORTRAITS" limit={6} />
        </div>
      </section>

      <FinalCTA heading="Elevate Your Personal Image" subheading="Schedule your tailored portrait session in studio or on location." />
    </div>
  );
};
