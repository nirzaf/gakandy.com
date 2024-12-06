import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Professional Excellence',
    description: 'Delivering high-quality auditing and consultancy services with unwavering commitment to excellence.',
    icon: Award,
    gradient: 'from-[#033A5B] to-[#0C4D75]',
  },
  {
    name: 'Industry Expertise',
    description: 'Leveraging years of experience to provide comprehensive financial and business solutions.',
    icon: Briefcase,
    gradient: 'from-[#084461] to-[#126190]',
  },
  {
    name: 'Client-Centric Approach',
    description: 'Tailoring our services to meet your specific needs with unlimited support and guidance.',
    icon: Target,
    gradient: 'from-[#22B0EB] to-[#28A2D4]',
  },
  {
    name: 'Timely Delivery',
    description: 'Meeting deadlines consistently while maintaining the highest standards of quality.',
    icon: Clock,
    gradient: 'from-[#033A5B] to-[#22B0EB]',
  },
  {
    name: 'Continuous Support',
    description: 'Providing ongoing assistance and updates to ensure your continued success.',
    icon: Calendar,
    gradient: 'from-[#084461] to-[#28A2D4]',
  },
  {
    name: 'Quality Assurance',
    description: 'Implementing rigorous quality control measures to deliver exceptional results.',
    icon: Star,
    gradient: 'from-[#0C4D75] to-[#126190]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -skew-y-12 transform bg-[#033A5B]/5 w-full h-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.04),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,176,235,0.04),transparent_40%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:text-center mb-16"
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-[#22B0EB]">Why Choose Global Associates</h2>
          <p className="mt-2 text-4xl font-extrabold text-[#033A5B] sm:text-5xl font-serif">
            Our Commitment to Excellence
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-[#22B0EB] rounded-full"></div>
          <p className="mt-6 max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
            We are dedicated to delivering exceptional financial services and innovative solutions 
            that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(3,58,91,0.08)] hover:shadow-[0_8px_30px_rgba(3,58,91,0.12)] 
                          transition-all duration-500 p-8 overflow-hidden hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] 
                              transition-opacity duration-500`}></div>
                
                <div className="relative flex flex-col items-start">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl 
                                bg-gradient-to-r ${feature.gradient} text-white 
                                transform group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#033A5B] group-hover:text-[#22B0EB] 
                              transition-colors duration-500">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-gray-600 group-hover:text-gray-700 
                              transition-colors duration-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}