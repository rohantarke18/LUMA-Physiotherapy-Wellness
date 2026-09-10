import { ArrowRight } from 'lucide-react';
import ShinyText from './reactbits/ShinyText.jsx';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import { clinicImages } from '../data/images.js';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.9}
          ease="power3.out"
          threshold={0.15}
        >
          {/* Section Eyebrow & Main Section Header */}
          <div className="mb-12 md:mb-16 max-w-2xl">
            <div className="mb-3">
              <ShinyText
                text="ABOUT LUMA"
                color="#506B5B"
                shineColor="#DDE4DB"
                speed={4}
                spread={120}
                className="text-xs font-semibold uppercase tracking-widest"
              />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
              Care that gets you moving again.
            </h2>
          </div>

          {/* Two-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Realistic Image */}
            <div className="lg:col-span-6">
              <div className="group rounded-2xl overflow-hidden border border-[#DDE4DB] shadow-md aspect-4/3 sm:aspect-16/11 bg-[#FFFFFF]">
                <img
                  src={clinicImages.about}
                  alt="Therapist guiding patient mobility and posture during a clinical consultation"
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Supporting Copy & Team Link */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#26332C] mb-5">
                Physiotherapy built around you.
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-[#6E756F] leading-relaxed mb-8">
                <p>
                  At Luma, we look beyond the immediate pain. Every session begins with understanding how you move, what is limiting you and what you want to get back to doing.
                </p>
                <p>
                  From everyday aches to sports recovery and post-surgery rehabilitation, our approach combines hands-on treatment, movement and practical guidance you can carry into daily life.
                </p>
              </div>

              <div>
                <a
                  href="#therapist"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#506B5B] hover:text-[#C98F65] transition-colors group focus-visible:outline-2 focus-visible:outline-[#506B5B] py-1"
                >
                  <span>Meet the team</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
