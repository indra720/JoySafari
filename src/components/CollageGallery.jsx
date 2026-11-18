import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { content } from '../data/content';
import VideoSurface from './VideoSurface';
import MobileCarousel from './MobileCarousel';

export default function CollageGallery({ items = content.collageGallery }) {
  return (
    <div className="relative">
      {/* Living Motion Polaroids: Swipe Carousel on Mobile, 3-4 Col Grid on Desktop */}
      <div className="pt-4 pb-8">
        <MobileCarousel
          desktopGridClass="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8"
          cardWidthClass="w-[78vw] sm:w-[290px] md:w-auto"
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to="/gallery"
              className={`relative group block transition-all duration-300 hover:z-20 hover:scale-105 md:${item.tilt || 'rotate-0'}`}
            >
              {/* Realistic Tape Sticker on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-100/80 backdrop-blur-sm border-l border-r border-amber-200/60 shadow-sm z-10 rotate-1 pointer-events-none rounded-sm" />

              {/* Polaroid Card Body */}
              <div className="bg-white p-2.5 sm:p-3.5 pb-5 rounded-2xl shadow-lg border border-cream-200 transition-shadow group-hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1D0407] mb-3">
                  <VideoSurface
                    src={item.videoUrl}
                    poster={item.image}
                    alt={item.title}
                    shouldPlay={true}
                    muted={true}
                    videoClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/55 text-white backdrop-blur-sm border border-white/15">
                    {item.category}
                  </span>
                </div>

                {/* Handwritten Script Label */}
                <p className="font-script text-base sm:text-lg text-[#2B1511] text-center tracking-wide font-bold">
                  "{item.title}"
                </p>
              </div>
            </Link>
          ))}
        </MobileCarousel>
      </div>

      {/* View Full Gallery Link Button */}
      <div className="text-center mt-4">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border-2 border-gold/40 text-[#7A0F1B] font-serif font-bold text-sm sm:text-base hover:bg-[#7A0F1B] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <Sparkles className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
          <span>Explore Full Gallery</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
