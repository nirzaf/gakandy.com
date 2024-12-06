import { Shield, Crosshair, Star, Users, Eye, Lock } from 'lucide-react';

const values = [
  { name: 'Integrity', icon: Shield, description: 'We exhibit fairness, honesty, and ethical behavior in our service to all our clients.' },
  { name: 'Objectivity', icon: Crosshair, description: 'We perform duties in an unbiased manner, i.e., based on an informed analysis of the issues and a clear understanding of the operations affected.' },
  { name: 'Quality', icon: Star, description: 'We provide accurate reports and timely, feasible, and relevant recommendations.' },
  { name: 'Community', icon: Users, description: 'We collaborate with colleagues and clients to provide services that improve our stakeholders effectiveness and efficiency.' },
  { name: 'Visionary', icon: Eye, description: 'We develop creative and innovative approaches to key issues facing by our clients.' },
  { name: 'Trust & Confidentiality', icon: Lock, description: 'We maintain the highest standards of confidentiality and build lasting relationships based on trust, integrity, and professional ethics.' }
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div 
              key={value.name} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <value.icon className="h-12 w-12 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
