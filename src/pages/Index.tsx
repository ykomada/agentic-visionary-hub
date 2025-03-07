
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Wait for fonts to load before revealing content
    document.body.classList.add('no-fouc');
    document.fonts.ready.then(() => {
      document.body.classList.add('ready');
    });

    return () => {
      document.body.classList.remove('no-fouc', 'ready');
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
