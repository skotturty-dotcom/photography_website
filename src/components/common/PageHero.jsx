import React from 'react';

export const PageHero = ({
  subtitle,
  title,
  description,
  bgImage = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
}) => {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[55vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-studio-bg border-b border-studio-border">
      {/* Background Image with Soft Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter contrast-105 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/85 to-studio-bg/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {subtitle && (
          <span className="text-[10px] sm:text-xs tracking-[0.35em] text-studio-gold uppercase font-semibold inline-block bg-white px-4 py-1.5 rounded-full border border-studio-gold/30 shadow-sm">
            {subtitle}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-studio-text tracking-wide leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-studio-muted text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
