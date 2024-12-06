import { motion } from 'framer-motion';
import { Feature } from '../../types/about';

interface CompanyFeatureProps {
  feature: Feature;
  index: number;
}

export const CompanyFeature: React.FC<CompanyFeatureProps> = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
    <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2 mb-4">
        <feature.icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#033A5B] mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

export default CompanyFeature;
