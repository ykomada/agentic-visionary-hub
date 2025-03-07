
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-glow opacity-30"></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 right-1/2 w-96 h-96 bg-magenta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container max-w-6xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <AnimatedLogo />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">Agentic AI Solutions</span> <br />
          <span className="text-white/90">for Enterprise</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
        >
          We build intelligent AI systems that transform how businesses operate, 
          delivering autonomous workflows that drive efficiency and innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gradient-to-r from-cyan to-magenta text-white rounded-md text-lg font-medium transition-transform hover:scale-105"
          >
            Contact Us
          </a>
          <a 
            href="#services" 
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-md text-lg font-medium border border-white/20 transition-all hover:bg-white/20"
          >
            Our Services
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <ArrowDown className="text-white/70 h-8 w-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
