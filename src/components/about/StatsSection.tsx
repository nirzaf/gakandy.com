import { motion } from 'framer-motion';
import { Stat } from '../../types/about';

interface StatsSectionProps {
  stats: Stat[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
        <div className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="text-4xl font-bold text-[#033A5B] mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600">
            {stat.label}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default StatsSection;
