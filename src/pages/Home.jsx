import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, Play } from 'lucide-react';
import { InstagramIcon } from '../components/common/SocialIcons';
import { photographerConfig } from '../config/photographerConfig';
import { getWhatsAppLink } from '../utils/whatsapp';
import { updateMetaTags } from '../utils/seo';

import { HeroCollage } from '../components/hero/HeroCollage';
import { EditorialImageSlider } from '../components/sections/EditorialImageSlider';
import { TrustBanner } from '../components/sections/TrustBanner';
import { StoriesToCapture } from '../components/sections/StoriesToCapture';
import { HorizontalStory } from '../components/sections/HorizontalStory';
import { CinematicBanner } from '../components/sections/CinematicBanner';
import { WeddingExperience } from '../components/sections/WeddingExperience';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { PreweddingGuideSection } from '../components/sections/PreweddingGuideSection';
import { PricingCalculator } from '../components/sections/PricingCalculator';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { CameraBagSection } from '../components/sections/CameraBagSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { EquipmentSection } from '../components/sections/EquipmentSection';
import { CinematicReelsSection } from '../components/sections/CinematicReelsSection';
import { packagesData } from '../data/packagesData';
import { servicesData } from '../data/servicesData';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { ContactForm } from '../components/forms/ContactForm';
import { BookingForm } from '../components/forms/BookingForm';
import { InstagramGrid } from '../components/sections/InstagramGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { BookingModal } from '../components/modal/BookingModal';

export const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackageScope, setSelectedPackageScope] = useState([]);

  useEffect(() => {
    updateMetaTags(
      "Arjun Mehra Photography | Luxury Wedding & Portrait Photographer",
      "Professional wedding, pre-wedding, event and portrait photography by Arjun Mehra. Explore our portfolio and enquire for your special day."
    );
  }, []);

  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "250+", label: "Stories Captured" },
    { value: "150+", label: "Happy Couples" },
    { value: "25+", label: "Cities Covered" },
  ];

  return (
    <div className="space-y-0 bg-studio-bg text-studio-text">
      {/* 1. HERO COLLAGE SECTION (#hero) */}
      <div id="hero">
        <HeroCollage />
      </div>

      {/* 2. PRESS & RECOGNITION + ACHIEVEMENTS TRUST BANNER */}
      <TrustBanner />

      {/* 4. ABOUT SECTION (#about) */}
      <section id="about" className="py-24 sm:py-32 bg-studio-bg border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-[10px] sm:text-xs font-body tracking-[0.35em] text-studio-gold uppercase font-semibold block">
                THE ART OF PRESERVING MOMENTS • ABOUT ARJUN
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#000000] tracking-tight leading-[1.25]">
                "Photography is not just about what you see. <br className="hidden sm:inline" />
                It's about <span className="font-cursive text-purple-700 font-normal">what you feel."</span>
              </h2>

              <p className="text-studio-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                From quiet glances to unforgettable celebrations, every story has moments that deserve to live beyond a single day. We approach every wedding and portrait session with deep respect for natural emotion, quiet subtlety, and timeless elegance.
              </p>

              <div className="pt-2 flex items-center space-x-6">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-studio-gold font-semibold hover:text-studio-gold-hover group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-[0.2em] text-studio-muted hover:text-studio-text transition-colors"
                >
                  Full Biography & Philosophy →
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Image Slider */}
            <div className="lg:col-span-5">
              <EditorialImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 STORIES I LOVE TO CAPTURE */}
      <StoriesToCapture />

      {/* 5. PORTFOLIO SECTION (#portfolio) */}
      <section id="portfolio" className="py-24 sm:py-32 bg-white border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            subtitle="COMPLETE PHOTOGRAPHY SHOWCASE"
            title="Every Celebration, Emotion & Authentic Story."
            description="Explore our full portfolio gallery across all photography genres — from royal weddings and pre-wedding romance to high-fashion portraits, gala events, and cinematic films."
          />

          <PortfolioGrid />
        </div>
      </section>

      {/* 5.5 HORIZONTAL STORY JOURNEY */}
      <HorizontalStory />

      {/* 6. SERVICES SECTION (#services) */}
      <section id="services" className="py-24 bg-studio-bg border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="STUDIO SPECIALTIES"
            title="Services Crafted With Intent"
            description="Exploration of our core photography and motion picture offerings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {servicesData.slice(0, 8).map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-600 p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-800 font-extrabold bg-purple-100/90 border border-purple-300 px-3.5 py-1 rounded-full shadow-xs tracking-wider">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="aspect-[16/9] overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs bg-studio-elevated border border-purple-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl text-[#000000] font-bold group-hover:text-purple-700 transition-colors leading-snug tracking-normal">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#334155] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-200">
                  <Link
                    to="/services"
                    className="w-full py-3 bg-[#7C3AED] text-white text-xs font-extrabold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-[#6D28D9] transition-colors shadow-md inline-flex items-center justify-center space-x-1.5"
                  >
                    <span>View Service Inclusions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/services"
              className="px-8 py-4 bg-[#7C3AED] text-white uppercase tracking-[0.2em] text-xs font-extrabold rounded-sm hover:bg-[#6D28D9] transition-colors inline-block shadow-lg"
            >
              View All 01-10 Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6.5 WHY COUPLES CHOOSE ARJUN */}
      <WhyChooseUs />

      {/* 7. CINEMATIC REELS & FILMS SHOWCASE SECTION */}
      <CinematicReelsSection />

      {/* 7.5 EDGE-TO-EDGE CINEMATIC BANNER */}
      <CinematicBanner />

      {/* 7.6 INTERACTIVE BEFORE & AFTER COLOR GRADING SLIDER */}
      <BeforeAfterSection />

      {/* 7.8 WEDDING EXPERIENCE & CREATIVE PROCESS */}
      <WeddingExperience />

      {/* 8. TECHNICAL & EQUIPMENT STANDARDS */}
      <EquipmentSection />

      {/* 8.2 MASTER CAMERA BAG & OPTICS */}
      <CameraBagSection />

      {/* 8.8 PRE-WEDDING & STYLING GUIDE */}
      <PreweddingGuideSection />

      {/* 8.9 INTERACTIVE PRICING & COVERAGE CALCULATOR */}
      <PricingCalculator />

      {/* 9. PACKAGES SECTION (#packages) */}
      <section id="packages" className="py-24 bg-studio-bg border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="TRANSPARENT VALUE"
            title="Curated Photography Packages"
            description="Designed for intimate ceremonies, multi-day celebrations, and royal destination weddings."
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
                    onClick={() => {
                      setSelectedPackageScope([`${pkg.name} Package`, pkg.startingPrice]);
                      setIsPackageModalOpen(true);
                    }}
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
        </div>
      </section>

      {/* 11. FAQ SECTION (#faq) */}
      <section id="faq" className="py-24 bg-studio-bg border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            subtitle="HELPFUL DETAILS"
            title="Frequently Asked Questions"
            description="Everything you need to know about booking timelines, destination travel, photo counts, and editing turnaround."
          />

          <FAQAccordion />
        </div>
      </section>

      {/* 12. CONTACT SECTION (#contact) */}
      <section id="contact" className="py-24 bg-white border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 px-3.5 py-1 rounded-full shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  <span className="text-[10px] font-mono tracking-[0.25em] text-purple-950 uppercase font-extrabold">
                    STUDIO REACH
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#000000] font-black tracking-tight">
                  Contact Studio
                </h2>
                <p className="text-[#334155] text-sm font-semibold leading-relaxed">
                  Based in Hyderabad, Telangana, India. Available nationwide and internationally for destination weddings.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 border-t-4 border-t-purple-600 p-8 sm:p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm space-y-6 text-sm shadow-xl animated-border-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <MapPin className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Studio Address</h4>
                    <p className="font-sans text-base sm:text-lg text-[#000000] font-bold pt-0.5 leading-snug">{photographerConfig.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Phone className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Phone Dialer</h4>
                    <a href={`tel:${photographerConfig.phone}`} className="font-sans text-base sm:text-lg text-[#000000] hover:text-purple-700 font-bold pt-0.5 block transition-colors">
                      {photographerConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Mail className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Email Studio</h4>
                    <a href={`mailto:${photographerConfig.email}`} className="font-sans text-base sm:text-lg text-[#000000] hover:text-purple-700 font-bold pt-0.5 block transition-colors">
                      {photographerConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <Clock className="w-5 h-5 !text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Working Hours</h4>
                    <p className="font-sans text-base sm:text-lg text-[#000000] font-bold pt-0.5">{photographerConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shrink-0 shadow-md mt-0.5">
                    <InstagramIcon className="w-5 h-5 !text-white" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-800 font-extrabold">Instagram Handle</h4>
                    <a href={photographerConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-base sm:text-lg text-purple-700 hover:text-purple-900 font-extrabold pt-0.5 block hover:underline transition-colors">
                      {photographerConfig.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 px-3.5 py-1 rounded-full shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  <span className="text-[10px] font-mono tracking-[0.25em] text-purple-950 uppercase font-extrabold">
                    ENQUIRY FORM
                  </span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl text-[#000000] font-black tracking-tight">Send Us A Message</h3>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 13. BOOKING SECTION (#booking) */}
      <section id="booking" className="py-24 bg-studio-bg border-b border-studio-border scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            subtitle="RESERVE YOUR EVENT DATE"
            title="Let's Plan Your Story"
            description="Check date availability for your wedding, pre-wedding, event, or portrait session."
          />

          <BookingForm />
        </div>
      </section>

      {/* 14. INSTAGRAM GRID */}
      <InstagramGrid />

      {/* 15. FINAL CTA */}
      <FinalCTA />

      {/* Package Enquiry Modal Popup */}
      <BookingModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        initialScope={selectedPackageScope}
      />
    </div>
  );
};
