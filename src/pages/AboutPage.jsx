import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Crown, Heart, ArrowRight, Calendar } from 'lucide-react';
import { content, VIDEO_URLS } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import VideoSurface from '../components/VideoSurface';
import MobileCarousel from '../components/MobileCarousel';

export default function AboutPage() {
  const values = [
    {
      title: "Safety First & Always",
      desc: "Certified European Petzl climbing gear, twin cable lifelines, lifejackets, and trained marshals oversee every activity.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />,
      videoUrl: VIDEO_URLS.adventureActivities,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Royal Rajputana Hospitality",
      desc: "From the traditional tilak welcome to attentive table service during our gala buffet, every guest is treated like royalty.",
      icon: <Crown className="w-7 h-7 text-gold" />,
      videoUrl: VIDEO_URLS.galaDinner,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Wholesome Family Culture",
      desc: "A strictly verified environment where mothers, children, elders, and couples can relax in full dignity, peace, and security.",
      icon: <Heart className="w-7 h-7 text-gold" />,
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24">
      {/* Full-Width Living Heritage Video Hero */}
      <section className="relative bg-[#2A0408] text-white py-14 sm:py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <VideoSurface
            src={content.hero.bgVideo}
            poster={content.hero.bgImage}
            alt="About Joy Safari Jaipur"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/85 via-[#36060B]/70 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10 text-center">
          <SectionTitle
            theme="dark"
            eyebrow={content.aboutContent.eyebrow}
            title={content.aboutContent.title}
            scriptWord={content.aboutContent.scriptWord}
            subtitle="A venture born from the desire to create Rajasthan's finest family adventure retreat."
          />
        </div>
      </section>

      {/* Welcome Note & Story with Living Video */}
      <div className="fluid-container mb-16">
        <div className="w-full max-w-[1720px] mx-auto bg-white rounded-4xl p-6 sm:p-12 border-2 border-cream-200 shadow-soft space-y-8">
          {/* Padharo Mhare Desh ambient video banner */}
          <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-[#2A0408] text-white text-center space-y-2 border-2 border-gold/40 shadow-md">
            <div className="absolute inset-0 z-0 opacity-45">
              <VideoSurface
                src={VIDEO_URLS.liveShow}
                poster={content.liveStage.bgImage}
                alt="Padharo Mhare Desh"
                shouldPlay={true}
                muted={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A0408]/90 via-[#4A0910]/70 to-[#36060B]/90 z-[1]" />
            <div className="relative z-10 space-y-2">
              <span className="font-script text-3xl sm:text-5xl text-gold-soft font-bold block drop-shadow">
                "{content.aboutContent.welcomeNote}"
              </span>
              <p className="text-xs sm:text-base text-cream-100 font-normal max-w-2xl mx-auto">
                Where the majestic heritage of Rajputana welcomes modern adrenaline and natural peace.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-4 text-xs sm:text-base text-[#2B1511] leading-relaxed font-normal">
                <p>{content.aboutContent.story}</p>
                <p>
                  Nestled right off the Delhi-Jaipur Highway (NH-48) in the scenic Achrol Valley, our resort offers a breath of crisp mountain air, pristine lake waters, and lush gardens away from urban commotion.
                </p>
              </div>

              {/* Mission Box */}
              <div className="p-6 rounded-2xl bg-cream-50 border-l-4 border-[#7A0F1B] space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#7A0F1B] block">
                  Our Guiding Mission
                </span>
                <p className="font-serif italic text-sm sm:text-lg text-[#2B1511]">
                  "{content.aboutContent.mission}"
                </p>
              </div>
            </div>

            {/* Living Heritage Story Video Frame */}
            <div className="lg:col-span-5 relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border-2 border-gold/50 shadow-xl bg-[#1D0407]">
              <VideoSurface
                src={content.featuredBanners.banner1.videoUrl}
                poster={content.featuredBanners.banner1.image}
                alt="Joy Safari Jaipur Heritage & Adventure"
                shouldPlay={true}
                muted={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240306]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-soft block">
                  Achrol Valley • Jaipur
                </span>
                <h4 className="font-serif font-bold text-lg">
                  Adventure Meets Royal Hospitality
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Values with Living Video Headers */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionTitle
            eyebrow="PILLARS OF TRUST"
            title="Our Non-Negotiable"
            scriptWord="Values"
            subtitle="The fundamental principles guiding everything we curate at Joy Safari."
          />

          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-3 md:gap-8"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border-2 border-cream-200 hover:border-gold/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col text-center group h-full"
              >
                <div className="relative h-60 sm:h-64 bg-[#1D0407] overflow-hidden">
                  <VideoSurface
                    src={val.videoUrl}
                    poster={val.image}
                    alt={val.title}
                    shouldPlay={true}
                    muted={true}
                    videoClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0408]/80 via-black/20 to-transparent" />
                </div>

                <div className="px-7 pb-8 -mt-8 relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#7A0F1B] text-gold border-4 border-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="font-serif font-black text-lg text-[#2B1511] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>

      {/* Video-Backed Stats Counter Section */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto relative overflow-hidden bg-[#2A0408] text-white rounded-4xl p-8 sm:p-12 border-2 border-gold/40 shadow-xl">
          <div className="absolute inset-0 z-0 opacity-40">
            <VideoSurface
              src={VIDEO_URLS.boating}
              poster={content.featuredBanners.banner1.image}
              alt="Joy Safari Stats"
              shouldPlay={true}
              muted={true}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/90 via-[#4A0910]/80 to-[#240306]/90 z-[1]" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {content.trustStats.counters.map((cnt, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif font-black text-3xl sm:text-5xl text-gold-gradient">
                  {cnt.value}
                </div>
                <div className="text-xs sm:text-base text-cream-100 font-bold">
                  {cnt.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fluid-container text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5D26B] to-[#D4AF37] text-[#4A0910] font-sans font-black text-sm sm:text-base shadow-xl hover:shadow-gold-glow transition-all border border-[#B8901F]/40"
        >
          <Calendar className="w-5 h-5" />
          <span>Plan Your Royal Visit Today</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
