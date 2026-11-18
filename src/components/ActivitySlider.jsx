import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoSurface from './VideoSurface';

/**
 * Exact 5-Card Layered Coverflow Carousel (matched to reference design in Joy Safari Royal Cream/Maroon/Gold theme)
 * - Clean transparent background (no dark red/maroon outer box).
 * - Compact portrait cards (~290px wide) in 5-card depth staircase (-2, -1, 0, +1, +2).
 * - Auto-running video top half with smooth curved transition into crisp white/cream lower body.
 * - Zero text clipping: natural consistent card height with full ₹1999 + circular button always visible.
 * - Clean Prev/Next arrows + side-card click + touch swipe (no dots/points).
 */
export default function ActivitySlider({ activities = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  const touchStartXRef = useRef(null);

  const total = activities.length;

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Smooth quiet auto-advance (pauses on hover/touch)
  useEffect(() => {
    if (total < 2 || isPaused) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = setInterval(goNext, 4800);
    return () => clearInterval(timer);
  }, [total, isPaused, goNext]);

  const getSignedOffset = (idx) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 35) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
    touchStartXRef.current = null;
  };

  // Responsive horizontal step offsets so the 5-card staircase spans wide right up to the arrows
  const getOffsets = () => {
    if (viewportWidth >= 1536) return { step1: 325, step2: 590, showOuter: true };
    if (viewportWidth >= 1280) return { step1: 285, step2: 520, showOuter: true };
    if (viewportWidth >= 1024) return { step1: 235, step2: 425, showOuter: true };
    if (viewportWidth >= 640) return { step1: 195, step2: 330, showOuter: false };
    return { step1: 125, step2: 210, showOuter: false };
  };

  const { step1, step2, showOuter } = getOffsets();

  const getLayerStyle = (offset) => {
    if (offset === 0) {
      return {
        x: 0,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
      };
    }
    if (offset === -1 || offset === 1) {
      return {
        x: offset * step1,
        scale: 0.9,
        zIndex: 20,
        opacity: 0.96,
        filter: 'brightness(0.92)',
      };
    }
    if (offset === -2 || offset === 2) {
      return {
        x: offset > 0 ? step2 : -step2,
        scale: 0.79,
        zIndex: 10,
        opacity: showOuter ? 0.88 : 0,
        filter: 'brightness(0.84)',
      };
    }
    return {
      x: offset > 0 ? step2 + 120 : -(step2 + 120),
      scale: 0.68,
      zIndex: 1,
      opacity: 0,
      filter: 'brightness(0.7)',
    };
  };

  if (total === 0) return null;

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Joy Safari Attractions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full py-2 sm:py-4 overflow-hidden"
    >
      {/* Clean Floating Left / Right Arrows on Tablet & Desktop */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous attraction"
        className="carousel-control hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white hover:bg-[#7A0F1B] text-[#4A0910] hover:text-gold border-2 border-gold/50 shadow-lg items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next attraction"
        className="carousel-control hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white hover:bg-[#7A0F1B] text-[#4A0910] hover:text-gold border-2 border-gold/50 shadow-lg items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 5-Card Layered Coverflow Stage (Wide Full-Screen Fill, Clean Cream Background) */}
      <div className="relative h-[485px] sm:h-[515px] xl:h-[545px] w-full flex items-center justify-center">
        {activities.map((act, idx) => {
          const offset = getSignedOffset(idx);
          const maxOffset = showOuter ? 2 : 1;
          if (Math.abs(offset) > maxOffset) return null;

          const isCenter = offset === 0;
          const layer = getLayerStyle(offset);
          const startTime = act.timing ? act.timing.split(' - ')[0] : '4:00 PM';
          const shortAge = act.ageLimit
            ? act.ageLimit.split(' (')[0].replace(' Welcome', '')
            : 'All Ages';

          return (
            <motion.article
              key={act.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${total}: ${act.name}`}
              initial={false}
              animate={{
                x: layer.x,
                scale: layer.scale,
                opacity: layer.opacity,
                filter: layer.filter,
              }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 28,
                mass: 0.85,
              }}
              style={{ zIndex: layer.zIndex }}
              onClick={() => {
                if (!isCenter) setActiveIndex(idx);
              }}
              className={`absolute w-[280px] sm:w-[310px] lg:w-[340px] xl:w-[365px] rounded-[1.85rem] bg-white overflow-hidden flex flex-col select-none transition-shadow duration-300 ${
                isCenter
                  ? 'border border-[#D4AF37]/75 shadow-[0_24px_55px_-14px_rgba(74,9,16,0.28)] cursor-default'
                  : 'border border-cream-300/80 shadow-[0_14px_34px_-10px_rgba(43,21,17,0.18)] cursor-pointer'
              }`}
            >
              {/* Top Video Half with Soft Curved Bottom Edge */}
              <div className="relative h-[195px] sm:h-[215px] xl:h-[235px] w-full bg-[#1D0407] overflow-hidden shrink-0 rounded-b-[1.5rem]">
                <VideoSurface
                  src={act.videoUrl}
                  poster={act.image}
                  alt={act.name}
                  shouldPlay={Math.abs(offset) <= 1}
                  muted={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Clean Crisp White Lower Body */}
              <div className="px-5 pt-4 pb-5 flex flex-col text-left bg-white">
                <h3 className="font-serif font-black text-lg sm:text-xl text-[#2B1511] leading-snug line-clamp-1">
                  {act.name}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-xs font-medium text-[#7A6A62]">
                  <MapPin className="w-3.5 h-3.5 text-[#7A0F1B] shrink-0" />
                  <span className="truncate">Joy Safari Jaipur, {act.category}</span>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-bold text-[#2B1511] block mb-0.5">
                    Description
                  </span>
                  <p className="text-xs text-[#5C4A42] leading-[1.45] line-clamp-2 font-normal">
                    {act.shortDesc}
                  </p>
                </div>

                {/* 3 Compact Metrics Columns */}
                <div className="mt-3.5 pt-3 border-t border-cream-200/80 grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-[10px] font-medium text-[#7A6A62] block">
                      Starts
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#7A0F1B] whitespace-nowrap">
                      {startTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-[#7A6A62] block">
                      Guests
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#B8901F] truncate block">
                      {shortAge}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-[#7A6A62] block">
                      Safety
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#2B5432] whitespace-nowrap">
                      4.9 / 5
                    </span>
                  </div>
                </div>

                {/* Bottom Total Price + Circular Action Button */}
                <div className="mt-3.5 pt-3 border-t border-cream-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-medium text-[#7A6A62] block leading-tight">
                      Total Pass
                    </span>
                    <span className="font-serif font-black text-xl text-[#2B1511] leading-tight">
                      ₹1999{' '}
                      <span className="text-[11px] font-sans font-bold text-[#7A0F1B]">
                        + GST
                      </span>
                    </span>
                  </div>

                  <Link
                    to="/activities"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Explore ${act.name}`}
                    className="w-10 h-10 rounded-full bg-[#4A0910] hover:bg-[#7A0F1B] text-gold border border-gold/50 flex items-center justify-center shadow-md hover:scale-105 transition-all shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Clean Mobile Prev / Next Buttons */}
      <div className="mt-3 flex md:hidden items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous attraction"
          className="carousel-control w-10 h-10 rounded-full bg-white hover:bg-[#7A0F1B] text-[#4A0910] hover:text-gold border-2 border-gold/50 flex items-center justify-center shadow-md transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next attraction"
          className="carousel-control w-10 h-10 rounded-full bg-white hover:bg-[#7A0F1B] text-[#4A0910] hover:text-gold border-2 border-gold/50 flex items-center justify-center shadow-md transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
