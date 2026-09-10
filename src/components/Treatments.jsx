import { useState } from 'react';
import { Activity, Flame, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import ShinyText from './reactbits/ShinyText.jsx';
import { treatmentsData } from '../data/treatments.js';

export default function Treatments({ onOpenAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const iconMap = {
    Activity: Activity,
    Flame: Flame,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
  };

  const activeTreatment = treatmentsData[activeIndex] || treatmentsData[0];
  const ActiveIcon = iconMap[activeTreatment.iconName] || Activity;

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#DDE4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="mb-3">
            <ShinyText
              text="WHAT WE HELP WITH"
              color="#506B5B"
              shineColor="#DDE4DB"
              speed={4}
              spread={120}
              className="text-xs font-semibold uppercase tracking-widest"
            />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
            Support for every stage of recovery.
          </h2>
          <p className="mt-4 text-base text-[#6E756F]">
            Select any focus area below to view our clinical methodology, treatment approach, and typical recovery pathways.
          </p>
        </div>

        {/* Desktop / Large Screen: Interactive Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Treatment Selectable Rows */}
          <div className="lg:col-span-5 flex flex-col space-y-3" role="tablist" aria-label="Treatments list">
            {treatmentsData.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || Activity;
              const isSelected = activeIndex === idx;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`treatment-tab-${idx}`}
                  aria-selected={isSelected}
                  aria-controls={`treatment-panel-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative text-left p-6 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#F7F5F0] border-[#506B5B]/30 shadow-xs'
                      : 'bg-transparent border-transparent hover:bg-[#F7F5F0]/70 hover:border-[#DDE4DB]'
                  }`}
                >
                  {/* Subtle active left indicator bar */}
                  <div
                    className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-200 ${
                      isSelected ? 'bg-[#C98F65]' : 'bg-transparent'
                    }`}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isSelected
                          ? 'bg-[#506B5B] text-white'
                          : 'bg-[#DDE4DB]/50 text-[#506B5B] group-hover:bg-[#DDE4DB]'
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div className="grow">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#506B5B]">
                          {item.category}
                        </span>
                        <span className="text-xs font-serif text-[#6E756F]">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-xl sm:text-2xl mt-1 transition-colors ${
                          isSelected ? 'text-[#26332C]' : 'text-[#26332C]/80 group-hover:text-[#26332C]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#6E756F] leading-relaxed mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Dynamic Photograph & Clinical Details */}
          <div className="lg:col-span-7 sticky top-28">
            <div
              id={`treatment-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`treatment-tab-${activeIndex}`}
              className="relative rounded-3xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF] shadow-md transition-all duration-300"
            >
              {/* Image Frame with Smooth Cross-fade */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#26332C]/10">
                {treatmentsData.map((item, idx) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.imageAlt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                      activeIndex === idx
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-102 pointer-events-none'
                    }`}
                    loading="lazy"
                  />
                ))}

                {/* Subtle dark gradient overlay at bottom of image for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/70 via-transparent to-transparent pointer-events-none" />

                {/* Pill overlay on image */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="w-4 h-4 text-[#DDE4DB]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#DDE4DB]">
                      {activeTreatment.category}
                    </span>
                  </div>
                  <span className="text-xs text-[#FFFFFF]/80 font-serif">
                    Care Protocol
                  </span>
                </div>
              </div>

              {/* Panel Details & Call to Action */}
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {activeTreatment.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F7F5F0] text-[#506B5B] border border-[#DDE4DB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-2xl text-[#26332C] mb-3">
                  {activeTreatment.title}
                </h3>

                <p className="text-base text-[#6E756F] leading-relaxed mb-6">
                  {activeTreatment.detailedOverview}
                </p>

                {/* Treatment Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#DDE4DB] mb-6">
                  {activeTreatment.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-[#26332C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F65] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={onOpenAppointment}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#506B5B] text-white text-sm font-medium hover:bg-[#26332C] active:scale-[0.99] transition-all shadow-xs cursor-pointer group"
                  >
                    <span>Inquire care for {activeTreatment.title}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-[#6E756F] hidden sm:inline">
                    Initial session: 45–60 mins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Selectable Tabs + Stacked Interactive Card */}
        <div className="lg:hidden space-y-6">
          {/* Horizontal scroll / pill selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {treatmentsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeIndex === idx
                    ? 'bg-[#506B5B] text-white shadow-xs'
                    : 'bg-[#F7F5F0] text-[#26332C] border border-[#DDE4DB]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Mobile Card */}
          <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#DDE4DB] shadow-sm">
            <div className="relative aspect-16/10 overflow-hidden bg-[#26332C]/10">
              <img
                src={activeTreatment.image}
                alt={activeTreatment.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#DDE4DB]">
                  {activeTreatment.category}
                </span>
                <h3 className="font-serif text-xl text-white">
                  {activeTreatment.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-[#6E756F] leading-relaxed mb-4">
                {activeTreatment.description}
              </p>
              <p className="text-xs text-[#6E756F] leading-relaxed mb-5">
                {activeTreatment.detailedOverview}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeTreatment.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F7F5F0] text-[#506B5B] border border-[#DDE4DB]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full py-3 rounded-xl bg-[#506B5B] text-white text-sm font-medium hover:bg-[#26332C] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book for {activeTreatment.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
