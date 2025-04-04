import { AspectRatio } from '@/components/ui/aspect-ratio';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <ReflectiveSurface className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">See FilmAI in Action</h2>
                <p className="text-gray-300 mb-6">
                  Watch how FilmAI transforms a simple script into a fully visualized concept, complete with character designs, locations, and cinematography.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">Concept visualization in minutes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time collaboration features</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">End-to-end workflow demonstration</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors">
                    Request Full Demo
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#2C2C2E]">
                <AspectRatio ratio={16/9}>
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-20 h-20 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </ReflectiveSurface>
        </ScrollAnimation>
      </div>
    </section>
  );
}
