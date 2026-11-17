import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ActivityCard({ activity, onSelect }) {
  return (
    <div
      onClick={() => onSelect && onSelect(activity)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#180507] border border-[#E5B842]/80 hover:border-[#FFF5C0] transition-all duration-300 shadow-md hover:shadow-gold-glow flex flex-col justify-between transform hover:-translate-y-1.5"
    >
      {/* Photo Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.98] group-hover:brightness-105"
        />

        {/* Hover quick indicator */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 rounded-full bg-[#E5B842] text-[#42040C] flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Poster Style Deep Maroon Bottom Label Bar with Gold Text */}
      <div className="poster-label-bar py-2 px-2 text-center min-h-[44px] flex items-center justify-center shadow-inner">
        <h3 className="font-cinzel font-black text-[11px] sm:text-xs md:text-[13px] tracking-wider text-gold-emboss uppercase leading-tight line-clamp-2">
          {activity.posterLabel || activity.title}
        </h3>
      </div>
    </div>
  );
}
