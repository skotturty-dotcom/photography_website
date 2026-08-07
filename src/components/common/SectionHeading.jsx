import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionHeading = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col space-y-3 mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center space-x-2 bg-purple-100/90 border border-purple-300 px-4 py-1.5 rounded-full shadow-xs mb-1">
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span className="text-[11px] font-body tracking-[0.25em] text-purple-950 uppercase font-extrabold">
            {subtitle}
          </span>
        </div>
      )}

      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] tracking-tight leading-[1.15] max-w-4xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-[#000000] font-semibold text-base sm:text-lg max-w-2xl leading-relaxed pt-1">
          {description}
        </p>
      )}

      <div className="w-20 h-[3.5px] bg-gradient-to-r from-purple-700 via-[#A78BFA] to-purple-300 rounded-full mt-3 shadow-xs" />
    </div>
  );
};
