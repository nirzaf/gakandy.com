import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-indigoDye-primary text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Your Trusted Partner in Professional Services
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Global Associates is an organization of substance with full-service capability 
              available in Sri Lanka. We bring expertise in accounting, auditing, and 
              business advisory services.
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <motion.button
                  className="inline-block bg-pictonBlue-primary hover:bg-pictonBlue-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="inline-block border-2 border-white hover:bg-white hover:text-indigoDye-primary font-semibold px-6 py-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigoDye-primary to-transparent z-10"></div>
              <img
                src="/images/hero-image.jpg"
                alt="Global Associates Office"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
