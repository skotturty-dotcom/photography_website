import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Check, ArrowRight, MessageSquare, Sparkles, Layers } from 'lucide-react';
import { BookingModal } from '../modal/BookingModal';

import { photographerConfig } from '../../config/photographerConfig';

export const PricingCalculator = () => {
  const [selectedEvents, setSelectedEvents] = useState(['wedding', 'sangeet']);
  const [includePrewedding, setIncludePrewedding] = useState(true);
  const [includeAlbum, setIncludeAlbum] = useState(true);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventOptions = {
    wedding: { name: "Wedding Pheras & Reception", tag: "Main Wedding Event" },
    sangeet: { name: "Sangeet & Gala Night", tag: "Evening Celebration" },
    haldi: { name: "Haldi & Mehendi Rituals", tag: "Day Ceremonies" },
    engagement: { name: "Engagement Ceremony", tag: "Vow Exchange" },
  };

  const toggleEvent = (key) => {
    if (selectedEvents.includes(key)) {
      if (selectedEvents.length > 1) {
        setSelectedEvents(selectedEvents.filter((k) => k !== key));
      }
    } else {
      setSelectedEvents([...selectedEvents, key]);
    }
  };

  const getSelectedScopeList = () => {
    const list = selectedEvents.map((k) => eventOptions[k].name);
    if (includePrewedding) list.push('Pre-Wedding Shoot');
    if (includeAlbum) list.push('Italian Leather Album');
    if (includeDrone) list.push('4K Drone');
    return list;
  };

  const handleWhatsAppQuote = () => {
    const eventNames = selectedEvents.map((k) => eventOptions[k].name).join(', ');
    const deliverables = [
      includePrewedding ? 'Pre-Wedding Shoot' : null,
      includeAlbum ? 'Italian Leather Album' : null,
      includeDrone ? '4K Drone Coverage' : null,
    ].filter(Boolean).join(', ');

    const text = `Hi Arjun, I selected custom wedding scope on your website: Events (${eventNames}), Deliverables (${deliverables}). Please share custom pricing and date availability.`;
    window.open(`https://wa.me/${photographerConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleOpenProposalModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="py-28 sm:py-36 bg-gradient-to-b from-[#FAF7FD] via-[#F3E8FF]/60 to-[#FAF7FD] border-y-4 border-purple-300 relative shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="BESPOKE EVENT COVERAGE"
          title="Custom Event Scope & Proposal Builder"
          description="Select your wedding celebrations and required deliverables to build your customized proposal request."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Selection Controls */}
          <div className="lg:col-span-7 space-y-8 bg-white border-2 border-purple-300 p-8 sm:p-10 rounded-sm shadow-xl border-t-4 border-t-purple-700">
            {/* Step 1: Select Events */}
            <div className="space-y-5">
              <h3 className="font-sans text-xl sm:text-2xl text-[#000000] font-black uppercase tracking-wider flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-purple-700" />
                <span>1. Select Events to Cover:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(eventOptions).map((key) => {
                  const isSelected = selectedEvents.includes(key);
                  const item = eventOptions[key];
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => toggleEvent(key)}
                      className={`p-5 rounded-sm border-2 text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-purple-50/90 border-purple-700 shadow-md text-[#000000] ring-1 ring-purple-500'
                          : 'bg-white border-purple-200 text-[#475569] hover:border-purple-400'
                      }`}
                    >
                      <div className="pr-2">
                        <p className="font-extrabold text-base sm:text-lg text-[#000000] leading-snug">{item.name}</p>
                        <p className="text-xs sm:text-sm font-bold text-purple-800 pt-1">{item.tag}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-purple-700 bg-purple-700 text-white' : 'border-purple-300'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Deliverables */}
            <div className="space-y-5 pt-6 border-t-2 border-purple-200">
              <h3 className="font-sans text-xl sm:text-2xl text-[#000000] font-black uppercase tracking-wider flex items-center space-x-3">
                <Layers className="w-6 h-6 text-purple-700" />
                <span>2. Select Deliverables & Features:</span>
              </h3>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-[#FAF7FD] border-2 border-purple-200 rounded-sm cursor-pointer hover:border-purple-500 transition-colors">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={includePrewedding}
                      onChange={(e) => setIncludePrewedding(e.target.checked)}
                      className="w-5 h-5 text-purple-700 rounded border-purple-300 focus:ring-purple-500"
                    />
                    <span className="text-base sm:text-lg font-extrabold text-[#000000]">Pre-Wedding Outdoor Sunset Shoot</span>
                  </div>
                  <span className="text-xs font-mono font-black text-purple-900 bg-purple-100 px-3 py-1 rounded border border-purple-300 uppercase">INCLUDED</span>
                </label>

                <label className="flex items-center justify-between p-4 bg-[#FAF7FD] border-2 border-purple-200 rounded-sm cursor-pointer hover:border-purple-500 transition-colors">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={includeAlbum}
                      onChange={(e) => setIncludeAlbum(e.target.checked)}
                      className="w-5 h-5 text-purple-700 rounded border-purple-300 focus:ring-purple-500"
                    />
                    <span className="text-base sm:text-lg font-extrabold text-[#000000]">Italian Leather Heirloom Printed Album</span>
                  </div>
                  <span className="text-xs font-mono font-black text-purple-900 bg-purple-100 px-3 py-1 rounded border border-purple-300 uppercase">INCLUDED</span>
                </label>

                <label className="flex items-center justify-between p-4 bg-[#FAF7FD] border-2 border-purple-200 rounded-sm cursor-pointer hover:border-purple-400 transition-colors">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="w-5 h-5 text-purple-700 rounded border-purple-300 focus:ring-purple-500"
                    />
                    <span className="text-base sm:text-lg font-extrabold text-[#000000]">4K Aerial Drone Perspective Coverage</span>
                  </div>
                  <span className="text-xs font-mono font-black text-purple-900 bg-purple-100 px-3 py-1 rounded border border-purple-300 uppercase">INCLUDED</span>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT: Bespoke Proposal Summary Box */}
          <div className="lg:col-span-5 bg-white border-2 border-purple-300 border-t-8 border-t-purple-700 p-8 sm:p-10 rounded-sm space-y-7 shadow-2xl sticky top-28">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-950 font-extrabold bg-purple-100 px-4 py-1.5 rounded-full inline-block border border-purple-300">
              BESPOKE PROPOSAL SUMMARY
            </span>

            <div className="space-y-3">
              <h4 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#000000] leading-snug">
                Custom Tailored Package
              </h4>
              <p className="text-sm text-[#000000] font-semibold leading-relaxed">
                Bespoke quote crafted specifically for your selected wedding events and crew size.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t-2 border-purple-200">
              <p className="text-xs uppercase tracking-widest text-[#000000] font-extrabold">Selected Scope:</p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {selectedEvents.map((k) => (
                  <span key={k} className="text-xs sm:text-sm font-bold text-purple-950 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-md shadow-xs">
                    ✓ {eventOptions[k].name}
                  </span>
                ))}
                {includePrewedding && (
                  <span className="text-xs sm:text-sm font-bold text-purple-950 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-md shadow-xs">
                    ✓ Pre-Wedding Shoot
                  </span>
                )}
                {includeAlbum && (
                  <span className="text-xs sm:text-sm font-bold text-purple-950 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-md shadow-xs">
                    ✓ Italian Leather Album
                  </span>
                )}
                {includeDrone && (
                  <span className="text-xs sm:text-sm font-bold text-purple-950 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-md shadow-xs">
                    ✓ 4K Drone
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-5 border-t-2 border-purple-200">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-4.5 bg-emerald-600 hover:bg-emerald-700 text-white uppercase tracking-[0.2em] font-extrabold text-xs rounded-sm transition-all flex items-center justify-center space-x-2 shadow-xl"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Request Custom Quote via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleOpenProposalModal}
                className="w-full py-4.5 bg-purple-700 hover:bg-purple-800 text-white uppercase tracking-[0.2em] font-extrabold text-xs rounded-sm transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
              >
                <span>Request Formal Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Booking Modal Popup */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialScope={getSelectedScopeList()}
      />
    </section>
  );
};
