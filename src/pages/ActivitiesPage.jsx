import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, ShieldCheck, Users, Heart, ArrowRight, X, Calendar } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [favorites, setFavorites] = useState({});

  const categories = ['All', 'Adventure', 'Water', 'Fun', 'Culture', 'Food'];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredActivities = activeCategory === 'All'
    ? content.activities
    : content.activities.filter(a => a.category.toLowerCase() === activeCategory.toLowerCase());

  const tagStyles = {
    'Popular': 'bg-maroon text-white',
    'Bestseller': 'bg-gold-deep text-maroon-dark font-bold',
    'Thrill': 'bg-red-700 text-white',
    'Family Fun': 'bg-sage text-white',
    'Culture': 'bg-amber-800 text-white'
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pt-8 pb-24">
      {/* Top Header Banner */}
      <div className="fluid-container text-center pt-8 pb-12">
        <SectionTitle
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
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-maroon text-white shadow-md scale-105'
                  : 'bg-white text-[#2B1511] font-bold border-2 border-cream-200 hover:border-gold/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="fluid-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredActivities.map((act) => {
            const isFav = favorites[act.id];
            return (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="bg-white rounded-3xl overflow-hidden border border-cream-200 hover:border-gold/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-cream-200">
                    <img
                      src={act.image}
                      alt={act.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-md ${
                        tagStyles[act.tag] || 'bg-maroon text-white'
                      }`}>
                        {act.tag}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(act.id, e)}
                      aria-label="Save to favorites"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform active:scale-90 hover:bg-white text-ink"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-red-600 text-red-600' : 'text-gray-700'
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white/95">
                      <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-gold-soft" />
                        <span>{act.timing}</span>
                      </span>
                      <span className="bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full text-gold-soft font-semibold">
                        Included
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-ink group-hover:text-maroon transition-colors line-clamp-1">
                      {act.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">
                      {act.shortDesc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-cream-100 space-y-1 text-[11px] text-muted">
                      <div className="flex items-center gap-1.5 text-sage-dark font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                        <span className="line-clamp-1">{act.safety}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{act.ageLimit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-xl bg-cream-100 group-hover:bg-maroon group-hover:text-white text-maroon font-serif font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Activity Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-maroon-dark text-white border-2 border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-soft font-bold">
              100% UNLIMITED ACCESS
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Enjoy all 12 activities with your Day Safari Pass
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
              No individual ride tokens needed. Your ₹1999 ticket covers every single activity, free pick-up, evening high tea, and the gala dinner buffet.
            </p>
          </div>

          <Link
            to="/contact?package=day-safari"
            className="px-8 py-4 rounded-full bg-gold text-maroon-dark font-serif font-bold text-sm sm:text-base hover:bg-gold-soft transition-all shadow-lg flex items-center gap-2 flex-shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Pass @ ₹1999</span>
          </Link>
        </div>
      </div>

      {/* Activity Details Lightbox Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gold/30 animate-in fade-in zoom-in duration-200">
            <div className="relative h-60 bg-cream-200">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                  tagStyles[selectedActivity.tag] || 'bg-maroon text-white'
                }`}>
                  {selectedActivity.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 text-left">
              <div>
                <h3 className="font-serif font-bold text-2xl text-ink">
                  {selectedActivity.name}
                </h3>
                <p className="text-xs text-muted font-medium mt-0.5">
                  Category: {selectedActivity.category} • Timings: {selectedActivity.timing}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                {selectedActivity.fullDesc || selectedActivity.shortDesc}
              </p>

              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-sage-dark font-semibold">
                  <ShieldCheck className="w-4 h-4 text-sage" />
                  <span>Safety Gear: {selectedActivity.safety}</span>
                </div>
                <div className="flex items-center gap-2 text-ink">
                  <Users className="w-4 h-4 text-gold-deep" />
                  <span>Eligibility: {selectedActivity.ageLimit}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/contact?package=day-safari"
                  onClick={() => setSelectedActivity(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-maroon text-white font-serif font-bold text-center text-sm shadow-md hover:bg-maroon-dark transition-colors"
                >
                  Book with ₹1999 Pass
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="py-3 px-5 rounded-xl border border-cream-300 text-muted hover:text-ink text-sm font-semibold cursor-pointer"
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
