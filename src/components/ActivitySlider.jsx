import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActivitySlider({ activities = [] }) {
  const sliderRef = useRef(null);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 360;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const tagStyles = {
    'Popular': 'bg-maroon text-white',
    'Bestseller': 'bg-gold-deep text-maroon-dark font-bold',
    'Thrill': 'bg-red-700 text-white',
    'Family Fun': 'bg-sage text-white',
    'Culture': 'bg-amber-800 text-white'
  };

  return (
    <div className="relative">
      {/* Slider Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-xs uppercase font-semibold text-muted tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Swipe or click arrows to explore all 12 attractions</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous activities"
            className="w-10 h-10 rounded-full bg-white border border-cream-200 text-ink hover:bg-cream-100 hover:text-maroon shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next activities"
            className="w-10 h-10 rounded-full bg-white border border-cream-200 text-ink hover:bg-cream-100 hover:text-maroon shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {activities.map((act) => {
          const isFav = favorites[act.id];
          return (
            <div
              key={act.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-cream-200 hover:border-gold/40 shadow-soft hover:shadow-soft-hover transition-all duration-300 overflow-hidden flex flex-col group"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image Box */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-cream-200">
                <img
                  src={act.image}
                  alt={act.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                {/* Tag Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-md ${
                    tagStyles[act.tag] || 'bg-maroon text-white'
                  }`}>
                    {act.tag}
                  </span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(act.id, e)}
                  aria-label="Save to favorites"
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform active:scale-90 hover:bg-white text-ink"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFav ? 'fill-red-600 text-red-600' : 'text-gray-700'
                    }`}
                  />
                </button>

                {/* Bottom Bar Info on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-gold-soft" />
                    <span>{act.timing || '4:00 PM - 7:00 PM'}</span>
                  </span>
                  <span className="font-semibold text-gold-soft bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    Included in ₹1999
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-ink group-hover:text-maroon transition-colors line-clamp-1">
                    {act.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">
                    {act.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-100 flex items-center justify-between">
                  <span className="text-[11px] text-sage-dark font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                    <span className="line-clamp-1">{act.safety ? act.safety.split('&')[0] : 'Safety Certified'}</span>
                  </span>
                  <Link
                    to="/activities"
                    className="text-xs font-semibold text-maroon hover:text-gold-deep transition-colors flex items-center gap-0.5"
                  >
                    <span>Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
