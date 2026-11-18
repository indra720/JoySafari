import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Responsive wrapper:
 * - On mobile (< md): Horizontal scroll-snap carousel with clean Prev/Next buttons (prevents excessive vertical page height).
 * - On tablet & desktop (md+): Standard multi-column CSS Grid passed via `desktopGridClass`.
 */
export default function MobileCarousel({
  children,
  desktopGridClass = 'md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6',
  cardWidthClass = 'w-[82vw] sm:w-[320px] md:w-auto',
  dark = false,
}) {
  const trackRef = useRef(null);

  const scrollTrack = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.82, 280);
    el.scrollBy({
      left: dir === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  const items = React.Children.toArray(children);

  return (
    <div className="relative">
      {/* Horizontal Snap Track on Mobile, Grid on md+ */}
      <div
        ref={trackRef}
        className={`carousel-track flex gap-4 overflow-x-auto no-scrollbar pb-2 md:overflow-visible md:pb-0 ${desktopGridClass}`}
      >
        {items.map((child, idx) => (
          <div
            key={child?.key ?? idx}
            style={{ scrollSnapAlign: 'center' }}
            className={`flex-shrink-0 md:flex-shrink flex flex-col ${cardWidthClass}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Compact Mobile Prev / Next Buttons */}
      <div className="mt-4 flex md:hidden items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollTrack('prev')}
          aria-label="Previous card"
          className={`carousel-control w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-sm transition-all cursor-pointer ${
            dark
              ? 'bg-black/45 border-gold/45 text-gold-soft hover:bg-gold hover:text-[#4A0910]'
              : 'bg-white border-gold/40 text-[#2B1511] hover:bg-[#7A0F1B] hover:text-gold'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollTrack('next')}
          aria-label="Next card"
          className={`carousel-control w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-sm transition-all cursor-pointer ${
            dark
              ? 'bg-black/45 border-gold/45 text-gold-soft hover:bg-gold hover:text-[#4A0910]'
              : 'bg-white border-gold/40 text-[#2B1511] hover:bg-[#7A0F1B] hover:text-gold'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
