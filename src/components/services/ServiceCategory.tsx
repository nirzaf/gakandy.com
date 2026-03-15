import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { LucideIcon } from 'lucide-react';

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: string[];
  icon: LucideIcon;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden"
    whileHover={{ y: -5 }}
  >
    {/* Background gradient effect */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#033A5B]/5 to-[#22B0EB]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <motion.div 
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-3 shadow-lg shadow-blue-900/20"
          whileHover={{ 
            rotateY: 360,
            scale: 1.1,
            boxShadow: "0px 10px 25px rgba(34, 176, 235, 0.5)"
          }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <Icon className="w-full h-full text-white drop-shadow-md" />
          </motion.div>
        </motion.div>
        <h3 className="text-2xl font-bold text-[#033A5B]">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start space-x-3 group/item">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#22B0EB] mt-2.5" 
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-gray-700 group-hover/item:text-[#033A5B] transition-colors">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default ServiceCategory;
