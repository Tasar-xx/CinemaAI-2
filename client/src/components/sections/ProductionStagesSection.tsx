import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, FileText, MapPin, Palette, Shirt, Users, Grid, Lightbulb, Video, RefreshCcw, Volume2, MessageSquare, Box } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { fadeInUp, staggerChildren } from '@/lib/animation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ImageLoader from '@/components/ui/ImageLoader';
import PatternImage from '@/lib/svgPatterns';

// Import our local images
import heroImage from '@assets/Untitled design_20250405_175152_0000.png';
import conceptArtImage from '@assets/Screenshot_20250405-033310.jpg';
import lookDevImage from '@assets/Screenshot_20250405-033344.png';
import characterDevImage from '@assets/Screenshot_20250405-033344~2.jpg';
import modelsImage from '@assets/20250405_185028_0000.png';

interface ProductionStage {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  imageUrl?: string;
  patternType?: 'grid' | 'circuit' | 'wave' | 'dots' | 'hexagon' | 'triangle' | 'neural' | 'film' | 'data' | 'random';
}

export default function ProductionStagesSection() {
  const [activeTab, setActiveTab] = useState('script-development');

  const productionStages: ProductionStage[] = [
    // Pre-Production Row 1
    {
      id: 'script-development',
      title: 'Script Development',
      icon: <FileText className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Our AI analyzes your script to identify weak points in character development, plot holes, and pacing issues. You can experiment with different scenarios and see how they affect the overall narrative flow.',
      imageUrl: heroImage
    },
    {
      id: 'storyboarding',
      title: 'Storyboarding',
      icon: <FileText className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Generate detailed storyboards from your script with our AI visualization tool. Quickly iterate through different visual interpretations of scenes to find the perfect framing.',
      patternType: 'grid'
    },
    {
      id: 'location-scouting',
      title: 'Location Scouting',
      icon: <MapPin className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Find the perfect location for your scenes with AI-powered location matching. Search vast databases of locations and preview your scenes in different settings.',
      patternType: 'wave'
    },
    {
      id: 'concept-art',
      title: 'Concept Art',
      icon: <Palette className="h-8 w-8" />,
      category: 'Pre-Production',
      description: "Generate stunning concept art for your production with AI. Explore different visual styles, lighting conditions, and color palettes to establish your film's visual identity.",
      imageUrl: characterDevImage
    },
    {
      id: 'costume-design',
      title: 'Costume Design',
      icon: <Shirt className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Create detailed costume designs tailored to your characters and setting. Our AI analyzes your script to suggest historically accurate or creatively appropriate wardrobe choices.',
      patternType: 'hexagon'
    },
    {
      id: 'camera-lensing',
      title: 'Camera Lensing',
      icon: <Camera className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Experiment with different camera and lens options before shooting. Preview how your scenes will look with various focal lengths, aspect ratios, and camera movements.',
      patternType: 'film'
    },
    // Production Row 2
    {
      id: 'blocking-visualization',
      title: 'Blocking Visualization',
      icon: <Users className="h-8 w-8" />,
      category: 'Production',
      description: "Plan your actors' movements with AI-powered blocking tools. Visualize complex scenes and camera movements before getting on set to maximize shooting efficiency.",
      patternType: 'dots'
    },
    {
      id: 'set-design',
      title: 'Set Design',
      icon: <Grid className="h-8 w-8" />,
      category: 'Production',
      description: 'Design and modify sets virtually before construction. Test different layouts, lighting setups, and decorative elements to find the perfect setting for your scenes.',
      patternType: 'neural'
    },
    {
      id: 'lighting-simulation',
      title: 'Lighting Simulation',
      icon: <Lightbulb className="h-8 w-8" />,
      category: 'Production',
      description: 'Simulate complex lighting setups with AI. Preview different lighting conditions and determine the optimal equipment needed before stepping on set.',
      imageUrl: lookDevImage
    },
    {
      id: 'motion-capture',
      title: 'Motion Capture',
      icon: <Video className="h-8 w-8" />,
      category: 'Production',
      description: 'Capture realistic motion data using AI-powered computer vision. Turn standard video footage into detailed motion capture data without specialized equipment.',
      patternType: 'circuit'
    },
    {
      id: 'relighting',
      title: 'Relighting',
      icon: <RefreshCcw className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Change the lighting of footage in post-production with AI-powered relighting tools. Correct lighting issues or completely transform the mood of a scene.',
      patternType: 'data'
    },
    {
      id: 'sound-reformer',
      title: 'Sound Reformer AI',
      icon: <Volume2 className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Clean and enhance audio with our AI sound reformer. Remove background noise, improve clarity, and create immersive soundscapes with minimal effort.',
      patternType: 'wave'
    },
    {
      id: 'dialogue-change',
      title: 'Dialogue Change',
      icon: <MessageSquare className="h-8 w-8" />,
      category: 'Post-Production',
      description: "Modify dialogue in post-production with our AI voice synthesis. Change lines without re-shoots by generating natural-sounding dialogue that matches your actors' voices.",
      patternType: 'triangle'
    },
    // Additional item for Post-Production row
    {
      id: 'physics-engine',
      title: 'Physics Engine AI',
      icon: <Box className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Create realistic physical simulations for special effects. Our AI physics engine can generate convincing natural phenomena like water, fire, and destruction.',
      imageUrl: modelsImage
    },
  ];

  const preProductionStages = productionStages.filter(stage => stage.category === 'Pre-Production');
  const productionStages2 = productionStages.filter(stage => stage.category === 'Production');
  const postProductionStages = productionStages.filter(stage => stage.category === 'Post-Production');

  const activeStage = productionStages.find(stage => stage.id === activeTab);

  return (
    <section className="relative w-full py-20 overflow-hidden" id="production-stages">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {preProductionStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id ? "bg-zinc-800/80 border border-zinc-600" : "bg-zinc-900/50"
                  )}
                >
                  <div className="mb-2 text-white">{stage.icon}</div>
                  <h4 className="text-sm text-center">{stage.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{stage.category}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl text-gray-400 mb-4">Production</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {productionStages2.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id ? "bg-zinc-800/80 border border-zinc-600" : "bg-zinc-900/50"
                  )}
                >
                  <div className="mb-2 text-white">{stage.icon}</div>
                  <h4 className="text-sm text-center">{stage.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{stage.category}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl text-gray-400 mb-4">Post-Production</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {postProductionStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-zinc-800/70 backdrop-blur-sm",
                    activeTab === stage.id ? "bg-zinc-800/80 border border-zinc-600" : "bg-zinc-900/50"
                  )}
                >
                  <div className="mb-2 text-white">{stage.icon}</div>
                  <h4 className="text-sm text-center">{stage.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{stage.category}</p>
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
                <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                  {activeStage.imageUrl ? (
                    <ImageLoader 
                      src={activeStage.imageUrl} 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <PatternImage 
                      patternType={activeStage.patternType || 'random'} 
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