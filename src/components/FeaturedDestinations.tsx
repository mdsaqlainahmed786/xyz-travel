import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Destination } from '../destination';

interface FeaturedDestinationsProps {
  destinations: Destination[];
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular vacation spots and start planning your next unforgettable journey.
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-gray-700 hover:text-blue-600 focus:outline-none -ml-4 md:ml-4"
            aria-label="Previous destination"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-gray-700 hover:text-blue-600 focus:outline-none -mr-4 md:mr-4"
            aria-label="Next destination"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination) => (
                <div key={destination.id} className="min-w-full">
                  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-5xl">
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                      <img
                        src={destination.images[0]}
                        alt={destination.destination}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <p className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                          Featured
                        </p>
                        <h3 className="text-2xl font-bold text-white">{destination.destination}</h3>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < parseInt(destination.rating) ? "currentColor" : "none"} 
                              className={i < parseInt(destination.rating) ? "" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">{destination.rating} rating</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{destination.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-2">Itinerary Highlights:</h4>
                        <ul className="space-y-1 text-gray-600">
                          {destination.itinerary.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                              {item}
                            </li>
                          ))}
                          {destination.itinerary.length > 3 && (
                            <li className="text-blue-600 font-medium cursor-pointer hover:underline">
                              +{destination.itinerary.length - 3} more days...
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="mt-auto flex flex-wrap items-center justify-between">
                        <div>
                          <p className="text-gray-500 text-sm">Starting from</p>
                          <p className="text-2xl font-bold text-blue-600">${destination.price}</p>
                          <p className="text-gray-500 text-sm">{destination.duration}</p>
                        </div>
                        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;