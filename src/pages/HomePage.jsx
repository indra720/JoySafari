import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bus, Utensils, Flame, HeartHandshake, Ticket, CalendarCheck, BusFront, 
  Sparkles, Clock, ShieldCheck, ArrowRight, Play, Phone, Calendar, MapPin, 
  Star, Award, Users, Bed, Coffee, Wind, Eye, Check, Mail, Share2, Heart,
  Compass, ChevronRight
} from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import BookingWidget from '../components/BookingWidget';
import ActivitySlider from '../components/ActivitySlider';
import CountdownTimer from '../components/CountdownTimer';
import CollageGallery from '../components/CollageGallery';

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Bus': return <Bus className="w-6 h-6 text-[#7A0F1B]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#7A0F1B]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#7A0F1B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#7A0F1B]" />;
      default: return <Sparkles className="w-6 h-6 text-[#7A0F1B]" />;
    }
  };

  const getPlanIcon = (iconName) => {
    switch (iconName) {
      case 'Ticket': return <Ticket className="w-6 h-6 text-gold" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-gold" />;
      case 'BusFront': return <BusFront className="w-6 h-6 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold" />;
      default: return <Compass className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION
      ========================================================================= */}
      <section className="relative bg-[#36060B] text-white pt-6 pb-20 sm:pb-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url(${content.hero.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A0408] via-[#36060B]/90 to-[#4A0910]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />

        <div className="fluid-container relative z-10 pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Hero Text & Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold text-[#4A0910] shadow-gold-sm border border-gold-bright">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A0910]" />
                  <span>{content.hero.ribbonBadge}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-cream-100 border border-gold/30">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>{content.hero.familyBadge}</span>
                </span>
              </div>

              {/* Script Eyebrow */}
              <p className="font-script text-2xl sm:text-3xl text-gold-soft tracking-wider font-bold">
                {content.hero.scriptLine}
              </p>

              {/* Big Headlines */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-[1.15] text-white">
                  {content.hero.titlePrefix}{' '}
                  <span className="text-gold-gradient block sm:inline">
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                <div className="pt-1">
                  <span className="text-xs sm:text-base font-black tracking-widest text-gold-soft uppercase block">
                    {content.hero.brandTitle}
                  </span>
                  <span className="text-xs sm:text-sm text-cream-200 font-sans tracking-wide">
                    {content.hero.subtitle}
                  </span>
                </div>
              </div>

              {/* Paragraph */}
              <p className="text-xs sm:text-base text-[#FFF8E7] leading-relaxed max-w-xl font-normal">
                {content.hero.paragraph}
              </p>

              {/* Action Buttons & Video Play */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-sans font-black text-xs sm:text-sm md:text-base shadow-xl hover:shadow-gold-glow transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-[#B8901F]/40"
                >
                  <Calendar className="w-4 h-4 text-[#4A0910]" />
                  <span>{content.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:${content.brand.phone}`}
                  className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-xs sm:text-sm border border-gold/40 backdrop-blur-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-soft" />
                  <span>{content.hero.ctaSecondary}</span>
                </a>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-soft hover:text-white transition-colors cursor-pointer py-2 px-2.5"
                >
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold translate-x-0.5" />
                  </span>
                  <span>{content.hero.watchVideoText}</span>
                </button>
              </div>

              {/* Trust Row */}
              <div className="pt-4 flex items-center gap-3 sm:gap-4 border-t border-cream-100/10">
                <div className="flex -space-x-2">
                  {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Happy guest"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-maroon object-cover"
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 font-bold text-gold-soft">
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold" />
                      ))}
                    </div>
                    <span>{content.hero.trust.rating}</span>
                  </div>
                  <span className="text-cream-200 text-[10px] sm:text-[11px] font-medium">
                    {content.hero.trust.avatarCount} {content.hero.trust.guestsLabel} • {content.hero.trust.reviewsCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Interactive Booking Widget (5 cols) */}
            <div className="lg:col-span-5">
              <BookingWidget />
            </div>
          </div>
        </div>

        {/* Torn Paper Wavy Bottom Edge Transition */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 sm:h-12 text-[#FBF5EA] fill-current"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURES STRIP
      ========================================================================= */}
      <section className="py-8 bg-[#FBF5EA] border-b border-cream-200">
        <div className="fluid-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {content.featuresStrip.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-cream-200 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-gold/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center flex-shrink-0 border border-cream-200">
                  {getFeatureIcon(item.icon)}
                </div>
                <div>
                  <h4 className="font-serif font-black text-sm sm:text-base text-[#2B1511]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C4A42] font-medium leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PLAN YOUR VISIT (Clean Icon Layout - Fixed Squished Bar)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.planSteps.eyebrow}
            title={content.planSteps.title}
            scriptWord={content.planSteps.scriptWord}
            subtitle="Booking your royal escape at Joy Safari Jaipur takes less than 2 minutes. Follow these simple steps for a seamless experience."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {content.planSteps.steps.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-3xl p-6 border-2 border-cream-200 shadow-soft hover:shadow-soft-hover hover:border-gold/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Clean top row: Rounded square icon on left + step number on right */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#4A0910] text-gold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform border border-gold/40">
                      {getPlanIcon(st.icon)}
                    </div>
                    <span className="font-serif font-black text-2xl text-cream-300 group-hover:text-gold transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#2B1511] group-hover:text-maroon transition-colors mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TOP ATTRACTIONS SLIDER (12 activities)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100/60 border-y border-cream-200 overflow-hidden">
        <div className="fluid-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionTitle
              align="left"
              eyebrow="TOP ATTRACTIONS"
              title="Experience 12+ World-Class"
              scriptWord="Adventures"
              subtitle="From flying high across the lake to laughing on the toy train, every activity is designed for family joy and safety."
            />
            <div className="hidden md:block mb-10">
              <Link
                to="/activities"
                className="inline-flex items-center gap-1.5 text-sm font-serif font-bold text-[#7A0F1B] hover:text-[#B8901F] transition-colors"
              >
                <span>View All 12 Activities</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <ActivitySlider activities={content.activities} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED BANNERS
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FBF5EA]">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Banner 1: Big Card (7 cols) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border-2 border-gold/40 min-h-[380px] flex flex-col justify-end p-6 sm:p-10 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${content.featuredBanners.banner1.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#36060B] via-[#4A0910]/70 to-black/30" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold text-[#4A0910] shadow-sm">
                  {content.featuredBanners.banner1.tag}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {content.featuredBanners.banner1.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient">
                    {content.featuredBanners.banner1.price}
                  </span>
                  <span className="text-xs text-cream-200">
                    {content.featuredBanners.banner1.priceUnit}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#FFF8E7] max-w-lg leading-relaxed">
                  {content.featuredBanners.banner1.description}
                </p>
                <div className="pt-2">
                  <Link
                    to={content.featuredBanners.banner1.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-[#4A0910] font-sans font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-glow transition-all"
                  >
                    <span>{content.featuredBanners.banner1.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Banner 2: Stay by Lake Card (5 cols) */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border-2 border-cream-200 min-h-[380px] flex flex-col justify-end p-6 sm:p-10 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${content.featuredBanners.banner2.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-black/30" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sage text-white shadow-sm">
                  {content.featuredBanners.banner2.tag}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {content.featuredBanners.banner2.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-black text-2xl sm:text-3xl text-gold-soft">
                    {content.featuredBanners.banner2.price}
                  </span>
                  <span className="text-xs text-cream-200">
                    {content.featuredBanners.banner2.priceUnit}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#FFF8E7] leading-relaxed">
                  {content.featuredBanners.banner2.description}
                </p>
                <div className="pt-2">
                  <Link
                    to={content.featuredBanners.banner2.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-sans font-bold text-xs sm:text-sm shadow-md hover:bg-cream-100 transition-all"
                  >
                    <span>{content.featuredBanners.banner2.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LIVE STAGE / MELA NIGHT
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#36060B] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url(${content.liveStage.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A0408] via-[#36060B]/95 to-[#2A0408]" />

        <div className="fluid-container relative z-10">
          <SectionTitle
            theme="dark"
            eyebrow={content.liveStage.eyebrow}
            title={content.liveStage.title}
            scriptWord={content.liveStage.scriptWord}
            subtitle={content.liveStage.description}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {content.liveStage.highlights.map((hl, i) => (
              <div
                key={i}
                className="bg-black/50 border border-gold/40 rounded-2xl p-5 backdrop-blur-md hover:border-gold hover:bg-black/70 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-serif font-bold text-sm mb-3 border border-gold/30">
                  0{i + 1}
                </div>
                <h4 className="font-serif font-bold text-base text-gold-soft mb-1">
                  {hl.title}
                </h4>
                <p className="text-xs text-[#FFF8E7] leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-black/60 border border-gold/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                Evening Event Schedule (3:30 PM to 11:00 PM)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative">
              {content.liveStage.timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-serif font-bold bg-gold/20 text-gold border border-gold/40 mb-2">
                    {item.time}
                  </div>
                  <h4 className="font-serif font-bold text-base text-white group-hover:text-gold-soft transition-colors mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-cream-200 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OFFER BANNER WITH COUNTDOWN
      ========================================================================= */}
      <section className="py-12 bg-gradient-to-r from-[#4A0910] via-[#5C0A14] to-[#4A0910] text-white border-y border-gold/40 relative">
        <div className="fluid-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-[#4A0910] shadow-sm">
                {content.countdownOffer.eyebrow}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {content.countdownOffer.title}{' '}
                  <span className="text-gold-gradient font-black">
                    {content.countdownOffer.price}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF8E7] mt-1 font-light">
                  {content.countdownOffer.subtitle}
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <CountdownTimer initialDays={content.countdownOffer.targetDays} />
              </div>
            </div>

            <div className="bg-black/40 border-2 border-gold/40 rounded-3xl p-6 sm:p-7 max-w-md w-full backdrop-blur-sm space-y-4">
              <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-gold-soft border-b border-gold/20 pb-2">
                All-Inclusive Highlights:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8E7]">
                {content.countdownOffer.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-sans font-black text-xs sm:text-sm text-center shadow-lg hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#B8901F]/40"
                >
                  <span>{content.countdownOffer.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRICING SECTION
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.pricingSection.eyebrow}
            title={content.pricingSection.title}
            scriptWord={content.pricingSection.scriptWord}
            subtitle="Transparent pricing with no hidden charges. Everything is included in your single ticket pass."
          />

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Ornate Maroon Badge */}
            <div className="md:col-span-5 bg-gradient-to-br from-maroon via-maroon-dark to-maroon-deep rounded-3xl p-8 sm:p-10 text-white text-center border-2 border-gold shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-gold/20 text-gold-soft border border-gold/40 mb-4">
                Grand All-Inclusive Pass
              </span>

              <div className="font-serif font-black text-xs uppercase tracking-widest text-cream-200 mb-1">
                PRICE ONLY
              </div>

              <div className="font-serif font-black text-5xl sm:text-6xl text-gold-gradient tracking-tight my-2">
                ₹{content.pricingSection.badgePrice}
              </div>

              <div className="text-xs uppercase tracking-widest font-black text-gold-soft mb-6">
                {content.pricingSection.badgeGst} per person
              </div>

              <p className="text-xs text-[#FFF8E7] leading-relaxed mb-6 font-light">
                Covers transport, full 12+ activity passes, boat ride, pool, evening tea, cultural stage show & gala buffet.
              </p>

              <Link
                to="/contact?package=day-safari"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-gold text-[#4A0910] font-sans font-black text-xs sm:text-sm shadow-lg hover:shadow-gold-glow transition-all"
              >
                <span>Book Day Safari</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Cream Family Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-cream-200 shadow-soft">
              <div className="border-b border-cream-200 pb-4 mb-6">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 inline-block mb-2">
                  {content.pricingSection.familyCard.title}
                </span>
                <p className="text-xs text-[#5C4A42] leading-relaxed font-medium">
                  {content.pricingSection.familyCard.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.pricingSection.familyCard.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50 border-2 border-cream-200">
                    <div className="w-10 h-10 rounded-xl bg-[#7A0F1B] text-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                      {item.icon === 'Bus' && <Bus className="w-5 h-5 text-gold" />}
                      {item.icon === 'Utensils' && <Utensils className="w-5 h-5 text-gold" />}
                      {item.icon === 'Flame' && <Flame className="w-5 h-5 text-gold" />}
                      {item.icon === 'Users' && <Users className="w-5 h-5 text-gold" />}
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-sm text-[#2B1511]">
                        {item.label}
                      </h4>
                      <p className="text-xs text-[#5C4A42] leading-tight mt-0.5 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-[#5C4A42] font-medium">
                <span>Free entry for kids below 3 years</span>
                <Link to="/packages" className="text-[#7A0F1B] font-bold hover:text-[#B8901F] transition-colors">
                  View Full Packages →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PARK INFO STRIP
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.parkInfo.eyebrow}
            title={content.parkInfo.title}
            scriptWord={content.parkInfo.scriptWord}
            subtitle="Conveniently situated right off NH-48 in Achrol Valley with complimentary pickup shuttles."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border-2 border-cream-200 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#7A0F1B] font-serif font-black text-base mb-2">
                    <Clock className="w-5 h-5 text-gold" />
                    <span>Park Timings</span>
                  </div>
                  <p className="text-sm font-bold text-[#2B1511]">{content.parkInfo.timings}</p>
                  <p className="text-xs text-[#5C4A42] mt-1 font-medium">Adventure activities run 4:00 PM - 7:00 PM</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-cream-200 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#7A0F1B] font-serif font-black text-base mb-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs font-bold text-[#2B1511]">{content.parkInfo.location}</p>
                  <p className="text-xs text-[#5C4A42] mt-1 font-medium">30 mins drive from Jaipur city</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-cream-200 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#7A0F1B] font-serif font-black text-base mb-3">
                  <Bus className="w-5 h-5 text-gold" />
                  <span>Free Pick Up & Drop Designated Hubs</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2B1511] font-bold">
                  {content.parkInfo.hubs.map((hub, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-cream-50 border border-cream-200">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-3xl p-3 border-2 border-gold/30 shadow-soft overflow-hidden h-[320px]">
              <iframe
                title="Joy Safari Location Map"
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
      </section>

      {/* =========================================================================
          SECTION 10: ROOM STAY WITH BREAKFAST
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="LUXURY RETREAT"
            title="Overnight Safari &"
            scriptWord="Room Stay"
            subtitle="Extend your royal experience into the night. Wake up to fresh lakeside breeze and birdsong in Achrol Valley."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {content.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 sm:h-72 overflow-hidden bg-cream-200">
                    <img
                      src={room.image}
                      alt={room.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-maroon text-white shadow-md">
                        {room.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md text-[#2B1511] text-xs font-black flex items-center gap-1.5">
                      <Coffee className="w-4 h-4 text-[#B8901F]" />
                      <span>Breakfast Included</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2B1511] group-hover:text-maroon transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4A42] mt-1.5 leading-relaxed font-medium">
                      {room.subtitle}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-cream-200 pt-4">
                      {room.amenities.slice(0, 4).map((am, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#2B1511] font-medium">
                          <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-cream-200 mt-2">
                  <div>
                    <span className="text-[11px] text-[#5C4A42] block uppercase tracking-wider font-bold">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-black text-2xl sm:text-3xl text-[#7A0F1B]">
                        ₹{room.price}
                      </span>
                      <span className="text-xs text-[#5C4A42] font-semibold">/ night</span>
                    </div>
                  </div>

                  <Link
                    to={`/contact?package=${room.id}&tab=stay`}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#7A0F1B] hover:bg-[#4A0910] text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: WHY CHOOSE US
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="THE JOY SAFARI PROMISE"
            title="Why Families Choose Us Over"
            scriptWord="Everything Else"
            subtitle="We are committed to delivering unmatched safety, genuine royal hospitality, and lasting memories."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {content.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-cream-100 text-[#7A0F1B] border-2 border-cream-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#7A0F1B] group-hover:text-gold transition-all duration-300">
                  {item.icon === 'ShieldCheck' && <ShieldCheck className="w-7 h-7" />}
                  {item.icon === 'Bus' && <Bus className="w-7 h-7" />}
                  {item.icon === 'Sparkles' && <Sparkles className="w-7 h-7" />}
                  {item.icon === 'UtensilsCrossed' && <Utensils className="w-7 h-7" />}
                  {item.icon === 'Trees' && <Sparkles className="w-7 h-7" />}
                  {item.icon === 'Award' && <Award className="w-7 h-7" />}
                </div>

                <h3 className="font-serif font-black text-lg text-[#2B1511] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: TRUST & STATS
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#7A0F1B] px-3 py-1 rounded-full bg-maroon/10 border border-maroon/20 inline-block">
                {content.trustStats.eyebrow}
              </span>
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#2B1511] leading-tight">
                {content.trustStats.title}{' '}
                <span className="font-script text-4xl sm:text-5xl text-gold-deep italic block">
                  {content.trustStats.scriptWord}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                Over 5,000+ happy families and couples have experienced our royal safari adventure. Here is what they have to say.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
                  ].map((src, i) => (
                    <img key={i} src={src} alt="guest" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#2B1511]">5,000+ Happy Guests</div>
                  <div className="text-[#5C4A42] text-[11px] font-medium">Jaipur & Delhi Visitors</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border-2 border-cream-200 shadow-soft relative">
              <div className="flex text-gold mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#2B1511] leading-relaxed mb-5">
                "{content.trustStats.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-cream-200">
                <img
                  src={content.trustStats.testimonial.avatar}
                  alt={content.trustStats.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-gold"
                />
                <div>
                  <h4 className="font-serif font-black text-sm text-[#2B1511]">
                    {content.trustStats.testimonial.author}
                  </h4>
                  <p className="text-[11px] text-[#5C4A42] font-semibold">
                    {content.trustStats.testimonial.designation}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {content.trustStats.counters.map((cnt, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border-2 border-cream-200 shadow-sm text-center"
                >
                  <div className="font-serif font-black text-3xl sm:text-4xl text-[#7A0F1B] mb-1">
                    {cnt.value}
                  </div>
                  <div className="text-xs font-bold text-[#5C4A42]">
                    {cnt.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: GALLERY COLLAGE
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100/70 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="MOMENTS CAPTURED"
            title="Snapshots from Our Royal"
            scriptWord="Safari Scrapbook"
            subtitle="Real candid smiles, water splashes, starry night dinners, and high-flying thrills."
          />

          <CollageGallery />
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: BLOG / STORIES
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="STORIES & INSIGHTS"
            title="Travel Guides & Resort"
            scriptWord="Stories"
            subtitle="Helpful tips, itineraries, and stories to make your Joy Safari visit unforgettable."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.blogs.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-cream-200">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-maroon backdrop-blur-sm shadow-sm">
                      {b.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#5C4A42] font-semibold mb-2">
                      <span>{b.date}</span>
                      <span>•</span>
                      <span>{b.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#2B1511] group-hover:text-maroon transition-colors leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C4A42] leading-relaxed line-clamp-3 font-medium">
                      {b.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A0F1B] hover:text-[#B8901F] transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: NEWSLETTER / FINAL CTA STRIP
      ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#7A0F1B] via-[#4A0910] to-[#36060B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none" />

        <div className="fluid-container relative z-10 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold text-[#4A0910] shadow-sm">
              {content.newsletter.eyebrow}
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              {content.newsletter.title}{' '}
              <span className="font-script text-4xl sm:text-5xl text-gold-soft italic">
                {content.newsletter.scriptWord}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7] leading-relaxed max-w-lg mx-auto font-light">
              {content.newsletter.subtitle}
            </p>

            <form onSubmit={handleNewsletter} className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={content.newsletter.placeholder}
                required
                className="flex-1 px-4 py-3.5 rounded-full bg-white/10 border-2 border-gold/40 text-white placeholder:text-cream-200/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold backdrop-blur-sm"
              />
              <button
                type="submit"
                className="py-3.5 px-6 rounded-full bg-gold text-[#4A0910] font-sans font-black text-xs sm:text-sm hover:bg-gold-soft transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : content.newsletter.buttonText}
              </button>
            </form>
            <p className="text-[11px] text-cream-200">
              {content.newsletter.privacyNote}
            </p>
          </div>

          <div className="pt-10 border-t border-gold/20 text-center space-y-6">
            <div>
              <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-gold-gradient tracking-wide">
                {content.finalCta.headline}
              </h2>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FFF8E7] font-bold mt-1">
                {content.finalCta.subline}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={content.finalCta.actions[0].href}
                className="px-6 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-[#4A0910] font-sans font-black text-xs sm:text-sm shadow-lg hover:shadow-gold-glow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {content.finalCta.actions[0].value}</span>
              </a>

              <a
                href={content.finalCta.actions[1].href}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-gold/40 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-gold-soft" />
                <span>{content.finalCta.actions[1].value}</span>
              </a>

              <a
                href={content.finalCta.actions[2].href}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>SHARE WITH YOUR LOVED ONES!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-gold/40">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Resort Experience Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
