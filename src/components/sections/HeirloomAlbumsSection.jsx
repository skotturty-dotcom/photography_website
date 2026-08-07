import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { BookOpen, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const HeirloomAlbumsSection = () => {
  const artifacts = [
    {
      title: "Italian Handcrafted Leather Albums",
      desc: "Lay-flat flush mount albums crafted by master bookbinders in Milan with genuine Italian full-grain leather covers and archival velvet boxes.",
      icon: BookOpen,
      tag: "FLAGSHIP PRINT"
    },
    {
      title: "Fine Art Metallic Cotton Prints",
      desc: "Museum-grade Hahnemühle 100% cotton archival paper printed with 12-pigment archival inks guaranteed for over 100+ years of color permanence.",
      icon: Sparkles,
      tag: "MUSEUM GRADE"
    },
    {
      title: "Acrylic & Canvas Wall Gallery Art",
      desc: "Crystal-clear 5mm shatterproof acrylic wall floats and museum canvas gallery wraps custom framed for your home interior.",
      icon: Layers,
      tag: "INTERIOR ART"
    },
    {
      title: "Encrypted Cloud Archival Vault",
      desc: "Private 4K digital cloud gallery storage with unlimited high-resolution downloads and instant family sharing access.",
      icon: ShieldCheck,
      tag: "DIGITAL SAFETY"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="TANGIBLE MEMORIES"
          title="Handcrafted Heirloom Albums & Print Artifacts"
          description="Transforming digital files into tangible heirloom physical art pieces designed to last generations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {artifacts.map((art, idx) => {
            const IconComp = art.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-white to-purple-50/60 border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-2.5 py-1 rounded border border-purple-200">
                      {art.tag}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug tracking-normal">
                    {art.title}
                  </h3>

                  <p className="text-sm text-[#000000] font-semibold leading-relaxed">
                    {art.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
