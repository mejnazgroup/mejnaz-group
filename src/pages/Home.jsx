import Navbar from '@/components/mejnaz/Navbar';
import Hero from '@/components/mejnaz/Hero';
import Stats from '@/components/mejnaz/Stats';
import Services from '@/components/mejnaz/Services';
import WhyUs from '@/components/mejnaz/WhyUs';
import Testimonials from '@/components/mejnaz/Testimonials';
import Contact from '@/components/mejnaz/Contact';
import Footer from '@/components/mejnaz/Footer';
import FloatingWhatsApp from '@/components/mejnaz/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}