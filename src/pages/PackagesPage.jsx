import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, X, Crown, ChevronDown, ChevronUp, Calendar, Heart,
  Bus, ShieldCheck, ArrowRight, Compass
} from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import VideoSurface from '../components/VideoSurface';
import MobileCarousel from '../components/MobileCarousel';

export default function PackagesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const comparisonRows = [
    { feature: "Price", day: "₹1,999 + GST", garden: "₹6,999 + Taxes", lake: "₹7,999 + Taxes" },
    { feature: "Applicability", day: "Per Person", garden: "2 Adults (1 Room)", lake: "2 Adults (1 Suite)" },
    { feature: "Overnight Room Stay", day: false, garden: "Garden Cottage", lake: "Lake View Balcony" },
    { feature: "Breakfast Buffet Included", day: false, garden: true, lake: true },
    { feature: "Free AC Pick Up & Drop (3 PM - 12 AM)", day: true, garden: true, lake: true },
    { feature: "Traditional Welcome & Starters (5 PM)", day: true, garden: true, lake: true },
    { feature: "All 20+ Fun-Filled Activities", day: true, garden: true, lake: true },
    { feature: "Lake Boating with Life Vests", day: true, garden: true, lake: true },
    { feature: "Resort Swimming Pool & Kids' Zone", day: true, garden: true, lake: true },
    { feature: "Live Rajasthani Folk & Fire Show", day: true, garden: true, lake: true },
    { feature: "Royal Dinner Buffet (Rajasthani + Regular)", day: true, garden: true, lake: true },
    { feature: "ATV, Zipline & Paintball", day: "Optional Add-On", garden: "Optional Add-On", lake: "Optional Add-On" },
  ];

  return (
    <div className="bg-[#FBF5EA] min-h-screen pb-24">
      {/* Full-Width Living Video Header */}
      <section className="relative bg-[#2A0408] text-white py-14 sm:py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <VideoSurface
            src={content.hero.bgVideo}
            poster={content.hero.bgImage}
            alt="Joy Safari Packages"
            shouldPlay={true}
            muted={true}
            videoClassName="scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#240306]/85 via-[#36060B]/70 to-[#240306]/90 z-[1]" />

        <div className="fluid-container relative z-10 text-center">
          <SectionTitle
            theme="dark"
            eyebrow="TRANSPARENT PACKAGES"
            title="Choose Your Royal"
            scriptWord="Safari Experience"
            subtitle="Whether an exhilarating day outing or a tranquil lakeside overnight retreat, every package is crafted with world-class hospitality."
          />
        </div>
      </section>

      {/* NEW STYLE: Architectural 3-Window Royal Arch Video Triptych (Swipe Carousel on Mobile) */}
      <div className="fluid-container mb-16">
        <div className="w-full max-w-[1720px] mx-auto">
          <MobileCarousel
            desktopGridClass="md:grid md:grid-cols-3 md:gap-7 md:items-end"
            cardWidthClass="w-[82vw] sm:w-[320px] md:w-auto"
          >
            {/* Left Staggered Vertical Video Window */}
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-xl group bg-[#1D0407]">
              <VideoSurface
                src={content.packageShowcaseVideos[0].videoUrl}
                poster={content.packageShowcaseVideos[0].image}
                alt={content.packageShowcaseVideos[0].title}
                shouldPlay={true}
                muted={true}
                videoClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240306]/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gold-soft">
                  <Compass className="w-3 h-3" />
                  <span>01 • Day Thrills</span>
                </span>
                <h3 className="font-serif font-bold text-xl mt-0.5">
                  {content.packageShowcaseVideos[0].title}
                </h3>
                <p className="text-xs text-cream-200">{content.packageShowcaseVideos[0].subtitle}</p>
              </div>
            </div>

            {/* Center Signature Royal Jharokha Arch Video Window */}
            <div className="relative h-80 sm:h-[440px] rounded-t-[9rem] rounded-b-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl group bg-[#1D0407]">
              <VideoSurface
                src={content.packageShowcaseVideos[1].videoUrl}
                poster={content.packageShowcaseVideos[1].image}
                alt={content.packageShowcaseVideos[1].title}
                shouldPlay={true}
                muted={true}
                videoClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0408]/95 via-black/20 to-black/15" />
              <div className="absolute bottom-6 left-5 right-5 text-center text-white">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-[#4A0910] text-[10px] font-black uppercase tracking-widest mb-2 shadow-sm">
                  <Crown className="w-3 h-3" />
                  <span>02 • Signature Evening</span>
                </span>
                <h3 className="font-serif font-black text-2xl">
                  {content.packageShowcaseVideos[1].title}
                </h3>
                <p className="text-xs text-cream-200 mt-0.5">{content.packageShowcaseVideos[1].subtitle}</p>
              </div>
            </div>

            {/* Right Staggered Vertical Video Window */}
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-xl group bg-[#1D0407]">
              <VideoSurface
                src={content.packageShowcaseVideos[2].videoUrl}
                poster={content.packageShowcaseVideos[2].image}
                alt={content.packageShowcaseVideos[2].title}
                shouldPlay={true}
                muted={true}
                videoClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240306]/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gold-soft">
                  <Crown className="w-3 h-3" />
                  <span>03 • Overnight Luxury</span>
                </span>
                <h3 className="font-serif font-bold text-xl mt-0.5">
                  {content.packageShowcaseVideos[2].title}
                </h3>
                <p className="text-xs text-cream-200">{content.packageShowcaseVideos[2].subtitle}</p>
              </div>
            </div>
          </MobileCarousel>
        </div>
      </div>

      {/* 3 Pricing Cards with Panoramic Living Video Headers */}
      <div className="fluid-container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch w-full max-w-[1720px] mx-auto">
          {content.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative group ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#7A0F1B] via-[#4A0910] to-[#36060B] text-white border-2 border-gold shadow-2xl lg:scale-[1.02] z-10'
                  : 'bg-white text-ink border-2 border-cream-200 shadow-soft hover:shadow-soft-hover'
              }`}
            >
              <div>
                {/* Curved Panoramic Living Video Header */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1D0407]">
                  <VideoSurface
                    src={pkg.videoUrl}
                    poster={pkg.image}
                    alt={pkg.title}
                    shouldPlay={true}
                    muted={true}
                    videoClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 ${
                      pkg.popular
                        ? 'bg-gradient-to-t from-[#7A0F1B] via-[#4A0910]/45 to-black/25'
                        : 'bg-gradient-to-t from-black/75 via-black/25 to-black/15'
                    }`}
                  />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                        pkg.popular
                          ? 'bg-gold text-[#4A0910]'
                          : 'bg-white/95 text-[#7A0F1B]'
                      }`}
                    >
                      {pkg.tag}
                    </span>

                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 bg-black/55 backdrop-blur-md text-gold-soft border border-gold/40 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                        <Crown className="w-3 h-3 text-gold" />
                        <span>{pkg.badge || 'Most Popular'}</span>
                      </span>
                    )}
                  </div>

                  {/* Overlapping Floating Price Tag */}
                  <div className="absolute bottom-3 left-5 right-5 flex items-baseline justify-between text-white">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-gold-soft">₹</span>
                        <span className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient drop-shadow">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-bold text-cream-100">
                          {pkg.gst}
                        </span>
                      </div>
                      <span className="text-[11px] text-cream-200 font-medium block">
                        {pkg.unit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className={`font-serif font-black text-2xl ${pkg.popular ? 'text-white' : 'text-[#2B1511]'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed font-medium ${pkg.popular ? 'text-cream-200' : 'text-[#5C4A42]'}`}>
                    {pkg.subtitle}
                  </p>

                  <div className="space-y-2.5 mt-5 pt-5 border-t border-cream-200/30 text-xs sm:text-sm">
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular ? 'bg-gold text-[#4A0910]' : 'bg-sage/20 text-sage-dark'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`font-medium ${pkg.popular ? 'text-[#FFF8E7]' : 'text-[#2B1511]'}`}>
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to={`/contact?package=${pkg.id}`}
                  className={`w-full py-3.5 px-6 rounded-2xl font-sans font-black text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gold hover:bg-gold-soft text-[#4A0910] shadow-gold-sm'
                      : 'bg-[#7A0F1B] hover:bg-[#4A0910] text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Package Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Tour Itinerary */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto bg-gradient-to-br from-[#36060B] via-[#4A0910] to-[#240306] rounded-3xl p-6 sm:p-10 border-2 border-gold/40 shadow-xl text-white">
          <SectionTitle
            theme="dark"
            eyebrow="OFFICIAL SCHEDULE"
            title="Complete Tour"
            scriptWord="Itinerary"
            subtitle="From 3:00 PM pickup to 12:00 AM midnight drop-off across Jaipur, here is your seamless royal day plan."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-8">
            {content.tourItinerary.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-gold/25 hover:border-gold transition-colors flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-gold/20 text-gold-soft border border-gold/40 mb-2">
                    {step.time}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-cream-200/90 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gold/20 text-center text-xs text-gold-soft/90 font-medium">
            *Note: ATV Ride, Zipline, and Paintball are specialized thrill add-ons and are not included in the standard ₹1999 package.
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionTitle
            eyebrow="SIDE BY SIDE"
            title="Package Comparison"
            scriptWord="Table"
            subtitle="Compare all inclusions clearly to pick the perfect option for your family."
          />

          <div className="bg-white rounded-3xl border-2 border-cream-200 shadow-soft overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-cream-100 border-b-2 border-cream-200 text-[#7A0F1B] font-serif font-black">
                  <th className="p-4 sm:p-5">Inclusions & Features</th>
                  <th className="p-4 sm:p-5 text-center">Day Safari Pass</th>
                  <th className="p-4 sm:p-5 text-center">Garden Stay</th>
                  <th className="p-4 sm:p-5 text-center bg-gold/15">Lake View Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-cream-50/50' : 'bg-white'}>
                    <td className="p-4 sm:p-5 font-bold text-[#2B1511]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.day === 'boolean' ? (
                        row.day ? (
                          <Check className="w-4 h-4 text-sage mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-[#7A0F1B]">{row.day}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.garden === 'boolean' ? (
                        row.garden ? (
                          <Check className="w-4 h-4 text-sage mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-[#2B1511]">{row.garden}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-gold/5">
                      {typeof row.lake === 'boolean' ? (
                        row.lake ? (
                          <Check className="w-4 h-4 text-gold-deep mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-black text-[#7A0F1B]">{row.lake}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Video-Backed Booking Policies & Guidelines */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto relative overflow-hidden bg-[#2A0408] rounded-3xl p-6 sm:p-10 border-2 border-gold/40 shadow-xl space-y-6">
          <div className="absolute inset-0 z-0 opacity-35">
            <VideoSurface
              src={content.rooms[0].videoUrl}
              poster={content.rooms[0].image}
              alt="Booking Guidelines"
              shouldPlay={true}
              muted={true}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#240306]/90 via-[#36060B]/85 to-[#240306]/90 z-[1]" />

          <div className="relative z-10 flex items-center gap-3 pb-4 border-b border-gold/30">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <h3 className="font-serif font-black text-xl sm:text-2xl text-white">
              Important Booking Policies & Guidelines
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/95 border border-gold/30">
              <h4 className="font-serif font-bold text-[#7A0F1B] flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#7A0F1B] fill-[#7A0F1B]" />
                <span>Families & Couples Only</span>
              </h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                To preserve a refined, family-oriented atmosphere, stags or solo male groups are strictly restricted at resort entry.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/95 border border-gold/30">
              <h4 className="font-serif font-bold text-[#7A0F1B] flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-[#7A0F1B]" />
                <span>Prior Booking for Transport</span>
              </h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                Seats on the complimentary AC tourist shuttle must be confirmed at least 4 hours in advance to guarantee designated seating.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/95 border border-gold/30">
              <h4 className="font-serif font-bold text-[#7A0F1B]">Taxes & GST</h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                GST is applicable as per government regulations on restaurant and recreational amusement services.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/95 border border-gold/30">
              <h4 className="font-serif font-bold text-[#7A0F1B]">Child Entry Policy</h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                Children below 3 years of age enjoy complimentary admission. Ages 3 to 10 enjoy subsidized passes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="fluid-container">
        <div className="w-full max-w-4xl mx-auto">
          <SectionTitle
            eyebrow="HAVE QUESTIONS?"
            title="Frequently Asked"
            scriptWord="Questions"
            subtitle="Everything you need to know about planning your visit to Joy Safari Jaipur."
          />

          <div className="space-y-3">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-cream-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-sm sm:text-base text-[#2B1511] flex items-center justify-between gap-4 cursor-pointer hover:text-[#7A0F1B] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#7A0F1B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#5C4A42] shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C4A42] leading-relaxed border-t border-cream-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
