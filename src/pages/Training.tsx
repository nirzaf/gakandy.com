import React from 'react';

const Training = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h1>
          <p className="text-xl text-gray-600">
            Enhance your financial knowledge with our expert-led training sessions
          </p>
        </div>

        {/* Featured Training */}
        <div className="bg-indigo_dye-500 text-white rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Finance for Non-Finance Executives</h2>
            <p className="mb-6">
              A comprehensive program designed to help non-finance professionals understand 
              financial concepts and their business applications.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Course Highlights:</h3>
                <ul className="space-y-2">
                  <li>Financial Management vs. Accounting</li>
                  <li>Financial Statements & Decision Making</li>
                  <li>Financial Ratios & Their Implications</li>
                  <li>Working Capital Management</li>
                  <li>Cost Analysis & Business Applications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Course Details:</h3>
                <ul className="space-y-2">
                  <li>Duration: Full Day (9:00 AM - 4:30 PM)</li>
                  <li>Investment: LKR 4900.00 per Participant</li>
                  <li>Location: Kandy, Sri Lanka</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Take Our Training?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced professionals with extensive industry knowledge
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Practical Focus</h3>
              <p className="text-gray-600">
                Real-world applications and case studies for better understanding
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Enhance your professional capabilities and career prospects
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-picton_blue-500 hover:bg-picton_blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Enquire About Training Programs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training; 