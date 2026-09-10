import { ArrowRight, Clock } from 'lucide-react';
import BlurText from './reactbits/BlurText.jsx';
import ShinyText from './reactbits/ShinyText.jsx';
import { clinicImages } from '../data/images.js';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pr-0 lg:pr-6">
            {/* Small Eyebrow with ShinyText */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE4DB]/60 border border-[#DDE4DB] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C98F65]" />
              <ShinyText
                text="PHYSIOTHERAPY • REHABILITATION • WELLNESS"
                color="#506B5B"
                shineColor="#FFFFFF"
                speed={4.5}
                spread={120}
                className="text-xs font-semibold uppercase tracking-wider"
              />
            </div>

            {/* Editorial Heading with BlurText */}
            <div className="mb-6 max-w-2xl">
              <BlurText
                text={`Move better.\nFeel like yourself again.`}
                delay={140}
                animateBy="words"
                direction="top"
                stepDuration={0.35}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#26332C] leading-[1.15] tracking-tight"
              />
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#6E756F] leading-relaxed max-w-xl mb-8">
              Personalised physiotherapy for pain relief, recovery and stronger everyday movement.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <LiquidMetalButton
                label="Book an Appointment"
                onClick={onOpenAppointment}
                width={194}
              />

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-transparent border border-[#506B5B]/30 text-[#26332C] font-medium text-sm sm:text-base hover:bg-[#DDE4DB]/40 hover:border-[#506B5B] transition-all focus-visible:outline-2 focus-visible:outline-[#506B5B] h-[46px]"
              >
                Explore Treatments
              </a>
            </div>

            {/* Proof Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-[#6E756F] border-t border-[#DDE4DB] pt-6 w-full max-w-xl">
              <span className="text-[#26332C]">Personalised care</span>
              <span className="text-[#C98F65] select-none">•</span>
              <span className="text-[#26332C]">One-to-one sessions</span>
              <span className="text-[#C98F65] select-none">•</span>
              <span className="text-[#26332C]">Evidence-informed treatment</span>
            </div>
          </div>

          {/* Right Column: Large Realistic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="group relative rounded-[24px] overflow-hidden shadow-lg border border-[#DDE4DB] aspect-4/5 bg-[#FFFFFF]">
                <img
                  src={clinicImages.hero}
                  alt="Physiotherapist guiding a patient through rehabilitation exercises in a warm clinic setting"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500 ease-out"
                  loading="eager"
                />

                {/* Subtle, realistic clinic status element */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:left-5 bg-[#FFFFFF]/95 backdrop-blur-md rounded-xl p-3.5 px-4.5 shadow-md border border-[#DDE4DB] flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DDE4DB]/70 flex items-center justify-center text-[#506B5B] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#506B5B] animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#506B5B]">
                        OPEN TODAY
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#26332C] mt-0.5">
                      09:00 — 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
