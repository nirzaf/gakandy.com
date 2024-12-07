import { motion } from 'framer-motion';
import { Target, Briefcase } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
      <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#033A5B]/5 blur-3xl" />
      <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#22B0EB]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Target className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h2 className="text-2xl font-bold text-[#033A5B] mb-4 group-hover:text-[#126190] transition-colors duration-300">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed relative">
                <span className="absolute -left-4 top-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                To be the trusted leader in professional services, setting industry standards through innovation, expertise, and unwavering commitment to excellence in everything we do.
                <span className="absolute -right-4 bottom-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22B0EB] to-[#126190] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#22B0EB] to-[#126190] p-4 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Briefcase className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h2 className="text-2xl font-bold text-[#033A5B] mb-4 group-hover:text-[#22B0EB] transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed relative">
                <span className="absolute -left-4 top-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                To empower our clients' success by delivering exceptional professional services through innovative solutions, ethical practices, and lasting partnerships built on trust.
                <span className="absolute -right-4 bottom-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 