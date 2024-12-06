import React from 'react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Global Associates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading accounting and auditing firm providing comprehensive financial solutions in Sri Lanka
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Global Associates is an organization of substance with a full-service capability 
              available in Sri Lanka. We construct our team to reflect your organizational 
              structure and make all aspects of our service delivery transparent to the client.
            </p>
            <p className="text-gray-600">
              Our performance is pre-scheduled, agreed with you for deliverables, timetable 
              and maximum cost-effectiveness. Our aim is to beat your expectations from any assignments.
            </p>
          </div>
          <div className="relative h-[400px] bg-gray-200 rounded-lg">
            {/* Add team image here */}
          </div>
        </div>

        {/* Key Personnel */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Mr. M. Aashikkhan</h3>
              <p className="text-gray-500 mb-4">Technical & Managing Partner</p>
              <p className="text-gray-600">
                FCA, FCCA, ACMA, CGMA, ASCMA, ACFE, MAAT, AIPA
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Mr. Mohamed Rizkhan</h3>
              <p className="text-gray-500 mb-4">Executive Manager</p>
              <p className="text-gray-600">
                MSc, ACCA, OCP, DNIIT
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We make all aspects of our service delivery transparent to our clients
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We aim to exceed expectations in every assignment we undertake
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional integrity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 