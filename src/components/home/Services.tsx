import { motion } from 'framer-motion';
import { Calculator, Search, BookOpen, Users, FileText, ShieldCheck, LineChart, Settings } from 'lucide-react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import { staggerContainer } from '../../utils/animations';

const services = [
  {
    icon: Search,
    title: 'Audit Services',
    description: 'Comprehensive audit services including statutory, tax, internal, and forensic audits to ensure compliance and detect irregularities.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Services',
    description: 'Complete regulatory compliance, international standards adherence, tax management, and payroll processing services.',
  },
  {
    icon: LineChart,
    title: 'Advisory Services',
    description: 'Expert financial accounting, virtual CFO services, business diagnostics, and process optimization solutions.',
  },
  {
    icon: Calculator,
    title: 'Accounting Services',
    description: 'Professional accounting and bookkeeping services with expertise in major accounting software systems.',
  },
  {
    icon: FileText,
    title: 'Business Registration',
    description: 'Complete assistance with business registration and secretarial services to help establish and maintain your business.',
  },
  {
    icon: Settings,
    title: 'System Implementation',
    description: 'Accounting system setup, internal control establishment, and process flow chart development.',
  },
  {
    icon: BookOpen,
    title: 'Training Programs',
    description: 'Specialized training programs and workshops for business professionals and organizations.',
  },
  {
    icon: Users,
    title: 'Business Advisory',
    description: 'Strategic business consulting and advisory services to help your organization grow and succeed.',
  },
];

export default function Services() {
  return (
    <Section>
      <div className="space-y-12">
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
              className="p-6 h-full"
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

        <div className="text-center">
          <motion.a
            href="/services"
            className="inline-block bg-indigoDye-primary hover:bg-indigoDye-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.a>
        </div>
      </div>
    </Section>
  );
}
