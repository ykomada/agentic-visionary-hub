
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-deep-blue/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gradient">Hyperbolic Labs</a>
        </div>
        
        {!isMobile ? (
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-cyan transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-white/80 hover:text-cyan transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-cyan transition-colors"
            >
              Contact
            </button>
          </nav>
        ) : (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-cyan transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan to-magenta text-white px-6 transition-transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-deep-blue/95 pt-20 px-6 z-40 flex flex-col animate-fade-in">
          <div className="flex flex-col space-y-6 text-lg">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-cyan py-2 transition-colors border-b border-white/10"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-white/90 hover:text-cyan py-2 transition-colors border-b border-white/10"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-cyan py-2 transition-colors border-b border-white/10"
            >
              Contact
            </button>
          </div>
          <div className="mt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-cyan to-magenta text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
