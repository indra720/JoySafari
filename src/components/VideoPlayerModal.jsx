import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Calendar, Clock, ShieldCheck, Film } from 'lucide-react';

/**
 * Fullscreen Video Reel & Resort Film Lightbox Modal
 * Supports single video or playlist navigation (Previous / Next).
 */
export default function VideoPlayerModal({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onSelectIndex,
}) {
  const current = items[currentIndex];
  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (hasMultiple && e.key === 'ArrowRight') {
        onSelectIndex?.((currentIndex + 1) % items.length);
      }
      if (hasMultiple && e.key === 'ArrowLeft') {
        onSelectIndex?.((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose, hasMultiple, currentIndex, items.length, onSelectIndex]);

  if (!isOpen || !current) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    onSelectIndex?.((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onSelectIndex?.((currentIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title || 'Joy Safari Video Player'}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video player"
        className="fixed top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/15 hover:bg-gold text-white hover:text-[#4A0910] border border-white/25 flex items-center justify-center transition-all cursor-pointer shadow-lg"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next Playlist Controls */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous video"
            className="hidden sm:flex fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/15 hover:bg-gold text-white hover:text-[#4A0910] border border-white/25 items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next video"
            className="hidden sm:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/15 hover:bg-gold text-white hover:text-[#4A0910] border border-white/25 items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#1A0407] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 flex flex-col max-h-[92vh]"
      >
        {/* Top Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <video
            key={current.videoUrl}
            src={current.videoUrl}
            poster={current.poster || current.image}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Top Left Pill */}
          <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/70 text-gold-soft border border-gold/40 backdrop-blur-sm">
              <Film className="w-3.5 h-3.5 text-gold" />
              <span>{current.tag || current.category || 'HD Video'}</span>
            </span>
            {hasMultiple && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/70 text-white border border-white/20 backdrop-blur-sm">
                {currentIndex + 1} / {items.length}
              </span>
            )}
          </div>
        </div>

        {/* Info & Action Footer */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#2A0408] via-[#36060B] to-[#2A0408] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-gold/25">
          <div className="space-y-1 text-left">
            <h3 className="font-serif font-bold text-lg sm:text-2xl text-gold-soft leading-tight">
              {current.title || current.name}
            </h3>
            {(current.subtitle || current.shortDesc || current.fullDesc) && (
              <p className="text-xs sm:text-sm text-[#FFF8E7]/85 line-clamp-2 max-w-2xl">
                {current.subtitle || current.shortDesc || current.fullDesc}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-cream-200">
              {current.timing && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>{current.timing}</span>
                </span>
              )}
              {current.safety && (
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                  <span>{current.safety}</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {hasMultiple && (
              <div className="flex sm:hidden items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous video"
                  className="w-10 h-10 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next video"
                  className="w-10 h-10 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <Link
              to={current.bookLink || '/contact?package=day-safari'}
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-sans font-black text-xs sm:text-sm shadow-lg hover:shadow-gold-glow transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book @ ₹1999</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
