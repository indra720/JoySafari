import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Globe, MessageCircle, Calendar, Users, 
  Bus, CheckCircle2, Send, Sparkles, Clock, ShieldCheck, Heart, Check
} from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import VideoSurface from '../components/VideoSurface';

export default function ContactPage() {
  const [searchParams] = useSearchParams();

  // Tomorrow's date default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    date: defaultDate,
    adults: '2',
    children: '0',
    package: 'day-safari',
    pickup: 'yes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Pre-fill form values from query parameters if present
  useEffect(() => {
    const qDate = searchParams.get('date');
    const qAdults = searchParams.get('adults');
    const qChildren = searchParams.get('children');
    const qPackage = searchParams.get('package');
    const qPickup = searchParams.get('pickup');

    setFormData(prev => ({
      ...prev,
      date: qDate || prev.date,
      adults: qAdults || prev.adults,
      children: qChildren || prev.children,
      package: qPackage || prev.package,
      pickup: qPickup || prev.pickup,
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'JS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getPackageLabel = (pkgKey) => {
    switch (pkgKey) {
      case 'lake-view':
      case 'lake-stay':
        return 'Safari + Lake View Facing Suite (₹7999/-)';
      case 'garden-facing':
      case 'garden-stay':
        return 'Safari + Garden Facing Cottage (₹6999/-)';
      case 'day-safari':
      default:
        return 'Royal Day Safari Pass (₹1999 + GST per person)';
    }
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24">
      {/* Cinematic Auto-Running Video Header for Contact & Reservations */}
      <section className="relative bg-[#2A0408] text-white py-14 sm:py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <VideoSurface
            src={content.contactMedia.heroVideo}
            poster={content.contactMedia.heroPoster}
            alt="Joy Safari Jaipur Reservations"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/85 via-[#36060B]/70 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10 text-center">
          <SectionTitle
            theme="dark"
            eyebrow="RESERVATIONS & INQUIRIES"
            title="Book Your Safari or Contact Our"
            scriptWord="Royal Desk"
            subtitle="Reserve passes, book overnight cottages, or request private family celebration arrangements."
          />
        </div>
      </section>

      <div className="fluid-container w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold/30 shadow-soft">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-sage/20 text-[#2B5432] flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-9 h-9 text-sage stroke-[2.5]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#7A0F1B] block">
                  Reservation Request Received
                </span>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#2B1511]">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A42] max-w-md mx-auto leading-relaxed">
                  Your booking request for <strong className="text-[#2B1511]">{getPackageLabel(formData.package)}</strong> on <strong className="text-[#2B1511]">{formData.date}</strong> has been logged.
                </p>

                <div className="p-4 rounded-2xl bg-cream-50 border-2 border-cream-300 max-w-sm mx-auto text-left space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#5C4A42] font-semibold">Booking Reference:</span>
                    <span className="font-black text-[#7A0F1B]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C4A42] font-semibold">Total Guests:</span>
                    <span className="font-bold text-[#2B1511]">{formData.adults} Adults, {formData.children} Children</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C4A42] font-semibold">AC Transport:</span>
                    <span className="font-bold text-[#2B1511]">{formData.pickup === 'yes' ? 'Free Pick Up Needed' : 'Self Drive'}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918000928080?text=Hello%20Joy%20Safari%2C%20my%20booking%20ref%20is%20${bookingRef}%20for%20${formData.fullName}%20on%20${formData.date}.%20Please%20confirm.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm Instantly on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border-2 border-cream-300 text-[#5C4A42] hover:text-[#2B1511] text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
                <div className="pb-3 border-b border-cream-200">
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#2B1511]">
                    Online Reservation Form
                  </h3>
                  <p className="text-xs text-[#5C4A42] font-medium mt-1">
                    Fill the details below. Our booking team will contact you within 15 minutes.
                  </p>
                </div>

                {/* Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-semibold text-[#2B1511] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-semibold text-[#2B1511] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-semibold text-[#2B1511] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Date of Visit *
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Adults & Children */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Adults (Age 12+) *
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] outline-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                        <option key={n} value={n} className="text-[#2B1511] font-medium">{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                      Children (Below 12)
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] outline-none cursor-pointer"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n} className="text-[#2B1511] font-medium">{n} {n === 1 ? 'Kid' : 'Kids'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Package Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                    Select Package *
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-bold text-[#2B1511] outline-none cursor-pointer"
                  >
                    <option value="day-safari" className="text-[#2B1511]">Day Safari Pass (₹1999 + GST per person)</option>
                    <option value="garden-stay" className="text-[#2B1511]">Safari + Garden Facing Cottage (₹6999/- for 2)</option>
                    <option value="lake-stay" className="text-[#2B1511]">Safari + Lake View Facing Suite (₹7999/- for 2)</option>
                  </select>
                </div>

                {/* Free Pick Up & Drop Option: flex-col on mobile, md:flex-row on md+ screens */}
                <div>
                  <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                    Free AC Pick Up & Drop Facility Across Jaipur
                  </label>
                  
                  {/* Stacks vertically on mobile (< md), sits side-by-side on md+ screens */}
                  <div className="flex flex-col md:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, pickup: 'yes' }))}
                      className={`flex-1 p-3.5 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        formData.pickup === 'yes'
                          ? 'bg-[#7A0F1B] text-white border-[#7A0F1B] shadow-md'
                          : 'bg-cream-50 border-cream-300 text-[#2B1511] hover:border-gold'
                      }`}
                    >
                      <Check className={`w-4 h-4 ${formData.pickup === 'yes' ? 'text-gold' : 'opacity-0'}`} />
                      <span>Yes, Need Free AC Pickup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, pickup: 'no' }))}
                      className={`flex-1 p-3.5 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        formData.pickup === 'no'
                          ? 'bg-[#7A0F1B] text-white border-[#7A0F1B] shadow-md'
                          : 'bg-cream-50 border-cream-300 text-[#2B1511] hover:border-gold'
                      }`}
                    >
                      <Check className={`w-4 h-4 ${formData.pickup === 'no' ? 'text-gold' : 'opacity-0'}`} />
                      <span>No, Driving Self to Resort</span>
                    </button>
                  </div>
                </div>

                {/* Message / Special Request */}
                <div>
                  <label className="block text-xs font-bold text-[#2B1511] uppercase tracking-wider mb-1.5">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Vegetarian Jain meal options, wheelchair assistance, anniversary celebration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-cream-300 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm font-semibold text-[#2B1511] outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-serif font-black text-sm sm:text-base shadow-lg hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#B8901F]/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <p className="text-[11px] text-center text-[#5C4A42] font-medium">
                  * Entry is strictly for Families & Couples. Zero hassle instant WhatsApp assistance.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Living Welcome Video, Contact Cards & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Resort Welcome Auto-Running Video Card */}
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-soft bg-[#1D0407]">
              <VideoSurface
                src={content.contactMedia.arrivalVideo}
                poster={content.contactMedia.arrivalPoster}
                alt="Welcome to Joy Safari Jaipur"
                shouldPlay={true}
                muted={true}
                videoClassName="object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240306]/90 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-[#4A0910] text-[10px] font-black uppercase tracking-wider">
                  <Bus className="w-3 h-3" />
                  <span>Free AC Pickup Across Jaipur</span>
                </span>
                <h3 className="font-serif font-bold text-xl">
                  Your Royal Escape Awaits
                </h3>
                <p className="text-xs text-cream-200">
                  Daily 3:30 PM to 11:00 PM • Achrol Valley, NH-48
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gold/30 shadow-soft space-y-5">
              <h3 className="font-serif font-black text-xl text-[#2B1511]">
                Booking Desk Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#2B1511]">
                <a
                  href={`tel:${content.brand.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-colors border border-cream-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7A0F1B] text-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#5C4A42] font-bold">Direct Telephone</div>
                    <div className="font-black text-base text-[#7A0F1B]">{content.brand.displayPhone}</div>
                    <div className="text-[11px] text-[#5C4A42]">Available 9:00 AM - 10:00 PM Daily</div>
                  </div>
                </a>

                <a
                  href={content.brand.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-colors border-2 border-[#25D366]/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#1e7e34] font-black">Instant WhatsApp Desk</div>
                    <div className="font-black text-sm text-[#2B1511]">Chat with our Booking Manager</div>
                    <div className="text-[11px] text-[#5C4A42]">Instant ticket dispatch & queries</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-50 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-[#7A0F1B] text-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#5C4A42] font-bold">Resort Address</div>
                    <div className="text-xs text-[#2B1511] font-semibold leading-relaxed mt-0.5">
                      {content.brand.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-3 border-2 border-gold/30 shadow-soft h-[260px] overflow-hidden">
              <iframe
                title="Resort Location Google Map"
                src={content.parkInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
