import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Check, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import VideoSurface from '../components/VideoSurface';

export default function RoomsPage() {
  const [activeMedia, setActiveMedia] = useState({
    'garden-facing': 'video',
    'lake-view': 'video',
  });

  const handleSelectMedia = (roomId, mode) => {
    setActiveMedia((prev) => ({
      ...prev,
      [roomId]: mode,
    }));
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24">
      {/* Full-Width Living Resort Room Video Header */}
      <section className="relative bg-[#2A0408] text-white py-14 sm:py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <VideoSurface
            src={content.rooms[1].videoUrl}
            poster={content.rooms[1].image}
            alt="Joy Safari Luxury Rooms"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/85 via-[#36060B]/70 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10 text-center">
          <SectionTitle
            theme="dark"
            eyebrow="ROYAL RESORT STAY"
            title="Luxury Cottages & Lakeside"
            scriptWord="Suites"
            subtitle="Escape city chaos and unwind in serene tranquility. Each stay includes a lavish morning breakfast and full-day safari access."
          />
        </div>
      </section>

      {/* Room Showcases */}
      <div className="fluid-container space-y-12 sm:space-y-16 w-full max-w-[1720px] mx-auto">
        {content.rooms.map((room, idx) => {
          const mode = activeMedia[room.id] ?? 'video';
          const isVideo = mode === 'video';
          const currentImg = typeof mode === 'number' ? room.gallery[mode] : room.image;
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={room.id}
              className="bg-white rounded-3xl sm:rounded-4xl border-2 border-cream-200 shadow-soft overflow-hidden p-5 sm:p-10"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Living Video & Photo Gallery Column (7 cols) */}
                <div className={`lg:col-span-7 space-y-3.5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative h-72 sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1D0407] shadow-md">
                    {isVideo ? (
                      <VideoSurface
                        src={room.videoUrl}
                        poster={room.image}
                        alt={room.title}
                        shouldPlay={true}
                        muted={true}
                      />
                    ) : (
                      <img
                        src={currentImg}
                        alt={room.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

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

                  {/* Minimal Thumbnail Row */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => handleSelectMedia(room.id, 'video')}
                      className={`h-14 sm:h-16 px-4 rounded-xl border-2 font-sans font-bold text-xs inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                        isVideo
                          ? 'bg-[#7A0F1B] text-gold-soft border-[#D4AF37] shadow-md'
                          : 'bg-cream-50 text-[#2B1511] border-cream-200 hover:border-gold'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Live View</span>
                    </button>

                    {room.gallery.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={() => handleSelectMedia(room.id, tIdx)}
                        aria-label={`View ${room.title} photo ${tIdx + 1}`}
                        className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          mode === tIdx
                            ? 'border-[#7A0F1B] shadow-md scale-105'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={thumb} alt="room preview" className="w-full h-full object-cover" />
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
