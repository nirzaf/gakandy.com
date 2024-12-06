import { motion } from 'framer-motion';

export default function Performance() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#033A5B] to-[#084461] text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-24 rounded-full bg-[#22B0EB]/10 blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 -left-24 rounded-full bg-[#28A2D4]/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,176,235,0.08),transparent_40%)]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-5" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight font-serif"
            >
              Performance Through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22B0EB] to-[#28A2D4]">
                Excellence
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert"
            >
              <p className="text-gray-200 leading-relaxed text-lg">
                Global Associates is a leading professional services firm based in Kandy, Sri Lanka, providing 
                comprehensive accounting, auditing, and advisory services. With our strong local presence and international expertise, 
                we empower businesses of all sizes to achieve their financial goals.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                As your trusted partner in business growth and development, we deliver fast and 
                effective access to quality-assured accounting and advisory solutions that drive success.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '500+', label: 'Clients Served' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22B0EB] to-[#28A2D4]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 mt-2 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22B0EB] to-[#28A2D4] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/istockphoto-1328399948-170667a.jpg?updatedAt=1732207359642"
                alt="Professional Excellence"
                className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
              />
              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#033A5B]/50 via-transparent to-transparent rounded-xl"></div>
              
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
