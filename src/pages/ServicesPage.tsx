import React from 'react';
import { services } from '../data/services';
import HeroSection from '../components/services/HeroSection';
import ServicesContainer from '../components/services/ServicesContainer';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesContainer services={services} />
    </div>
  );
};

export default ServicesPage;