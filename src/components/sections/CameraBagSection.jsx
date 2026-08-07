import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Camera, Aperture, Zap, HardDrive, ShieldCheck, Compass } from 'lucide-react';

export const CameraBagSection = () => {
  const gearItems = [
    {
      category: "FLAGSHIP BODIES",
      model: "Sony Alpha A1 & Leica M11",
      desc: "50.1 Megapixel dual-sensor bodies rendering ultra-high dynamic range in low-light mandap environments.",
      icon: Camera,
      badge: "50MP RAW"
    },
    {
      category: "PRIME OPTICS",
      model: "50mm f/1.2 & 85mm f/1.4 GM",
      desc: "Ultra-fast prime lenses producing creamy background bokeh and sharp portrait isolation.",
      icon: Aperture,
      badge: "f/1.2 BOKEH"
    },
    {
      category: "STUDIO LIGHTING",
      model: "Profoto B10X & A10 Location Flashes",
      desc: "Portable off-camera flashes recreating natural golden hour sunlight on indoor dance floors.",
      icon: Zap,
      badge: "PROFOTO LIGHTING"
    },
    {
      category: "4K CINEMA DRONES",
      model: "DJI Mavic 3 Cine (Apple ProRes)",
      desc: "5.1K aerial drone perspectives capturing grand palace architecture and lakefront fireworks.",
      icon: Compass,
      badge: "5.1K PRORES"
    },
    {
      category: "DATA REDUNDANCY",
      model: "Dual CFexpress Cards & RAID Backup",
      desc: "Instant real-time dual card recording guarantees 100% redundant data protection during live events.",
      icon: HardDrive,
      badge: "DUAL CARD BACKUP"
    },
    {
      category: "SAFETY PROTOCOLS",
      model: "Backup Gear Crew & Encrypted Vault",
      desc: "Every wedding shoot carries full redundant backup camera bodies, lenses, flashes, and encrypted cloud storage.",
      icon: ShieldCheck,
      badge: "ZERO FAILURE"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7FD] border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="TECHNICAL CRAFTSMANSHIP"
          title="Inside Arjun's Master Camera Bag"
          description="Flagship optics, studio flash lighting, and redundant data security that empower us to capture flawless images in any environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearItems.map((gear, idx) => {
            const IconComp = gear.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-700 p-8 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-purple-900 bg-purple-100 px-3 py-1 rounded border border-purple-300">
                      {gear.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-700 block">
                      {gear.category}
                    </span>
                    <h3 className="font-sans text-xl text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug tracking-normal pt-1">
                      {gear.model}
                    </h3>
                  </div>

                  <p className="text-sm text-[#000000] font-semibold leading-relaxed">
                    {gear.desc}
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
