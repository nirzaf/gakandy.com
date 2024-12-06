import { Heart, DollarSign, Clock4, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const benefits = [
  { 
    name: 'We Do Things With Love And Passion',
    description: 'Every project is handled with utmost care and dedication to ensure exceptional quality and outstanding results.',
    icon: Heart 
  },
  { 
    name: 'Affordable Price Range',
    description: 'Competitive pricing without compromising on the quality of our services, delivering maximum value for your investment.',
    icon: DollarSign 
  },
  { 
    name: 'Receive on Time',
    description: 'We value your time and ensure timely delivery of all our commitments, maintaining strict adherence to project schedules.',
    icon: Clock4 
  },
  { 
    name: 'Satisfaction Guaranteed',
    description: 'Your satisfaction is our priority, backed by our commitment to excellence and continuous support throughout the process.',
    icon: CheckCircle2 
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#033A5B]/5 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#0C4D75]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,176,235,0.05),transparent_40%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#033A5B] to-[#22B0EB] mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experience excellence in professional services with our dedicated team committed to your success
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.name}
              variants={fadeInUp}
              className="group h-full"
            >
              <div className="relative p-8 rounded-xl bg-gradient-to-br from-[#033A5B]/[0.02] to-[#0C4D75]/[0.05] 
                            hover:from-[#033A5B]/[0.08] hover:to-[#0C4D75]/[0.12] border border-[#033A5B]/10 
                            transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/10 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col flex-1 z-10">
                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <div className="relative bg-gradient-to-br from-[#033A5B] to-[#0C4D75] w-16 h-16 
                                  rounded-xl flex items-center justify-center mx-auto transform 
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <benefit.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-medium text-[#033A5B] mb-3 text-center group-hover:text-[#22B0EB] 
                                 transition-colors duration-300">
                      {benefit.name}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-[#0C4D75] 
                                transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
