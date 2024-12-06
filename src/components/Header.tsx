import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo_dye-500 text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://ik.imagekit.io/d36vkx7c33/gakandy/ga-primary-logo-transparent-bg.png"
                alt="Global Associates Kandy Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/services" className="hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/about" className="hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/training" className="hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-sm font-medium">
                Training
              </Link>
              <Link 
                to="/contact" 
                className="bg-picton_blue-500 hover:bg-picton_blue-600 px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo_dye-400"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/services" className="block hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/about" className="block hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link to="/training" className="block hover:bg-indigo_dye-400 px-3 py-2 rounded-md text-base font-medium">
              Training
            </Link>
            <Link to="/contact" className="block bg-picton_blue-500 hover:bg-picton_blue-600 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 