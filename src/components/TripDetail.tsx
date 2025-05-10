import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Globe, Sun, Umbrella } from 'lucide-react';
import type { Destination } from '../destination';
import Navbar from './NavBar';
import Footer from './Footer';

interface TripDetailProps {
  destinations: Destination[];
}

const TripDetail: React.FC<TripDetailProps> = ({ destinations }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [travelers, setTravelers] = useState(2);

  const destination = destinations.find(d => d.id === parseInt(id || '0'));

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!destination) {
    return (
      <>
        <Navbar onSearch={handleSearch} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Not Found</h2>
            <p className="text-gray-600 mb-6">The trip you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  const calculateTotal = () => {
    const basePrice = parseInt(destination.price);
    return basePrice * travelers;
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={destination.images[currentImageIndex]}
            alt={destination.destination}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            →
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {destination.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold">{destination.destination}</h1>
                  <div className="flex items-center text-yellow-400">
                    <Star fill="currentColor" size={20} />
                    <span className="ml-1 text-gray-700">{destination.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2" />
                    <span>{destination.destination}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe size={18} className="mr-2" />
                    <span>Guided Tour</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">{destination.description}</p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Trip Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Sun className="text-blue-600" />
                      <span>Perfect Weather</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Users className="text-blue-600" />
                      <span>Small Groups</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Globe className="text-blue-600" />
                      <span>Expert Guides</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Umbrella className="text-blue-600" />
                      <span>All-Inclusive</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">Day {index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{day}</h3>
                          <p className="text-gray-600">
                            Experience the beauty and culture of {destination.destination.split(',')[0]}.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-600">${destination.price}</h3>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value))}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 py-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Base Price × {travelers}</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-600">${calculateTotal()}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Book Now
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Free cancellation up to 24 hours before the trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TripDetail;