import React, { useState, useEffect } from 'react';
import { packagesData } from '../data/packagesData';
import { SectionHeading } from '../components/common/SectionHeading';
import { FinalCTA } from '../components/sections/FinalCTA';
import { BookingModal } from '../components/modal/BookingModal';
import { updateMetaTags } from '../utils/seo';

export const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScope, setSelectedScope] = useState([]);

  useEffect(() => {
    updateMetaTags(
      "Photography Packages & Pricing | Arjun Mehra Photography",
      "Transparent luxury photography packages for intimate weddings, multi-day celebrations, and royal destination events by Arjun Mehra."
    );
  }, []);

  const handleOpenEnquiryModal = (pkgName, pkgPrice) => {
    setSelectedScope([`${pkgName} Package`, pkgPrice]);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-32">
      <section className="py-16 sm:py-24 bg-studio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="TRANSPARENT VALUE"
            title="Photography Packages"
            description="All packages include handcrafted color grading and high-resolution digital cloud delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-8 sm:p-10 flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/60 border-t-4 border-t-[#C084FC] shadow-[0_20px_50px_rgba(124,58,237,0.35)] md:scale-105 z-10 animated-border-card-active'
                    : 'bg-white border-2 border-purple-200 border-t-4 border-t-purple-600 shadow-xl hover:shadow-2xl hover:border-purple-400 animated-border-card'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-white text-xs uppercase font-extrabold tracking-[0.25em] px-7 py-2 rounded-full shadow-2xl border-2 border-white z-30 animate-pulse whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className={`font-sans text-3xl sm:text-4xl font-black tracking-wider uppercase ${
                      pkg.highlighted ? '!text-[#C4B5FD]' : 'text-[#000000]'
                    }`}>
                      {pkg.name}
                    </h3>
                    <div>
                      <span className={`inline-block font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs ${
                        pkg.highlighted
                          ? 'bg-white/20 border border-white/40 !text-white'
                          : 'bg-purple-100/90 border border-purple-300 text-purple-900'
                      }`}>
                        {pkg.startingPrice}
                      </span>
                    </div>
                    <p className={`font-semibold text-sm leading-relaxed pt-1 ${
                      pkg.highlighted ? '!text-white' : 'text-[#334155]'
                    }`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className={`w-full h-[1px] ${pkg.highlighted ? 'bg-purple-500/30' : 'bg-purple-200'}`} />

                  <div className="space-y-4">
                    <h4 className={`text-xs uppercase tracking-widest font-extrabold ${
                      pkg.highlighted ? '!text-[#C4B5FD]' : 'text-purple-950'
                    }`}>
                      Package Inclusions:
                    </h4>
                    <ul className={`space-y-3.5 text-sm sm:text-base font-semibold ${
                      pkg.highlighted ? '!text-white' : 'text-[#334155]'
                    }`}>
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            pkg.highlighted ? 'bg-purple-500/30 text-[#C084FC]' : 'bg-purple-100 text-purple-700'
                          }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenEnquiryModal(pkg.name, pkg.startingPrice)}
                    className={`w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-extrabold rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-all block cursor-pointer shadow-lg ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white hover:from-[#6D28D9] hover:to-[#7E22CE] border border-purple-300'
                        : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Notice */}
          <div className="bg-gradient-to-br from-[#3B2B52] via-[#312247] to-[#26183B] border-2 border-purple-400/50 border-t-4 border-t-[#C084FC] rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-8 sm:p-10 text-center space-y-4 max-w-3xl mx-auto shadow-2xl animated-border-card">
            <h3 className="font-sans text-3xl !text-[#C4B5FD] font-extrabold">Need A Bespoke Custom Package?</h3>
            <p className="!text-white text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
              Every celebration is unique. Custom packages are available based on your exact timeline, travel location, number of functions, and team requirements.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenEnquiryModal('Custom Bespoke', 'Royal Destination Quote')}
                className="px-8 py-4 bg-[#7C3AED] text-white uppercase tracking-widest text-xs font-extrabold rounded-tl-xl rounded-br-xl hover:bg-[#6D28D9] transition-colors inline-block shadow-lg cursor-pointer"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      {/* Interactive Booking & Enquiry Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialScope={selectedScope}
      />
    </div>
  );
};
