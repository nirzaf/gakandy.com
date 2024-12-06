import { Menu, X, Home, Users, Briefcase, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_LOGO = "https://ik.imagekit.io/d36vkx7c33/gakandy/logo-wihtout-text.png?updatedAt=1733490143012";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const satelliteVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: -360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center relative">
            <Link to="/">
              <div className="relative w-16 h-16 flex items-center justify-center">
                {/* Orbital rings */}
                <div className="absolute w-full h-full border-2 border-[#28A2D4]/30 rounded-full transform rotate-45"></div>
                <div className="absolute w-[120%] h-[120%] border-2 border-[#22B0EB]/20 rounded-full"></div>
                
                {/* Static logo */}
                <div className="relative w-12 h-12 z-10">
                  <img 
                    src={COMPANY_LOGO}
                    alt="Global Associates Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Satellite effect */}
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-full h-full"
                >
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-[#22B0EB] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#28A2D4] rounded-full blur-sm absolute"></div>
                  </div>
                </motion.div>

                {/* Additional satellites for more dynamic effect */}
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-[90%] h-[90%] rotate-90"
                >
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-1.5 h-1.5 bg-[#126190] rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#0C4D75] rounded-full blur-sm absolute"></div>
                  </div>
                </motion.div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#033A5B] px-3 py-2 font-medium inline-flex items-center gap-2">
              <Home size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#033A5B] px-3 py-2 font-medium inline-flex items-center gap-2">
              <Users size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>About Us</span>
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#033A5B] px-3 py-2 font-medium inline-flex items-center gap-2">
              <Briefcase size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Services</span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#033A5B] px-3 py-2 font-medium inline-flex items-center gap-2">
              <PhoneCall size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            height: "auto",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24,
              staggerChildren: 0.07,
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24,
              staggerChildren: 0.05,
              staggerDirection: -1,
              when: "afterChildren"
            }
          }
        }}
        className="md:hidden overflow-hidden"
      >
        <motion.div 
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0%)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50%)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-xl"
        >
          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
            }}
          >
            <Link to="/" className="block text-gray-700 hover:text-[#033A5B] px-3 py-2 rounded-md font-medium flex items-center gap-2 w-full transform transition-transform hover:translate-x-1 group" onClick={() => setIsOpen(false)}>
              <Home size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Home</span>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
            }}
          >
            <Link to="/about" className="block text-gray-700 hover:text-[#033A5B] px-3 py-2 rounded-md font-medium flex items-center gap-2 w-full transform transition-transform hover:translate-x-1 group" onClick={() => setIsOpen(false)}>
              <Users size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>About Us</span>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
            }}
          >
            <Link to="/services" className="block text-gray-700 hover:text-[#033A5B] px-3 py-2 rounded-md font-medium flex items-center gap-2 w-full transform transition-transform hover:translate-x-1 group" onClick={() => setIsOpen(false)}>
              <Briefcase size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Services</span>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
            }}
          >
            <Link to="/contact" className="block text-gray-700 hover:text-[#033A5B] px-3 py-2 rounded-md font-medium flex items-center gap-2 w-full transform transition-transform hover:translate-x-1 group" onClick={() => setIsOpen(false)}>
              <PhoneCall size={18} className="text-[#22B0EB] group-hover:text-[#033A5B] transition-colors" />
              <span>Contact</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}