import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
}

export interface AdditionalService {
  title: string;
  description: string;
  icon: LucideIcon;
}
