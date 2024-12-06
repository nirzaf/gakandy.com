import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-indigoDye-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+9481-2225 488</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+94777654509</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+94764760225</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@gakandy.com" className="hover:text-pictonBlue-primary">
                  info@gakandy.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              <address className="not-italic">
                No 291, D.S Senanayake Veediya,<br />
                Kandy, Sri Lanka
              </address>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pictonBlue-primary">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-pictonBlue-primary">Services</a>
              </li>
              <li>
                <a href="/training" className="hover:text-pictonBlue-primary">Training</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pictonBlue-primary">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-indigoDye-secondary text-center">
          <p>&copy; {new Date().getFullYear()} Global Associates Kandy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
