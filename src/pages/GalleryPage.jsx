import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tabs = ['All', 'Activities', 'Dining', 'Rooms', 'Culture', 'Night Show'];

  const galleryItems = [
    {
      title: "High-Flying Zip Line Over Water",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Royal Gala Dinner Spread",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Kalbelia Folk Dancers on Stage",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-square"
    },
    {
      title: "Tranquil Lake Boating",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Lake View Royal Suite Balcony",
      category: "Rooms",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Night Festive Lights & Resort Ambiance",
      category: "Night Show",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Garden Facing Luxury Cottage",
      category: "Rooms",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-square"
    },
    {
      title: "Joyful Toy Train Ride",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Authentic Dal Baati & Rajasthani Buffet",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Fire Acrobatics & Rajasthani Dhol",
      category: "Night Show",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-square"
    },
    {
      title: "Equestrian Horse Riding Experience",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Bungee & Extreme Aerial Fun",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[4/5]"
    }
  ];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pt-8 pb-24">
      {/* Header */}
      <div className="fluid-container text-center pt-8 pb-10">
        <SectionTitle
          eyebrow="PHOTO & VIDEO GALLERY"
          title="Glimpses of Royal"
          scriptWord="Joy & Thrills"
          subtitle="Explore candid moments, sparkling lake vistas, vibrant folk performances, and delicious banquet feasts captured at Joy Safari."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-maroon text-white shadow-md scale-105'
                  : 'bg-white text-[#2B1511] font-bold border-2 border-cream-200 hover:border-gold/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid */}
      <div className="fluid-container">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden bg-cream-200 border border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-maroon-dark w-fit mb-2">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-base text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center cursor-pointer transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center cursor-pointer transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center cursor-pointer transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-gold/40"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-gold-soft">
                {filteredItems[lightboxIndex].title}
              </h3>
              <span className="text-xs text-cream-200/80">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
