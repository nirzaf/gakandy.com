import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-[75vh] overflow-hidden bg-black/10">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <motion.img
          src="https://ik.imagekit.io/d36vkx7c33/gakandy/primary-hero-image.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#033A5B]/5 via-transparent to-[#22B0EB]/5" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-32 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Main Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 8,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className="mb-8"
            >
              <motion.div 
                className="inline-block mb-2 uppercase font-extrabold tracking-widest text-2xl sm:text-4xl relative"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.05))'
                }}
              >
                {/* Orbit Path */}
                <div className="absolute -inset-8 -z-10 rounded-full border border-[#22B0EB]/20" />
                
                {/* Orbiting Element */}
                <div className="absolute inset-0 -z-10">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div 
                      className="absolute"
                      style={{
                        top: '-2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '20px',
                        background: `conic-gradient(
                          from 0deg,
                          #033A5B 0deg,
                          #0C4D75 120deg,
                          #22B0EB 240deg,
                          #033A5B 360deg
                        )`,
                        borderRadius: '50%',
                        boxShadow: '0 0 15px 2px rgba(34, 176, 235, 0.3)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>

                <motion.span 
                  className="inline-block text-[#22B0EB] royal-text"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    background: 'linear-gradient(145deg, #22B0EB 5%, #28A2D4 50%, #22B0EB 95%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `
                      -1px -1px 1px rgba(255,255,255,0.3),
                      1px 1px 1px rgba(0,0,0,0.3),
                      2px 2px 4px rgba(34, 176, 235, 0.3),
                      -2px -2px 4px rgba(255,255,255,0.3)
                    `,
                    filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))',
                    position: 'relative',
                    padding: '0 4px'
                  }}
                >
                  <div
                    style={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
                      borderRadius: '4px 4px 0 0',
                      pointerEvents: 'none'
                    }}
                  />
                  Global
                </motion.span>{' '}
                <motion.span 
                  className="inline-block text-[#033A5B] royal-text"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Associates
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-xl sm:text-2xl font-medium text-gray-600 mt-3"
              >
                Chartered Accountants
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                ease: "easeOut"
              }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto relative emphasis-text"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="inline-block"
              >
                Performance
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="inline-block text-gray-400"
              >
                through
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="inline-block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#033A5B] to-[#22B0EB]"
              >
                Excellence
              </motion.span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            >
              <Link
                to="/contact"
                className="group relative inline-flex w-full sm:w-auto whitespace-nowrap items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-[#033A5B] to-[#22B0EB] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#22B0EB]/25 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ChevronRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#22B0EB] to-[#033A5B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
              
              <Link
                to="/services"
                className="group relative inline-flex w-full sm:w-auto whitespace-nowrap items-center justify-center gap-x-2 rounded-xl border-2 border-[#033A5B]/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#033A5B] backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#033A5B]/5 hover:to-[#22B0EB]/5 hover:border-[#033A5B]/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#033A5B]/5"
              >
                <span>Explore Services</span>
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .royal-text {
          background: linear-gradient(180deg, 
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          transform-style: preserve-3d;
          perspective: 1000px;
          position: relative;
        }
        
        .royal-text::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          transform: translateZ(-5px);
          opacity: 0.3;
          filter: blur(1px);
        }
        
        .emphasis-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .emphasis-text::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #033A5B, #22B0EB);
          animation: underlineExpand 1.5s ease-out 2s forwards;
        }
        
        @keyframes underlineExpand {
          from {
            width: 0;
          }
          to {
            width: 180px;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </div>
  );
}