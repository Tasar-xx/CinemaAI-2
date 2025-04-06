import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ReflectiveSurface from "@/components/ui/ReflectiveSurface";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageLoader from "@/components/ui/ImageLoader";

// Import workflow images
import preproductionImage from "@/assets/preproduction.jpeg";
import productionImage from "@/assets/production.jpeg";
import postproductionImage from "@/assets/postproduction.jpeg";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fadeUp"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl text-gradient md:text-5xl font-bold mb-6">
            Seamless Filmmaking Workflow
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From initial concept to final production, Qlab AI integrates with
            your existing workflow to enhance every step of the creative
            process.
          </p>
        </ScrollAnimation>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#8E8E8E] bg-opacity-30"></div>

          {/* Timeline items */}
          <div className="space-y-24">
            {/* Pre-Production */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"></div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollAnimation
                  animation="slideLeft"
                  className="md:text-right"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Pre-Production
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Develop scripts, visualize concepts, scout locations
                    virtually, and plan every visual detail before production
                    begins.
                  </p>
                  <ul className="space-y-2 md:ml-auto md:text-right">
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Script development and iteration</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Visual concept development</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Character and costume visualization</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Virtual location scouting</span>
                    </li>
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight">
                  <ReflectiveSurface className="rounded-xl overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <ImageLoader
                        className="w-full h-full object-cover"
                        src={preproductionImage}
                      />
                    </AspectRatio>
                  </ReflectiveSurface>
                </ScrollAnimation>
              </div>
            </div>

            {/* Production */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"></div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollAnimation animation="slideRight" className="md:order-2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Production
                  </h3>
                  <p className="text-gray-300 mb-4">
                    On-set tools for visualizing camera setups, testing lighting
                    configurations, and making real-time creative decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-gray-400">
                      Camera lensing and framing tests
                    </li>
                    <li className="text-gray-400">
                      Real-time lighting simulations
                    </li>
                    <li className="text-gray-400">
                      On-set blocking visualization
                    </li>
                    <li className="text-gray-400">
                      Performance capture and review
                    </li>
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation animation="slideLeft" className="md:order-1">
                  <ReflectiveSurface className="rounded-xl overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <ImageLoader
                        className="w-full h-full object-cover"
                        src={productionImage}
                      />
                    </AspectRatio>
                  </ReflectiveSurface>
                </ScrollAnimation>
              </div>
            </div>

            {/* Post-Production */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"></div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollAnimation
                  animation="slideLeft"
                  className="md:text-right"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Post-Production
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Transform your footage with advanced post-production tools,
                    from relighting scenes to voice modulation and VFX
                    integration.
                  </p>
                  <ul className="space-y-2 md:ml-auto md:text-right">
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Scene relighting and color grading</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Dialogue and audio enhancement</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Visual effects integration</span>
                    </li>
                    <li className="text-gray-400 flex md:justify-end">
                      <span>Physics engine simulations</span>
                    </li>
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight">
                  <ReflectiveSurface className="rounded-xl overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <ImageLoader
                        className="w-full h-full object-cover"
                        src={postproductionImage}
                      />
                    </AspectRatio>
                  </ReflectiveSurface>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
