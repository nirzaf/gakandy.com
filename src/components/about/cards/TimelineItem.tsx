import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../shared/types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative mb-12 last:mb-0 pl-16"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[29px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] shadow-lg transform -translate-x-1/2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] animate-ping opacity-20" />
      </div>
      
      {/* Content */}
      <div className="group">
        <h3 className="text-xl font-bold text-[#033A5B] mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
          {item.year}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}; 