import HeroSection from '../components/partners/HeroSection';
import PartnersSection from '../components/partners/PartnersSection';

const partners = [
  {
    name: 'Mr. M. Aashikkhan',
    title: 'Technical & Managing Partner',
    image: '/images/partners/aashikkhan.jpg',
    description: [
      'Mr. Aashikkhan is the Technical & Managing Partner at Global Associates Kandy, leading our professional services and strategic initiatives.',
      'With extensive qualifications including FCA, FCCA, ACMA, CGMA, ASCMA, ACFE, MAAT, and AIPA, he brings comprehensive expertise in accounting, auditing, and financial management.',
      'His experience spans across various industries, providing expert guidance in financial reporting, tax planning, business advisory, and strategic consulting.',
      'Under his leadership, Global Associates Kandy has established itself as a leading professional services firm in Sri Lanka, serving both local and international clients.'
    ]
  },
  {
    name: 'Mr. Mohamed Rizkhan',
    title: 'Executive Manager',
    image: '/images/partners/rizkhan.jpg',
    description: [
      'Mr. Mohamed Rizkhan serves as the Executive Manager at Global Associates Kandy, overseeing operational excellence and client service delivery.',
      'Holding an MSc, ACCA, OCP, and DNIIT, he brings a unique combination of technical expertise and management skills to the firm.',
      'His focus areas include system implementation, digital transformation, and process optimization, helping clients leverage technology for business growth.',
      'With his extensive experience in both technical and managerial roles, he ensures that Global Associates maintains the highest standards of service quality and client satisfaction.'
    ]
  }
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <PartnersSection partners={partners} />
    </div>
  );
}