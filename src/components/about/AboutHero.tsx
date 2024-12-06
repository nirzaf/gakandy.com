import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#033A5B] to-[#22B0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Global Associates
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A leading professional services firm committed to excellence and innovation
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
