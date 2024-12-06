import { motion } from 'framer-motion';
import { Star, Lightbulb, Users, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const coreValues = [
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

export default function CoreValues() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#033A5B] to-[#0C4D75]"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#22B0EB]/10 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#126190]/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22B0EB] via-[#126190] to-[#033A5B]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#22B0EB] mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              At Global Associates, our values shape everything we do. We believe in delivering excellence through 
              innovation, maintaining unwavering client focus, and leveraging our global expertise for local success.
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            className="relative group rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#033A5B]/80 via-transparent to-transparent" />
            <img
              src="https://ik.imagekit.io/ri5cvrkrr/istockphoto-1328399948-170667a.jpg?updatedAt=1732207359642"
              alt="Professional Excellence"
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
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
                    <value.icon className="h-8 w-8 text-[#22B0EB] group-hover:text-white 
                                        transform group-hover:rotate-6 transition-all duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
