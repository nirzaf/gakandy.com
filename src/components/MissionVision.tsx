import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="pt-8 pb-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform rotate-12 -right-40 -top-40 w-96 h-96 rounded-full bg-blue-50"></div>
        <div className="absolute transform -rotate-12 -left-40 -bottom-40 w-96 h-96 rounded-full bg-blue-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Delivering excellence in auditing and consultancy services through innovative solutions and unwavering commitment to quality.
              </p>
              <ul className="space-y-3">
                {['Professional Excellence', 'Client Satisfaction', 'Innovative Solutions'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Shaping the future of financial services in Qatar by setting new standards of excellence and innovation in auditing and consultancy.
              </p>
              <ul className="space-y-3">
                {['Industry Leadership', 'Continuous Innovation', 'Regional Excellence'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
