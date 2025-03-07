
import { useEffect, useRef } from 'react';

const AnimatedLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial setup - using the uploaded logo
    const logo = document.createElement('img');
    logo.src = '/lovable-uploads/ce6cc12c-85f0-4365-9228-cdc45531bfbb.png';
    logo.className = 'w-full h-full object-contain opacity-0 transition-opacity duration-1000';
    logo.onload = () => {
      logo.classList.remove('opacity-0');
    };
    
    container.appendChild(logo);

    // Clean up
    return () => {
      if (container.contains(logo)) {
        container.removeChild(logo);
      }
    };
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div ref={containerRef} className="w-full h-full relative z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan/80 animate-pulse-light"></div>
      
      {/* Orbital rings */}
      <div className="absolute top-0 left-0 w-full h-full border border-cyan/20 rounded-full animate-orbit-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-magenta/20 rounded-full animate-orbit-medium"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default AnimatedLogo;
