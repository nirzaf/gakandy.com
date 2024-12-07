export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TimelineItem {
  year: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  qualifications: string[];
  expertise: string[];
  experience: string[];
  industries?: string[];
  specializations?: string[];
}

export interface TeamMemberCardProps {
  member: TeamMember;
}
