import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Vision from '../components/home/Vision';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import { fadeInUp } from '../utils/animations';

export default function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Vision Section */}
      <Vision />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* CTA Banner */}
      <motion.section
        variants={fadeInUp}
        className="bg-indigoDye-primary text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Your success is our priority. Contact us today to discover how we can help your business thrive.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigoDye-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </motion.section>
    </motion.main>
  );
}
