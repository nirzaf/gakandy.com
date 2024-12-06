import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ServicesCTA: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-[#033A5B] to-[#0C4D75] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#033A5B]/30 to-[#033A5B]/50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-[#22B0EB] mb-4 backdrop-blur-sm">
          Let's Work Together
        </span>
        <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Transform Your Business Today
        </h3>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Ready to elevate your business with professional financial expertise? Our team is here to provide tailored solutions that drive growth and ensure compliance.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-[#22B0EB] text-white font-medium transition-all duration-300 hover:bg-[#28A2D4] hover:scale-105 shadow-lg shadow-[#22B0EB]/25"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesCTA;
