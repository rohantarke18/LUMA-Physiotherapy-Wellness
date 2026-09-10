import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import Treatments from './components/Treatments.jsx';
import Therapist from './components/Therapist.jsx';
import GallerySection from './components/GallerySection.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import ImageStatement from './components/ImageStatement.jsx';
import { Connect } from '@/components/ui/highlighter-demo';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import AppointmentModal from './components/AppointmentModal.jsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#26332C]">
      {/* 1. Navbar */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      <main className="grow">
        {/* 2. Hero */}
        <Hero onOpenAppointment={handleOpenAppointment} />

        {/* 3. Trust Statistics */}
        <Stats />

        {/* 4. About */}
        <About />

        {/* ENHANCEMENT 1: Moving Physiotherapy Marquee Ribbon */}
        <Marquee />

        {/* ENHANCEMENT 2: Interactive Treatment Presentation */}
        <Treatments onOpenAppointment={handleOpenAppointment} />

        {/* 6. Therapist Profile */}
        <Therapist onOpenAppointment={handleOpenAppointment} />

        {/* ENHANCEMENT 3: "Movement in Practice" Editorial Photo Section */}
        <GallerySection />

        {/* 8. How It Works / Approach */}
        <Process />

        {/* 9. Patient Stories */}
        <Testimonials />

        {/* 10. Image Statement */}
        <ImageStatement />

        {/* 11. Interactive Specialist Consultation Hub (Highlighter & Particles) */}
        <Connect onOpenAppointment={handleOpenAppointment} />

        {/* 12. FAQ */}
        <FAQ />

        {/* 12. Final CTA */}
        <CTA onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseAppointment}
      />
    </div>
  );
}




