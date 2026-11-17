import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Crown, Heart, Award, Users, Flame, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  const values = [
    {
      title: "Safety First & Always",
      desc: "Certified European Petzl climbing gear, twin cable lifelines, lifejackets, and trained marshals oversee every activity.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Royal Rajputana Hospitality",
      desc: "From the traditional tilak welcome to attentive table service during our gala buffet, every guest is treated like royalty.",
      icon: <Crown className="w-7 h-7 text-gold" />
    },
    {
      title: "Wholesome Family Culture",
      desc: "A strictly verified environment where mothers, children, elders, and couples can relax in full dignity, peace, and security.",
      icon: <Heart className="w-7 h-7 text-gold" />
    }
  ];

  return (
    <div className="bg-[#FBF5EA] min-h-screen pt-8 pb-24">
      {/* Header Banner */}
      <div className="fluid-container text-center pt-6 pb-10">
        <SectionTitle
          eyebrow={content.aboutContent.eyebrow}
          title={content.aboutContent.title}
          scriptWord={content.aboutContent.scriptWord}
          subtitle="A venture born from the desire to create Rajasthan's finest family adventure retreat."
        />
      </div>

      {/* Welcome Note & Story - Wide layout with decreased margins */}
      <div className="fluid-container mb-16">
        <div className="w-full max-w-[1720px] mx-auto bg-white rounded-4xl p-6 sm:p-12 border-2 border-cream-200 shadow-soft space-y-8">
          {/* Padharo Mhare Desh banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#7A0F1B] via-[#4A0910] to-[#36060B] text-white text-center space-y-2 border-2 border-gold/40 shadow-md">
            <span className="font-script text-3xl sm:text-5xl text-gold-soft font-bold block">
              "{content.aboutContent.welcomeNote}"
            </span>
            <p className="text-xs sm:text-base text-cream-100 font-normal max-w-2xl mx-auto">
              Where the majestic heritage of Rajputana welcomes modern adrenaline and natural peace.
            </p>
          </div>

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
      </div>

      {/* 3 Core Values - Wide layout */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionTitle
            eyebrow="PILLARS OF TRUST"
            title="Our Non-Negotiable"
            scriptWord="Values"
            subtitle="The fundamental principles guiding everything we curate at Joy Safari."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-cream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#7A0F1B] text-gold flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="font-serif font-black text-lg text-[#2B1511] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Counter Section - Wide layout */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto bg-gradient-to-r from-[#4A0910] via-[#5C0A14] to-[#4A0910] text-white rounded-4xl p-8 sm:p-12 border-2 border-gold/40 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

      {/* Bottom CTA - Wide layout */}
      <div className="fluid-container text-center">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-cream-200 shadow-soft space-y-4">
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#2B1511]">
            Experience the Royal Wonder of Jaipur
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4A42] leading-relaxed max-w-lg mx-auto font-medium">
            Book your Day Safari Pass or weekend luxury stay today. We take care of transport, food, thrills, and memories.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-[#4A0910] font-sans font-black text-xs sm:text-sm md:text-base shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Visit Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
