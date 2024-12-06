import { motion } from 'framer-motion';
import { Target, Briefcase } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  gradient: string;
  hoverColor: string;
  rotate: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  gradient,
  hoverColor,
  rotate
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative group"
  >
    <div className={`absolute -inset-0.5 ${gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300`} />
    <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="mb-6">
        <div className={`w-16 h-16 rounded-xl ${gradient} p-4 transform ${rotate} group-hover:rotate-0 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h2 className={`text-2xl font-bold text-[#033A5B] mb-4 group-hover:text-[${hoverColor}] transition-colors duration-300`}>
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed relative">
        <span className="absolute -left-4 top-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
        {description}
        <span className="absolute -right-4 bottom-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
      </p>
    </div>
  </motion.div>
);

export const VisionMission: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <Card
      title="Our Vision"
      description="To be the trusted leader in professional services, setting industry standards through innovation, expertise, and unwavering commitment to excellence in everything we do."
      icon={<Target className="w-full h-full text-white" />}
      gradient="bg-gradient-to-r from-[#033A5B] to-[#22B0EB]"
      hoverColor="#126190"
      rotate="-rotate-6"
    />
    <Card
      title="Our Mission"
      description="To empower our clients' success by delivering exceptional professional services through innovative solutions, ethical practices, and lasting partnerships built on trust."
      icon={<Briefcase className="w-full h-full text-white" />}
      delay={0.2}
      gradient="bg-gradient-to-r from-[#22B0EB] to-[#126190]"
      hoverColor="#22B0EB"
      rotate="rotate-6"
    />
  </div>
);

export default VisionMission;
