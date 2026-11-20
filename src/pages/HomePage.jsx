import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bus, Utensils, Flame, HeartHandshake, Ticket, CalendarCheck, BusFront,
  Clock, ShieldCheck, ArrowRight, Phone, Calendar, MapPin,
  Star, Award, Users, Coffee, Check, Share2, Heart, Compass, ChevronRight, Trees,
  Music, Crown
} from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import BookingWidget from '../components/BookingWidget';
import ActivitySlider from '../components/ActivitySlider';
import CountdownTimer from '../components/CountdownTimer';
import CollageGallery from '../components/CollageGallery';
import VideoSurface from '../components/VideoSurface';
import MobileCarousel from '../components/MobileCarousel';

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3500);
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Bus': return <Bus className="w-6 h-6 text-[#7A0F1B]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#7A0F1B]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#7A0F1B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#7A0F1B]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#7A0F1B]" />;
      default: return <Crown className="w-6 h-6 text-[#7A0F1B]" />;
    }
  };

  const getPlanIcon = (iconName) => {
    switch (iconName) {
      case 'Ticket': return <Ticket className="w-6 h-6 text-gold" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-gold" />;
      case 'BusFront': return <BusFront className="w-6 h-6 text-gold" />;
      case 'Crown': return <Crown className="w-6 h-6 text-gold" />;
      case 'Flame': return <Flame className="w-6 h-6 text-gold" />;
      default: return <Compass className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen">
      {/* =========================================================================
          SECTION 1: PURE AUTO-RUNNING BACKGROUND VIDEO HERO
      ========================================================================= */}
      <section className="relative bg-[#2A0408] text-white pt-6 pb-20 sm:pb-28 overflow-hidden">
        {/* Seamless Auto-Running Background Video */}
        <div className="absolute inset-0 z-0">
          <VideoSurface
            src={content.hero.bgVideo}
            poster={content.hero.bgImage}
            alt="Joy Safari Jaipur Resort"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105 opacity-95"
          />
        </div>

        {/* Balanced Royal Vignette so real Hero Video shines through clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/75 via-[#36060B]/50 to-[#4A0910]/35 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none z-[1]" />

        <div className="fluid-container relative z-10 pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Hero Text & Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold text-[#4A0910] shadow-gold-sm border border-gold-bright">
                  <Crown className="w-3.5 h-3.5 text-[#4A0910]" />
                  <span>{content.hero.ribbonBadge}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/45 backdrop-blur-md text-cream-100 border border-gold/30">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>{content.hero.familyBadge}</span>
                </span>
              </div>

              <p className="font-script text-2xl sm:text-3xl text-gold-soft tracking-wider font-bold drop-shadow">
                {content.hero.scriptLine}
              </p>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-[1.15] text-white drop-shadow-md">
                  {content.hero.titlePrefix}{' '}
                  <span className="text-gold-gradient block sm:inline">
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                <div className="pt-1">
                  <span className="text-xs sm:text-base font-black tracking-widest text-gold-soft uppercase block">
                    {content.hero.brandTitle}
                  </span>
                  <span className="text-xs sm:text-sm text-cream-100 font-sans tracking-wide">
                    {content.hero.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-base text-[#FFF8E7] leading-relaxed max-w-xl font-normal drop-shadow-sm">
                {content.hero.paragraph}
              </p>

              {/* Clean Action Buttons */}
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
                  className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white font-sans font-bold text-xs sm:text-sm border border-gold/40 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-soft" />
                  <span>{content.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Trust Row */}
              <div className="pt-4 flex items-center gap-3 sm:gap-4 border-t border-cream-100/15">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
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
                  <span className="text-cream-100 text-[10px] sm:text-[11px] font-medium">
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
          SECTION 2: VIDEO-BACKED ROYAL HIGHLIGHTS STRIP
      ========================================================================= */}
      <section className="py-6 sm:py-8 bg-[#FBF5EA] border-b border-cream-200">
        <div className="fluid-container">
          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {content.featuresStrip.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden p-4 sm:p-5 border-2 border-gold/35 shadow-md flex items-center gap-4 hover:shadow-xl hover:border-gold transition-all group bg-[#2A0408] h-full"
              >
                <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-60 transition-opacity">
                  <VideoSurface
                    src={item.videoUrl}
                    poster={item.image}
                    alt={item.title}
                    shouldPlay={true}
                    muted={true}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/90 via-[#36060B]/75 to-[#4A0910]/65 z-[1]" />

                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gold/20 border border-gold/50 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-gold">
                  {item.icon === 'Bus' && <Bus className="w-6 h-6 text-gold-soft" />}
                  {item.icon === 'Utensils' && <Utensils className="w-6 h-6 text-gold-soft" />}
                  {item.icon === 'Flame' && <Flame className="w-6 h-6 text-gold-soft" />}
                  {item.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6 text-gold-soft" />}
                </div>
                <div className="relative z-10">
                  <h4 className="font-serif font-black text-sm sm:text-base text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FFF8E7]/85 font-medium leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 (NEXT SLIDE): LUXURY VIDEO ACTIVITY SHOWCASE WITH SWAPPING POINTS
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-cream-100/70 border-b border-cream-200 overflow-hidden">
        <div className="fluid-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <SectionTitle
              align="left"
              eyebrow="TOP ATTRACTIONS"
              title="Experience 20+ Fun-Filled"
              scriptWord="Adventures"
              subtitle="From gentle horse & camel rides and peaceful lake boating to joyful toy train and sumo wrestling, every experience is crafted for pure family joy."
            />
            <div className="hidden md:block mb-10">
              <Link
                to="/activities"
                className="inline-flex items-center gap-1.5 text-sm font-serif font-bold text-[#7A0F1B] hover:text-[#B8901F] transition-colors"
              >
                <span>View All 20+ Activities</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <ActivitySlider activities={content.activities.filter(a => a.included !== false)} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED VIDEO EXPERIENCE BANNERS
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FBF5EA]">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Banner 1: Big Card (7 cols) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border-2 border-gold/50 min-h-[440px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 group bg-[#2A0408]">
              <div className="absolute inset-0 z-0">
                <VideoSurface
                  src={content.featuredBanners.banner1.videoUrl}
                  poster={content.featuredBanners.banner1.image}
                  alt={content.featuredBanners.banner1.title}
                  shouldPlay={true}
                  muted={true}
                  videoClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0408] via-[#4A0910]/60 to-black/20 z-[1]" />

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
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border-2 border-cream-200 min-h-[440px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 group bg-[#1D0407]">
              <div className="absolute inset-0 z-0">
                <VideoSurface
                  src={content.featuredBanners.banner2.videoUrl}
                  poster={content.featuredBanners.banner2.image}
                  alt={content.featuredBanners.banner2.title}
                  shouldPlay={true}
                  muted={true}
                  videoClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-black/20 z-[1]" />

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
          SECTION 5: PLAN YOUR VISIT (4 VIDEO STEP CARDS)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100/60 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.planSteps.eyebrow}
            title={content.planSteps.title}
            scriptWord={content.planSteps.scriptWord}
            subtitle="Booking your royal escape at Joy Safari Jaipur takes less than 2 minutes. Follow these simple steps for a seamless experience."
          />

          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {content.planSteps.steps.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 shadow-soft hover:shadow-soft-hover hover:border-gold/50 transition-all duration-300 relative group flex flex-col justify-between h-full"
              >
                <div>
                  {/* Live Step Video Strip */}
                  <div className="relative h-56 sm:h-64 bg-[#1D0407] overflow-hidden">
                    <VideoSurface
                      src={st.videoUrl}
                      poster={st.image}
                      alt={st.title}
                      shouldPlay={true}
                      muted={true}
                      videoClassName="object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#4A0910]/95 text-gold flex items-center justify-center shrink-0 shadow-md border border-gold/50 backdrop-blur-sm">
                        {getPlanIcon(st.icon)}
                      </div>
                      <span className="font-serif font-black text-2xl text-gold-soft drop-shadow">
                        {st.step}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif font-bold text-lg text-[#2B1511] group-hover:text-maroon transition-colors mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LIVE STAGE / MELA NIGHT (PURE AUTO-RUNNING VIDEO SHOWCASE)
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#2A0408] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <VideoSurface
            src={content.liveStage.bgVideo}
            poster={content.liveStage.bgImage}
            alt="Rajasthani Mela Night Live Stage"
            shouldPlay={true}
            muted={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/90 via-[#36060B]/80 to-[#240306]/95 z-[1]" />

        <div className="fluid-container relative z-10">
          <SectionTitle
            theme="dark"
            eyebrow={content.liveStage.eyebrow}
            title={content.liveStage.title}
            scriptWord={content.liveStage.scriptWord}
            subtitle={content.liveStage.description}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16 items-stretch">
            {/* Pure Living Stage Video Frame (5 cols) */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-gold/50 shadow-2xl min-h-[380px] sm:min-h-[440px] group">
              <VideoSurface
                src={content.liveStage.reelVideo}
                poster={content.liveStage.bgImage}
                alt="Rajasthani Live Stage Celebration"
                shouldPlay={true}
                muted={true}
                videoClassName="object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-[#4A0910] text-[11px] font-black uppercase tracking-wider mb-2">
                  <Flame className="w-3 h-3" />
                  <span>7:00 PM - 9:30 PM Daily</span>
                </span>
                <h4 className="font-serif font-bold text-xl text-white">
                  Folk Dance, Dhol & Fire Show
                </h4>
              </div>
            </div>

            {/* 4 Cultural Highlights Grid (7 cols) - Premium Royal Card UI */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {content.liveStage.highlights.map((hl, i) => {
                const stageMeta = [
                  { icon: <Compass className="w-5 h-5 text-gold" />, pill: 'Open-Air Amphitheater' },
                  { icon: <Music className="w-5 h-5 text-gold" />, pill: 'Live Manganiyar Artists' },
                  { icon: <Flame className="w-5 h-5 text-gold" />, pill: 'Evening Stunt Showcase' },
                  { icon: <Crown className="w-5 h-5 text-gold" />, pill: 'Kids & Family Favorite' },
                ][i] || { icon: <Crown className="w-5 h-5 text-gold" />, pill: 'Royal Evening Show' };

                return (
                  <div
                    key={i}
                    className="relative overflow-hidden bg-gradient-to-br from-[#4A0910]/90 via-[#2D050A]/90 to-[#1B0306]/95 border border-gold/40 rounded-3xl p-6 backdrop-blur-md hover:border-gold hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-lg group"
                  >
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/45 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                          {stageMeta.icon}
                        </div>
                        <span className="font-serif font-black text-3xl text-gold/30 group-hover:text-gold/60 transition-colors leading-none">
                          0{i + 1}
                        </span>
                      </div>

                      <h4 className="font-serif font-black text-lg sm:text-xl text-gold-soft mb-2 group-hover:text-white transition-colors">
                        {hl.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#FFF8E7]/90 leading-relaxed font-normal">
                        {hl.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-gold/25 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gold-soft tracking-wide">
                        <Check className="w-3.5 h-3.5 text-gold" />
                        <span>{stageMeta.pill}</span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-cream-200/75">
                        Included
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-black/60 border border-gold/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                Complete Tour Itinerary & Schedule (3:00 PM to 12:00 AM)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative">
              {content.liveStage.timeline.map((item, idx) => (
                <div key={idx} className="relative group p-3 rounded-2xl bg-white/5 border border-gold/20 hover:border-gold/60 transition-colors">
                  <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-serif font-bold bg-gold/20 text-gold border border-gold/40 mb-2">
                    {item.time}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white group-hover:text-gold-soft transition-colors mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-cream-200/90 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gold/25 flex items-center justify-between flex-wrap gap-2 text-xs text-gold-soft/90 font-medium">
              <span>*Note: ATV Ride, Zipline, and Paintball are not included in the ₹1999 package.</span>
              <span className="text-cream-200/75">Achrol Valley, Jaipur • Daily Schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: VIDEO-BACKED OFFER BANNER WITH COUNTDOWN
      ========================================================================= */}
      <section className="py-12 bg-[#36060B] text-white border-y border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <VideoSurface
            src={content.countdownOffer.bgVideo}
            poster={content.hero.bgImage}
            alt="Inaugural Offer"
            shouldPlay={true}
            muted={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0910]/90 via-[#5C0A14]/80 to-[#4A0910]/90 z-[1]" />

        <div className="fluid-container relative z-10">
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

            <div className="bg-black/50 border-2 border-gold/40 rounded-3xl p-6 sm:p-7 max-w-md w-full backdrop-blur-md space-y-4">
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
          SECTION 8: PRICING SECTION (WITH AMBIENT VIDEO PASS CARD)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.pricingSection.eyebrow}
            title={content.pricingSection.title}
            scriptWord={content.pricingSection.scriptWord}
            subtitle="Transparent pricing with no hidden charges. Everything is included in your single ticket pass."
          />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left: Video-Backed Ornate Maroon Pass */}
            <div className="lg:col-span-5 bg-[#36060B] rounded-3xl p-8 sm:p-10 lg:p-12 text-white text-center border-2 border-gold shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 z-0 opacity-35">
                <VideoSurface
                  src={content.pricingSection.bgVideo}
                  poster={content.hero.bgImage}
                  alt="All Inclusive Pass"
                  shouldPlay={true}
                  muted={true}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#4A0910]/85 via-[#36060B]/80 to-[#240306]/95 z-[1]" />

              <div className="relative z-10">
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
                  Covers AC transport, 20+ fun activities, lake boating, pool, traditional welcome with starters, live folk fire show & royal dinner buffet.
                </p>

                <Link
                  to="/contact?package=day-safari"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-gold text-[#4A0910] font-sans font-black text-xs sm:text-sm shadow-lg hover:shadow-gold-glow transition-all"
                >
                  <span>Book Day Safari</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Cream Family Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-cream-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="border-b border-cream-200 pb-4 mb-6">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 inline-flex items-center gap-1.5 mb-2">
                    <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                    <span>{content.pricingSection.familyCard.title}</span>
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
                        {item.icon === 'Crown' && <Crown className="w-5 h-5 text-gold" />}
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

                <div className="mt-4 px-3.5 py-2.5 rounded-2xl bg-amber-50/90 border border-amber-300/80 text-xs text-[#7A0F1B] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7A0F1B] shrink-0" />
                  <span>Note: ATV Ride, Zipline, and Paintball are not included in the package.</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-[#5C4A42] font-medium">
                <span>Free entry for kids below 3 years</span>
                <Link to="/packages" className="text-[#7A0F1B] font-bold hover:text-[#B8901F] transition-colors inline-flex items-center gap-1">
                  <span>View Full Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PARK INFO & ARRIVAL VIDEO STRIP
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow={content.parkInfo.eyebrow}
            title={content.parkInfo.title}
            scriptWord={content.parkInfo.scriptWord}
            subtitle="Conveniently situated right off NH-48 in Achrol Valley with complimentary pickup shuttles."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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

            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Scenic Route Living Video Card */}
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-soft bg-[#1D0407]">
                <VideoSurface
                  src={content.parkInfo.videoUrl}
                  poster={content.parkInfo.poster}
                  alt="Scenic Drive to Achrol Valley"
                  shouldPlay={true}
                  muted={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold-soft block">
                    Achrol Valley • NH-48
                  </span>
                  <h4 className="font-serif font-bold text-base">
                    30 Mins Scenic Escape from Pink City
                  </h4>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-2.5 border-2 border-gold/30 shadow-soft overflow-hidden flex-1 min-h-[210px]">
                <iframe
                  title="Joy Safari Location Map"
                  src={content.parkInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem', minHeight: '190px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: ROOM STAY WITH PURE AUTO-RUNNING VIDEO PREVIEWS
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="LUXURY RETREAT"
            title="Overnight Safari &"
            scriptWord="Room Stay"
            subtitle="Extend your royal experience into the night. Wake up to fresh lakeside breeze and birdsong in Achrol Valley."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            {content.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-[#1D0407]">
                    <VideoSurface
                      src={room.videoUrl}
                      poster={room.image}
                      alt={room.title}
                      shouldPlay={true}
                      muted={true}
                      videoClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

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
          SECTION 11: WHY CHOOSE US (VIDEO-HEADER CARDS)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="THE JOY SAFARI PROMISE"
            title="Why Families Choose Us Over"
            scriptWord="Everything Else"
            subtitle="We are committed to delivering unmatched safety, genuine royal hospitality, and lasting memories."
          />

          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {content.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 hover:border-gold/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col text-center group h-full"
              >
                <div className="relative h-56 sm:h-64 bg-[#1D0407] overflow-hidden">
                  <VideoSurface
                    src={item.videoUrl}
                    poster={item.image}
                    alt={item.title}
                    shouldPlay={true}
                    muted={true}
                    videoClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0408]/80 via-black/20 to-transparent" />
                </div>

                <div className="px-6 pb-7 -mt-8 relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#7A0F1B] text-gold border-4 border-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon === 'ShieldCheck' && <ShieldCheck className="w-7 h-7" />}
                    {item.icon === 'Bus' && <Bus className="w-7 h-7" />}
                    {item.icon === 'Ticket' && <Ticket className="w-7 h-7" />}
                    {item.icon === 'Crown' && <Crown className="w-7 h-7" />}
                    {item.icon === 'UtensilsCrossed' && <Utensils className="w-7 h-7" />}
                    {item.icon === 'Trees' && <Trees className="w-7 h-7" />}
                    {item.icon === 'Award' && <Award className="w-7 h-7" />}
                  </div>

                  <h3 className="font-serif font-black text-lg text-[#2B1511] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: VIDEO-BACKED TRUST & STATS
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#2A0408] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <VideoSurface
            src={content.trustStats.bgVideo}
            poster={content.trustStats.poster}
            alt="Happy Families at Joy Safari"
            shouldPlay={true}
            muted={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/90 via-[#36060B]/80 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#4A0910] px-3 py-1 rounded-full bg-gold inline-block shadow-sm">
                {content.trustStats.eyebrow}
              </span>
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight">
                {content.trustStats.title}{' '}
                <span className="font-script text-4xl sm:text-5xl text-gold-soft italic block">
                  {content.trustStats.scriptWord}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF8E7]/90 leading-relaxed font-normal">
                Over 5,000+ happy families and couples have experienced our royal safari adventure. Here is what they have to say.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="guest" className="w-10 h-10 rounded-full border-2 border-gold object-cover" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">5,000+ Happy Guests</div>
                  <div className="text-gold-soft text-[11px] font-medium">Jaipur & Delhi Visitors</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-3xl p-7 border-2 border-gold/40 shadow-2xl relative text-[#2B1511]">
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
                  className="bg-black/45 backdrop-blur-md rounded-2xl p-5 border border-gold/40 shadow-lg text-center"
                >
                  <div className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient mb-1">
                    {cnt.value}
                  </div>
                  <div className="text-xs font-bold text-[#FFF8E7]">
                    {cnt.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: LIVING MOTION SCRAPBOOK COLLAGE
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-cream-100/70 border-y border-cream-200">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="MOMENTS CAPTURED"
            title="Memories from Our Royal"
            scriptWord="Safari Scrapbook"
            subtitle="Candid family smiles, water splashes, starry night dinners, and high-flying thrills at Joy Safari Jaipur."
          />

          <CollageGallery />
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: TRAVEL GUIDES & STORIES (AUTO-RUNNING VIDEO CARDS)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FBF5EA]">
        <div className="fluid-container">
          <SectionTitle
            eyebrow="STORIES & INSIGHTS"
            title="Travel Guides & Resort"
            scriptWord="Stories"
            subtitle="Helpful tips, itineraries, and stories to make your Joy Safari visit unforgettable."
          />

          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-3 md:gap-8"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {content.blogs.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1D0407]">
                    <VideoSurface
                      src={b.videoUrl}
                      poster={b.image}
                      alt={b.title}
                      shouldPlay={true}
                      muted={true}
                      videoClassName="transition-transform duration-500 group-hover:scale-105"
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
          </MobileCarousel>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: VIDEO-BACKED NEWSLETTER / FINAL CTA STRIP
      ========================================================================= */}
      <section className="py-20 bg-[#36060B] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <VideoSurface
            src={content.hero.bgVideo}
            poster={content.hero.bgImage}
            alt="Joy Safari Jaipur"
            shouldPlay={true}
            muted={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A0F1B]/90 via-[#4A0910]/90 to-[#36060B]/95 z-[1]" />

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
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterError) setNewsletterError('');
                }}
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
            {newsletterError && (
              <p className="text-xs text-rose-300 font-medium">
                {newsletterError}
              </p>
            )}
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
    </div>
  );
}
