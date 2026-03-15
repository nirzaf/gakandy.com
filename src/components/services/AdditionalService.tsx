import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { LucideIcon } from 'lucide-react';

interface AdditionalServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AdditionalService: React.FC<AdditionalServiceProps> = ({ title, description, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#033A5B]/5 to-[#22B0EB]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <motion.div 
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-3 mb-4 shadow-lg shadow-blue-500/20"
        whileHover={{ 
          rotateY: 360,
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(34, 176, 235, 0.4)"
        }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <Icon className="w-full h-full text-white drop-shadow-md" />
        </motion.div>
      </motion.div>
      <h3 className="text-lg font-semibold text-[#033A5B] mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

export default AdditionalService;
