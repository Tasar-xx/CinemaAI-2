import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ToolsSection from '@/components/sections/ToolsSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DemoSection from '@/components/sections/DemoSection';
import ProductionStagesSection from '@/components/sections/ProductionStagesSection';
import FutureSection from '@/components/sections/FutureSection';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInfiniteLoading, setIsInfiniteLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  
  // Handle initial page loading
  useEffect(() => {
    // Simulate page loading time
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 3000); // 3 seconds to show the loading screen
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 100);
      
      // Check if we're near the bottom for infinite scroll simulation
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      
      if (scrollPosition + windowHeight > totalHeight - 200 && !isInfiniteLoading) {
        // Don't actually load more content, just simulate the loading indicator
        setIsInfiniteLoading(true);
        setTimeout(() => {
          setIsInfiniteLoading(false);
        }, 1000);
      }
    };
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isInfiniteLoading]);
  
  // Animation on initial load
  useEffect(() => {
    // Only run this effect after the page has loaded
    if (!isPageLoading) {
      // Trigger animation for elements already in view
      const scrollingElements = document.querySelectorAll('.scrolling-animation');
      
      scrollingElements.forEach(element => {
        const boundingRect = element.getBoundingClientRect();
        if (boundingRect.top < window.innerHeight * 0.85) {
          element.classList.add('active');
        }
      });
    }
  }, [isPageLoading]);
  
  return (
    <>
      <LoadingScreen isLoading={isPageLoading} />
      
      {!isPageLoading && (
        <div className="bg-black text-white overflow-x-hidden">
          <Header />
          <HeroSection />
          <IntroSection />
          <ToolsSection />
          <WorkflowSection />
          <BenefitsSection />
          <DemoSection />
          <ProductionStagesSection />
          <FutureSection />
          <Footer />
          
          {isInfiniteLoading && (
            <div className="infinity-loader"></div>
          )}
        </div>
      )}
    </>
  );
}
