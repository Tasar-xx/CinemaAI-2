import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Qlab AI
          </h2>
          <p className="text-lg text-gray-400">
            Revolutionizing the future of filmmaking with AI
          </p>
        </motion.div>

        <motion.div
          className="mt-16 py-8 rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-black relative text-center px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Join us in redefining cinema through the power of artificial
            intelligence. From script to screen, Qlab AI empowers filmmakers
            with cutting-edge tools that blend human creativity with
            computational innovation.
          </p>
          <p className="text-gray-400 text-sm mt-8">
            &copy; {new Date().getFullYear()} Qlab AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
