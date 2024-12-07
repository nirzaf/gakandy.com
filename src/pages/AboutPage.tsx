import { motion } from 'framer-motion';
import Benefits from '../components/about/Benefits';
import { CompanyOverview } from '../components/about/sections/CompanyOverview';
import { OurStory } from '../components/about/sections/OurStory';
import { VisionMission } from '../components/about/sections/VisionMission';
import { CoreValues } from '../components/about/sections/CoreValues';
import { TeamSection } from '../components/about/sections/TeamSection';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <CompanyOverview />
      <OurStory />
      <VisionMission />
      <TeamSection />
      <section className="bg-gradient-to-r from-pictonBlue-50 to-pictonBlue-100 py-6">
        <Benefits />
      </section>
      <CoreValues />
    </motion.div>
  );
} 