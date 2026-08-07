import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { CinematicReelsSection } from '../components/sections/CinematicReelsSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Videography = () => {
  useEffect(() => {
    updateMetaTags(
      "Cinematic Wedding Films & Reels | Arjun Mehra Photography",
      "4K wedding feature trailers, pre-wedding music films, and viral Instagram reels with acoustic soundtrack vows and drone aerial views."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="MOTION PICTURE GALLERY"
        title="Cinematic Wedding Films & Reels"
        description="4K documentary feature films, intimate acoustic vow trailers, and soaring aerial drone cinematography."
        bgImage="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop"
      />

      <CinematicReelsSection />

      <FinalCTA />
    </div>
  );
};
