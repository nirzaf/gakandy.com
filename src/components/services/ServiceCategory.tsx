import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: string[];
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services }) => (
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

export default ServiceCategory;
