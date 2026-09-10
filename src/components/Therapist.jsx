import { Check, Calendar } from 'lucide-react';
import ShinyText from './reactbits/ShinyText.jsx';
import TiltedCard from './reactbits/TiltedCard.jsx';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import { clinicImages } from '../data/images.js';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export default function Therapist({ onOpenAppointment }) {
  const credentials = [
    '12+ years experience',
    'Sports rehabilitation',
    'Manual therapy',
    'Movement rehabilitation',
  ];

  return (
    <section id="therapist" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="mb-3">
            <ShinyText
              text="YOUR PHYSIOTHERAPIST"
              color="#506B5B"
              shineColor="#DDE4DB"
              speed={4}
              spread={120}
              className="text-xs font-semibold uppercase tracking-widest"
            />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
            Good physiotherapy starts with listening.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: TiltedCard for Therapist Portrait */}
          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#DDE4DB] shadow-md bg-[#FFFFFF] p-2">
                <TiltedCard
                  imageSrc={clinicImages.therapist}
                  altText="Dr. Maya Shah, Lead Physiotherapist at LUMA"
                  captionText="Dr. Maya Shah"
                  containerHeight="460px"
                  containerWidth="100%"
                  imageHeight="460px"
                  imageWidth="100%"
                  rotateAmplitude={6}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
              <div className="mt-4 text-center lg:text-left px-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#506B5B]">
                  MPT • Sports Rehabilitation
                </p>
              </div>
            </div>
          </div>

          {/* Right: Therapist Information using AnimatedContent */}
          <div className="lg:col-span-7">
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={0.85}
              ease="power3.out"
              threshold={0.15}
            >
              <div className="max-w-xl">
                <div className="mb-6">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#26332C]">
                    Dr. Maya Shah
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#506B5B] mt-1">
                    Lead Physiotherapist
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#6E756F] leading-relaxed mb-8">
                  Every body is different. Maya takes time to understand your movement, your routine and your goals before creating a treatment plan that makes sense for you.
                </p>

                {/* Small Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#26332C]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#DDE4DB] text-[#506B5B] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <LiquidMetalButton
                    label="Meet Maya"
                    onClick={onOpenAppointment}
                    width={152}
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
