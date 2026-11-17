import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { content } from '../data/content';

export default function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <aside aria-label="Quick contact" className="fixed bottom-16 sm:bottom-8 right-3.5 sm:right-6 z-40">
        <a
          href={content.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Joy Safari Booking Desk on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          {/* SVG WhatsApp Icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 2c-5.508 0-9.986 4.478-9.986 9.987 0 1.76.46 3.483 1.334 5.006L2 22l5.132-1.346c1.472.802 3.128 1.226 4.899 1.226 5.507 0 9.986-4.478 9.986-9.987C22.017 6.478 17.538 2 12.031 2zm0 18.257c-1.503 0-2.977-.405-4.265-1.17l-.306-.182-3.167.831.845-3.087-.2-.318a8.219 8.219 0 0 1-1.261-4.344c0-4.549 3.702-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25zm4.526-6.183c-.248-.124-1.467-.724-1.694-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.788.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.015-.382.109-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.768-1.849-.202-.486-.407-.42-.56-.428-.145-.008-.311-.01-.477-.01-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074s.892 2.406 1.016 2.572c.124.166 1.755 2.68 4.252 3.759.594.257 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.072 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.477-.29z" />
          </svg>

          {/* Desktop Hover Label */}
          <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#2B1511] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Bar */}
      <nav aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gold/30 p-2 sm:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${content.brand.phone}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cream-100 border border-maroon/20 text-[#7A0F1B] font-serif font-black text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#7A0F1B]" />
            <span>Call 8000928080</span>
          </a>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-serif font-black text-xs shadow-md border border-[#B8901F]/30"
          >
            <Calendar className="w-3.5 h-3.5 text-[#4A0910]" />
            <span>Book @ ₹1999</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
