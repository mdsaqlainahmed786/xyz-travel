import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Exclusive Travel Deals</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and receive personalized travel recommendations, 
            exclusive offers, and insider tips delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow max-w-md"
              required
            />
            <button 
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Subscribe
              <Send size={16} className="ml-2" />
            </button>
          </form>
          
          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;