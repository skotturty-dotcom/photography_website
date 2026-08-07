import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Award, MapPin, Heart, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { photographerConfig } from '../config/photographerConfig';
import { updateMetaTags } from '../utils/seo';

export const About = () => {
  useEffect(() => {
    updateMetaTags(
      "About Arjun Mehra | Luxury Wedding & Portrait Photographer",
      "Learn about Arjun Mehra's photography philosophy, journey, and approach to capturing authentic wedding stories across India and worldwide."
    );
  }, []);

  const stats = [
    { label: "Years Experience", value: photographerConfig.experienceYears, icon: Camera },
    { label: "Stories Captured", value: photographerConfig.storiesCaptured, icon: Award },
    { label: "Happy Couples", value: photographerConfig.happyCouples, icon: Heart },
    { label: "Cities Covered", value: photographerConfig.citiesCovered, icon: MapPin },
  ];

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="THE STORYTELLER"
        title="Behind The Camera."
        description="Noticing quiet glances, authentic laughter, and moments that deserve to live beyond a single day."
        bgImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop"
      />

      {/* STORY & PORTRAIT SECTION */}
      <section className="py-24 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photographer Image */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-studio-border shadow-xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                    alt="Arjun Mehra Portrait Photographer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white border border-studio-gold/30 p-6 rounded-sm shadow-xl hidden sm:block max-w-xs text-right">
                  <span className="font-heading text-xl text-studio-gold block font-semibold">Arjun Mehra</span>
                  <span className="text-[10px] uppercase tracking-widest text-studio-muted font-medium">Lead Photographer & Director</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-studio-gold font-semibold">
                MY PHILOSOPHY
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-[#000000] font-bold leading-tight">
                "Every wedding is different. Every couple has a different story. My goal is not to manufacture moments, but to <span className="text-purple-700 font-bold">notice the ones that happen naturally."</span>
              </h2>

              <div className="space-y-4 text-studio-muted text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Over the past decade, I have documented over 250 weddings and milestone celebrations across Rajasthan, Goa, Kerala, Hyderabad, and international destinations. My photography is rooted in deep observation, golden-hour lighting, and quiet intimacy.
                </p>
                <p>
                  I believe the best photographs occur when you forget the camera is there. Whether it is a quiet tear shedding down a mother's cheek during the bidaai, or an ecstatic laughter during sangeet dance performances, my focus remains steadfast on capturing raw human connections.
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <Link
                  to="/booking"
                  className="px-8 py-4 bg-studio-gold text-white uppercase tracking-[0.2em] font-semibold text-xs rounded-sm hover:bg-studio-gold-hover transition-colors inline-flex items-center space-x-2 shadow-md"
                >
                  <span>Let's Create Something Meaningful</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="bg-studio-bg border border-studio-border p-8 rounded-sm text-center space-y-3 shadow-xs">
                  <IconComp className="w-8 h-8 text-studio-gold mx-auto" />
                  <span className="font-heading text-4xl sm:text-5xl text-studio-text font-normal block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-studio-muted font-body font-semibold block">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="VALUES"
            title="What We Stand For"
            description="Our core principles that define our creative process and client commitment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <span className="text-xs text-studio-gold font-mono uppercase tracking-widest font-semibold">01</span>
              <h3 className="font-heading text-2xl text-studio-text">Authenticity First</h3>
              <p className="text-studio-muted text-xs font-light leading-relaxed">
                No awkward poses, fake smiles, or scripted drama. We let your day unfold naturally and capture real feelings.
              </p>
            </div>

            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <span className="text-xs text-studio-gold font-mono uppercase tracking-widest font-semibold">02</span>
              <h3 className="font-heading text-2xl text-studio-text">Editorial Excellence</h3>
              <p className="text-studio-muted text-xs font-light leading-relaxed">
                We combine fine-art composition, dynamic range, and soft skin tone editing so every frame belongs in a luxury gallery.
              </p>
            </div>

            <div className="bg-white border border-studio-border p-8 rounded-sm space-y-3 shadow-xs">
              <span className="text-xs text-studio-gold font-mono uppercase tracking-widest font-semibold">03</span>
              <h3 className="font-heading text-2xl text-studio-text">Unobtrusive Presence</h3>
              <p className="text-studio-muted text-xs font-light leading-relaxed">
                We respect sacred family rituals and maintain a quiet, polite, professional presence throughout your event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
