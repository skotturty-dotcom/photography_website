import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Award, Star, Quote } from 'lucide-react';

export const PressFeatures = () => {
  const pressItems = [
    {
      publisher: "VOGUE WEDDINGS",
      quote: "Arjun Mehra's photography redefines royal Indian wedding imagery with silent emotional depth and painterly golden-hour lighting.",
      year: "FEATURED 2025 COVER",
      category: "LUXURY WEDDING ARCHIVE"
    },
    {
      publisher: "HARPER'S BAZAAR BRIDE",
      quote: "A masterclass in unscripted candid photojournalism. Every frame feels like a scene from an international film.",
      year: "TOP 10 WEDDING PHOTOGRAPHERS",
      category: "EDITORIAL EXCELLENCE"
    },
    {
      publisher: "WEDDINGSUTRA",
      quote: "From Udaipur lake palaces to intimate coastal vows, Arjun's vision captures the sacred nuances of traditional ceremonies effortlessly.",
      year: "ANNUAL WEDDING AWARD",
      category: "HERITAGE PHOTOGRAPHY"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7FD] border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="EDITORIAL RECOGNITION"
          title="Press Features & Critical Acclaim"
          description="Honored to be celebrated across leading global bridal publications and industry awards."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-6 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded border border-purple-200">
                    {item.publisher}
                  </span>
                  <Quote className="w-6 h-6 text-purple-300 group-hover:text-purple-600 transition-colors" />
                </div>

                <p className="font-serif text-lg text-[#000000] font-normal leading-relaxed italic pt-2">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-200 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#475569]">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
