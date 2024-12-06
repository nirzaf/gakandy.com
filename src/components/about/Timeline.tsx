import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../../types/about';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  items: TimelineItemType[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <div className="relative">
    {/* Vertical Line */}
    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#033A5B] to-[#22B0EB]" />
    
    {/* Timeline Items */}
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem key={item.year} item={item} index={index} />
      ))}
    </div>
  </div>
);

export default Timeline;
