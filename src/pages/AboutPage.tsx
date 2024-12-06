import { motion } from 'framer-motion';
import OurStory from '../components/about/OurStory';
import QuoteSection from '../components/about/QuoteSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Benefits from '../components/about/Benefits';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import Leadership from '../components/about/Leadership';
import CompanyOverview from '../components/about/CompanyOverview';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Company Overview */}
      <CompanyOverview />

      {/* Our Story with Approach */}
      <OurStory />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* Leadership Team */}
      <Leadership />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Benefits */}
      <Benefits />

      {/* Inspirational Quote */}
      <QuoteSection />

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-indigoDye-primary text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive financial and advisory services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pictonBlue-primary hover:bg-pictonBlue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}