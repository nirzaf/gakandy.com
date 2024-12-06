import { motion } from 'framer-motion';
import { Award, Globe, Target, Users } from 'lucide-react';
import { Section, Card, Grid } from '../shared';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering high-quality professional services with unwavering commitment to standards.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Adapting to changing business environments with modern solutions.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Understanding and meeting client needs through transparent service delivery.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Providing international expertise with deep local knowledge.',
  },
];

const approaches = [
  'Pre-scheduled performance',
  'Agreed deliverables',
  'Maximum cost-effectiveness',
  'Clear communication',
  'Prompt action on feedback',
  'Complex organization expertise',
  'Transparent service delivery',
];

export default function About() {
  return (
    <Section
      background="white"
      title="About Global Associates Kandy"
      subtitle="A professional services firm offering a diverse range of financial and business services, constructing our team to reflect your organizational structure."
    >
      {/* Values Grid */}
      <Grid cols={{ sm: 1, md: 2, lg: 4 }} className="mb-16">
        {values.map((value, index) => (
          <Card
            key={index}
            variant="elevated"
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-pictonBlue-primary rounded-lg flex items-center justify-center mb-4">
              <value.icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-indigoDye-primary mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600">
              {value.description}
            </p>
          </Card>
        ))}
      </Grid>

      {/* Our Approach */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-gray-50 rounded-2xl p-8 md:p-12"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl font-bold text-indigoDye-primary mb-8 text-center"
        >
          Our Approach
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-pictonBlue-primary rounded-full"></div>
              <p className="text-gray-700">{approach}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-16"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl font-bold text-indigoDye-primary mb-8 text-center"
        >
          Key Leadership
        </motion.h3>
        <Grid cols={{ sm: 1, md: 2 }} gap={8}>
          <Card variant="bordered" className="p-6">
            <h4 className="text-xl font-bold text-indigoDye-primary mb-2">
              Technical & Managing Partner
            </h4>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              Mr. M. Aashikkhan
            </h5>
            <p className="text-gray-600">
              FCA, FCCA, ACMA, CGMA, ASCMA, ACFE, MAAT, AIPA
            </p>
          </Card>
          <Card variant="bordered" className="p-6">
            <h4 className="text-xl font-bold text-indigoDye-primary mb-2">
              Executive Manager
            </h4>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              Mr. Mohamed Rizkhan
            </h5>
            <p className="text-gray-600">
              MSc, ACCA, OCP, DNIIT
            </p>
          </Card>
        </Grid>
      </motion.div>
    </Section>
  );
}
