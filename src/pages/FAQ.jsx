import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const FAQ = () => {
  useEffect(() => {
    updateMetaTags(
      "Frequently Asked Questions | Arjun Mehra Photography",
      "Answers to common questions about booking timelines, destination travel, photo counts, editing turnaround, and custom packages."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="COMMON INQUIRIES"
        title="Frequently Asked Questions."
        description="Everything you need to know about booking Arjun Mehra Photography for your special day."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-24 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            subtitle="HELPFUL DETAILS"
            title="Booking & Logistics Q&A"
          />

          <FAQAccordion />
        </div>
      </section>

      <FinalCTA heading="Have Additional Questions?" subheading="Reach out directly via WhatsApp or call us anytime." />
    </div>
  );
};
