import { useState } from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ReflectiveSurface from '@/components/ui/ReflectiveSurface';
import { futureTechs } from '@/data/future';

export default function FutureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="future" className="py-24 bg-gradient-to-b from-black to-[#1A1A1A] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of AI Filmmaking</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            As AI technology continues to advance, the capabilities of FilmAI will expand, opening up new possibilities for filmmakers.
          </p>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          {futureTechs.map((tech, index) => (
            <ScrollAnimation key={tech.id} animation="fadeUp" delay={index * 0.1}>
              <ReflectiveSurface className="rounded-xl p-6 h-full">
                <div className="h-16 w-16 mx-auto bg-gradient-to-br from-white to-[#8E8E8E] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tech.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{tech.title}</h3>
                <p className="text-gray-400 text-center">
                  {tech.description}
                </p>
              </ReflectiveSurface>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation animation="fadeUp" delay={0.3} className="mt-20">
          <ReflectiveSurface className="max-w-4xl mx-auto rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Join the AI Filmmaking Revolution</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Be among the first filmmakers to harness the power of AI in your creative process. Request access to FilmAI and transform your filmmaking workflow.
            </p>
            <form id="access-form" className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-[#2C2C2E] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : isSubmitted ? 'Request Sent!' : 'Request Access'}
                </button>
              </div>
              <p className="text-gray-400 text-sm text-center">
                By requesting access, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </ReflectiveSurface>
        </ScrollAnimation>
      </div>
    </section>
  );
}
