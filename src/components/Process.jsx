import ShinyText from './reactbits/ShinyText.jsx';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import ScrollStack, { ScrollStackItem } from './reactbits/ScrollStack.jsx';
import { ArrowDown, Activity, Sparkles, ShieldCheck, HeartPulse, Layers } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      badge: 'Step 1: Clinical Evaluation',
      title: 'Comprehensive Assessment',
      desc: 'We listen to your pain history, perform orthopedic biomechanical tests, and identify root movement dysfunctions rather than just masking symptoms.',
      details: '60-min in-depth physical intake • Posture & gait analysis • Goal setting',
      icon: Activity,
      color: 'from-[#FFFFFF] to-[#F7F5F0]',
      textColor: 'text-[#26332C]',
    },
    {
      num: '02',
      badge: 'Step 2: Hands-on Therapy',
      title: 'Targeted Manual Treatment',
      desc: 'Relieve acute nerve irritation, muscular spasms, and joint restrictions through joint mobilization, soft tissue release, and gentle spinal alignment.',
      details: 'Joint decompression • Trigger point therapy • Immediate symptom ease',
      icon: HeartPulse,
      color: 'from-[#FFFFFF] to-[#DDE4DB]',
      textColor: 'text-[#26332C]',
    },
    {
      num: '03',
      badge: 'Step 3: Active Rehabilitation',
      title: 'Progressive Movement Coaching',
      desc: 'Transition from passive pain relief to active, resilient strength. Rebuild postural stability and motor control with evidence-backed movement drills.',
      details: 'Neuromuscular re-education • Core & joint stabilization • Home program',
      icon: Sparkles,
      color: 'from-[#506B5B] to-[#26332C]',
      textColor: 'text-white',
    },
    {
      num: '04',
      badge: 'Step 4: Prevention & Mastery',
      title: 'Long-Term Resilience',
      desc: 'Empower you with ergonomic habits, functional mobility routines, and self-management strategies so you stay active, confident, and pain-free.',
      details: 'Ergonomic workspace audit • Preventative drills • Follow-up check-ins',
      icon: ShieldCheck,
      color: 'from-[#26332C] to-[#1A231E]',
      textColor: 'text-white',
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#DDE4DB] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          threshold={0.15}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="mb-3">
                <ShinyText
                  text="OUR APPROACH"
                  color="#506B5B"
                  shineColor="#DDE4DB"
                  speed={4}
                  spread={120}
                  className="text-xs font-semibold uppercase tracking-widest"
                />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
                Simple from the first step.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6E756F] leading-relaxed">
                A structured four-phase continuum designed to treat the root cause, restore movement, and keep you pain-free.
              </p>
            </div>

            {/* Indicator Badge */}
            <div className="flex items-center gap-2 self-start md:self-end bg-[#FFFFFF] px-4 py-2 rounded-full border border-[#DDE4DB] text-xs font-medium text-[#26332C]">
              <Layers className="w-3.5 h-3.5 text-[#506B5B]" />
              <span>Stacked Recovery Journey (4 Phases)</span>
            </div>
          </div>

          {/* React Bits <ScrollStack /> Interactive Deck */}
          <div className="relative rounded-3xl border border-[#DDE4DB] bg-[#F7F5F0] p-4 sm:p-8 shadow-sm">
            {/* Stack Control Hint */}
            <div className="flex items-center justify-between mb-4 px-2 text-xs text-[#6E756F]">
              <span className="flex items-center gap-1.5 font-medium text-[#26332C]">
                <ArrowDown className="w-3.5 h-3.5 text-[#506B5B] animate-bounce" />
                Scroll or swipe inside this container to stack recovery phases
              </span>
              <span className="font-mono text-[11px] text-[#506B5B] bg-[#DDE4DB] px-2.5 py-1 rounded-full">
                Interactive Deck
              </span>
            </div>

            {/* ScrollStack Scroller Container */}
            <div className="h-[480px] sm:h-[540px] rounded-2xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF]">
              <ScrollStack
                itemDistance={70}
                itemStackDistance={25}
                itemScale={0.035}
                baseScale={0.88}
                blurAmount={1.2}
                stackPosition="15%"
                scaleEndPosition="8%"
                useWindowScroll={false}
              >
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <ScrollStackItem
                      key={idx}
                      itemClassName={`bg-gradient-to-br ${step.color} ${step.textColor} border border-[#DDE4DB] shadow-lg`}
                    >
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <span className="text-xs font-semibold tracking-wider uppercase opacity-80 bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full">
                              {step.badge}
                            </span>
                            <span className="font-serif text-3xl sm:text-4xl font-light opacity-50">
                              {step.num}
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-xl">
                            {step.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 text-xs font-medium opacity-80">
                          <span className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#C98F65]" />
                            {step.details}
                          </span>
                          <span className="font-mono text-[11px]">
                            Phase {idx + 1} of 4
                          </span>
                        </div>
                      </div>
                    </ScrollStackItem>
                  );
                })}
              </ScrollStack>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

