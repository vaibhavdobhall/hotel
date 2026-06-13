import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import DiningWellnessSection from '@/components/DiningWellnessSection';
import VenuesSection from '@/components/VenuesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-[#f7ede2] text-[#1f1a12] antialiased">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <DiningWellnessSection />
      <VenuesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
