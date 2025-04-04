import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';
import { tools } from '@/data/tools';

export default function ToolsSection() {
  const [visibleTools, setVisibleTools] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoadMore = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setVisibleTools(prevCount => Math.min(prevCount + 3, tools.length));
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <section id="tools" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Tools for Every Filmmaking Stage</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From script development to post-production, our suite of AI tools transforms how you conceptualize, visualize, and create films.
          </p>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.slice(0, visibleTools).map((tool, index) => (
            <ScrollAnimation 
              key={tool.id}
              animation="fadeUp"
              delay={index * 0.1}
              className="h-full"
            >
              <ReflectiveSurface className="rounded-xl p-6 h-full transition duration-300 ease-in-out" hoverEffect>
                <div className="h-12 w-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <AspectRatio ratio={16/9} className="w-full rounded-lg overflow-hidden mb-4 bg-[#2C2C2E]">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-500">{tool.demoText}</p>
                  </div>
                </AspectRatio>
                <a href={tool.learnMoreLink} className="text-white text-sm flex items-center hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </ReflectiveSurface>
            </ScrollAnimation>
          ))}
        </div>
        
        {visibleTools < tools.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-5 transition-colors"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  Explore More Tools
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
