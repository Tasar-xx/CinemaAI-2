import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  FileText,
  MapPin,
  Palette,
  Shirt,
  Users,
  Grid,
  Lightbulb,
  Video,
  RefreshCcw,
  Volume2,
  MessageSquare,
  Box,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerChildren } from "@/lib/animation";
import ReflectiveSurface from "@/components/ui/ReflectiveSurface";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ImageLoader from "@/components/ui/ImageLoader";
import PatternImage from "@/lib/svgPatterns";

// Import our local images
import womansLegsImage from "@assets/Generated Image April 07, 2025 - 2_58AM.jpeg";
import womansGroundImage from "@assets/IMG-20250405-WA0016.jpg";
import womansDressImage from "@assets/IMG-20250405-WA0001.jpg";
import womansWithTeethImage from "@assets/IMG-20250405-WA0002.jpg";
import womansJeansChatImage from "@assets/IMG-20250405-WA0003.jpg";
import womansLookingUpImage from "@assets/IMG-20250405-WA0009.jpg";
import womansPurpleTeethImage from "@assets/IMG-20250405-WA0019.jpg";
import womansRedImage from "@assets/storyboard new.jpeg";
import womansDarkImage from "@assets/IMG-20250405-WA0011.jpg";
import groupModelsImage from "@assets/20250405_185028_0000.png";
// Import sample video
import sampleVideo from "@assets/VID-20250407-WA0013.mp4";
import motioncap1 from "@assets/motioncap1.mp4";
import lipdub1 from "@assets/lipdub1.mp4";
import lipdub2 from "@assets/lipdub2.mp4";
import gaussiansplat from "@assets/gaussiansplat.mp4";
import cameratests from "@assets/cameratests.mp4";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface ProductionStage {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  media?: MediaItem[];
  patternType?:
    | "grid"
    | "circuit"
    | "wave"
    | "dots"
    | "hexagon"
    | "triangle"
    | "neural"
    | "film"
    | "data"
    | "random";
}

export default function ProductionStagesSection() {
  const [activeTab, setActiveTab] = useState("script-development");
  const [currentMediaIndex, setCurrentMediaIndex] = useState<
    Record<string, number>
  >({});

  const productionStages: ProductionStage[] = [
    // Pre-Production Row 1
    {
      id: "script-development",
      title: "Script Development",
      icon: <FileText className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Our AI analyzes your script to identify weak points in character development, plot holes, and pacing issues. You can experiment with different scenarios and see how they affect the overall narrative flow.",
      imageUrl: womansLegsImage,
      media: [
        { type: "image", url: womansLegsImage },
        { type: "video", url: sampleVideo },
        { type: "image", url: womansGroundImage },
      ],
    },
    {
      id: "storyboarding",
      title: "Storyboarding",
      icon: <FileText className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Generate detailed storyboards from your script with our AI visualization tool. Quickly iterate through different visual interpretations of scenes to find the perfect framing.",
      imageUrl: womansRedImage,
      media: [
        { type: "image", url: womansRedImage },
        { type: "image", url: womansGroundImage },
        { type: "video", url: sampleVideo },
      ],
    },
    {
      id: "location-scouting",
      title: "Location Scouting",
      icon: <MapPin className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Find the perfect location for your scenes with AI-powered location matching. Search vast databases of locations and preview your scenes in different settings.",
      patternType: "wave",
    },
    {
      id: "concept-art",
      title: "Concept Art",
      icon: <Palette className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Generate stunning concept art for your production with AI. Explore different visual styles, lighting conditions, and color palettes to establish your film's visual identity.",
      imageUrl: womansGroundImage,
    },
    {
      id: "costume-design",
      title: "Costume Design",
      icon: <Shirt className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Create detailed costume designs tailored to your characters and setting. Our AI analyzes your script to suggest historically accurate or creatively appropriate wardrobe choices.",
      patternType: "hexagon",
    },
    {
      id: "camera-lensing",
      title: "Camera Lensing",
      icon: <Camera className="h-8 w-8" />,
      category: "Pre-Production",
      description:
        "Experiment with different camera and lens options before shooting. Preview how your scenes will look with various focal lengths, aspect ratios, and camera movements.",
      patternType: "film",
    },
    // Production Row 2
    {
      id: "blocking-visualization",
      title: "Blocking Visualization",
      icon: <Users className="h-8 w-8" />,
      category: "Production",
      description:
        "Plan your actors' movements with AI-powered blocking tools. Visualize complex scenes and camera movements before getting on set to maximize shooting efficiency.",
      imageUrl: womansWithTeethImage,
    },
    {
      id: "set-design",
      title: "Set Design",
      icon: <Grid className="h-8 w-8" />,
      category: "Production",
      description:
        "Design and modify sets virtually before construction. Test different layouts, lighting setups, and decorative elements to find the perfect setting for your scenes.",
      imageUrl: groupModelsImage,
      media: [{ type: "video", url: gaussiansplat }],
    },
    {
      id: "lighting-simulation",
      title: "Lighting Simulation",
      icon: <Lightbulb className="h-8 w-8" />,
      category: "Production",
      description:
        "Simulate complex lighting setups with AI. Preview different lighting conditions and determine the optimal equipment needed before stepping on set.",
      imageUrl: womansDressImage,
    },
    {
      id: "motion-capture",
      title: "Motion Capture",
      icon: <Video className="h-8 w-8" />,
      category: "Production",
      description:
        "Capture realistic motion data using AI-powered computer vision. Turn standard video footage into detailed motion capture data without specialized equipment.",
      imageUrl: womansDarkImage,
      media: [
        { type: "video", url: sampleVideo },
        { type: "video", url: motioncap1 },
      ],
    },
    {
      id: "relighting",
      title: "Shot Redesign",
      icon: <RefreshCcw className="h-8 w-8" />,
      category: "Post-Production",
      description:
        "Change the perspective of footage in post-production with AI-powered video generation tools. Correct framing or completely transform the mood of a scene.",
      imageUrl: womansPurpleTeethImage,
      media: [
        { type: "video", url: cameratests }
      ],
    },
    {
      id: "sound-reformer",
      title: "Sound Reformer AI",
      icon: <Volume2 className="h-8 w-8" />,
      category: "Post-Production",
      description:
        "Clean and enhance audio with our AI sound reformer. Remove background noise, improve clarity, and create immersive soundscapes with minimal effort.",
      patternType: "wave",
    },
    {
      id: "dialogue-change",
      title: "Localization",
      icon: <MessageSquare className="h-8 w-8" />,
      category: "Post-Production",
      description:
        "Modify dialogue in post-production with our AI voice synthesis. Change lines without re-shoots by generating natural-sounding dialogue that matches your actors' voices.",
      imageUrl: womansJeansChatImage,
      media: [
        { type: "video", url: lipdub1 },
        { type: "video", url: lipdub2 },
      ],
    },
    // Additional item for Post-Production row
    {
      id: "physics-engine",
      title: "Physics Engine AI",
      icon: <Box className="h-8 w-8" />,
      category: "Post-Production",
      description:
        "Create realistic physical simulations for special effects. Our AI physics engine can generate convincing natural phenomena like water, fire, and destruction.",
      imageUrl: womansLookingUpImage,
    },
  ];

  // Initialize media indices on component mount
  useEffect(() => {
    const initialIndices: Record<string, number> = {};
    productionStages.forEach((stage) => {
      initialIndices[stage.id] = 0;
    });
    setCurrentMediaIndex(initialIndices);
  }, []);

  const preProductionStages = productionStages.filter(
    (stage) => stage.category === "Pre-Production",
  );
  const productionStages2 = productionStages.filter(
    (stage) => stage.category === "Production",
  );
  const postProductionStages = productionStages.filter(
    (stage) => stage.category === "Post-Production",
  );

  const activeStage = productionStages.find((stage) => stage.id === activeTab);

  // Media navigation functions
  const handlePrevMedia = (stageId: string) => {
    if (!activeStage?.media || activeStage.media.length <= 1) return;

    setCurrentMediaIndex((prev) => {
      const currentIndex = prev[stageId] || 0;
      const newIndex =
        currentIndex === 0 ? activeStage.media!.length - 1 : currentIndex - 1;
      return { ...prev, [stageId]: newIndex };
    });
  };

  const handleNextMedia = (stageId: string) => {
    if (!activeStage?.media || activeStage.media.length <= 1) return;

    setCurrentMediaIndex((prev) => {
      const currentIndex = prev[stageId] || 0;
      const newIndex = (currentIndex + 1) % activeStage.media!.length;
      return { ...prev, [stageId]: newIndex };
    });
  };

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      id="production-stages"
    >
      <ScrollAnimation>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Revolutionize Your Production
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              AI-powered tools for every stage of your filmmaking journey.
            </p>
          </motion.div>

          <div className="mb-10">
            <h3 className="text-xl text-gray-400 mb-4">Pre-Production</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {preProductionStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id
                      ? "bg-zinc-800/80 border border-zinc-600"
                      : "bg-zinc-900/50",
                  )}
                >
                  <div className="text-white mb-1 scale-75">{stage.icon}</div>
                  <h4 className="text-xs text-center leading-tight">{stage.title}</h4>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl text-gray-400 mb-4">Production</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {productionStages2.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id
                      ? "bg-zinc-800/80 border border-zinc-600"
                      : "bg-zinc-900/50",
                  )}
                >
                  <div className="text-white mb-1 scale-75">{stage.icon}</div>
                  <h4 className="text-xs text-center leading-tight">{stage.title}</h4>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-gray-400 mb-4">Post-Production</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {postProductionStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id
                      ? "bg-zinc-800/80 border border-zinc-600"
                      : "bg-zinc-900/50",
                  )}
                >
                  <div className="text-white mb-1 scale-75">{stage.icon}</div>
                  <h4 className="text-xs text-center leading-tight">{stage.title}</h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {activeStage && (
        <ScrollAnimation>
          <ReflectiveSurface className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 rounded-2xl relative">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-zinc-800/80 p-3 rounded-lg">
                    {activeStage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeStage.title}</h3>
                    <p className="text-gray-400">{activeStage.category}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-8 text-gray-300">
                  {activeStage.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 relative group">
                  {activeStage.media && activeStage.media.length > 0 ? (
                    <>
                      <div className="w-full h-full">
                        {activeStage.media[
                          currentMediaIndex[activeStage.id] || 0
                        ].type === "image" ? (
                          <ImageLoader
                            src={
                              activeStage.media[
                                currentMediaIndex[activeStage.id] || 0
                              ].url
                            }
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <video
                            src={
                              activeStage.media[
                                currentMediaIndex[activeStage.id] || 0
                              ].url
                            }
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            loop
                            muted
                          />
                        )}
                      </div>

                      {/* Carousel Navigation */}
                      {activeStage.media.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevMedia(activeStage.id);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextMedia(activeStage.id);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          {/* Dots indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {activeStage.media.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentMediaIndex((prev) => ({
                                    ...prev,
                                    [activeStage.id]: index,
                                  }));
                                }}
                                className={`w-2 h-2 rounded-full ${
                                  index ===
                                  (currentMediaIndex[activeStage.id] || 0)
                                    ? "bg-white"
                                    : "bg-white/50 hover:bg-white/80"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : activeStage.imageUrl ? (
                    <ImageLoader
                      src={activeStage.imageUrl}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <PatternImage
                      patternType={activeStage.patternType || "random"}
                      className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                      primaryColor={`hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`}
                      secondaryColor={`hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`}
                    />
                  )}
                </div>
              </div>
            </div>
          </ReflectiveSurface>
        </ScrollAnimation>
      )}
    </section>
  );
}
