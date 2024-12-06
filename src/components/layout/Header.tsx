import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Global Associates Kandy" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-indigoDye-primary hover:text-pictonBlue-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button
              className="bg-pictonBlue-primary text-white px-6 py-2 rounded-md hover:bg-pictonBlue-secondary transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-indigoDye-primary hover:text-pictonBlue-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full bg-pictonBlue-primary text-white px-6 py-2 rounded-md hover:bg-pictonBlue-secondary transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
