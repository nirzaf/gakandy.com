import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType, Stat } from '../shared/types';
import { TimelineItem } from '../cards/TimelineItem';

const timelineItems: TimelineItemType[] = [
  {
    year: '2000',
    description: 'Founded as a small accounting practice in Kandy, focusing on local businesses.',
  },
  {
    year: '2015',
    description: 'Expanded services to include comprehensive auditing and business advisory.',
  },
  {
    year: '2018',
    description: 'Established partnerships with international firms to enhance service capabilities.',
  },
  {
    year: '2023',
    description: 'Recognized as one of the leading professional services firms in the region.',
  },
];

const stats: Stat[] = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const OurStory: React.FC = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#033A5B]/5 to-[#22B0EB]/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[#033A5B] via-[#22B0EB] to-[#126190]" />
            
            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </motion.div>

          {/* Right Column - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative pattern */}
            <div className="absolute -right-4 -top-4 w-72 h-72 bg-gradient-to-br from-[#033A5B]/10 to-[#22B0EB]/10 rounded-full blur-3xl" />
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-[#033A5B] mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    Global Associates Kandy was founded with a vision to provide exceptional professional services
                    to businesses in Sri Lanka. Our journey began with a commitment to excellence and a deep
                    understanding of local business needs.
                  </p>
                  <p className="mb-6">
                    Over the years, we have grown into a trusted partner for businesses across various sectors,
                    delivering innovative solutions and maintaining the highest standards of professional service.
                  </p>
                  <p>
                    Today, we continue to evolve and adapt to meet the changing needs of our clients while
                    staying true to our core values of integrity, excellence, and client focus.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#033A5B] to-[#22B0EB] bg-clip-text text-transparent group-hover:from-[#22B0EB] group-hover:to-[#033A5B] transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 