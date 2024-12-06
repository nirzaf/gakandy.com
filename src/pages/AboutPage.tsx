import { motion } from 'framer-motion';
import OurStory from '../components/about/OurStory';
import QuoteSection from '../components/about/QuoteSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Benefits from '../components/about/Benefits';
import CoreValues from '../components/about/CoreValues';
import Leadership from '../components/about/Leadership';
import CompanyOverview from '../components/about/CompanyOverview';
import { Briefcase, Target } from 'lucide-react';
import { Shield, Award, Users, Lightbulb, Users2, Scale } from 'lucide-react';

const features = [
  {
    title: 'Full-Service Capability',
    description: 'A professional services firm offering comprehensive financial and business solutions in Sri Lanka.',
    icon: Briefcase,
  },
  {
    title: 'Client-Focused Structure',
    description: 'We construct our team to reflect your organizational structure for optimal service delivery.',
    icon: Users,
  },
  {
    title: 'Transparent Approach',
    description: 'All aspects of our service delivery are made transparent to ensure client satisfaction.',
    icon: Shield,
  },
  {
    title: 'Diverse Services',
    description: 'From accounting and auditing to business advisory and system implementation.',
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Company Overview Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#033A5B] sm:text-4xl">
              Company Overview
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Global Associates Kandy is a leading professional services firm based in Kandy, Sri Lanka, 
              offering a diverse range of financial and business services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2 mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#033A5B] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with updated styling */}
      <section className="bg-white py-8">
        <OurStory />
      </section>

      {/* Mission & Vision with brand colors */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#033A5B] to-[#22B0EB] opacity-10 blur-2xl"></div>
            <div className="relative">
              <Target className="h-8 w-8 text-[#033A5B] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the trusted leader in professional services, setting industry standards through 
                innovation, expertise, and unwavering commitment to excellence in everything we do.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#22B0EB] to-[#033A5B] opacity-10 blur-2xl"></div>
            <div className="relative">
              <Briefcase className="h-8 w-8 text-[#22B0EB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower our clients' success by delivering exceptional professional services through 
                innovative solutions, ethical practices, and lasting partnerships built on trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values with brand colors */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
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
            {/* Integrity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#033A5B] to-[#0C4D75] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2 mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Maintaining highest ethical standards</li>
                  <li>Transparent business practices</li>
                  <li>Professional independence</li>
                </ul>
              </div>
            </motion.div>

            {/* Excellence Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#22B0EB] to-[#28A2D4] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#22B0EB] to-[#033A5B] p-2 mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Commitment to quality</li>
                  <li>Professional competence</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </motion.div>

            {/* Client Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0C4D75] to-[#126190] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#126190] to-[#22B0EB] p-2 mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client Focus</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Understanding client needs</li>
                  <li>Delivering value</li>
                  <li>Building long-term relationships</li>
                </ul>
              </div>
            </motion.div>

            {/* Innovation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#28A2D4] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#22B0EB] to-[#126190] p-2 mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Embracing technology</li>
                  <li>Modern solutions</li>
                  <li>Continuous learning</li>
                </ul>
              </div>
            </motion.div>

            {/* Teamwork Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#084461] to-[#033A5B] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#126190] p-2 mb-4">
                  <Users2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Collaborative approach</li>
                  <li>Knowledge sharing</li>
                  <li>Professional development</li>
                </ul>
              </div>
            </motion.div>

            {/* Professional Ethics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#126190] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#22B0EB] to-[#033A5B] p-2 mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Ethics</h3>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Ethical decision making</li>
                  <li>Regulatory compliance</li>
                  <li>Professional standards</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gradient-to-r from-indigoDye-100 to-indigoDye-200 py-8">
        <Leadership />
      </section>

      {/* Why Choose Us with brand accent */}
      <section className="bg-white py-8">
        <WhyChooseUs />
      </section>

      {/* Benefits with subtle gradient */}
      <section className="bg-gradient-to-r from-pictonBlue-50 to-pictonBlue-100 py-8">
        <Benefits />
      </section>

      {/* Quote Section with deep brand color */}
      <section className="bg-indigoDye-600 py-8">
        <QuoteSection />
      </section>
    </motion.div>
  );
}