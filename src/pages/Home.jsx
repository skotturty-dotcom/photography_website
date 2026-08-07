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
import { PressFeatures } from '../components/sections/PressFeatures';
import { HeirloomAlbumsSection } from '../components/sections/HeirloomAlbumsSection';
import { PreweddingGuideSection } from '../components/sections/PreweddingGuideSection';
import { PricingCalculator } from '../components/sections/PricingCalculator';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { CameraBagSection } from '../components/sections/CameraBagSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortfolioGrid } from '../components/gallery/PortfolioGrid';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
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
            subtitle="SELECTED STORIES"
            title="A collection of moments, emotions and celebrations."
            description="Filter by category to explore authentic wedding stories, couple portraits, events, and cinematic films."
          />

          <PortfolioGrid limit={9} />

          <div className="text-center pt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white uppercase tracking-[0.2em] text-xs font-semibold rounded-sm transition-all shadow-xs"
            >
              <span>View Full 30+ Gallery Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-b from-white via-white to-purple-50/60 border-2 border-purple-200 border-t-4 border-t-purple-700 p-6 rounded-sm space-y-5 shadow-md hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-700 font-bold bg-purple-100/80 border border-purple-200 px-3 py-1 rounded">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="aspect-[16/9] overflow-hidden rounded-sm bg-studio-elevated border border-purple-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-body text-xl sm:text-2xl text-studio-text font-bold tracking-normal group-hover:text-purple-700 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-studio-text leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-200">
                  <Link
                    to="/services"
                    className="w-full py-3 bg-[#A78BFA] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9333EA] transition-colors shadow-md inline-flex items-center justify-center space-x-1.5"
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
              className="px-8 py-4 bg-[#A78BFA] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#9333EA] transition-colors inline-block shadow-lg"
            >
              View All 01-08 Services
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

      {/* 8.5 HANDCRAFTED HEIRLOOM ALBUMS & PRINTS */}
      <HeirloomAlbumsSection />

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                  pkg.highlighted
                    ? 'border-2 border-studio-gold shadow-2xl scale-105 bg-white z-10'
                    : 'border border-studio-border hover:border-studio-gold/60 shadow-md hover:shadow-xl'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-studio-gold text-white text-xs uppercase font-bold tracking-[0.25em] px-6 py-1.5 rounded-full shadow-md">
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

                  <div className="w-full h-[1px] bg-studio-border" />

                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-studio-text font-bold">Package Inclusions:</h4>
                    <ul className="space-y-3.5 text-sm sm:text-base text-studio-text font-medium">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="p-0.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
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
        </div>
      </section>

      {/* 9.5 PRESS & MEDIA RECOGNITION */}
      <PressFeatures />

      {/* 10. TESTIMONIALS SECTION (#testimonials) */}
      <section id="testimonials" className="py-24 sm:py-32 bg-white border-b border-studio-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="CLIENT KIND WORDS"
            title="Trusted By Couples & Families"
            description="Read what our clients say about their experience with Arjun Mehra Photography."
          />

          <TestimonialSlider />
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
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-studio-gold font-semibold">
                  STUDIO REACH
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-studio-text font-normal">
                  Contact Studio
                </h2>
                <p className="text-studio-muted text-sm font-light leading-relaxed">
                  Based in Hyderabad, Telangana, India. Available nationwide and internationally for destination weddings.
                </p>
              </div>

              <div className="bg-white border-2 border-studio-border border-t-4 border-t-studio-gold p-8 rounded-sm space-y-6 text-sm shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Studio Address</h4>
                    <p className="font-body text-sm sm:text-base text-studio-text font-semibold pt-1">{photographerConfig.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Phone Dialer</h4>
                    <a href={`tel:${photographerConfig.phone}`} className="font-body text-sm sm:text-base text-studio-text hover:text-studio-gold font-semibold pt-1 block">
                      {photographerConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Email Studio</h4>
                    <a href={`mailto:${photographerConfig.email}`} className="font-body text-sm sm:text-base text-studio-text hover:text-studio-gold font-semibold pt-1 block">
                      {photographerConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Working Hours</h4>
                    <p className="font-body text-sm sm:text-base text-studio-text font-semibold pt-1">{photographerConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-full bg-studio-gold/15 text-studio-gold shrink-0 mt-0.5">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-widest text-studio-gold font-bold">Instagram Handle</h4>
                    <a href={photographerConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm sm:text-base text-studio-gold hover:underline font-semibold pt-1 block">
                      {photographerConfig.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.35em] text-studio-gold font-semibold">
                  ENQUIRY FORM
                </span>
                <h3 className="font-heading text-2xl text-studio-text font-normal">Send Us A Message</h3>
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
