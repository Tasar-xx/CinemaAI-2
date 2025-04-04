import { useState } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';
import { tools } from '@/data/tools';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/animation';

export default function ToolsSection() {
  const [visibleTools, setVisibleTools] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTool, setActiveTool] = useState(tools[0]?.id);
  
  const handleLoadMore = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setVisibleTools(prevCount => Math.min(prevCount + 3, tools.length));
      setIsLoading(false);
    }, 800);
  };

  const activeToolData = tools.find(tool => tool.id === activeTool);
  
  return (
    <section id="tools" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            AI Tools for Every Filmmaking Stage
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From script development to post-production, our suite of AI tools transforms how you conceptualize, visualize, and create films.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {tools.slice(0, visibleTools).map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={cn(
                "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                activeTool === tool.id ? "bg-zinc-800/80 border border-zinc-600" : "bg-zinc-900/50"
              )}
            >
              <div className="h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon}></path>
                </svg>
              </div>
              <h4 className="text-sm text-center">{tool.title}</h4>
            </button>
          ))}
        </div>
        
        {activeToolData && (
          <ScrollAnimation>
            <ReflectiveSurface className="rounded-xl p-8 mb-16">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 bg-zinc-800 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={activeToolData.icon}></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">{activeToolData.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {activeToolData.description}
                  </p>
                  
                  <a 
                    href={activeToolData.learnMoreLink} 
                    className="inline-flex items-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="md:w-1/2">
                  <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                    <div className="flex items-center justify-center h-full p-6 text-center">
                      <p className="text-gray-400">{activeToolData.demoText}</p>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </ReflectiveSurface>
          </ScrollAnimation>
        )}
        
        {visibleTools < tools.length && (
          <div className="mt-8 text-center">
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
