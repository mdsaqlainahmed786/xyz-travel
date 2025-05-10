import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="mr-2 text-blue-400" />
              <span className="text-xl font-bold">XYZ Travel</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating unforgettable travel experiences since 2005. Let us help you discover the world.
            </p>
            <div className="flex space-x-4">
              <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">Travel Deals</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Travel Lane, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@xyztravelagency.com</span>
              </li>
            </ul>
          </div>
          
          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">Visa</div>
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">MasterCard</div>
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">American Express</div>
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">PayPal</div>
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">Apple Pay</div>
            </div>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Verified By</h3>
            <div className="flex gap-2">
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">SSL Secure</div>
              <div className="bg-gray-800 rounded px-3 py-2 text-xs">Travel Association</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} XYZ Travel Agency. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;