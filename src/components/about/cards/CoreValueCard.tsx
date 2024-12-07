import { motion } from 'framer-motion';
import { CoreValue } from '../shared/types';

interface CoreValueCardProps {
  value: CoreValue;
  index: number;
  gradientFrom: string;
  gradientTo: string;
}

export const CoreValueCard: React.FC<CoreValueCardProps> = ({ 
  value, 
  index, 
  gradientFrom, 
  gradientTo 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`absolute -inset-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
      <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className={`h-12 w-12 rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-2 mb-4`}>
          <value.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
        <ul className="text-gray-600 space-y-2 mt-2">
          {value.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#22B0EB] mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}; 