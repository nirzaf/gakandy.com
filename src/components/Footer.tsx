import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigoDye-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white/95 rounded-lg p-3 inline-block mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(34,176,235,0.12)] group transition-all duration-300">
              <img 
                src="https://ik.imagekit.io/d36vkx7c33/gakandy/logo-wihtout-text.png?updatedAt=1733490143012"
                alt="Global Associates Logo"
                className="h-12 w-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A leading professional services firm providing comprehensive financial and business solutions in Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pictonBlue-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  No 291, D.S Senanayake Veediya, Kandy, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pictonBlue-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+9481-2225 488</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pictonBlue-primary flex-shrink-0" />
                <a href="mailto:info@gakandy.com" className="text-gray-300 hover:text-pictonBlue-primary transition-colors text-sm">
                  info@gakandy.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pictonBlue-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Global Associates. All rights reserved.
            </div>
            <div className="text-sm text-gray-300">
              Powered by{' '}
              <a
                href="https://quadrate.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pictonBlue-primary hover:text-pictonBlue-secondary transition-colors"
              >
                Quadrate Tech Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
