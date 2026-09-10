import { Quote } from 'lucide-react';
import ShinyText from './reactbits/ShinyText.jsx';
import { testimonialsData } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="mb-3">
            <ShinyText
              text="PATIENT STORIES"
              color="#506B5B"
              shineColor="#DDE4DB"
              speed={4}
              spread={120}
              className="text-xs font-semibold uppercase tracking-widest"
            />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
            Small steps. Real progress.
          </h2>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#DDE4DB] hover:border-[#506B5B]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C98F65] mb-5 opacity-80" />
                <p className="text-base sm:text-lg text-[#26332C] leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE4DB]">
                <p className="font-serif text-lg text-[#26332C]">
                  {item.author}
                </p>
                {item.context && (
                  <p className="text-xs text-[#6E756F] mt-0.5">
                    {item.context}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
