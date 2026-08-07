import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const WhatsAppButton = ({ type = 'general', customData = {} }) => {
  const whatsappUrl = getWhatsAppLink(type, customData);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-6 z-40 group flex items-center justify-center p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
      <MessageSquare className="w-6 h-6 fill-current relative z-10" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-semibold tracking-wider uppercase ml-0 group-hover:ml-2">
        WhatsApp Us
      </span>
    </a>
  );
};
