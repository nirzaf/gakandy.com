import React from 'react';

const Home = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative bg-indigo_dye-500 text-white py-20 rounded-lg overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Accounting & Auditing Services
          </h1>
          <p className="text-lg mb-8">
            Your trusted partner for comprehensive financial solutions in Sri Lanka
          </p>
          <a
            href="/contact"
            className="inline-block bg-picton_blue-500 hover:bg-picton_blue-600 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Auditing</h3>
              <p className="text-gray-600">
                Comprehensive auditing services ensuring compliance and accuracy
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Accounting</h3>
              <p className="text-gray-600">
                Professional accounting services for businesses of all sizes
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tax Consulting</h3>
              <p className="text-gray-600">
                Expert tax planning and consultation services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Global Associates</h2>
              <p className="text-gray-600 mb-6">
                Global Associates is an organization of substance with full-service capability 
                available in Sri Lanka. We construct our team to reflect your organizational 
                structure and make all aspects of our service delivery transparent.
              </p>
              <a
                href="/about"
                className="text-picton_blue-500 hover:text-picton_blue-600 font-medium"
              >
                Learn more about us →
              </a>
            </div>
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Add office image here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 