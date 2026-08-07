import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { servicesData } from '../data/servicesData';
import { FinalCTA } from '../components/sections/FinalCTA';
import { updateMetaTags } from '../utils/seo';

export const Services = () => {
  useEffect(() => {
    updateMetaTags(
      "Photography & Motion Services | Arjun Mehra Photography",
      "Comprehensive photography services including weddings, pre-weddings, events, portraits, fashion, corporate, videography, and drone photography."
    );
  }, []);

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      <PageHero
        subtitle="STUDIO OFFERINGS"
        title="Services & Specialties"
        description="Crafting heirloom imagery for weddings, couples, events, commercial brands, and cinematic motion picture films."
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-24 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="EXPLORE ALL SPECIALTIES"
            title="Comprehensive Photography Services"
            description="Every service is executed with flagship camera optics, dedicated color grading, and archival cloud delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-b from-white via-white to-purple-50/60 border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-6 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-700 font-bold bg-purple-100/80 border border-purple-200 px-3 py-1 rounded">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="aspect-[16/9] overflow-hidden rounded-sm bg-studio-elevated border border-purple-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-body text-2xl sm:text-3xl text-studio-text font-bold tracking-normal group-hover:text-purple-700 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-studio-text leading-relaxed">
                    {service.description}
                  </p>

                  <div className="w-full h-[1px] bg-purple-200" />

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest text-studio-text font-bold">Key Inclusions:</h4>
                    <ul className="space-y-2 text-sm text-studio-text font-medium">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-200">
                  <Link
                    to="/booking"
                    className="w-full py-3.5 bg-[#A78BFA] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9333EA] transition-colors shadow-md inline-flex items-center justify-center space-x-2"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
