import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 border-b border-gray-800' : 'bg-transparent'} sticky-nav`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white text-2xl font-bold tracking-tight">FilmAI</span>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex space-x-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#tools" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Tools</a>
            <a href="#workflow" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Workflow</a>
            <a href="#benefits" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Benefits</a>
            <a href="#future" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Future</a>
          </motion.nav>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors"
            >
              Get Access
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
