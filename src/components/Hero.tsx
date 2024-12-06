import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-[75vh] overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://ik.imagekit.io/d36vkx7c33/gakandy/primary-hero-image.jpg?updatedAt=1733489242076"
          alt="Hero background"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-24 rounded-full bg-gradient-to-br from-[#22B0EB]/10 to-transparent blur-3xl" />
        <div className="absolute w-[400px] h-[400px] top-96 -left-24 rounded-full bg-gradient-to-tr from-[#033A5B]/10 to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#22B0EB]/5 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#033A5B]/5 rounded-full filter blur-3xl" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-5" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-32 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Main Content */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-[#033A5B] sm:text-5xl"
            >
              <motion.span 
                initial={{ letterSpacing: "0.05em", y: 20, opacity: 0 }}
                animate={{ 
                  letterSpacing: "0.08em", 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    letterSpacing: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                    y: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="inline-block mb-2 uppercase font-extrabold tracking-widest text-2xl sm:text-4xl"
              >
                <span className="text-[#22B0EB]">Global</span>{' '}
                <span className="text-[#033A5B]">Associates</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: "easeOut"
                }}
                className="block text-xl sm:text-2xl font-medium text-gray-600 mt-3"
              >
                Chartered Accountants
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto"
            >
              Performance through Excellence
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-x-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-[#033A5B] to-[#0C4D75] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#22B0EB]/25 hover:-translate-y-0.5 hover:from-[#0C4D75] hover:to-[#033A5B]"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ChevronRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#033A5B] to-[#0C4D75] opacity-0 blur transition-opacity duration-300 group-hover:opacity-50" />
              </Link>
              <a
                href="#services"
                className="group relative inline-flex items-center gap-x-2 rounded-xl border border-[#033A5B]/20 bg-white/80 px-6 py-3 text-sm font-semibold text-[#033A5B] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-[#033A5B]/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#033A5B]/5"
              >
                <span>Explore Services</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-12"
            >
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '500+', label: 'Satisfied Clients' },
                { value: '100%', label: 'Success Rate' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="text-3xl font-bold leading-9 tracking-tight text-[#033A5B]">{stat.value}</dd>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}