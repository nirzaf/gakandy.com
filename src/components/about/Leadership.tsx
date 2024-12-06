import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const COMPANY_LOGO = "https://ik.imagekit.io/d36vkx7c33/gakandy/ga-primary-logo-transparent-bg.png?updatedAt=1733486258478";

const leaders = [
  {
    name: 'Mr. M. Aashikkhan',
    title: 'Technical & Managing Partner',
    qualifications: ['FCA', 'FCCA', 'ACMA', 'CGMA', 'ASCMA', 'ACFE', 'MAAT', 'AIPA'],
    description: 'Leading our professional services and strategic initiatives with comprehensive expertise in accounting, auditing, and financial management.'
  },
  {
    name: 'Mr. Mohamed Rizkhan',
    title: 'Executive Manager',
    qualifications: ['MSc', 'ACCA', 'OCP', 'DNIIT'],
    description: 'Overseeing operational excellence and client service delivery with expertise in system implementation and digital transformation.'
  }
];

export default function Leadership() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <img 
            src={COMPANY_LOGO} 
            alt="Global Associates Logo" 
            className="h-16 mx-auto mb-8"
          />
          <h2 className="text-3xl font-bold text-indigoDye-primary mb-4">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our experienced team of professionals leading Global Associates Kandy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-pictonBlue-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-pictonBlue-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigoDye-primary mb-2">{leader.name}</h3>
                  <p className="text-pictonBlue-primary font-medium mb-2">{leader.title}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.qualifications.map((qual) => (
                      <span 
                        key={qual}
                        className="text-xs bg-indigoDye-primary/10 text-indigoDye-primary px-2 py-1 rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 