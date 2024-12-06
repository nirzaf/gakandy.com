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
      {/* Company Overview with updated colors */}
      <section className="bg-gradient-to-r from-indigoDye-500 to-indigoDye-600 py-8">
        <CompanyOverview />
      </section>

      {/* Our Story with updated styling */}
      <section className="bg-white py-8">
        <OurStory />
      </section>

      {/* Mission & Vision with brand colors */}
      <section className="bg-gradient-to-r from-pictonBlue-100 to-pictonBlue-200 py-8">
        <MissionVision />
      </section>

      {/* Core Values with clean design */}
      <section className="bg-white py-8">
        <CoreValues />
      </section>

      {/* Leadership Team */}
      <section className="bg-gradient-to-r from-indigoDye-100 to-indigoDye-200 py-8">
        <Leadership />
      </section>

      {/* Why Choose Us with brand accent */}
      <section className="bg-white py-8">
        <WhyChooseUs />
      </section>

      {/* Benefits with subtle gradient */}
      <section className="bg-gradient-to-r from-pictonBlue-50 to-pictonBlue-100 py-8">
        <Benefits />
      </section>

      {/* Quote Section with deep brand color */}
      <section className="bg-indigoDye-600 py-8">
        <QuoteSection />
      </section>
    </motion.div>
  );
}