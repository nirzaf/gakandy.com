import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#033A5B] to-[#22B0EB] py-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Strategic Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-100 max-w-2xl mx-auto"
          >
            Collaborating with industry leaders to deliver exceptional value and innovative solutions to our clients.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
