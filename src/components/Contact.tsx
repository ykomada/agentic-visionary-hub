
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Ready to transform your business with agentic AI? Let's discuss how our solutions
            can address your specific challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-white/80 leading-relaxed">
                  Our team of AI experts is ready to discuss your business needs and how our
                  agentic AI solutions can create value for your organization.
                </p>
                
                <div>
                  <p className="text-white/60 mb-1">Email us at:</p>
                  <p className="text-white font-medium">yoshi.komada@gmail.com</p>
                </div>
                
                <div>
                  <p className="text-white/60 mb-1">Based in:</p>
                  <p className="text-white font-medium">San Francisco, California</p>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-deep-blue/60 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white">Ready to get started?</h4>
                <p className="text-white/70 mb-4">
                  Fill out the form and we'll get back to you within 24 hours to discuss your project.
                </p>
                <div className="flex items-center gap-2 text-cyan font-medium">
                  <span>Contact us now</span>
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-80">
                  <CheckCircle className="h-16 w-16 text-cyan mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-white/70 text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue/60 border border-white/10 rounded-md focus:border-cyan/50 focus:outline-none text-white"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue/60 border border-white/10 rounded-md focus:border-cyan/50 focus:outline-none text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white/70 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-deep-blue/60 border border-white/10 rounded-md focus:border-cyan/50 focus:outline-none text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-deep-blue/60 border border-white/10 rounded-md focus:border-cyan/50 focus:outline-none text-white resize-none"
                      placeholder="Tell us about your project and requirements"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-cyan to-magenta text-white rounded-md font-medium transition-all hover:shadow-lg hover:shadow-cyan/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
