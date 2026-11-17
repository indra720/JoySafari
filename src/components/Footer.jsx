import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2, Heart, Sparkles, Bus, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative bg-[#36060B] text-[#FFF8E7] overflow-hidden">
      {/* Soft Wave on Top Transition from Cream Background */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#FBF5EA] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="fluid-container pt-8 sm:pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-gold/30">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#4A0910] border-2 border-gold flex items-center justify-center font-serif font-black text-xl text-gold shadow-md">
                JS
              </div>
              <div>
                <h3 className="font-serif font-black text-2xl text-white tracking-wide">
                  JOY SAFARI <span className="text-gold">JAIPUR</span>
                </h3>
                <p className="text-xs text-[#F5D26B] font-bold">
                  {content.brand.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF8E7] leading-relaxed max-w-md font-normal">
              Jaipur's first-ever premier family & couple resort destination. Experience the thrill of 12+ adventures, over-water zip lining, serene lake boating, authentic folk stage celebrations, and royal gala dining.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4A0910] text-[#F5D26B] border border-gold/40 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>{content.brand.badge}</span>
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4A0910] text-rose-200 border border-rose-400/40 flex items-center gap-1.5 shadow-sm">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                <span>{content.brand.familyTag}</span>
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4A0910] text-emerald-300 border border-emerald-400/40 flex items-center gap-1.5 shadow-sm">
                <Bus className="w-3 h-3 text-emerald-300" />
                <span>Free Pick Up & Drop</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#F5D26B] tracking-wider uppercase border-b border-gold/30 pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8E7]">
              {content.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5"
                  >
                    <span className="text-gold font-bold">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Packages & Timings (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#F5D26B] tracking-wider uppercase border-b border-gold/30 pb-2">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8E7]">
              <li>
                <Link to="/packages" className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5">
                  <span className="text-gold font-bold">›</span>
                  <span>Day Safari Pass (₹1999)</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5">
                  <span className="text-gold font-bold">›</span>
                  <span>Garden Facing Stay</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5">
                  <span className="text-gold font-bold">›</span>
                  <span>Lake View Royal Suite</span>
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5">
                  <span className="text-gold font-bold">›</span>
                  <span>12+ Adventures</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F5D26B] transition-colors flex items-center gap-1.5 font-medium py-0.5">
                  <span className="text-gold font-bold">›</span>
                  <span>Photo & Video Gallery</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#F5D26B] block font-bold">Resort Timings:</span>
              <span className="text-xs text-[#FFF8E7] font-medium">{content.brand.timings}</span>
            </div>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#F5D26B] tracking-wider uppercase border-b border-gold/30 pb-2">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs text-[#FFF8E7]">
              <a
                href={`tel:${content.brand.phone}`}
                className="flex items-start gap-2.5 hover:text-[#F5D26B] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-sm text-white">{content.brand.displayPhone}</div>
                  <div className="text-[11px] text-[#F5D26B]">Toll-free / Direct Booking</div>
                </div>
              </a>

              <a
                href={content.brand.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F5D26B] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 border border-gold/40">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-white font-bold">{content.brand.website}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[#FFF8E7] leading-relaxed text-[11px] font-medium">
                  {content.brand.address}
                </span>
              </div>
            </div>

            {/* WhatsApp Share Button */}
            <div className="pt-2">
              <a
                href={content.brand.whatsappShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Share2 className="w-4 h-4" />
                <span>Share with your loved ones!</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8E7]/80 gap-4">
          <p className="font-medium">{content.brand.copyright}</p>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-[#F5D26B]">
            <span>1st Time in Jaipur</span>
            <span>•</span>
            <span>Family & Couples Resort</span>
            <span>•</span>
            <span>12+ Activities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
