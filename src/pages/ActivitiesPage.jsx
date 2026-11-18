import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Users, Heart, ArrowRight, X, Calendar, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import VideoSurface from '../components/VideoSurface';
import MobileCarousel from '../components/MobileCarousel';

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [favorites, setFavorites] = useState({});

  const categories = ['All', 'Adventure', 'Water', 'Fun', 'Culture', 'Food'];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredActivities =
    activeCategory === 'All'
      ? content.activities
      : content.activities.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  const tagStyles = {
    Popular: 'bg-maroon text-white',
    Bestseller: 'bg-gold-deep text-maroon-dark font-bold',
    Thrill: 'bg-red-700 text-white',
    'Family Fun': 'bg-sage text-white',
    Culture: 'bg-amber-800 text-white',
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24">
      {/* Full-Width Living Adventure Video Header */}
      <section className="relative bg-[#2A0408] text-white py-14 sm:py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <VideoSurface
            src={content.activities[5].videoUrl}
            poster={content.activities[5].image}
            alt="Joy Safari Adventures"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/85 via-[#36060B]/70 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10 text-center">
          <SectionTitle
            theme="dark"
            eyebrow="12+ WORLD-CLASS ADVENTURES"
            title="All 12 Attractions Included in"
            scriptWord="One Royal Pass"
            subtitle="From high-flying zip lines over tranquil waters to authentic Rajasthani folk dances and serene boating, there is something thrilling for every family member."
          />

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-[#4A0910] shadow-md scale-105'
                    : 'bg-black/45 text-white border border-gold/40 backdrop-blur-md hover:bg-black/65'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pure Auto-Running Video Activities: Swipe Carousel on Mobile, Grid on Desktop */}
      <div className="fluid-container">
        <MobileCarousel
          desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8"
          cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
        >
          {filteredActivities.map((act) => {
            const isFav = favorites[act.id];

            return (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 hover:border-gold/60 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
              >
                <div>
                  {/* Auto-Running Video Surface */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1D0407]">
                    <VideoSurface
                      src={act.videoUrl}
                      poster={act.image}
                      alt={act.name}
                      shouldPlay={true}
                      muted={true}
                      videoClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25 pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-black tracking-wide uppercase px-2.5 py-1 rounded-full shadow-md ${
                          tagStyles[act.tag] || 'bg-maroon text-white'
                        }`}
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{act.tag}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(act.id, e)}
                      aria-label={`Save ${act.name} to favorites`}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center transition-transform active:scale-90 hover:bg-white text-ink cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-red-600 text-red-600' : 'text-gray-700'
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/95">
                      <span className="flex items-center gap-1 bg-black/55 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-gold-soft" />
                        <span>{act.timing}</span>
                      </span>
                      <span className="bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-gold-soft font-bold border border-gold/30">
                        Included
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-[#2B1511] group-hover:text-maroon transition-colors line-clamp-1">
                      {act.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#5C4A42] leading-relaxed line-clamp-2 font-medium">
                      {act.shortDesc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-cream-200 space-y-1 text-[11px] text-[#5C4A42]">
                      <div className="flex items-center gap-1.5 text-sage-dark font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                        <span className="line-clamp-1">{act.safety}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{act.ageLimit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-xl bg-cream-100 group-hover:bg-maroon group-hover:text-white text-maroon font-sans font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Activity Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </MobileCarousel>

        {/* Video-Backed Bottom Banner */}
        <div className="mt-16 relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-[#2A0408] text-white border-2 border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 z-0 opacity-35">
            <VideoSurface
              src={content.liveStage.bgVideo}
              poster={content.liveStage.bgImage}
              alt="All 12 Activities Included"
              shouldPlay={true}
              muted={true}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/90 via-[#4A0910]/80 to-[#240306]/90 z-[1]" />

          <div className="relative z-10 space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-soft font-bold">
              100% UNLIMITED ACCESS
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Enjoy all 12 activities with your Day Safari Pass
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/85 max-w-xl">
              No individual ride tokens needed. Your ₹1999 ticket covers every single activity, free pick-up, evening high tea, and the gala dinner buffet.
            </p>
          </div>

          <Link
            to="/contact?package=day-safari"
            className="relative z-10 px-8 py-4 rounded-full bg-gold text-maroon-dark font-sans font-black text-sm sm:text-base hover:bg-gold-soft transition-all shadow-lg flex items-center gap-2 flex-shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Pass @ ₹1999</span>
          </Link>
        </div>
      </div>

      {/* Clean Activity Details Modal with Auto-Running Video */}
      {selectedActivity && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedActivity(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-gold/40 max-h-[92vh] overflow-y-auto"
          >
            <div className="relative h-72 sm:h-96 bg-[#1D0407]">
              <VideoSurface
                src={selectedActivity.videoUrl}
                poster={selectedActivity.image}
                alt={selectedActivity.name}
                shouldPlay={true}
                muted={true}
              />
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                aria-label="Close activity details"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/65 text-white hover:bg-gold hover:text-[#4A0910] flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-3 left-3 pointer-events-none">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                    tagStyles[selectedActivity.tag] || 'bg-maroon text-white'
                  }`}
                >
                  {selectedActivity.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 text-left">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#2B1511]">
                  {selectedActivity.name}
                </h3>
                <p className="text-xs text-[#5C4A42] font-semibold mt-0.5">
                  Category: {selectedActivity.category} • Timings: {selectedActivity.timing}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#2B1511]/85 leading-relaxed">
                {selectedActivity.fullDesc || selectedActivity.shortDesc}
              </p>

              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-sage-dark font-semibold">
                  <ShieldCheck className="w-4 h-4 text-sage" />
                  <span>Safety Gear: {selectedActivity.safety}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2B1511] font-medium">
                  <Users className="w-4 h-4 text-gold-deep" />
                  <span>Eligibility: {selectedActivity.ageLimit}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact?package=day-safari"
                  onClick={() => setSelectedActivity(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-maroon text-white font-sans font-bold text-center text-sm shadow-md hover:bg-maroon-dark transition-colors"
                >
                  Book with ₹1999 Pass
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="py-3 px-5 rounded-xl border-2 border-cream-300 text-[#5C4A42] hover:text-[#2B1511] text-sm font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
