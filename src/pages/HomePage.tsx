import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-20"
      >
        <div className="absolute inset-0">
          <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#033A5B]/5 blur-3xl" />
          <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#22B0EB]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#033A5B] to-[#22B0EB]"
            >
              Professional Services with Excellence
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8"
            >
              Your trusted partner in accounting, auditing, and business advisory services
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#033A5B] to-[#22B0EB] text-white font-medium transition-transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Contact us today to learn how we can help your business grow and succeed
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#033A5B] font-medium transition-transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}
