
import { Shield, Rocket, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan/20 to-magenta/20 border border-white/10">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding relative bg-deep-blue/40">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-lg text-white/70">
                Our team combines deep technical expertise with enterprise experience to deliver
                agentic AI solutions that drive real business impact.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              <Feature 
                icon={<Shield className="h-5 w-5 text-cyan" />}
                title="Enterprise-Grade Solutions"
                description="Secure, scalable, and compliant AI systems designed for enterprise needs and seamless integration."
                delay={0.1}
              />
              
              <Feature 
                icon={<Rocket className="h-5 w-5 text-cyan" />}
                title="Rapid Implementation"
                description="Our proven methodology accelerates development from concept to production in weeks, not months."
                delay={0.2}
              />
              
              <Feature 
                icon={<BarChart3 className="h-5 w-5 text-cyan" />}
                title="Measurable ROI"
                description="We focus on solutions that deliver quantifiable business value and demonstrable returns."
                delay={0.3}
              />
              
              <Feature 
                icon={<Users className="h-5 w-5 text-cyan" />}
                title="Expert Team"
                description="Our specialists combine AI expertise with deep industry knowledge to solve complex business challenges."
                delay={0.4}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0c1425] to-[#1a1033]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Abstract visualization */}
                    <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(3,169,244,0.15),transparent_70%)]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center p-8">
                      <div className="text-gradient text-4xl md:text-5xl font-bold mb-6">AI That Works</div>
                      <p className="text-white/80 mb-8 max-w-md">
                        Our agentic AI systems don't just demonstrate potential—they deliver
                        concrete results for your business from day one.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                        <div className="glass-card p-4 text-center">
                          <div className="text-3xl font-bold text-gradient mb-2">40%</div>
                          <div className="text-white/70 text-sm">Process Efficiency</div>
                        </div>
                        <div className="glass-card p-4 text-center">
                          <div className="text-3xl font-bold text-gradient mb-2">65%</div>
                          <div className="text-white/70 text-sm">Cost Reduction</div>
                        </div>
                        <div className="glass-card p-4 text-center">
                          <div className="text-3xl font-bold text-gradient mb-2">90%</div>
                          <div className="text-white/70 text-sm">Accuracy Rate</div>
                        </div>
                        <div className="glass-card p-4 text-center">
                          <div className="text-3xl font-bold text-gradient mb-2">3x</div>
                          <div className="text-white/70 text-sm">Faster Insights</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 border border-cyan/30 rounded-full"></div>
            <div className="absolute -bottom-7 -left-7 w-28 h-28 border border-magenta/20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
