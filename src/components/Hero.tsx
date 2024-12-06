import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen bg-[#020817]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-24 rounded-full bg-gradient-to-br from-[#22B0EB]/20 to-transparent blur-3xl" />
        <div className="absolute w-[400px] h-[400px] top-96 -left-24 rounded-full bg-gradient-to-tr from-[#033A5B]/30 to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#22B0EB]/5 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#033A5B]/10 rounded-full filter blur-3xl" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32 sm:pt-32 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-[#22B0EB] ring-1 ring-[#22B0EB]/20 hover:ring-[#22B0EB]/30 backdrop-blur-sm">
              Trusted by Leading Businesses{' '}
              <a href="#clients" className="font-semibold text-[#22B0EB] inline-flex items-center">
                <span>View Our Clients</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              <span className="inline-block mb-4">Global Associates</span>
              <span className="block bg-gradient-to-r from-[#22B0EB] to-[#28A2D4] bg-clip-text text-transparent">
                Chartered Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Empowering businesses through expert financial guidance, innovative solutions,
              and unwavering commitment to excellence in accounting services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-[#033A5B] to-[#0C4D75] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#22B0EB]/25 hover:-translate-y-0.5"
              >
                Schedule Consultation
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#services"
                className="group relative inline-flex items-center gap-x-2 rounded-xl bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Explore Services
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
                  <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}