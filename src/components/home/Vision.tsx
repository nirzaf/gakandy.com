import { motion } from 'framer-motion';
import { Star, Lightbulb, Users, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const visionPoints = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'Delivering high-quality professional services with unwavering commitment to standards and best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Adapting to changing business environments with modern solutions and forward-thinking approaches.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Understanding and meeting client needs through personalized attention and dedicated service.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Providing international expertise with deep local knowledge to serve businesses worldwide.',
  },
];

export default function Vision() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative py-10 overflow-hidden bg-gradient-to-br from-[#033A5B] to-[#0C4D75]"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#22B0EB]/10 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#126190]/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22B0EB] via-[#126190] to-[#033A5B]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#22B0EB] mb-3"
          >
            Performance Through Excellence
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Global Associates is a leading professional services firm based in Kandy, Sri Lanka, providing comprehensive 
            accounting, auditing, and advisory services. With our strong local presence and international expertise, 
            we empower businesses of all sizes to achieve their financial goals.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-base text-[#22B0EB] max-w-2xl mx-auto font-medium italic"
          >
            As your trusted partner in business growth and development, we deliver fast and effective access to 
            quality-assured accounting and advisory solutions that drive success.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              custom={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10
                         hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/20 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB] to-[#126190] rounded-full opacity-0 
                                  group-hover:opacity-20 transform scale-0 group-hover:scale-150 transition-all duration-300" />
                    <point.icon className="h-8 w-8 text-[#22B0EB] group-hover:text-white 
                                        transform group-hover:rotate-6 transition-all duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
