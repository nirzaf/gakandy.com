import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

export const QuoteHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(#22B0EB 0.5px, transparent 0.5px), radial-gradient(#033A5B 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          opacity: 0.05
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          {/* Quote Icon */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#033A5B] to-[#22B0EB] rounded-full flex items-center justify-center shadow-lg shadow-blue-200/50">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote 
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed md:leading-relaxed max-w-3xl mx-auto">
                "If you can't show through an audit trail how you arrived at the numbers on your balance sheet, that is a significant internal control failure."
              </p>
            </div>
          </motion.blockquote>

          {/* Author */}
          <motion.div
            variants={fadeInUp}
            className="mt-6"
          >
            <p className="text-lg font-medium bg-gradient-to-r from-[#033A5B] to-[#22B0EB] bg-clip-text text-transparent">Robert Cobb</p>
            <p className="text-gray-500 text-sm mt-1">Auditor</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
