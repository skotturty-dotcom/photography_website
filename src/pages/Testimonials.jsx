import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
import { testimonialsData } from '../data/testimonialsData';
import { Star } from 'lucide-react';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Testimonials = () => {
  useEffect(() => {
    updateMetaTags(
      "Client Testimonials & Reviews | Arjun Mehra Photography",
      "Read genuine reviews and experiences from couples and clients who hired Arjun Mehra Photography for their weddings and events."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="CLIENT KIND WORDS"
        title="Stories Of Trust & Joy."
        description="Authentic feedback from couples whose sacred moments we had the honor of preserving."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <TestimonialSlider />

          {/* Grid of all reviews */}
          <div className="pt-12 border-t border-studio-border">
            <SectionHeading
              subtitle="ALL REVIEWS"
              title="What Couples Say"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialsData.map((t) => (
                <div key={t.id} className="bg-white border border-studio-border p-6 rounded-sm space-y-4 shadow-xs">
                  <div className="flex items-center space-x-1 text-studio-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-studio-muted font-normal leading-relaxed font-body">
                    "{t.quote}"
                  </p>
                  <div className="pt-2 border-t border-studio-border flex items-center space-x-3">
                    <img src={t.avatar} alt={t.clientName} className="w-9 h-9 rounded-full object-cover border border-studio-gold" />
                    <div>
                      <h4 className="font-heading text-base text-studio-text font-medium">{t.clientName}</h4>
                      <p className="text-[10px] text-studio-gold uppercase font-semibold">{t.eventType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
