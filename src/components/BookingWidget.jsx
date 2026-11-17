import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Sparkles, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

export default function BookingWidget({ className = '' }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('day-safari'); // 'day-safari' or 'stay'
  
  // Tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDate);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [packageType, setPackageType] = useState('day-safari');
  const [pickupDrop, setPickupDrop] = useState('yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      tab: activeTab,
      date: date,
      adults: adults.toString(),
      children: children.toString(),
      package: activeTab === 'stay' ? (packageType === 'lake-stay' ? 'lake-stay' : 'garden-stay') : 'day-safari',
      pickup: pickupDrop
    });
    navigate(`/contact?${queryParams.toString()}`);
  };

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border-2 border-gold/30 p-4 sm:p-7 text-[#2B1511] relative z-20 ${className}`}>
      {/* Decorative top pill */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-3.5 mb-4 border-b border-cream-200 gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-full bg-gold/20 text-[#7A0F1B] shrink-0">
            <Sparkles className="w-4 h-4 text-[#B8901F]" />
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-[#7A0F1B] font-sans">
            Instant Reservation
          </span>
        </div>
        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sage/20 text-[#2B5432] border border-sage/30 w-fit">
          Families & Couples
        </span>
      </div>

      {/* Tabs: Single line per tab on mobile (flex-col), 2-col grid on sm+ as requested */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 p-1.5 bg-cream-200/70 rounded-2xl mb-5 gap-2 sm:gap-1.5">
        <button
          type="button"
          onClick={() => {
            setActiveTab('day-safari');
            setPackageType('day-safari');
          }}
          className={`py-2.5 px-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between sm:justify-center gap-2 cursor-pointer w-full ${
            activeTab === 'day-safari'
              ? 'bg-[#7A0F1B] text-white shadow-md'
              : 'text-[#2B1511] hover:text-[#7A0F1B] bg-white/80'
          }`}
        >
          <span>Day Safari Experience</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
            activeTab === 'day-safari' ? 'bg-gold text-[#4A0910]' : 'bg-[#7A0F1B] text-white'
          }`}>
            ₹1999 + GST
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab('stay');
            setPackageType('lake-stay');
          }}
          className={`py-2.5 px-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between sm:justify-center gap-2 cursor-pointer w-full ${
            activeTab === 'stay'
              ? 'bg-[#7A0F1B] text-white shadow-md'
              : 'text-[#2B1511] hover:text-[#7A0F1B] bg-white/80'
          }`}
        >
          <span>Safari + Room Stay</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
            activeTab === 'stay' ? 'bg-gold text-[#4A0910]' : 'bg-gold/30 text-[#4A0910]'
          }`}>
            From ₹6999
          </span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Date Field */}
        <div>
          <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
            Visit Date
          </label>
          <div className="relative flex items-center">
            <Calendar className="w-4 h-4 text-[#7A0F1B] absolute left-3.5 pointer-events-none" />
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2.5 bg-cream-50 hover:bg-white focus:bg-white rounded-xl border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] transition-all outline-none"
            />
          </div>
        </div>

        {/* Guests Field (Adults & Children) */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
              Adults (12+)
            </label>
            <div className="relative flex items-center">
              <Users className="w-4 h-4 text-[#7A0F1B] absolute left-3 pointer-events-none" />
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full pl-9 pr-6 py-2.5 bg-cream-50 hover:bg-white focus:bg-white rounded-xl border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] transition-all outline-none appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                  <option key={num} value={num} className="text-[#2B1511] font-medium">
                    {num} {num === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#2B1511] absolute right-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
              Kids (Below 12)
            </label>
            <div className="relative flex items-center">
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-cream-50 hover:bg-white focus:bg-white rounded-xl border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] transition-all outline-none appearance-none cursor-pointer"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className="text-[#2B1511] font-medium">
                    {num} {num === 1 ? 'Kid' : 'Kids'}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#2B1511] absolute right-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Package Dropdown */}
        <div>
          <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
            Selected Option
          </label>
          <div className="relative flex items-center">
            <select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-cream-50 hover:bg-white focus:bg-white rounded-xl border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] transition-all outline-none appearance-none cursor-pointer pr-8"
            >
              {activeTab === 'day-safari' ? (
                <option value="day-safari" className="text-[#2B1511]">Day Safari Pass (₹1999 + GST per person)</option>
              ) : (
                <>
                  <option value="lake-stay" className="text-[#2B1511]">Safari + Lake View Facing Suite (₹7999/-)</option>
                  <option value="garden-stay" className="text-[#2B1511]">Safari + Garden Facing Cottage (₹6999/-)</option>
                </>
              )}
            </select>
            <ChevronDown className="w-4 h-4 text-[#2B1511] absolute right-3 pointer-events-none" />
          </div>
        </div>

        {/* Free Pick Up & Drop: On mobile flex-col, on md flex-row */}
        <div className="p-3.5 bg-cream-50 rounded-2xl border-2 border-cream-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#7A0F1B]" />
              <span className="text-xs font-bold text-[#2B1511]">Free AC Pick Up & Drop</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sage/20 text-[#2B5432]">
              Free Service
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-2 text-xs">
            <button
              type="button"
              onClick={() => setPickupDrop('yes')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                pickupDrop === 'yes'
                  ? 'bg-[#7A0F1B] text-white shadow-sm'
                  : 'bg-white border-2 border-cream-300 text-[#2B1511] hover:border-gold'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${pickupDrop === 'yes' ? 'text-gold' : 'opacity-0'}`} />
              <span>Yes, from Jaipur Hub</span>
            </button>

            <button
              type="button"
              onClick={() => setPickupDrop('no')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                pickupDrop === 'no'
                  ? 'bg-[#7A0F1B] text-white shadow-sm'
                  : 'bg-white border-2 border-cream-300 text-[#2B1511] hover:border-gold'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${pickupDrop === 'no' ? 'text-gold' : 'opacity-0'}`} />
              <span>No, driving self</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-sans font-black text-xs sm:text-sm md:text-base rounded-2xl shadow-lg hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-[#B8901F]/40"
        >
          <span>Check Availability & Book</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-[11px] text-center text-[#5C4A42] font-medium">
          * Strictly for families & couples. Direct WhatsApp desk support.
        </p>
      </form>
    </div>
  );
}
