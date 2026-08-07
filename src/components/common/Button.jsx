import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center tracking-[0.2em] uppercase font-semibold transition-all duration-300 rounded-sm focus:outline-none';

  const variants = {
    primary: 'bg-studio-gold text-white hover:bg-studio-gold-hover shadow-md',
    secondary: 'bg-white text-studio-text hover:bg-studio-elevated border border-studio-border hover:border-studio-gold shadow-sm',
    outline: 'border border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white',
    dark: 'bg-studio-charcoal text-white hover:bg-black',
    ghost: 'text-studio-muted hover:text-studio-gold hover:bg-studio-elevated/80',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-xs font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
