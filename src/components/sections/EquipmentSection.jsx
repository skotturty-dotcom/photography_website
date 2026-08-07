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
    <section className="py-24 bg-white border-t border-b border-purple-200">
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
                className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/50 border-t-4 border-t-[#C084FC] p-8 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm space-y-5 shadow-xl hover:shadow-[0_15px_35px_rgba(167,139,250,0.35)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group animated-border-card"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/15 text-white border border-white/40 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-white transition-all">
                    <IconComp className="w-6 h-6 !text-white group-hover:!text-purple-950 transition-colors" />
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl !text-[#C4B5FD] font-bold leading-snug tracking-normal">
                    {item.title}
                  </h3>
                  <p className="!text-white text-sm font-semibold leading-relaxed">
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
