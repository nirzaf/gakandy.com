import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FileText, Database, BrainCircuit, BarChart3, PiggyBank, UserCheck, TrendingUp, Receipt, Building2, LineChart, BookOpen, Wallet, Rocket, Box, ShieldCheck, ArrowRight } from 'lucide-react';

const additionalServices = [
  {
    title: 'External Audit',
    description: 'Professional and independent examination of financial statements and accounting records.',
    icon: FileText
  },
  {
    title: 'Real Time Accounting Software',
    description: 'Modern cloud-based accounting solutions for real-time financial tracking and management.',
    icon: Database
  },
  {
    title: 'Consulting',
    description: 'Expert business advice and strategic consulting services tailored to your needs.',
    icon: BrainCircuit
  },
  {
    title: 'Financial Statements',
    description: 'Comprehensive preparation and analysis of financial statements and reports.',
    icon: BarChart3
  },
  {
    title: 'Budgeting',
    description: 'Strategic budget planning and management to optimize your financial resources.',
    icon: PiggyBank
  },
  {
    title: 'Payroll Services',
    description: 'Complete payroll management solutions including salary processing and compliance.',
    icon: UserCheck
  },
  {
    title: 'Investment Strategies',
    description: 'Expert guidance on investment opportunities and portfolio management.',
    icon: TrendingUp
  },
  {
    title: 'Tax Return & Fillings',
    description: 'Professional assistance with tax preparation, planning, and compliance.',
    icon: Receipt
  },
  {
    title: 'Business Valuation',
    description: 'Comprehensive analysis and valuation of business worth and potential.',
    icon: Building2
  },
  {
    title: 'Feasibility Study',
    description: 'Detailed analysis of project viability and potential business opportunities.',
    icon: LineChart
  },
  {
    title: 'Book Keeping',
    description: 'Systematic recording and organization of financial transactions.',
    icon: BookOpen
  },
  {
    title: 'Financial Management',
    description: 'Strategic planning and management of financial resources and operations.',
    icon: Wallet
  },
  {
    title: 'Start-Up Assistance',
    description: 'Comprehensive support for new business ventures and startups.',
    icon: Rocket
  },
  {
    title: 'ERP Consultancy & Implementation',
    description: 'Expert guidance in selecting and implementing ERP solutions.',
    icon: Box
  },
  {
    title: 'Risk Assessment & Internal Controls',
    description: 'Comprehensive evaluation of business risks and development of robust internal control systems.',
    icon: ShieldCheck
  }
];

const ServiceCategory = ({ title, description, services }: {
  title: string;
  description: string;
  services: string[];
}) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
  >
    <h3 className="text-2xl font-bold text-[#033A5B] mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {services.map((service, index) => (
        <li key={index} className="flex items-start space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22B0EB] mt-2.5" />
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Main Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#033A5B] to-[#22B0EB] mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive professional services tailored to meet your business needs, 
              ensuring excellence and reliability in every engagement.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-8 md:grid-cols-2"
          >
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={index} {...category} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-[#033A5B] mb-4"
            >
              Additional Services Upon Request
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We offer a comprehensive range of specialized services tailored to meet your specific business needs
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#033A5B]/5 to-[#22B0EB]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#033A5B] mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#033A5B] to-[#0C4D75] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#033A5B]/30 to-[#033A5B]/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-[#22B0EB] mb-4 backdrop-blur-sm">
              Let's Work Together
            </span>
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transform Your Business Today
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to elevate your business with professional financial expertise? Our team is here to provide tailored solutions that drive growth and ensure compliance.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-[#22B0EB] text-white font-medium transition-all duration-300 hover:bg-[#28A2D4] hover:scale-105 shadow-lg shadow-[#22B0EB]/25"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;