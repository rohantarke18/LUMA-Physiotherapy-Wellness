import { clinicImages } from '../data/images.js';

export default function ImageStatement() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-[#26332C]">
      {/* Background Photography with Dark Vignette/Overlay for perfect contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={clinicImages.statement}
          alt="Tranquil modern physiotherapy clinic interior"
          className="w-full h-full object-cover object-center opacity-35"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#26332C]/65" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#DDE4DB] font-semibold mb-4">
          LUMA Philosophy
        </p>
        <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight max-w-3xl mx-auto">
          &ldquo;Movement is part of feeling well.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
