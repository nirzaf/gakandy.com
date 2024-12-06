import { motion } from 'framer-motion';
import { BarChart2, Clock, FileText, PieChart, Users } from 'lucide-react';

const services = [
  {
    title: 'External Audit',
    description: 'Comprehensive audit services ensuring compliance and accuracy.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/audit.jpeg?updatedAt=1732207356936',
    icon: FileText,
    accentColor: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Real Time Accounting Software',
    description: 'Modern cloud-based solutions for real-time financial tracking.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030',
    icon: Clock,
    accentColor: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Consulting',
    description: 'Expert guidance for business growth and optimization.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-07.jpg?updatedAt=1732207350583',
    icon: Users,
    accentColor: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Financial Statements',
    description: 'Detailed financial reporting and analysis.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/financial-statements-importance.jpg?updatedAt=1732284241510',
    icon: BarChart2,
    accentColor: 'from-green-500 to-green-600'
  },
  {
    title: 'Budgeting',
    description: 'Strategic budget planning and management.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-21.png?updatedAt=1732207354054',
    icon: PieChart,
    accentColor: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Payroll Services',
    description: 'Comprehensive payroll management solutions.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/payroll-Service.jpg?updatedAt=1732284189366',
    icon: Users,
    accentColor: 'from-red-500 to-red-600'
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-gradient-to-b from-gray-50 to-white pb-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="absolute top-4 right-4">
                    <Icon className={`w-6 h-6 text-white`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}