import { motion } from 'framer-motion';
import { useState } from 'react';
import OurStory from '../components/about/OurStory';
import QuoteSection from '../components/about/QuoteSection';
import Benefits from '../components/about/Benefits';
import CoreValues from '../components/about/CoreValues';
import Leadership from '../components/about/Leadership';
import CompanyOverview from '../components/about/CompanyOverview';
import VisionMission from '../components/about/VisionMission';
import Timeline from '../components/about/Timeline';
import StatsSection from '../components/about/StatsSection';
import TeamMemberCard from '../components/about/TeamMemberCard';
import AboutHero from '../components/about/AboutHero';
import { Briefcase, Target, Users, Shield, Award, GraduationCap, Building2 } from 'lucide-react';
import type { Feature, TimelineItem, Stat, TeamMember } from '../types/about';

const features: Feature[] = [
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

const timelineItems: TimelineItem[] = [
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

const stats: Stat[] = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

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
      "Over 16 years in Assurance, Advisory, Internal Audit, and Financial Consulting",
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
      "Business Process Re-engineering",
      "Risk Management",
      "Corporate Governance"
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
      "Over 15 years in Finance and Management Accounting",
      "More than 10 years of lecturing and training experience",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AboutHero />

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisionMission />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* Core Values */}
      <CoreValues />

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}