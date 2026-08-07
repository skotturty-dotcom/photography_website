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

      <section className="py-24 bg-white border-b border-purple-200">
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
                className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/50 border-t-4 border-t-[#C084FC] p-8 rounded-sm space-y-6 shadow-xl hover:shadow-[0_15px_35px_rgba(167,139,250,0.3)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs !text-white font-extrabold bg-white/20 px-3.5 py-1 rounded-full border border-white/40 shadow-xs tracking-wider">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="aspect-[16/9] overflow-hidden rounded-sm bg-purple-950 border border-purple-400/40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl !text-[#C4B5FD] font-bold leading-snug tracking-normal">
                    {service.title}
                  </h3>

                  <p className="!text-white text-sm font-semibold leading-relaxed">
                    {service.description}
                  </p>

                  <div className="w-full h-[1px] bg-purple-500/30" />

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest !text-[#C4B5FD] font-bold">Key Inclusions:</h4>
                    <ul className="space-y-2 text-sm !text-white font-medium">
                      {(service.includes || service.features || []).map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                          <span className="!text-white font-semibold">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/30">
                  <Link
                    to="/booking"
                    className="w-full py-3.5 bg-[#7C3AED] text-white text-xs font-extrabold uppercase tracking-widest rounded-sm hover:bg-[#6D28D9] transition-colors shadow-md inline-flex items-center justify-center space-x-2"
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
