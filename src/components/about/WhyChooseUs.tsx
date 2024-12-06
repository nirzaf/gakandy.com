import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';

const features = [
  { name: 'Business Growth', icon: Target },
  { name: 'Unlimited Revision', icon: Clock },
  { name: 'Ultimate Perfection', icon: Star },
  { name: 'Smart Experience', icon: Briefcase },
  { name: 'Strict Deadline', icon: Calendar },
  { name: 'Reputed Firm', icon: Award }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="group flex flex-col items-center p-8 rounded-2xl bg-white 
                        shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                        border border-gray-100 hover:border-blue-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 
                                transform scale-0 group-hover:scale-150 transition-all duration-500"></div>
                  <feature.icon className="h-16 w-16 text-blue-600 group-hover:text-blue-700 
                                        transform group-hover:rotate-6 transition-all duration-500" />
                </div>
                <span className="block font-bold text-xl text-gray-800 group-hover:text-blue-600 
                               transition-colors duration-500 mb-3">{feature.name}</span>
                <p className="text-gray-600 text-center opacity-0 group-hover:opacity-100 
                           transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Discover excellence in every detail of our professional services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
