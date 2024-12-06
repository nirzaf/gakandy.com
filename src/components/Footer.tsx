import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2F2F2] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <span className="text-gray-500 text-sm">
            Powered by{' '}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3279A6] hover:text-[#0511F2] transition-colors duration-300 font-medium"
            >
              Quadrate Tech Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
