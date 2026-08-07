import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { photographerConfig } from '../../config/photographerConfig';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const FloatingContactButtons = () => {
  const whatsappUrl = getWhatsAppLink('general');

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-50 flex flex-col items-end space-y-3">
      {/* 1. DIRECT CALLING BUTTON */}
      <a
        href={`tel:${photographerConfig.phone}`}
        className="group relative flex items-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white"
        aria-label="Call Studio Direct"
        title="Call Studio Direct (+91 98765 43210)"
      >
        <span className="absolute -inset-1 rounded-full bg-purple-500/40 animate-ping pointer-events-none" />
        <Phone className="w-5 h-5 fill-current relative z-10" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold tracking-wider uppercase ml-0 group-hover:ml-2">
          Call Studio
        </span>
      </a>

      {/* 2. WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageSquare className="w-5 h-5 fill-current relative z-10" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold tracking-wider uppercase ml-0 group-hover:ml-2">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
