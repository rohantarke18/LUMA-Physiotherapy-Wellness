export default function Marquee() {
  const words = [
    'Movement',
    'Recovery',
    'Mobility',
    'Strength',
    'Wellness',
    'Restoration',
    'Resilience',
    'Care',
  ];

  // Repeat items to ensure seamless infinite looping
  const items = [...words, ...words, ...words, ...words];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-[#DDE4DB] bg-[#FFFFFF] py-4.5 select-none"
      aria-hidden="true"
    >
      {/* Subtle edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10" />

      <div className="animate-marquee items-center gap-6 sm:gap-8">
        {items.map((word, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="font-serif text-base sm:text-lg tracking-[0.18em] uppercase text-[#26332C]/85 font-normal">
              {word}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C98F65] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
