import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const GlobalRecruiter: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00204A] to-[#002B5B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-6 relative animate-text-shine"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            style={{
              background: 'linear-gradient(-45deg, #FFC635, #FFD700, #ffffff, #FFC635)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(255, 198, 53, 0.3)',
              animation: 'shine 3s linear infinite'
            }}
          >
            Looking for Top Talent?
          </motion.h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Connect with our sister company, Global Rapid Recruiter, specializing in finding exceptional talent 
            for your business needs. From finance professionals to industry experts, we help you build the perfect team.
          </p>
          
          <motion.a
            href="https://globalrapidrecruiter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFC635] text-[#00204A] rounded-full font-semibold 
                     hover:bg-[#FFD700] transition-all duration-300 transform hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Visit Global Rapid Recruiter</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-text-shine {
          animation: shine 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalRecruiter;