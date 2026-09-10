import { Phone } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export default function CTA({ onOpenAppointment }) {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#DDE4DB] p-8 sm:p-12 md:p-16 border border-[#506B5B]/15 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#26332C] leading-tight max-w-2xl mx-auto mb-6">
          Ready to move forward?
        </h2>

        <p className="text-base sm:text-lg text-[#26332C] leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&apos;re managing pain, recovering from an injury or simply want to move with more confidence, we&apos;re here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <LiquidMetalButton
            label="Book an Appointment"
            onClick={onOpenAppointment}
            width={204}
          />

          <div className="flex items-center gap-2 text-sm text-[#26332C]">
            <span className="text-[#6E756F]">Prefer to talk first?</span>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-1.5 font-bold text-[#26332C] hover:text-[#C98F65] transition-colors focus-visible:outline-2 focus-visible:outline-[#506B5B] py-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

