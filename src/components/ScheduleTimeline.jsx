import React from 'react';
import { Clock } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export default function ScheduleTimeline() {
  return (
    <div className="relative py-4">
      {/* Central Guide Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-stone-200 -translate-x-1/2" />

      <div className="space-y-6 sm:space-y-8 relative z-10">
        {RESORT_DATA.itinerary.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className={`p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-all ${
                  isEven ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div className={`flex items-center gap-2 mb-1.5 ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[11px] font-mono font-semibold text-brand-gold bg-amber-50 px-2.5 py-0.5 rounded-full uppercase">
                      {step.time}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-stone-900">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Central Circle Node */}
              <div className="hidden md:flex w-9 h-9 rounded-full bg-stone-900 border-2 border-brand-gold text-brand-gold items-center justify-center font-mono font-bold text-xs shadow-sm shrink-0 z-20">
                <span>0{idx + 1}</span>
              </div>

              {/* Empty placeholder for alignment */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
