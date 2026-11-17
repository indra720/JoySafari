import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ initialDays = 4 }) {
  // Setup a countdown target 4 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: 14,
    minutes: 36,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: initialDays, hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialDays]);

  const units = [
    { label: 'Days', val: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', val: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Mins', val: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Secs', val: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, idx) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-black/40 border border-gold/30 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-soft tracking-wider">
                {unit.val}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-cream-200/70 uppercase tracking-widest mt-1">
              {unit.label}
            </span>
          </div>
          {idx < units.length - 1 && (
            <span className="text-gold/50 font-serif text-xl sm:text-2xl font-bold mb-4">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
