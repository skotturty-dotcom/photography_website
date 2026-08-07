import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                  pkg.highlighted
                    ? 'border-2 border-purple-500 shadow-2xl scale-105 bg-white z-10'
                    : 'border border-purple-200 hover:border-purple-400 shadow-md hover:shadow-xl'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white text-xs uppercase font-extrabold tracking-[0.25em] px-6 py-1.5 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#000000] font-black tracking-wider uppercase">{pkg.name}</h3>
                    <div>
                      <span className="inline-block bg-purple-100 border border-purple-300 text-purple-950 font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-xs">
                        {pkg.startingPrice}
                      </span>
                    </div>
                    <p className="text-[#000000] font-semibold text-sm leading-relaxed pt-1">{pkg.tagline}</p>
                  </div>

                  <div className="w-full h-[1px] bg-purple-200" />

                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-[#000000] font-bold">Package Inclusions:</h4>
                    <ul className="space-y-3.5 text-sm sm:text-base text-[#000000] font-semibold">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="p-0.5 rounded-full bg-purple-100 text-purple-700 shrink-0 mt-0.5">
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
                    className={`w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-extrabold rounded-sm transition-all block cursor-pointer ${
                      pkg.highlighted
                        ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg'
                        : 'border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white shadow-xs'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Notice */}
          <div className="bg-white border-2 border-purple-200 rounded-sm p-8 sm:p-10 text-center space-y-4 max-w-3xl mx-auto shadow-md">
            <h3 className="font-serif text-3xl text-[#000000] font-bold">Need A Bespoke Custom Package?</h3>
            <p className="text-[#000000] text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
              Every celebration is unique. Custom packages are available based on your exact timeline, travel location, number of functions, and team requirements.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenEnquiryModal('Custom Bespoke', 'Royal Destination Quote')}
                className="px-8 py-4 bg-purple-700 text-white uppercase tracking-widest text-xs font-extrabold rounded-sm hover:bg-purple-800 transition-colors inline-block shadow-md cursor-pointer"
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
