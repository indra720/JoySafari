import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

export default function CollageGallery({ items = content.collageGallery }) {
  return (
    <div className="relative">
      {/* Tape & Ticket Accents in Background */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 pb-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative group transition-all duration-300 hover:z-20 hover:scale-105 ${item.tilt || 'rotate-0'}`}
          >
            {/* Realistic Tape Sticker on Top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-100/80 backdrop-blur-sm border-l border-r border-amber-200/60 shadow-sm z-10 rotate-1 pointer-events-none rounded-sm" />

            {/* Polaroid Card Body */}
            <div className="bg-white p-3 sm:p-3.5 pb-6 rounded-2xl shadow-lg border border-cream-200 transition-shadow group-hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-200 mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/50 text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Handwritten Script Label */}
              <p className="font-script text-base sm:text-lg text-ink text-center tracking-wide font-bold">
                "{item.title}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Gallery Link Button */}
      <div className="text-center mt-6">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-gold/40 text-maroon font-serif font-bold text-sm sm:text-base hover:bg-maroon hover:text-white shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <Camera className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
          <span>View Full Photo & Video Gallery</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
