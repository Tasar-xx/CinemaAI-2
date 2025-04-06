import { AspectRatio } from "@/components/ui/aspect-ratio";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ReflectiveSurface from "@/components/ui/ReflectiveSurface";
import ImageLoader from "@/components/ui/ImageLoader";
import { benefits } from "@/data/benefits";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fadeUp"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl text-gradient md:text-5xl font-bold mb-6">
            The Future of Filmmaking
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Qlab AI doesn't just enhance your current process—it revolutionizes
            what's possible in filmmaking.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {benefits.map((benefit, index) => (
            <ScrollAnimation
              key={benefit.id}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                {benefit.title}
              </h3>
              <ReflectiveSurface className="rounded-xl overflow-hidden mb-6">
                <AspectRatio ratio={16 / 9} className="bg-[#2C2C2E]">
                  <ImageLoader
                    className="w-full h-full"
                    src={benefit.imageUrl}
                  />
                </AspectRatio>
              </ReflectiveSurface>
              <p className="text-gray-300 mb-4">{benefit.description}</p>
              <ul className="space-y-3 text-gray-400">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 flex-shrink-0"
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
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
