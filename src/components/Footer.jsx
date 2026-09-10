import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer({ onOpenAppointment }) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#26332C] text-[#F7F5F0] pt-16 pb-12 border-t border-[#506B5B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#F7F5F0]/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#hero" className="inline-block group focus-visible:outline-2 focus-visible:outline-[#DDE4DB] rounded-sm">
                <span className="font-serif text-3xl tracking-wide text-[#FFFFFF] group-hover:text-[#C98F65] transition-colors">
                  LUMA
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-[0.22em] text-[#DDE4DB]/80 mt-1">
                  Physiotherapy &amp; Wellness
                </span>
              </a>
              <p className="mt-5 text-sm text-[#DDE4DB]/80 max-w-sm leading-relaxed">
                Thoughtful physiotherapy for stronger everyday movement. Helping you move without pain and build lasting physical resilience.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-3">
              <a
                href="#hero"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#506B5B] flex items-center justify-center text-[#F7F5F0] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#506B5B] flex items-center justify-center text-[#F7F5F0] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#506B5B] flex items-center justify-center text-[#F7F5F0] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#DDE4DB] font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F7F5F0]/80">
              <li>
                <a href="#treatments" className="hover:text-[#C98F65] transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C98F65] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#C98F65] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#therapist" className="hover:text-[#C98F65] transition-colors">
                  Therapist
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C98F65] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="hover:text-[#C98F65] transition-colors cursor-pointer text-left"
                >
                  Book Session
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#DDE4DB] font-semibold mb-4">
              Hours
            </h3>
            <div className="space-y-3 text-sm text-[#F7F5F0]/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#DDE4DB] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FFFFFF]">Monday – Saturday</p>
                  <p className="text-xs text-[#DDE4DB]/80 mt-0.5">9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="pt-2 text-xs text-[#DDE4DB]/60">
                Sunday: Closed for deep sanitization &amp; staff rest
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#DDE4DB] font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#F7F5F0]/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#DDE4DB] shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-[#FFFFFF] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#DDE4DB] shrink-0 mt-0.5" />
                <a href="mailto:hello@lumaphysio.example" className="hover:text-[#FFFFFF] transition-colors">
                  hello@lumaphysio.example
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DDE4DB] shrink-0 mt-0.5" />
                <span>Aurangabad, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDE4DB]/70">
          <p>© {currentYear} Luma Physiotherapy &amp; Wellness. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-[#FFFFFF] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
