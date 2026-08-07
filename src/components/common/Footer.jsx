import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';
import { photographerConfig } from '../../config/photographerConfig';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-purple-200 text-[#000000] pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl tracking-[0.2em] text-[#000000] block font-bold">
                ARJUN MEHRA
              </span>
              <span className="text-xs tracking-[0.35em] text-[#7C3AED] font-body uppercase block font-extrabold">
                PHOTOGRAPHY
              </span>
            </Link>
            <p className="text-[#000000] text-sm max-w-sm font-semibold leading-relaxed">
              Capturing honest moments, beautiful stories and everything in between. Based in Hyderabad, available worldwide for destination celebrations.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={photographerConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-purple-200 flex items-center justify-center text-[#000000] hover:text-[#7C3AED] hover:border-[#7C3AED] transition-colors bg-purple-50"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={photographerConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-purple-200 flex items-center justify-center text-[#000000] hover:text-[#7C3AED] hover:border-[#7C3AED] transition-colors bg-purple-50"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={photographerConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-purple-200 flex items-center justify-center text-[#000000] hover:text-[#7C3AED] hover:border-[#7C3AED] transition-colors bg-purple-50"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#000000] font-extrabold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#000000] font-bold">
              <li><Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#7C3AED] transition-colors">About Arjun</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#7C3AED] transition-colors">Portfolio Stories</Link></li>
              <li><Link to="/services" className="hover:text-[#7C3AED] transition-colors">Services</Link></li>
              <li><Link to="/packages" className="hover:text-[#7C3AED] transition-colors">Packages & Pricing</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#7C3AED] transition-colors">Client Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-[#7C3AED] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#7C3AED] transition-colors">Contact Studio</Link></li>
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#000000] font-extrabold">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-[#000000] font-bold">
              <li><Link to="/wedding" className="hover:text-[#7C3AED] transition-colors">Wedding Photography</Link></li>
              <li><Link to="/pre-wedding" className="hover:text-[#7C3AED] transition-colors">Pre-Wedding Shoots</Link></li>
              <li><Link to="/events" className="hover:text-[#7C3AED] transition-colors">Event Photography</Link></li>
              <li><Link to="/portraits" className="hover:text-[#7C3AED] transition-colors">Portrait Sessions</Link></li>
              <li><Link to="/videography" className="hover:text-[#7C3AED] transition-colors">Cinematic Films</Link></li>
              <li><Link to="/booking" className="hover:text-[#7C3AED] transition-colors">Book a Shoot</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#000000] font-extrabold">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-[#000000] font-bold">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <span>{photographerConfig.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a href={`tel:${photographerConfig.phone}`} className="hover:text-[#7C3AED]">
                  {photographerConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a href={`mailto:${photographerConfig.email}`} className="hover:text-[#7C3AED]">
                  {photographerConfig.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-emerald-700 font-extrabold hover:underline"
                >
                  <span>Quick WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t-2 border-purple-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#000000] font-bold space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Arjun Mehra Photography. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#7C3AED]">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#7C3AED]">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
