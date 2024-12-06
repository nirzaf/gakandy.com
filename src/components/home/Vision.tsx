import { motion } from 'framer-motion';
import { Star, Lightbulb, Users, Globe } from 'lucide-react';
import { Section, Card, Grid } from '../shared';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const visionPoints = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'Delivering high-quality professional services with unwavering commitment to standards and best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Adapting to changing business environments with modern solutions and forward-thinking approaches.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Understanding and meeting client needs through personalized attention and dedicated service.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Providing international expertise with deep local knowledge to serve businesses worldwide.',
  },
];

export default function Vision() {
  return (
    <Section
      background="primary"
      title="Our Vision"
      subtitle="We engage with our clients on a continuous basis to ensure adherence to statutory and regulatory requirements, providing constructive, value-added delivery."
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
          {visionPoints.map((point, index) => (
            <Card
              key={index}
              variant="elevated"
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-200">
                {point.description}
              </p>
            </Card>
          ))}
        </Grid>
      </motion.div>
    </Section>
  );
}
