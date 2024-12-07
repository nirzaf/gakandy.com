import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
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

export interface CoreValue {
  title: string;
  icon: LucideIcon;
  items: string[];
} 