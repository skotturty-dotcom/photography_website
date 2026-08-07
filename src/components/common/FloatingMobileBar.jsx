import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { photographerConfig } from '../../config/photographerConfig';
import { getWhatsAppLink } from '../../utils/whatsapp';

export const FloatingMobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-studio-border px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={getWhatsAppLink('general')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 bg-emerald-600 text-white rounded text-[11px] font-semibold tracking-wider uppercase shadow-sm"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${photographerConfig.phone}`}
        className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 bg-white text-studio-text border border-studio-border rounded text-[11px] font-semibold tracking-wider uppercase shadow-sm"
      >
        <Phone className="w-4 h-4 text-studio-gold" />
        <span>Call</span>
      </a>

      <Link
        to="/booking"
        className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 bg-studio-gold text-white rounded text-[11px] font-semibold tracking-wider uppercase shadow-sm"
      >
        <Calendar className="w-4 h-4" />
        <span>Book</span>
      </Link>
    </div>
  );
};
