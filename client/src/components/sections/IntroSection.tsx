import { AspectRatio } from "@/components/ui/aspect-ratio";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ReflectiveSurface from "@/components/ui/ReflectiveSurface";

export default function IntroSection() {
  return (
    <section id="intro" className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeUp" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A New Era for Creative Vision
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Qlab AI is not an end tool for making final films, but a
                revolutionary platform for rapid, real-time visual prototyping
                that augments every stage of the filmmaking process.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Manifest your ideas into visual concepts instantly
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Iterate 50+ variations in a single afternoon
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Get everyone on the same page with precise previsualization
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Lower production budgets while increasing creative control
                  </span>
                </li>
              </ul>
            </ScrollAnimation>

            <ReflectiveSurface className="rounded-2xl overflow-hidden h-full">
              <AspectRatio
                ratio={16 / 9}
                className="h-full w-full bg-[#2C2C2E]"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg
                      className="w-20 h-20 mx-auto text-white opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="mt-4 text-sm text-gray-400">
                      Platform Overview Video
                    </p>
                  </div>
                </div>
              </AspectRatio>
            </ReflectiveSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
