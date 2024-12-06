import { motion } from 'framer-motion';
import { FileText, BarChart, BookOpen, Users } from 'lucide-react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import { staggerContainer } from '../../utils/animations';

const services = [
  {
    icon: FileText,
    title: 'Accounting & Auditing',
    description: 'Comprehensive accounting services including external/internal audits and accounting system setup.',
  },
  {
    icon: BarChart,
    title: 'Business Advisory',
    description: 'Strategic business consulting and advisory services to help your organization grow and succeed.',
  },
  {
    icon: BookOpen,
    title: 'Training Programs',
    description: 'Specialized training programs including Finance for Non-Finance Executives.',
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Professional consulting services for internal control, procedure manuals, and process optimization.',
  },
];

export default function Services() {
  return (
    <Section
      title="Our Services"
      subtitle="We provide a wide range of professional services to help businesses thrive in today's competitive environment."
      background="white"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
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
              <service.icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-indigoDye-primary mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </Card>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <motion.a
          href="/services"
          className="inline-block bg-indigoDye-primary hover:bg-indigoDye-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Services
        </motion.a>
      </div>
    </Section>
  );
}
