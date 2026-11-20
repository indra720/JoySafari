import React, { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User, CheckCircle2, MessageCircle, Bus, Heart } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export default function BookingModal({ isOpen, onClose, preselectedPackage = "Day Safari (₹1999 + GST)" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '2 Guests',
    selectedPackage: preselectedPackage,
    needPickup: 'Yes',
    notes: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const clean = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: clean }));
      if (clean.length === 10) setErrorMsg('');
      return;
    }
    if (name === 'email') {
      setFormData(prev => ({ ...prev, email: value }));
      if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        setErrorMsg('');
      }
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your Full Name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setErrorMsg("Mobile number must be exactly 10 digits (e.g. 9876543210).");
      return;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg('');
    const message = `*Royal Booking Request - Joy Safari Jaipur*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `*Date of Visit:* ${encodeURIComponent(formData.date || 'To be decided')}%0A` +
      `*Number of Guests:* ${encodeURIComponent(formData.guests)}%0A` +
      `*Package:* ${encodeURIComponent(formData.selectedPackage)}%0A` +
      `*Need Pick Up & Drop:* ${encodeURIComponent(formData.needPickup)}%0A` +
      `*Special Notes:* ${encodeURIComponent(formData.notes || 'None')}%0A%0A` +
      `*(Note: We confirm we are a Family / Couple)*`;

    window.open(`https://wa.me/918000928080?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-royalDark-card border-2 border-gold rounded-3xl shadow-gold-glow-lg overflow-hidden my-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-maroon-deep via-maroon to-maroon-dark px-6 py-4 border-b border-gold/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold font-bold text-xs">
              JS
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-lg text-gold-gradient">
                Reserve Your Safari Experience
              </h3>
              <p className="text-[11px] text-pink-200 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                Only for Family & Couples
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-royalDark/60 hover:bg-maroon-dark text-gold border border-gold/40 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-forestGreen/40 border-2 border-green-400 flex items-center justify-center mx-auto text-green-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-gold-light">
                Booking Request Sent!
              </h4>
              <p className="text-sm text-cream/80 max-w-md mx-auto">
                Thank you, <span className="text-gold font-semibold">{formData.name}</span>! Your booking details have been opened on WhatsApp with our Joy Safari reservations desk. Our team will confirm your slot shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${RESORT_DATA.brand.phone}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-maroon-gradient text-gold-light border border-gold/50 text-xs font-bold"
                >
                  Call Directly: 8000928080
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-royalDark text-cream/80 hover:text-white border border-gold/30 text-xs font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4 text-xs">
              
              {/* Package Selection */}
              <div>
                <label className="block text-gold-light font-semibold mb-1.5">
                  Select Desired Package:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: "Day Safari", price: "₹1999 + GST", val: "Day Safari (₹1999 + GST)" },
                    { label: "Garden Room", price: "₹6999/-", val: "Garden Facing Room (₹6999/-)" },
                    { label: "Lake View Room", price: "₹7999/-", val: "Lake View Room (₹7999/-)" },
                  ].map(pkg => (
                    <button
                      key={pkg.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedPackage: pkg.val })}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        formData.selectedPackage === pkg.val
                          ? 'bg-maroon-deep/90 border-gold shadow-gold-sm text-gold-light font-bold'
                          : 'bg-royalDark/60 border-gold/20 text-cream/70 hover:border-gold/40'
                      }`}
                    >
                      <span className="block text-xs">{pkg.label}</span>
                      <span className="block text-[11px] text-gold">{pkg.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-cream/90 font-medium mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gold" /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-royalDark/80 border border-gold/40 rounded-xl px-3 py-2.5 text-cream focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-cream/90 font-medium flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-gold" /> WhatsApp / Phone *
                    </label>
                    <span className={`text-[10px] font-mono ${formData.phone.length === 10 ? 'text-emerald-400 font-bold' : 'text-cream/60'}`}>
                      {formData.phone.length}/10 digits
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number (e.g. 9876543210)"
                    className="w-full bg-royalDark/80 border border-gold/40 rounded-xl px-3 py-2.5 text-cream focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-cream/90 font-medium mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" /> Date of Visit *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-royalDark/80 border border-gold/40 rounded-xl px-3 py-2.5 text-cream focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-cream/90 font-medium mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gold" /> Total Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-royalDark/80 border border-gold/40 rounded-xl px-3 py-2.5 text-cream focus:outline-none focus:border-gold"
                  >
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="3 Guests (Family)">3 Guests (Family)</option>
                    <option value="4 Guests (Family)">4 Guests (Family)</option>
                    <option value="5-8 Guests (Joint Family)">5-8 Guests (Joint Family)</option>
                    <option value="8+ Guests (Family Gathering)">8+ Guests (Family Gathering)</option>
                  </select>
                </div>
              </div>

              {/* Pick & Drop */}
              <div>
                <label className="block text-cream/90 font-medium mb-1 flex items-center gap-1">
                  <Bus className="w-3.5 h-3.5 text-gold" /> Require Free City Pick Up & Drop?
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-cream">
                    <input
                      type="radio"
                      name="needPickup"
                      value="Yes"
                      checked={formData.needPickup === 'Yes'}
                      onChange={handleChange}
                      className="accent-gold"
                    />
                    <span>Yes, need Free Pick Up</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-cream">
                    <input
                      type="radio"
                      name="needPickup"
                      value="No"
                      checked={formData.needPickup === 'No'}
                      onChange={handleChange}
                      className="accent-gold"
                    />
                    <span>No, coming by own vehicle</span>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-cream/80 font-medium mb-1">
                  Special Requests / Dietary Preferences (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Jain food required, celebrating wedding anniversary..."
                  className="w-full bg-royalDark/80 border border-gold/40 rounded-xl p-2.5 text-cream focus:outline-none focus:border-gold"
                />
              </div>

              {/* Policy note */}
              <div className="p-2.5 rounded-xl bg-maroon/30 border border-gold/30 text-[11px] text-cream/90 flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Entry Policy:</strong> Entry is strictly reserved for Families and Couples. Bachelor / Stag groups are not accommodated.
                </span>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/80 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full flex-1 py-3 px-6 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider text-maroon-dark bg-gold-gradient hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 border border-gold-light"
                >
                  <MessageCircle className="w-4 h-4 fill-maroon-dark text-maroon-dark" />
                  Confirm & Send on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-royalDark/80 hover:bg-maroon-dark text-cream/70 hover:text-white border border-gold/30 text-xs font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
