import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FileText, Database, BrainCircuit, BarChart3, PiggyBank, UserCheck, TrendingUp, Receipt, Building2, LineChart, BookOpen, Wallet, Rocket, Box, ShieldCheck, ArrowRight } from 'lucide-react';
import ServiceCategory from '../components/services/ServiceCategory';
import AdditionalService from '../components/services/AdditionalService';
import ServicesCTA from '../components/services/ServicesCTA';
import { ServiceCategory as ServiceCategoryType, AdditionalService as AdditionalServiceType } from '../types/services';

// Move service data to a separate file later if it grows
const additionalServices: AdditionalServiceType[] = [
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

const serviceCategories: ServiceCategoryType[] = [
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

const ServicesPage: React.FC = () => {
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
            {additionalServices.map((service) => (
              <AdditionalService key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      <ServicesCTA />
    </motion.div>
  );
};

export default ServicesPage;