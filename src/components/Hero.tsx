import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

const backgrounds = [
  "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
  "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
  "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg"
];

const Hero: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Image Slider */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
          Discover Your Dream Destination
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 animate-fade-in-delay">
          Explore our handpicked selection of breathtaking destinations and create memories that last a lifetime.
        </p>
        
        {/* Search Form */}
        <div className="w-full max-w-4xl bg-opacity-10 backdrop-blur-md rounded-lg p-4 md:p-6 animate-fade-in-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <input
                type="text"
                placeholder="Where to?"
                className="block w-full pl-10 pr-3 py-3 border rounded-lg border-white bg-opacity-20 focus:bg-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <input
                type="text"
                placeholder="When?"
                className="block w-full pl-10 pr-3 py-3 border border-white rounded-lg bg-opacity-20 focus:bg-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
              <Search className="mr-2 h-5 w-5" />
              Search Trips
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;