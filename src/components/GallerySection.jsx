import { useState } from 'react';
import ShinyText from './reactbits/ShinyText.jsx';
import CircularGallery from './reactbits/CircularGallery.jsx';
import { clinicImages } from '../data/images.js';
import { Rotate3d, LayoutGrid, Hand, ArrowLeftRight } from 'lucide-react';

// Rich, full-color healthcare, physical therapy, and movement photography (strictly non-grayscale)
const circularGalleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    text: 'Athletic Recovery',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    text: 'Manual Spinal Therapy',
  },
  {
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    text: 'Joint Mobility Drills',
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
    text: 'Targeted Strength',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    text: 'Neck & Posture Care',
  },
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    text: 'Post-Surgical Rehab',
  },
  {
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80',
    text: 'Tendon Resilience',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    text: 'Gait & Biomechanics',
  },
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    text: 'Private Clinic Studio',
  },
  {
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=80',
    text: 'Functional Movement',
  },
];

export default function GallerySection() {
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'grid'
  const photos = clinicImages.gallery;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F7F5F0] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="mb-3">
              <ShinyText
                text="CLINICAL SESSIONS & PRACTICE"
                color="#506B5B"
                shineColor="#DDE4DB"
                speed={4}
                spread={120}
                className="text-xs font-semibold uppercase tracking-widest"
              />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] leading-tight">
              Movement in practice.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E756F] leading-relaxed">
              A closer look at how thoughtful treatment, guided mobility, and active rehabilitation come together in our clinic.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-end bg-[#FFFFFF] p-1.5 rounded-full border border-[#DDE4DB]">
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                viewMode === '3d'
                  ? 'bg-[#26332C] text-[#F7F5F0] shadow-sm'
                  : 'text-[#506B5B] hover:text-[#26332C]'
              }`}
            >
              <Rotate3d className="w-3.5 h-3.5" />
              <span>3D Circular Gallery</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#26332C] text-[#F7F5F0] shadow-sm'
                  : 'text-[#506B5B] hover:text-[#26332C]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Editorial Grid</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: 3D Circular WebGL Gallery (React Bits) */}
        {viewMode === '3d' && (
          <div className="relative rounded-3xl overflow-hidden border border-[#DDE4DB] bg-gradient-to-b from-[#26332C] via-[#1E2823] to-[#151D19] shadow-lg">
            {/* Ambient Lighting & Hint Overlay */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-[#26332C]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#506B5B]/30 text-[#DDE4DB] text-xs">
                <Hand className="w-3.5 h-3.5 text-[#C98F65]" />
                <span className="hidden sm:inline">Drag horizontally or use arrow keys to rotate</span>
                <span className="sm:hidden">Drag horizontally to rotate</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#26332C]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#506B5B]/30 text-[11px] text-[#DDE4DB] font-mono">
                <ArrowLeftRight className="w-3 h-3 text-[#DDE4DB]" />
                <span>360° Cylindrical</span>
              </div>
            </div>

            {/* Circular Gallery WebGL Canvas Stage */}
            <div className="w-full h-[540px] sm:h-[600px] lg:h-[640px] relative">
              <CircularGallery
                items={circularGalleryItems}
                bend={3}
                textColor="#F7F5F0"
                borderRadius={0.05}
                scrollEase={0.03}
                scrollSpeed={2}
                font="bold 28px Figtree"
                fontUrl="https://fonts.googleapis.com/css2?family=Figtree:wght@600;700&display=swap"
              />
            </div>

            {/* Bottom Caption Info */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center pointer-events-none">
              <span className="text-xs text-[#DDE4DB] bg-[#151D19]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                10 Clinical Care Pathways • Powered by OGL WebGL
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: Editorial Asymmetric Photo Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left Column (7 cols): Large Anchor Feature + Wide Suite Below */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
              {/* Primary Large Image */}
              <div className="group relative rounded-3xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF] aspect-16/11 shadow-xs">
                <img
                  src={photos[0].image}
                  alt={photos[0].title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DDE4DB] block mb-1">
                    Guided Therapy
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white">
                    {photos[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDE4DB]/90 mt-1 max-w-md">
                    {photos[0].subtitle}
                  </p>
                </div>
              </div>

              {/* Wide Clinic Ambience Photo */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF] aspect-21/9 shadow-xs">
                <img
                  src={photos[3].image}
                  alt={photos[3].title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 text-white pointer-events-none flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DDE4DB] block">
                      Our Clinic Space
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-white mt-0.5">
                      {photos[3].title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#DDE4DB]/80 font-serif hidden sm:inline">
                    Quiet &amp; Private
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Two Stacked Complementary Images */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
              {/* Upper Stack Image */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF] aspect-4/3 grow shadow-xs">
                <img
                  src={photos[1].image}
                  alt={photos[1].title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DDE4DB] block mb-0.5">
                    Assessment
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white">
                    {photos[1].title}
                  </h3>
                  <p className="text-xs text-[#DDE4DB]/90 mt-0.5">
                    {photos[1].subtitle}
                  </p>
                </div>
              </div>

              {/* Lower Stack Image */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#DDE4DB] bg-[#FFFFFF] aspect-4/3 grow shadow-xs">
                <img
                  src={photos[2].image}
                  alt={photos[2].title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332C]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DDE4DB] block mb-0.5">
                    Active Rehab
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white">
                    {photos[2].title}
                  </h3>
                  <p className="text-xs text-[#DDE4DB]/90 mt-0.5">
                    {photos[2].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

