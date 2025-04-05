import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import heroImage from '@assets/Untitled design_20250405_175152_0000.png';

export default function HeroSection() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-[#1A1A1A] py-20 mt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#2C2C2E] to-black opacity-70"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient">Reimagine Filmmaking</span>
            <br />with AI Assistance
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The ultimate visual prototyping platform that transforms every stage of your filmmaking process with powerful AI tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#demo" 
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors text-base md:text-lg"
            >
              Watch Demo
            </a>
            <a 
              href="#tools" 
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-base md:text-lg"
            >
              Explore Tools
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -8, 0]
        }}
        transition={{
          delay: 1.2,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        whileHover={{ y: 3 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
