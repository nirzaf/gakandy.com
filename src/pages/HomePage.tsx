import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from '../components/home/About';
import Vision from '../components/home/Vision';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* About Section */}
      <About />

      {/* Vision Section */}
      <Vision />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* CTA Banner */}
      <motion.section
        variants={staggerContainer}
        className="bg-gradient-to-r from-[#033A5B] to-[#0C4D75] text-white py-16 relative overflow-hidden"
      >
        {/* Background Blur Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
            <div className="w-64 h-64 rounded-full bg-[#22B0EB]/20 blur-3xl"></div>
          </div>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
            <div className="w-64 h-64 rounded-full bg-[#28A2D4]/20 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#22B0EB]"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Your success is our priority. Contact us today to discover how we can help your business thrive.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#22B0EB] hover:bg-[#28A2D4] text-white font-semibold px-8 py-3 rounded-lg transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}
