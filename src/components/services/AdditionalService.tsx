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
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#033A5B]/5 to-[#22B0EB]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-full h-full text-white" />
      </div>
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
