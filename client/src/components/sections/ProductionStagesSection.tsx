import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, FileText, MapPin, Palette, Shirt, Users, Grid, Lightbulb, Video, RefreshCcw, Volume2, MessageSquare, Box } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { fadeInUp, staggerChildren } from '@/lib/animation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

interface ProductionStage {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  imageUrl: string;
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
      imageUrl: 'https://images.unsplash.com/photo-1518930259204-29c80c9a6d9d?q=80&w=2369&auto=format&fit=crop'
    },
    {
      id: 'storyboarding',
      title: 'Storyboarding',
      icon: <FileText className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Generate detailed storyboards from your script with our AI visualization tool. Quickly iterate through different visual interpretations of scenes to find the perfect framing.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2359&auto=format&fit=crop'
    },
    {
      id: 'location-scouting',
      title: 'Location Scouting',
      icon: <MapPin className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Find the perfect location for your scenes with AI-powered location matching. Search vast databases of locations and preview your scenes in different settings.',
      imageUrl: 'https://images.unsplash.com/photo-1518156677180-95a2893f3499?q=80&w=2370&auto=format&fit=crop'
    },
    {
      id: 'concept-art',
      title: 'Concept Art',
      icon: <Palette className="h-8 w-8" />,
      category: 'Pre-Production',
      description: "Generate stunning concept art for your production with AI. Explore different visual styles, lighting conditions, and color palettes to establish your film's visual identity.",
      imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2374&auto=format&fit=crop'
    },
    {
      id: 'costume-design',
      title: 'Costume Design',
      icon: <Shirt className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Create detailed costume designs tailored to your characters and setting. Our AI analyzes your script to suggest historically accurate or creatively appropriate wardrobe choices.',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2188&auto=format&fit=crop'
    },
    {
      id: 'camera-lensing',
      title: 'Camera Lensing',
      icon: <Camera className="h-8 w-8" />,
      category: 'Pre-Production',
      description: 'Experiment with different camera and lens options before shooting. Preview how your scenes will look with various focal lengths, aspect ratios, and camera movements.',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2384&auto=format&fit=crop'
    },
    // Production Row 2
    {
      id: 'blocking-visualization',
      title: 'Blocking Visualization',
      icon: <Users className="h-8 w-8" />,
      category: 'Production',
      description: "Plan your actors' movements with AI-powered blocking tools. Visualize complex scenes and camera movements before getting on set to maximize shooting efficiency.",
      imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2300&auto=format&fit=crop'
    },
    {
      id: 'set-design',
      title: 'Set Design',
      icon: <Grid className="h-8 w-8" />,
      category: 'Production',
      description: 'Design and modify sets virtually before construction. Test different layouts, lighting setups, and decorative elements to find the perfect setting for your scenes.',
      imageUrl: 'https://images.unsplash.com/photo-1598899150498-25fb872ae8ed?q=80&w=2370&auto=format&fit=crop'
    },
    {
      id: 'lighting-simulation',
      title: 'Lighting Simulation',
      icon: <Lightbulb className="h-8 w-8" />,
      category: 'Production',
      description: 'Simulate complex lighting setups with AI. Preview different lighting conditions and determine the optimal equipment needed before stepping on set.',
      imageUrl: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=2374&auto=format&fit=crop'
    },
    {
      id: 'motion-capture',
      title: 'Motion Capture',
      icon: <Video className="h-8 w-8" />,
      category: 'Production',
      description: 'Capture realistic motion data using AI-powered computer vision. Turn standard video footage into detailed motion capture data without specialized equipment.',
      imageUrl: 'https://images.unsplash.com/photo-1551184451-76b792bd1b2d?q=80&w=2370&auto=format&fit=crop'
    },
    {
      id: 'relighting',
      title: 'Relighting',
      icon: <RefreshCcw className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Change the lighting of footage in post-production with AI-powered relighting tools. Correct lighting issues or completely transform the mood of a scene.',
      imageUrl: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=2370&auto=format&fit=crop'
    },
    {
      id: 'sound-reformer',
      title: 'Sound Reformer AI',
      icon: <Volume2 className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Clean and enhance audio with our AI sound reformer. Remove background noise, improve clarity, and create immersive soundscapes with minimal effort.',
      imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2370&auto=format&fit=crop'
    },
    {
      id: 'dialogue-change',
      title: 'Dialogue Change',
      icon: <MessageSquare className="h-8 w-8" />,
      category: 'Post-Production',
      description: "Modify dialogue in post-production with our AI voice synthesis. Change lines without re-shoots by generating natural-sounding dialogue that matches your actors' voices.",
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2560&auto=format&fit=crop'
    },
    // Additional item for Post-Production row
    {
      id: 'physics-engine',
      title: 'Physics Engine AI',
      icon: <Box className="h-8 w-8" />,
      category: 'Post-Production',
      description: 'Create realistic physical simulations for special effects. Our AI physics engine can generate convincing natural phenomena like water, fire, and destruction.',
      imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop'
    },
  ];

  const preProductionStages = productionStages.filter(stage => stage.category === 'Pre-Production');
  const productionStages2 = productionStages.filter(stage => stage.category === 'Production' || stage.category === 'Post-Production');

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionize Your Production</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              AI-powered tools for every stage of your filmmaking journey.
            </p>
          </motion.div>

          <div className="mb-10">
            <h3 className="text-xl text-blue-400 mb-4">Pre-Production</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {preProductionStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-blue-900/30",
                    activeTab === stage.id ? "bg-blue-900/30 border border-blue-500/50" : "bg-blue-950/50"
                  )}
                >
                  <div className="mb-2 text-blue-400">{stage.icon}</div>
                  <h4 className="text-sm text-center">{stage.title}</h4>
                  <p className="text-xs text-blue-400 mt-1">{stage.category}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-blue-400 mb-4">Production & Post-Production</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {productionStages2.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-blue-900/30",
                    activeTab === stage.id ? "bg-blue-900/30 border border-blue-500/50" : "bg-blue-950/50"
                  )}
                >
                  <div className="mb-2 text-blue-400">{stage.icon}</div>
                  <h4 className="text-sm text-center">{stage.title}</h4>
                  <p className="text-xs text-blue-400 mt-1">{stage.category}</p>
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
                  <div className="bg-blue-900/40 p-3 rounded-lg text-blue-400">
                    {activeStage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeStage.title}</h3>
                    <p className="text-blue-400">{activeStage.category}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-8">
                  {activeStage.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                  <img 
                    src={activeStage.imageUrl} 
                    alt={activeStage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ReflectiveSurface>
        </ScrollAnimation>
      )}
    </section>
  );
}