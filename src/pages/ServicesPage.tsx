import { motion } from 'framer-motion';
import ServicesContainer from '../components/services/ServicesContainer';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

const ServiceCategory = ({ title, description, services }: {
  title: string;
  description: string;
  services: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-indigoDye-primary mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {services.map((service, index) => (
        <li key={index} className="flex items-start space-x-2">
          <ArrowRight className="w-5 h-5 text-pictonBlue-primary flex-shrink-0 mt-1" />
          <span className="text-gray-700">{service}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Audit Services",
      description: "Comprehensive audit services ensuring compliance and accuracy in financial reporting.",
      services: [
        "Statutory & Tax Audit",
        "Internal Audit",
        "Forensic Audit",
        "Special Purpose Audits",
        "Compliance Audits"
      ]
    },
    {
      title: "Compliance Services",
      description: "Complete regulatory compliance and international standards adherence services.",
      services: [
        "Regulatory Compliance",
        "International Standards",
        "Tax Management",
        "Payroll Processing",
        "Statutory Reporting"
      ]
    },
    {
      title: "Advisory Services",
      description: "Expert financial and business advisory services for sustainable growth.",
      services: [
        "Financial Accounting",
        "Virtual CFO Services",
        "Business Diagnostics",
        "Asset Management",
        "Process Optimization"
      ]
    },
    {
      title: "Business Services",
      description: "Comprehensive business support and registration services.",
      services: [
        "Business Registration",
        "Secretarial Services",
        "System Implementation",
        "Internal Control Establishment",
        "Process Flow Development"
      ]
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Main Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-indigoDye-primary mb-4">
              Our Professional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of professional services tailored to meet your business needs. 
              Our expertise spans across auditing, compliance, advisory, and business services.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={index} {...category} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-indigoDye-primary text-white rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how we can help your business thrive with our professional services.
            </p>
            <a
              href="/contact"
              className="inline-block bg-pictonBlue-primary hover:bg-pictonBlue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <ServicesContainer services={services} />
    </div>
  );
};

export default ServicesPage;