import React from 'react';
import { Crown } from 'lucide-react';

export default function SectionHeader({ 
  badge, 
  title, 
  italicWord,
  subtitle, 
  align = 'left' 
}) {
  if (align === 'center') {
    return (
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-maroon-deep/80 border border-gold/40 text-gold-light text-xs font-semibold mb-3 shadow-gold-sm">
            <Crown className="w-3 h-3 text-gold" />
            <span>{badge}</span>
          </div>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient leading-tight">
          {title} {italicWord && <span className="font-serif italic font-normal text-cream">{italicWord}</span>}
        </h2>
        {subtitle && (
          <p className="mt-3 text-xs sm:text-sm text-cream/75 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  // Two-column responsive layout
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
      <div className="max-w-xl">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-deep/80 border border-gold/40 text-gold-light text-[11px] font-semibold mb-3">
            <Crown className="w-3 h-3 text-gold" />
            <span>{badge}</span>
          </div>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient leading-tight">
          {title} {italicWord && <span className="font-serif italic font-normal text-cream">{italicWord}</span>}
        </h2>
      </div>

      {subtitle && (
        <div className="max-w-md text-cream/70 text-xs sm:text-sm leading-relaxed md:pb-1">
          {subtitle}
        </div>
      )}
    </div>
  );
}
