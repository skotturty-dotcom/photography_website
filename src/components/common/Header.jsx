import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { photographerConfig } from '../../config/photographerConfig';
import { BookingModal } from '../modal/BookingModal';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'hero' },
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Portfolio', path: '/portfolio', sectionId: 'portfolio' },
    { name: 'Services', path: '/services', sectionId: 'services' },
    { name: 'Packages', path: '/packages', sectionId: 'packages' },
    { name: 'Testimonials', path: '/testimonials', sectionId: 'testimonials' },
    { name: 'FAQ', path: '/faq', sectionId: 'faq' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(link.sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (link.sectionId === 'hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (link.sectionId === 'portfolio' || link.sectionId === 'services' || link.sectionId === 'packages' || link.sectionId === 'faq') {
      e.preventDefault();
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-purple-200 py-3.5 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex flex-col items-start shrink"
          >
            <span className="font-heading text-lg sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#000000] group-hover:text-[#7C3AED] transition-colors leading-tight">
              ARJUN MEHRA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] text-[#7C3AED] font-body uppercase font-extrabold -mt-0.5">
              PHOTOGRAPHY
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-extrabold transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#7C3AED]'
                      : 'text-[#000000] hover:text-[#7C3AED]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#7C3AED] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${photographerConfig.phone}`}
              className="p-2 rounded-full border-2 border-purple-200 text-[#000000] hover:text-[#7C3AED] hover:border-[#7C3AED] bg-purple-50 transition-all shadow-xs"
              title="Call Studio"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all duration-300 rounded-sm shadow-md cursor-pointer"
            >
              BOOK A SHOOT
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#7C3AED] text-white uppercase tracking-wider text-[10px] sm:text-[11px] font-extrabold rounded-sm hover:bg-[#6D28D9] transition-all shadow-md cursor-pointer"
            >
              BOOK A SHOOT
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#000000] hover:text-[#7C3AED] focus:outline-none cursor-pointer z-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULLSCREEN OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] bg-white/98 backdrop-blur-xl pt-24 px-6 pb-28 flex flex-col justify-between overflow-y-auto animate-fade-in lg:hidden border-b-2 border-purple-200">
          <div className="space-y-4 text-center py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block py-2.5 text-xl uppercase tracking-[0.2em] font-black transition-all cursor-pointer ${
                    isActive ? 'text-[#7C3AED]' : 'text-[#000000] active:text-[#7C3AED]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-3 text-center pt-6 border-t-2 border-purple-200">
            <a
              href={`tel:${photographerConfig.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-purple-100 text-[#000000] font-extrabold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center space-x-2 active:bg-purple-200"
            >
              <Phone className="w-4 h-4 text-[#7C3AED]" />
              <span>Call Studio: {photographerConfig.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full py-4 bg-[#7C3AED] text-white text-xs font-extrabold uppercase tracking-[0.2em] rounded-sm shadow-md active:bg-[#6D28D9] cursor-pointer"
            >
              Book Your Date Now
            </button>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
