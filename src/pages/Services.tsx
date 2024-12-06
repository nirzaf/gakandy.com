import React from 'react';

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive financial solutions for your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Audit Services */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Audit Services</h2>
            <ul className="space-y-3 text-gray-600">
              <li>External Audits</li>
              <li>Internal Audits</li>
              <li>Compliance Audits</li>
              <li>Special Purpose Audits</li>
            </ul>
          </div>

          {/* Accounting Services */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Accounting Services</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Bookkeeping</li>
              <li>Financial Statement Preparation</li>
              <li>Payroll Services</li>
              <li>Management Accounting</li>
            </ul>
          </div>

          {/* Tax Services */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Tax Services</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Tax Planning</li>
              <li>Tax Return Preparation</li>
              <li>Tax Compliance</li>
              <li>Tax Advisory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 