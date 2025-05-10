import React, { useEffect, useState } from 'react';

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