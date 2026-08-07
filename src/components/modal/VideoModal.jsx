import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-studio-card">
          <h3 className="font-heading text-xl text-studio-text tracking-wide">
            {title || 'Cinematic Film Preview'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-studio-muted hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
            title={title || "Cinematic Video"}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
