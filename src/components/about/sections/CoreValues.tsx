import { motion } from 'framer-motion';
import { Shield, Award, Users, Lightbulb, Users2, Scale } from 'lucide-react';
import { CoreValue } from '../shared/types';
import { CoreValueCard } from '../cards/CoreValueCard';

const coreValues: CoreValue[] = [
  {
    title: 'Integrity',
    icon: Shield,
    items: [
      'Maintaining highest ethical standards',
      'Transparent business practices',
      'Professional independence',
    ],
  },
  {
    title: 'Excellence',
    icon: Award,
    items: [
      'Commitment to quality',
      'Professional competence',
      'Continuous improvement',
    ],
  },
  {
    title: 'Client Focus',
    icon: Users,
    items: [
      'Understanding client needs',
      'Delivering value',
      'Building long-term relationships',
    ],
  },
  {
    title: 'Innovation',
    icon: Lightbulb,
    items: [
      'Embracing technology',
      'Modern solutions',
      'Continuous learning',
    ],
  },
  {
    title: 'Teamwork',
    icon: Users2,
    items: [
      'Collaborative approach',
      'Knowledge sharing',
      'Professional development',
    ],
  },
  {
    title: 'Professional Ethics',
    icon: Scale,
    items: [
      'Ethical decision making',
      'Regulatory compliance',
      'Professional standards',
    ],
  },
];

const gradientPairs = [
  { from: '[#033A5B]', to: '[#0C4D75]' },
  { from: '[#22B0EB]', to: '[#28A2D4]' },
  { from: '[#0C4D75]', to: '[#126190]' },
  { from: '[#28A2D4]', to: '[#22B0EB]' },
  { from: '[#084461]', to: '[#033A5B]' },
  { from: '[#126190]', to: '[#22B0EB]' },
];

export const CoreValues: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The principles that guide our professional excellence and client service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <CoreValueCard
              key={value.title}
              value={value}
              index={index}
              gradientFrom={gradientPairs[index].from}
              gradientTo={gradientPairs[index].to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 