
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-deep-blue/80 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-gradient">Hyperbolic Labs</a>
            <p className="text-white/60 mt-2">Transforming businesses with agentic AI</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-cyan transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-cyan transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-cyan transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Hyperbolic Labs. All rights reserved.
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
