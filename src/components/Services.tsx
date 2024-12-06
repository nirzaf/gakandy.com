import { motion } from 'framer-motion';
import { FileText, ChartBar, Shield, Building2, Scale, ClipboardCheck, Users } from 'lucide-react';

const services = [
  {
    title: 'Assurance Services',
    description: 'Comprehensive audit services including external audits, internal audits, and performance audits.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/audit.jpeg?updatedAt=1732207356936',
    icon: FileText,
    accentColor: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Management Reporting Services',
    description: 'Strategic reporting solutions for effective business decision making and performance tracking.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030',
    icon: ChartBar,
    accentColor: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Risk Management & Technology Advisory',
    description: 'Expert guidance on risk assessment, management, and technological solutions.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-07.jpg?updatedAt=1732207350583',
    icon: Shield,
    accentColor: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Corporate Finance Advisory',
    description: 'Strategic financial planning and advisory services for corporate growth.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/financial-statements-importance.jpg?updatedAt=1732284241510',
    icon: Building2,
    accentColor: 'from-green-500 to-green-600'
  },
  {
    title: 'Forensic & Litigation Services',
    description: 'Specialized forensic accounting and litigation support services.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-21.png?updatedAt=1732207354054',
    icon: Scale,
    accentColor: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Payroll Services',
    description: 'Comprehensive payroll management, tax compliance, and employee benefits administration.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/payroll-Service.jpg?updatedAt=1732284189366',
    icon: Users,
    accentColor: 'from-red-500 to-red-600'
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-gradient-to-b from-gray-50 to-white pb-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Professional services tailored to meet your business needs with excellence and precision
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-50"></div>
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <img 
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    src={service.image} 
                    alt={service.title}
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 text-[#22B0EB] group-hover:text-[#033A5B] transition-colors duration-300`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#033A5B] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22B0EB] to-[#033A5B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}