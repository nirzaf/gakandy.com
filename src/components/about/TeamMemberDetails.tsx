import { motion } from 'framer-motion';
import { GraduationCap, Award as AwardIcon, Building2, Briefcase as BriefcaseIcon, Target } from 'lucide-react';

interface DetailSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, icon, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center gap-2 text-[#033A5B] font-semibold mb-4">
      {icon}
      <h4>{title}</h4>
    </div>
    <ul className="list-none space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-[#22B0EB] mt-1.5">•</span>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface TeamMemberDetailsProps {
  member: {
    qualifications: string[];
    expertise: string[];
    industries?: string[];
    experience: string[];
    specializations?: string[];
  };
}

export const TeamMemberDetails: React.FC<TeamMemberDetailsProps> = ({ member }) => (
  <div className="pt-6 space-y-6 h-full">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <DetailSection
          title="Qualifications"
          icon={<GraduationCap className="w-5 h-5" />}
          items={member.qualifications}
        />
        <DetailSection
          title="Areas of Expertise"
          icon={<AwardIcon className="w-5 h-5" />}
          items={member.expertise}
        />
        {member.industries && (
          <DetailSection
            title="Industries of Expertise"
            icon={<Building2 className="w-5 h-5" />}
            items={member.industries}
          />
        )}
      </div>
      <div className="space-y-8">
        <DetailSection
          title="Professional Experience"
          icon={<BriefcaseIcon className="w-5 h-5" />}
          items={member.experience}
        />
        {member.specializations && (
          <DetailSection
            title="Specializations"
            icon={<Target className="w-5 h-5" />}
            items={member.specializations}
          />
        )}
      </div>
    </div>
  </div>
);

export default TeamMemberDetails;
