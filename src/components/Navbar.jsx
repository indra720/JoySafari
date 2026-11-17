import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Heart, Bus, Sparkles } from 'lucide-react';
import { content } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
      {/* Top Banner Ribbon */}
      <div className="bg-[#4A0910] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-gold/30">
        <div className="fluid-container flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center gap-1 font-bold text-gold-soft">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>{content.brand.badge}</span>
            </span>
            <span className="hidden md:inline text-gold/40">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-cream-100 font-medium">
              <Bus className="w-3.5 h-3.5 text-gold-soft" />
              <span>Free AC Pick Up & Drop Across Jaipur</span>
            </span>
            <span className="hidden lg:inline text-gold/40">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-rose-200 font-semibold">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>{content.brand.familyTag}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={`tel:${content.brand.phone}`}
              className="flex items-center gap-1.5 font-bold text-gold-soft hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{content.brand.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-gold/20'
            : 'bg-[#FBF5EA]/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-cream-200'
        }`}
      >
        <div className="fluid-container flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-maroon to-maroon-dark border-2 border-gold flex items-center justify-center text-gold font-serif font-black text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              JS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black text-base sm:text-xl text-[#7A0F1B] tracking-wide">
                  JOY SAFARI
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-[#7A0F1B] text-gold uppercase tracking-wider">
                  JAIPUR
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#5C4A42] tracking-tight font-medium hidden xs:block">
                Venture of Joy, Adventure & Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {content.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#7A0F1B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                      : 'text-[#2B1511] hover:text-[#7A0F1B]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-serif font-black text-xs sm:text-sm shadow-md hover:shadow-gold-glow transition-all duration-300 flex items-center gap-1.5 cursor-pointer border border-[#B8901F]/40"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book @ ₹1999</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#2B1511] hover:text-[#7A0F1B] hover:bg-cream-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FBF5EA] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l-2 border-gold/40">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cream-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-maroon text-gold flex items-center justify-center font-serif font-bold text-xs border border-gold">
                    JS
                  </div>
                  <span className="font-serif font-bold text-sm text-maroon">
                    Joy Safari Jaipur
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-ink hover:bg-cream-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="mt-6 flex flex-col space-y-2">
                {content.navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-[#7A0F1B] text-white shadow-sm'
                          : 'text-[#2B1511] hover:bg-cream-200 hover:text-[#7A0F1B]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="mt-8 pt-6 border-t border-cream-200 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold via-gold-soft to-gold text-maroon-dark font-serif font-black text-center text-sm shadow-md flex items-center justify-center gap-2 border border-gold-deep/30"
              >
                <Calendar className="w-4 h-4 text-maroon-dark" />
                <span>Book Day Safari @ ₹1999</span>
              </Link>

              <a
                href={`tel:${content.brand.phone}`}
                className="w-full py-2.5 rounded-xl border-2 border-[#7A0F1B] text-[#7A0F1B] font-sans font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#7A0F1B]" />
                <span>Call Us: {content.brand.displayPhone}</span>
              </a>

              <div className="p-2.5 rounded-xl bg-cream-200/80 text-center">
                <span className="text-[11px] font-bold text-[#7A0F1B] flex items-center justify-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-[#7A0F1B] fill-[#7A0F1B]" />
                  <span>Only for Families & Couples</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
