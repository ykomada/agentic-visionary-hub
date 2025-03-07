
import { BrainCircuit, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  className?: string;
}

const ServiceCard = ({ title, description, icon, delay, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "p-6 md:p-8 glass-card card-hover overflow-hidden relative group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-deep-blue/80 border border-white/10">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan/40 to-magenta/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We offer end-to-end agentic AI solutions tailored to your business needs,
            from initial assessment to fully autonomous production systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="AI Audit" 
            description="Comprehensive assessment of your current AI capabilities, data landscape, and operational processes to identify opportunities for agentic AI integration."
            icon={<BrainCircuit className="h-8 w-8 text-cyan" />}
            delay={0.1}
          />
          
          <ServiceCard 
            title="Solution Design & Proof of Concept" 
            description="Custom agentic AI solution design followed by rapid prototyping. We validate our approach with POCs that demonstrate tangible value and feasibility."
            icon={<Lightbulb className="h-8 w-8 text-cyan" />}
            delay={0.3}
          />
          
          <ServiceCard 
            title="Production Ready Agentic Workflows" 
            description="End-to-end implementation of robust, scalable agentic AI systems integrated with your existing infrastructure, with ongoing optimization and support."
            icon={<Zap className="h-8 w-8 text-cyan" />}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
