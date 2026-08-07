import React from 'react';
import { Camera, ShieldCheck, Zap, HardDrive } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const EquipmentSection = () => {
  const gearItems = [
    {
      title: "Master Camera Optics",
      desc: "Sony Alpha A1 & Leica M11 flagship bodies with ultra-fast f/1.2 prime lenses for natural low-light rendering.",
      icon: Camera
    },
    {
      title: "Profoto Studio Lighting",
      desc: "Portable Profoto B10X off-camera flashes for editorial outdoor golden-hour fill & luxury dancefloor highlights.",
      icon: Zap
    },
    {
      title: "Dual Card Data Redundancy",
      desc: "Instant real-time dual memory card recording during live events ensures 100% data safety.",
      icon: HardDrive
    },
    {
      title: "4K Cinema & Aerial Drones",
      desc: "Licensed DJI Mavic 3 Cine 5.1K Apple ProRes drones for panoramic venue perspectives.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-studio-elevated border-t border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="TECHNICAL EXCELLENCE"
          title="World-Class Equipment & Safety Standards"
          description="We invest in flagship cameras, optics, and lighting to guarantee pristine image fidelity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {gearItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-studio-border border-t-4 border-t-studio-gold p-8 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-studio-gold transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-studio-gold text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-body text-xl text-studio-text font-bold tracking-normal group-hover:text-studio-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm font-medium text-studio-text leading-relaxed">
                    {item.desc}
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
