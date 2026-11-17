import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ChevronDown, ChevronUp, Calendar, Heart, Bus, ShieldCheck, ArrowRight } from 'lucide-react';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function PackagesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const comparisonRows = [
    { feature: "Price", day: "₹1,999 + GST", garden: "₹6,999 + Taxes", lake: "₹7,999 + Taxes" },
    { feature: "Applicability", day: "Per Person", garden: "2 Adults (1 Room)", lake: "2 Adults (1 Suite)" },
    { feature: "Overnight Room Stay", day: false, garden: "Garden Cottage", lake: "Lake View Balcony" },
    { feature: "Breakfast Buffet Included", day: false, garden: true, lake: true },
    { feature: "Free AC Pick Up & Drop", day: true, garden: true, lake: true },
    { feature: "All 12+ Adventure Activities", day: true, garden: true, lake: true },
    { feature: "Lake Boating with Life Vests", day: true, garden: true, lake: true },
    { feature: "Swimming Pool Access", day: true, garden: true, lake: true },
    { feature: "Sunset High Tea & Snacks", day: true, garden: true, lake: true },
    { feature: "Live Rajasthani Cultural Show", day: true, garden: true, lake: true },
    { feature: "Royal Gala Dinner Buffet", day: true, garden: true, lake: true },
    { feature: "Priority Ride Queues", day: false, garden: false, lake: true },
  ];

  return (
    <div className="bg-[#FBF5EA] min-h-screen pt-8 pb-24">
      {/* Page Header */}
      <div className="fluid-container text-center pt-6 pb-10">
        <SectionTitle
          eyebrow="TRANSPARENT PACKAGES"
          title="Choose Your Royal"
          scriptWord="Safari Experience"
          subtitle="Whether an exhilarating day outing or a tranquil lakeside overnight retreat, every package is crafted with world-class hospitality."
        />
      </div>

      {/* 3 Pricing Cards - Wide layout with decreased margins */}
      <div className="fluid-container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch w-full max-w-[1720px] mx-auto">
          {content.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#7A0F1B] via-[#4A0910] to-[#36060B] text-white border-2 border-gold shadow-2xl scale-[1.02] z-10'
                  : 'bg-white text-ink border-2 border-cream-200 shadow-soft hover:shadow-soft-hover'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-[#4A0910] font-sans font-black text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1 border border-gold-bright">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{pkg.badge || 'Most Popular'}</span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    pkg.popular ? 'bg-gold/20 text-gold-soft' : 'bg-cream-100 text-[#7A0F1B]'
                  }`}>
                    {pkg.tag}
                  </span>
                  <h3 className={`font-serif font-black text-2xl mt-2 ${pkg.popular ? 'text-white' : 'text-[#2B1511]'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed font-medium ${pkg.popular ? 'text-cream-200' : 'text-[#5C4A42]'}`}>
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="py-4 border-y border-cream-200/30 my-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold">₹</span>
                    <span className={`font-serif font-black text-4xl sm:text-5xl ${
                      pkg.popular ? 'text-gold-gradient' : 'text-[#7A0F1B]'
                    }`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-bold ${pkg.popular ? 'text-cream-200' : 'text-[#5C4A42]'}`}>
                      {pkg.gst}
                    </span>
                  </div>
                  <span className={`text-[11px] block mt-0.5 font-medium ${pkg.popular ? 'text-cream-200' : 'text-[#5C4A42]'}`}>
                    {pkg.unit}
                  </span>
                </div>

                <div className="space-y-2.5 my-6 text-xs sm:text-sm">
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

              <div className="pt-4">
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

      {/* Comparison Table - Wide layout with decreased margins */}
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

      {/* Booking Policies & Guidelines - Wide layout */}
      <div className="fluid-container mb-20">
        <div className="w-full max-w-[1720px] mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-cream-200 shadow-soft space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-cream-200">
            <ShieldCheck className="w-6 h-6 text-[#7A0F1B]" />
            <h3 className="font-serif font-black text-xl sm:text-2xl text-[#2B1511]">
              Important Booking Policies & Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs sm:text-sm text-[#2B1511] leading-relaxed">
            <div className="space-y-1.5 p-4 rounded-2xl bg-cream-50 border-2 border-cream-200">
              <h4 className="font-serif font-bold text-[#7A0F1B] flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#7A0F1B] fill-[#7A0F1B]" />
                <span>Families & Couples Only</span>
              </h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                To preserve a refined, family-oriented atmosphere, stags or solo male groups are strictly restricted at resort entry.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream-50 border-2 border-cream-200">
              <h4 className="font-serif font-bold text-[#7A0F1B] flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-[#7A0F1B]" />
                <span>Prior Booking for Transport</span>
              </h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                Seats on the complimentary AC tourist shuttle must be confirmed at least 4 hours in advance to guarantee designated seating.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream-50 border-2 border-cream-200">
              <h4 className="font-serif font-bold text-[#7A0F1B]">Taxes & GST</h4>
              <p className="text-[#5C4A42] text-xs font-medium">
                GST is applicable as per government regulations on restaurant and recreational amusement services.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream-50 border-2 border-cream-200">
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
