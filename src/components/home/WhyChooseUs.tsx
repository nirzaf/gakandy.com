import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const features = [
  { name: 'Business Growth', icon: Target },
  { name: 'Unlimited Revision', icon: Clock },
  { name: 'Ultimate Perfection', icon: Star },
  { name: 'Smart Experience', icon: Briefcase },
  { name: 'Strict Deadline', icon: Calendar },
  { name: 'Reputed Firm', icon: Award }
];

export default function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl font-bold text-[#033A5B] mb-4"
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          variants={fadeInUp}
          className="w-24 h-1 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] mx-auto rounded-full"
        />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={feature.name}
            variants={fadeInUp}
            custom={index}
            className="group flex flex-col items-center p-8 rounded-2xl bg-white 
                      shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                      border border-gray-100 hover:border-[#22B0EB]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#033A5B]/5 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#033A5B] to-[#22B0EB] rounded-full opacity-0 
                              group-hover:opacity-10 transform scale-0 group-hover:scale-150 transition-all duration-500" />
                <feature.icon className="h-16 w-16 text-[#22B0EB] group-hover:text-[#033A5B] 
                                      transform group-hover:rotate-6 transition-all duration-500" />
              </div>
              <span className="block font-bold text-xl text-[#033A5B] group-hover:text-[#22B0EB] 
                             transition-colors duration-500 mb-3">{feature.name}</span>
              <p className="text-gray-600 text-center opacity-0 group-hover:opacity-100 
                         transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Discover excellence in every detail of our professional services.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
