import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, Wifi, Wind, Bed, Sparkles, Check, ArrowRight, Calendar, 
  Eye, Trees, Bath, Tv, ShieldCheck 
} from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function RoomsPage() {
  const [activeImage, setActiveImage] = useState({
    'garden-facing': 0,
    'lake-view': 0
  });

  const handleSelectImage = (roomId, index) => {
    setActiveImage(prev => ({
      ...prev,
      [roomId]: index
    }));
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pt-8 pb-24">
      {/* Page Header */}
      <div className="fluid-container text-center pt-6 pb-10">
        <SectionTitle
          eyebrow="ROYAL RESORT STAY"
          title="Luxury Cottages & Lakeside"
          scriptWord="Suites"
          subtitle="Escape city chaos and unwind in serene tranquility. Each stay includes a lavish morning breakfast and complimentary full-day safari access."
        />
      </div>

      {/* Room Showcases - Wide layout */}
      <div className="fluid-container space-y-12 sm:space-y-16 w-full max-w-[1720px] mx-auto">
        {content.rooms.map((room, idx) => {
          const selectedIdx = activeImage[room.id] || 0;
          const currentImg = room.gallery[selectedIdx] || room.image;
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={room.id}
              className="bg-white rounded-3xl sm:rounded-4xl border-2 border-cream-200 shadow-soft overflow-hidden p-5 sm:p-10"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image Gallery Column (7 cols) */}
                <div className={`lg:col-span-7 space-y-3.5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-200 shadow-md">
                    <img
                      src={currentImg}
                      alt={room.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-maroon text-white shadow-md">
                        {room.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md text-[#2B1511] text-xs font-black flex items-center gap-1.5">
                      <Coffee className="w-4 h-4 text-[#B8901F]" />
                      <span>Complimentary Breakfast</span>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex gap-2 sm:gap-3">
                    {room.gallery.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={() => handleSelectImage(room.id, tIdx)}
                        className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          selectedIdx === tIdx ? 'border-[#7A0F1B] shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details Column (5 cols) */}
                <div className={`lg:col-span-5 space-y-4 sm:space-y-5 text-left ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#7A0F1B]">
                      {room.id === 'lake-view' ? 'Lakeside Balcony' : 'Floral Garden View'}
                    </span>
                    <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#2B1511] mt-1">
                      {room.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4A42] mt-2 leading-relaxed font-medium">
                      {room.subtitle}. Equipped with royal Rajasthani decor, plush king beds, and climate control.
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="p-4 rounded-2xl bg-cream-50 border-2 border-cream-200">
                    <span className="text-[11px] font-bold text-[#5C4A42] uppercase tracking-wider block">
                      Tariff Per Night
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-serif font-black text-3xl sm:text-4xl text-[#7A0F1B]">
                        ₹{room.price}
                      </span>
                      <span className="text-xs text-[#5C4A42] font-semibold">/- (Breakfast Included)</span>
                    </div>
                    <span className="text-[11px] text-sage-dark font-bold block mt-1">
                      * Includes all Day Safari activities for 2 guests
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#2B1511]">
                      Key Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B1511]">
                      {room.amenities.map((am, i) => (
                        <div key={i} className="flex items-center gap-2 font-medium">
                          <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                          <span className="truncate">{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to={`/contact?package=${room.id}&tab=stay`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7A0F1B] to-[#4A0910] text-white font-sans font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>Reserve {room.title.split(' ')[0]} Room</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
