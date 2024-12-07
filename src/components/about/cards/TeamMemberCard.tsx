import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Award, Building2, Briefcase, Target } from 'lucide-react';
import { TeamMember } from '../shared/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
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
                      <Award className="w-5 h-5" />
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
                      <Briefcase className="w-5 h-5" />
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