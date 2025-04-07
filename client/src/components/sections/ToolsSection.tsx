import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ReflectiveSurface from "@/components/ui/ReflectiveSurface";
import ImageLoader from "@/components/ui/ImageLoader";
import { tools, Tool } from "@/data/tools";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animation";

export default function ToolsSection() {
  const [visibleTools, setVisibleTools] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  // Track current image index for each tool
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  // Initialize the current image index for each tool
  useEffect(() => {
    const initialIndices: Record<string, number> = {};
    tools.forEach(tool => {
      initialIndices[tool.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  const handleLoadMore = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleTools((prevCount) => Math.min(prevCount + 3, tools.length));
      setIsLoading(false);
    }, 800);
  };
  
  // Handle image navigation for the carousel
  const nextImage = (toolId: string) => {
    setCurrentImageIndex(prev => {
      const tool = tools.find(t => t.id === toolId);
      const imageCount = tool?.images?.length || 1;
      return {
        ...prev,
        [toolId]: (prev[toolId] + 1) % imageCount
      };
    });
  };

  const prevImage = (toolId: string) => {
    setCurrentImageIndex(prev => {
      const tool = tools.find(t => t.id === toolId);
      const imageCount = tool?.images?.length || 1;
      return {
        ...prev,
        [toolId]: (prev[toolId] - 1 + imageCount) % imageCount
      };
    });
  };

  return (
    <section id="tools" className="py-32 bg-black relative overflow-hidden">
      {/* Background gradient blur elements */}
      <div className="absolute top-1/4 -left-80 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-1/3 -right-80 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation
          animation="fadeUp"
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            AI Tools for Filmmaking
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our suite of AI tools transforms how you conceptualize, visualize,
            and create films.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16">
          {tools.slice(0, visibleTools).map((tool, index) => (
            <ScrollAnimation
              key={tool.id}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Glass effect card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)] group-hover:border-white/20 transition-all duration-500" />

                <div className="relative p-10 h-full">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 h-16 w-16 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d={tool.icon}
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                      <p className="text-gray-400 text-base">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <AspectRatio
                      ratio={16 / 9}
                      className="rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 shadow-xl mb-6"
                    >
                      {tool.images && tool.images.length > 0 ? (
                        <ImageLoader
                          className="w-full h-full transition-opacity duration-300"
                          src={tool.images[currentImageIndex[tool.id] || 0]}
                        />
                      ) : (
                        tool.imageUrl && (
                          <ImageLoader
                            className="w-full h-full"
                            src={tool.imageUrl}
                          />
                        )
                      )}
                    </AspectRatio>
                    
                    {/* Carousel Navigation */}
                    {tool.images && tool.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(tool.id);
                          }}
                          className="ml-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white focus:outline-none transform transition-transform hover:scale-110"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M15 19l-7-7 7-7"
                            ></path>
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(tool.id);
                          }}
                          className="mr-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white focus:outline-none transform transition-transform hover:scale-110"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    )}
                    
                    {/* Carousel Indicators */}
                    {tool.images && tool.images.length > 1 && (
                      <div className="absolute -bottom-2 inset-x-0 flex justify-center gap-1.5">
                        {tool.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({
                                ...prev,
                                [tool.id]: idx
                              }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentImageIndex[tool.id] === idx 
                                ? "bg-white scale-110" 
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={tool.learnMoreLink}
                    className="inline-flex items-center px-8 py-3 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white font-medium shadow-lg border border-white/5 hover:border-white/20"
                  >
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {visibleTools < tools.length && (
          <div className="mt-20 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 text-base font-medium text-white transition-all duration-300 shadow-lg border border-zinc-700 hover:border-zinc-600"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  Explore More Tools
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
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
