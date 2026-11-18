import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import VideoSurface from '../components/VideoSurface';
import MobileCarousel from '../components/MobileCarousel';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [arcOffset, setArcOffset] = useState(0);
  const [isArcPaused, setIsArcPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [stageWidth, setStageWidth] = useState(
    typeof window !== 'undefined' ? Math.min(window.innerWidth, 1800) : 1360
  );

  const stageRef = useRef(null);
  const touchStartXRef = useRef(null);

  const allItems = content.galleryItems;
  const totalArc = allItems.length;

  const tabs = ['All', 'Activities', 'Night Show', 'Rooms', 'Dining', 'Culture'];

  const chapters = [
    { num: '#01', title: 'Activities & Thrills', category: 'Activities' },
    { num: '#02', title: 'Culture & Night Show', category: 'Night Show' },
    { num: '#03', title: 'Luxury Room Stays', category: 'Rooms' },
    { num: '#04', title: 'Royal Gala Dining', category: 'Dining' },
  ];

  // Track exact container width for silky-smooth pixel-accurate 3D arc sliding
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const updateWidth = () => {
      if (el.clientWidth > 0) setStageWidth(el.clientWidth);
    };
    updateWidth();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(updateWidth);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', updateWidth, { passive: true });
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const rotateArc = useCallback(
    (dir) => {
      setArcOffset((prev) =>
        dir === 'next' ? (prev + 1) % totalArc : (prev - 1 + totalArc) % totalArc
      );
    },
    [totalArc]
  );

  // Quiet panoramic arc glide (pauses on hover/touch)
  useEffect(() => {
    if (totalArc < 2 || isArcPaused) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = setInterval(() => {
      rotateArc('next');
    }, 4500);
    return () => clearInterval(timer);
  }, [totalArc, isArcPaused, rotateArc]);

  const filteredItems =
    activeTab === 'All'
      ? allItems
      : allItems.filter(
          (item) => item.category.toLowerCase() === activeTab.toLowerCase()
        );

  const handleArcTouchStart = (e) => {
    setIsArcPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleArcTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(delta) > 35) {
      rotateArc(delta < 0 ? 'next' : 'prev');
    }
    touchStartXRef.current = null;
  };

  // Signed shortest circular slot distance from active center
  const getSignedSlot = (idx) => {
    let diff = idx - arcOffset;
    if (diff > totalArc / 2) diff -= totalArc;
    if (diff < -totalArc / 2) diff += totalArc;
    return diff;
  };

  const isDesktop = stageWidth >= 1024;
  const isTablet = stageWidth >= 640 && stageWidth < 1024;
  const maxVisibleSlot = isDesktop ? 3 : 1;

  // Exact same concave 3D arc visual geometry, animated smoothly per stable card key
  const getArcCardGeometry = (slot) => {
    const abs = Math.abs(slot);
    const sign = slot < 0 ? -1 : slot > 0 ? 1 : 0;

    if (isDesktop) {
      if (abs === 0) {
        return {
          x: 0,
          width: stageWidth * 0.132,
          height: 265,
          rotateY: 0,
          opacity: 1,
          zIndex: 10,
        };
      }
      if (abs === 1) {
        return {
          x: sign * stageWidth * 0.139,
          width: stageWidth * 0.128,
          height: stageWidth >= 1280 ? 285 : 270,
          rotateY: -sign * 9,
          opacity: 1,
          zIndex: 15,
        };
      }
      if (abs === 2) {
        return {
          x: sign * stageWidth * 0.281,
          width: stageWidth * 0.138,
          height: stageWidth >= 1280 ? 325 : 300,
          rotateY: -sign * 20,
          opacity: 1,
          zIndex: 20,
        };
      }
      if (abs === 3) {
        return {
          x: sign * stageWidth * 0.433,
          width: stageWidth * 0.152,
          height: stageWidth >= 1280 ? 395 : 345,
          rotateY: -sign * 32,
          opacity: 1,
          zIndex: 30,
        };
      }
      return {
        x: sign * stageWidth * 0.59,
        width: stageWidth * 0.16,
        height: 410,
        rotateY: -sign * 42,
        opacity: 0,
        zIndex: 5,
      };
    }

    if (isTablet) {
      if (abs === 0) {
        return {
          x: 0,
          width: stageWidth * 0.32,
          height: 265,
          rotateY: 0,
          opacity: 1,
          zIndex: 10,
        };
      }
      if (abs === 1) {
        return {
          x: sign * stageWidth * 0.31,
          width: stageWidth * 0.26,
          height: 305,
          rotateY: -sign * 20,
          opacity: 1,
          zIndex: 20,
        };
      }
      return {
        x: sign * stageWidth * 0.62,
        width: stageWidth * 0.26,
        height: 330,
        rotateY: -sign * 34,
        opacity: 0,
        zIndex: 5,
      };
    }

    // Mobile (< 640px)
    if (abs === 0) {
      return {
        x: 0,
        width: stageWidth * 0.42,
        height: 235,
        rotateY: 0,
        opacity: 1,
        zIndex: 10,
      };
    }
    if (abs === 1) {
      return {
        x: sign * stageWidth * 0.37,
        width: stageWidth * 0.30,
        height: 268,
        rotateY: -sign * 20,
        opacity: 1,
        zIndex: 20,
      };
    }
    return {
      x: sign * stageWidth * 0.72,
      width: stageWidth * 0.30,
      height: 290,
      rotateY: -sign * 34,
      opacity: 0,
      zIndex: 5,
    };
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24 overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: SMOOTH SLIDING 3D CURVED PANORAMIC VIDEO GALLERY SHOWCASE
      ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-14 sm:pb-20 bg-gradient-to-b from-[#FBF5EA] via-[#FFF9EE] to-[#FBF5EA] border-b border-cream-200">
        {/* Clean Centered Editorial Header */}
        <div className="fluid-container text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#7A0F1B]">
            Behind The Experiences
          </span>

          <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-[54px] text-[#2B1511] leading-[1.12]">
            Glimpses of Royal{' '}
            <span className="font-script text-4xl sm:text-6xl text-[#B8901F] italic font-bold inline-block stroke-underline">
              Joy & Thrills
            </span>
          </h1>

          <p className="text-xs sm:text-base text-[#5C4A42] font-medium max-w-xl mx-auto leading-relaxed">
            Explore vibrant Rajasthani folk nights, high-flying lake adventures, and tranquil lakeside cottages captured live at Joy Safari Jaipur.
          </p>

          {/* Signature Pill CTA Button */}
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-white border-2 border-cream-300 hover:border-gold shadow-md hover:shadow-lg transition-all group"
            >
              <span className="text-xs sm:text-sm font-bold text-[#2B1511] group-hover:text-[#7A0F1B] transition-colors">
                Book Your Royal Safari
              </span>
              <span className="w-8 h-8 rounded-full bg-[#7A0F1B] group-hover:bg-[#D4AF37] text-gold group-hover:text-[#4A0910] flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Full-Width Smooth Sliding 3D Curved Concave Panoramic Video Arc */}
        <div
          onMouseEnter={() => setIsArcPaused(true)}
          onMouseLeave={() => setIsArcPaused(false)}
          onTouchStart={handleArcTouchStart}
          onTouchEnd={handleArcTouchEnd}
          className="relative w-full max-w-[1800px] mx-auto px-2 sm:px-6 overflow-hidden"
        >
          {/* Side Rotate Controls */}
          <button
            type="button"
            onClick={() => rotateArc('prev')}
            aria-label="Rotate gallery left"
            className="carousel-control hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-[#7A0F1B] text-[#2B1511] hover:text-gold border-2 border-gold/50 shadow-xl items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => rotateArc('next')}
            aria-label="Rotate gallery right"
            className="carousel-control hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-[#7A0F1B] text-[#2B1511] hover:text-gold border-2 border-gold/50 shadow-xl items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3D Perspective Stage with Stable Keyed Cards for Silky Sliding */}
          <div
            ref={stageRef}
            className="relative flex items-center justify-center h-[290px] sm:h-[330px] lg:h-[380px] xl:h-[425px] w-full"
            style={{ perspective: '1150px', transformStyle: 'preserve-3d' }}
          >
            {allItems.map((item, idx) => {
              const slot = getSignedSlot(idx);
              if (Math.abs(slot) > maxVisibleSlot + 1) return null;

              const geo = getArcCardGeometry(slot);
              const isVisible = Math.abs(slot) <= maxVisibleSlot;

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: geo.x,
                    width: geo.width,
                    height: geo.height,
                    rotateY: geo.rotateY,
                    opacity: geo.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 170,
                    damping: 26,
                    mass: 0.9,
                  }}
                  style={{
                    zIndex: geo.zIndex,
                    transformStyle: 'preserve-3d',
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onClick={() => {
                    if (!isVisible) return;
                    setActiveTab('All');
                    setLightboxIndex(idx);
                  }}
                  className="absolute rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1D0407] border-2 border-gold/40 hover:border-[#D4AF37] shadow-2xl cursor-pointer group select-none"
                >
                  <VideoSurface
                    src={item.videoUrl}
                    poster={item.image}
                    alt={item.title}
                    shouldPlay={isVisible}
                    muted={true}
                    videoClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#240306]/80 via-transparent to-black/15 pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-white text-left opacity-95 pointer-events-none">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gold-soft block">
                      {item.category}
                    </span>
                    <p className="font-serif font-bold text-xs sm:text-sm leading-tight line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Arc Prev / Next Controls */}
          <div className="mt-3 flex md:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => rotateArc('prev')}
              aria-label="Previous highlight"
              className="carousel-control w-10 h-10 rounded-full bg-white border-2 border-gold/40 text-[#2B1511] hover:bg-[#7A0F1B] hover:text-gold flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => rotateArc('next')}
              aria-label="Next highlight"
              className="carousel-control w-10 h-10 rounded-full bg-white border-2 border-gold/40 text-[#2B1511] hover:bg-[#7A0F1B] hover:text-gold flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Numbered Chapter Row (#01, #02, #03, #04) */}
        <div className="fluid-container mt-8 sm:mt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto text-center">
            {chapters.map((ch) => {
              const isSelected = activeTab.toLowerCase() === ch.category.toLowerCase();
              return (
                <button
                  key={ch.num}
                  type="button"
                  onClick={() => {
                    setActiveTab(isSelected ? 'All' : ch.category);
                    setLightboxIndex(null);
                  }}
                  className={`p-3 rounded-2xl transition-all cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-[#7A0F1B] text-white border-gold shadow-md'
                      : 'bg-transparent border-transparent hover:bg-white hover:border-cream-200'
                  }`}
                >
                  <span
                    className={`block text-xs font-black tracking-widest mb-1 ${
                      isSelected ? 'text-gold-soft' : 'text-[#7A0F1B]'
                    }`}
                  >
                    {ch.num}
                  </span>
                  <span
                    className={`block text-xs sm:text-sm font-serif font-bold ${
                      isSelected ? 'text-white' : 'text-[#2B1511]'
                    }`}
                  >
                    {ch.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CATEGORY COLLECTION (MOBILE CAROUSEL / DESKTOP GRID)
      ========================================================================= */}
      <section className="pt-14 sm:pt-16">
        <div className="fluid-container">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#7A0F1B] text-gold-soft border-2 border-gold shadow-md scale-105'
                    : 'bg-white text-[#2B1511] border-2 border-cream-200 hover:border-gold/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="relative rounded-3xl overflow-hidden bg-[#1D0407] border-2 border-cream-200 hover:border-gold shadow-soft hover:shadow-soft-hover transition-all duration-300 group cursor-pointer h-80 sm:h-96"
              >
                <VideoSurface
                  src={item.videoUrl}
                  poster={item.image}
                  alt={item.title}
                  shouldPlay={true}
                  muted={true}
                  videoClassName="transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold text-[#4A0910] shadow-sm">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.category}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <h4 className="font-serif font-bold text-base sm:text-lg leading-snug text-white group-hover:text-gold-soft transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* Clean Full Lightbox Viewer */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close gallery view"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-gold text-white hover:text-[#4A0910] flex items-center justify-center cursor-pointer transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous item"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-gold text-white hover:text-[#4A0910] flex items-center justify-center cursor-pointer transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next item"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-gold text-white hover:text-[#4A0910] flex items-center justify-center cursor-pointer transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="w-full max-w-4xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 bg-black">
              <VideoSurface
                key={activeLightboxItem.videoUrl}
                src={activeLightboxItem.videoUrl}
                poster={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                shouldPlay={true}
                muted={true}
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-gold-soft">
                {activeLightboxItem.title}
              </h3>
              <span className="text-xs text-cream-200/80">
                {activeLightboxItem.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
