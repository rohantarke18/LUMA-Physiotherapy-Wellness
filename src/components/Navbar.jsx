import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Consultation', href: '#consultation' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#DDE4DB]'
          : 'bg-[#F7F5F0] border-b border-[#DDE4DB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex flex-col group focus-visible:outline-2 focus-visible:outline-[#506B5B] rounded-sm py-1"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-wide text-[#26332C] leading-none group-hover:text-[#506B5B] transition-colors">
              LUMA
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.22em] text-[#506B5B] mt-1">
              Physiotherapy &amp; Wellness
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#26332C] hover:text-[#506B5B] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#506B5B] rounded-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center space-x-4">
            <LiquidMetalButton
              label="Book Appointment"
              onClick={onOpenAppointment}
              width={168}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-3.5 py-1.5 rounded-full bg-[#506B5B] text-white text-xs font-medium hover:bg-[#26332C] transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#26332C] hover:bg-[#DDE4DB]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#506B5B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDE4DB] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-3 shadow-md animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#26332C] hover:bg-[#F7F5F0] hover:text-[#506B5B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#F7F5F0]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#506B5B] text-white text-sm font-medium hover:bg-[#26332C] transition-colors text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
