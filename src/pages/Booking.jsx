import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { BookingForm } from '../components/forms/BookingForm';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { updateMetaTags } from '../utils/seo';

export const Booking = () => {
  useEffect(() => {
    updateMetaTags(
      "Book a Shoot & Check Date Availability | Arjun Mehra Photography",
      "Check date availability for your wedding, pre-wedding, event, or portrait session with Arjun Mehra Photography."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="RESERVE YOUR EVENT DATE"
        title="Let's Plan Your Story."
        description="Fill out the availability form below. We usually review wedding dates and respond within 2-4 hours."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 bg-studio-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      <section className="py-20 bg-white border-t border-studio-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-studio-gold font-semibold">
              BEFORE YOU BOOK
            </span>
            <h3 className="font-heading text-3xl text-studio-text font-normal">
              Frequently Asked Booking Questions
            </h3>
          </div>

          <FAQAccordion limit={5} />
        </div>
      </section>
    </div>
  );
};
