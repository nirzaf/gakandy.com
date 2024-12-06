import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Hero() {
  return (
    <section className="relative h-screen bg-indigoDye-primary text-white overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://ik.imagekit.io/d36vkx7c33/gakandy/primary-hero-image.jpg?updatedAt=1733489242076&v=1"
          alt="Global Associates Kandy Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigoDye-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Global Associates Kandy
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-6 text-gray-100"
          >
            A leading professional services firm based in Kandy, Sri Lanka, offering comprehensive financial and business solutions.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-indigoDye-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigoDye-primary to-transparent"></div>
    </section>
  );
}
