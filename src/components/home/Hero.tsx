import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Hero() {
  return (
    <section className="relative bg-indigoDye-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            Global Associates Kandy
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-6 text-gray-100"
          >
            A leading professional services firm based in Kandy, Sri Lanka, offering comprehensive financial and business solutions.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            With a rapidly growing global presence, we facilitate international operations of businesses of all sizes, providing quality-assured accounting and legal expertise across the globe.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-indigoDye-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-block bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
          
          {/* Key Features */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              'Professional Excellence',
              'Global Network',
              'Local Expertise',
              'Quality Assurance'
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-2 h-2 bg-pictonBlue-primary rounded-full mx-auto mb-3"></div>
                <p className="text-sm md:text-base font-medium">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 8.33333C960 0 1056 0 1152 8.33333C1248 16.6667 1344 33.3333 1392 41.6667L1440 50V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
