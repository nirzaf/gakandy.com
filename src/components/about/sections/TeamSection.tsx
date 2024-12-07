import { motion } from 'framer-motion';
import { TeamMember } from '../shared/types';
import { TeamMemberCard } from '../cards/TeamMemberCard';

const teamMembers: TeamMember[] = [
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

export const TeamSection: React.FC = () => {
  return (
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
  );
}; 