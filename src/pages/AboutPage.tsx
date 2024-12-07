import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import QuoteSection from '../components/about/QuoteSection';
import Benefits from '../components/about/Benefits';
import { Briefcase, Target, ChevronDown, ChevronUp, GraduationCap, Award as AwardIcon, Briefcase as BriefcaseIcon, Building2 } from 'lucide-react';
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

const timelineItems = [
  {
    year: '2010',
    description: 'Founded as a small accounting practice in Kandy, focusing on local businesses.',
  },
  {
    year: '2015',
    description: 'Expanded services to include comprehensive auditing and business advisory.',
  },
  {
    year: '2018',
    description: 'Established partnerships with international firms to enhance service capabilities.',
  },
  {
    year: '2023',
    description: 'Recognized as one of the leading professional services firms in the region.',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

const teamMembers = [
  {
    name: "M. D. M. Aashikkhan",
    position: "Managing Partner",
    image: "https://ik.imagekit.io/d36vkx7c33/gakandy/aashikhan-dahalan.jpg",
    bio: "Mohammed Aashikkhan is the Managing Partner and is responsible for the Assurance and Advisory services, Tax and Business Community Training offered by the firm. He is the Technical & Managing Partner for the firm as well and our team will be advised on technical matters by Mohammed Aashikkhan.",
    qualifications: [
      "Chartered Accountant",
      "Member of the Institute of Chartered Accountants of Sri Lanka"
    ],
    expertise: [
      "External Audit",
      "Assurance Services",
      "Risk Management",
      "Quality Control",
      "Corporate Governance",
      "Business Community Training",
      "Taxation",
      "Financial Consulting"
    ],
    experience: [
      "Over 25 years in Assurance, Advisory, Internal Audit, and Financial Consulting",
      "Former Senior Manager at Ernst & Young Qatar (7 years)",
      "Experience with major firms including Ernst & Young (EY) and PricewaterhouseCoopers (PWC)",
      "Instrumental in establishing NAD Qatar and Abacus Dubai",
      "Leading training provider for various international qualifications"
    ],
    industries: [
      "Banking & Finance",
      "Airlines & Aviation",
      "Energy & Utilities Sector",
      "Hospitality",
      "Automobile",
      "Trading & Manufacturing",
      "Retail Trading",
      "Healthcare",
      "Telecommunications"
    ],
    specializations: [
      "Feasibility Study",
      "Business Planning",
      "Financial & Management Consultancy",
      "Assurance Services"
    ]
  },
  {
    name: "Mohamed Rizkhan",
    position: "Executive Manager",
    image: "https://ik.imagekit.io/d36vkx7c33/gakandy/rizkhan-dahalan.jpg",
    bio: "Mohammed Rizkhan is the Executive Manager of the firm with more than 15 years experience in Finance, Management Accounting, Costing and ERP applications. He possesses vast experience in advisory services, financial analysis, financial management, risk management, statutory audit services and internal audit services.",
    qualifications: [
      "Chartered Accountant",
      "Member of the Institute of Chartered Accountants of Sri Lanka"
    ],
    expertise: [
      "Corporate Finance",
      "Business Advisory",
      "Strategic Planning",
      "Mergers & Acquisitions",
      "Financial Management",
      "Management Accounting",
      "Costing",
      "ERP Applications"
    ],
    experience: [
      "Over 22 years in Finance and Management Accounting",
      "More than 20 years of lecturing and training experience",
      "Specialized in implementing and training ERP business applications (ORACLE, SAP)",
      "Experience in training students for CIMA, ACCA, ISACL examinations"
    ],
    specializations: [
      "ERP Implementation",
      "Financial Analysis",
      "Risk Management",
      "Statutory Audit Services",
      "Internal Audit Services"
    ]
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#22B0EB]/10 to-[#033A5B]/10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#033A5B]/10 to-[#22B0EB]/10 rounded-tr-full" />
        
        <div className="relative flex flex-col md:flex-row items-center p-6 z-10">
          <motion.div 
            layout="position"
            className="relative w-48 h-48 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden group cursor-pointer mb-4 md:mb-0 border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/20 to-[#033A5B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          <div className="flex-1 md:ml-8 text-center md:text-left">
            <div className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#033A5B] to-[#22B0EB] bg-clip-text text-transparent">{member.name}</h3>
              <div className="h-0.5 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] mt-1 mb-2"></div>
            </div>
            <p className="text-gray-600 font-medium mb-3">{member.position}</p>
            <p className="text-gray-600 mb-4 line-clamp-2">{member.bio}</p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] text-white font-medium hover:from-[#022a43] hover:to-[#1a8dbd] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>View {isExpanded ? 'Less' : 'More'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 pb-6 flex-1 md:flex md:flex-col relative"
          >
            {/* Decorative line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            
            <div className="pt-6 space-y-6 h-full">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
                      <GraduationCap className="w-5 h-5" />
                      <h4>Qualifications</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#22B0EB] mt-1.5">•</span>
                          <span className="text-gray-600">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
                      <AwardIcon className="w-5 h-5" />
                      <h4>Areas of Expertise</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.expertise.map((exp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#22B0EB] mt-1.5">•</span>
                          <span className="text-gray-600">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.industries && (
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
                        <Building2 className="w-5 h-5" />
                        <h4>Industries of Expertise</h4>
                      </div>
                      <ul className="list-none space-y-2">
                        {member.industries.map((industry, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#22B0EB] mt-1.5">•</span>
                            <span className="text-gray-600">{industry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
                      <BriefcaseIcon className="w-5 h-5" />
                      <h4>Professional Experience</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.experience.map((exp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#22B0EB] mt-1.5">•</span>
                          <span className="text-gray-600">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.specializations && (
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
                        <Target className="w-5 h-5" />
                        <h4>Specializations</h4>
                      </div>
                      <ul className="list-none space-y-2">
                        {member.specializations.map((spec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#22B0EB] mt-1.5">•</span>
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Company Overview Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 overflow-hidden">
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

      {/* Our Story Section */}
      <section className="relative py-12 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#033A5B]/5 to-[#22B0EB]/5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[#033A5B] via-[#22B0EB] to-[#126190]" />
              
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0 pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[29px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] shadow-lg transform -translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] animate-ping opacity-20" />
                  </div>
                  
                  {/* Content */}
                  <div className="group">
                    <h3 className="text-xl font-bold text-[#033A5B] mb-2 group-hover:text-[#22B0EB] transition-colors duration-300">
                      {item.year}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative pattern */}
              <div className="absolute -right-4 -top-4 w-72 h-72 bg-gradient-to-br from-[#033A5B]/10 to-[#22B0EB]/10 rounded-full blur-3xl" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-[#033A5B] mb-6">Our Story</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                      Global Associates Kandy was founded with a vision to provide exceptional professional services
                      to businesses in Sri Lanka. Our journey began with a commitment to excellence and a deep
                      understanding of local business needs.
                    </p>
                    <p className="mb-6">
                      Over the years, we have grown into a trusted partner for businesses across various sectors,
                      delivering innovative solutions and maintaining the highest standards of professional service.
                    </p>
                    <p>
                      Today, we continue to evolve and adapt to meet the changing needs of our clients while
                      staying true to our core values of integrity, excellence, and client focus.
                    </p>
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#033A5B] to-[#22B0EB] bg-clip-text text-transparent group-hover:from-[#22B0EB] group-hover:to-[#033A5B] transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mt-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-[#033A5B]/5 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-[#22B0EB]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <Target className="w-full h-full text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h2 className="text-2xl font-bold text-[#033A5B] mb-4 group-hover:text-[#126190] transition-colors duration-300">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed relative">
                  <span className="absolute -left-4 top-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                  To be the trusted leader in professional services, setting industry standards through innovation, expertise, and unwavering commitment to excellence in everything we do.
                  <span className="absolute -right-4 bottom-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22B0EB] to-[#126190] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#22B0EB] to-[#126190] p-4 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <Briefcase className="w-full h-full text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h2 className="text-2xl font-bold text-[#033A5B] mb-4 group-hover:text-[#22B0EB] transition-colors duration-300">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed relative">
                  <span className="absolute -left-4 top-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                  To empower our clients' success by delivering exceptional professional services through innovative solutions, ethical practices, and lasting partnerships built on trust.
                  <span className="absolute -right-4 bottom-0 text-4xl text-[#22B0EB]/10 font-serif">"</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#033A5B] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced partners who lead Global Associates with expertise and dedication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="md:flex md:flex-col">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with subtle gradient */}
      <section className="bg-gradient-to-r from-pictonBlue-50 to-pictonBlue-100 py-6">
        <Benefits />
      </section>

      {/* Quote Section with deep brand color */}
      <section className="bg-indigoDye-600 py-6">
        <QuoteSection />
      </section>

      {/* Core Values with brand colors */}
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
    </motion.div>
  );
}