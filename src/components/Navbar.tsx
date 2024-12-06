import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const COMPANY_LOGO = "https://ik.imagekit.io/d36vkx7c33/gakandy/ga-primary-logo-transparent-bg.png?updatedAt=1733479652049";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src={COMPANY_LOGO}
                alt="Global Associates Logo" 
                className="h-16 w-auto -my-2"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}