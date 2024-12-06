import { motion } from 'framer-motion';
import { Building2, Users, Target, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Full-Service Capability',
    description: 'A professional services firm offering comprehensive financial and business solutions in Sri Lanka.'
  },
  {
    icon: Users,
    title: 'Client-Focused Structure',
    description: 'We construct our team to reflect your organizational structure for optimal service delivery.'
  },
  {
    icon: Target,
    title: 'Transparent Approach',
    description: 'All aspects of our service delivery are made transparent to ensure client satisfaction.'
  },
  {
    icon: Briefcase,
    title: 'Diverse Services',
    description: 'From accounting and auditing to business advisory and system implementation.'
  }
];

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigoDye-primary mb-4">Company Overview</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Global Associates Kandy is a leading professional services firm based in Kandy, Sri Lanka, 
            offering a diverse range of financial and business services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pictonBlue-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-pictonBlue-primary" />
              </div>
              <h3 className="text-lg font-semibold text-indigoDye-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 