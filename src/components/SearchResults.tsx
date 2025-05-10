import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Destination } from '../destination';
import { Sliders as Slider, Search } from 'lucide-react';

interface SearchResultsProps {
  destinations: Destination[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ destinations }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [duration, setDuration] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Get unique locations and durations for filters
  const uniqueLocations = [...new Set(destinations.map(dest => dest.destination.split(',')[1].trim()))];
  const uniqueDurations = [...new Set(destinations.map(dest => dest.duration))];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchesSearch = dest.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = parseInt(dest.price) >= priceRange[0] && parseInt(dest.price) <= priceRange[1];
      const matchesDuration = duration.length === 0 || duration.includes(dest.duration);
      const matchesLocation = location.length === 0 || location.includes(dest.destination.split(',')[1].trim());
      
      return matchesSearch && matchesPrice && matchesDuration && matchesLocation;
    });
  }, [destinations, searchQuery, priceRange, duration, location]);

  const handleDurationToggle = (dur: string) => {
    setDuration(prev => 
      prev.includes(dur) ? prev.filter(d => d !== dur) : [...prev, dur]
    );
  };

  const handleLocationToggle = (loc: string) => {
    setLocation(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 bg-white rounded-xl shadow-lg p-6 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Slider className="text-blue-600" />
              <h2 className="text-xl font-bold">Filters</h2>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="flex items-center gap-4 mb-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-24 px-3 py-2 border rounded-lg"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-24 px-3 py-2 border rounded-lg"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Duration</h3>
              <div className="space-y-2">
                {uniqueDurations.map((dur) => (
                  <label key={dur} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={duration.includes(dur)}
                      onChange={() => handleDurationToggle(dur)}
                      className="rounded text-blue-600"
                    />
                    <span>{dur}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Location</h3>
              <div className="space-y-2">
                {uniqueLocations.map((loc) => (
                  <label key={loc} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={location.includes(loc)}
                      onChange={() => handleLocationToggle(loc)}
                      className="rounded text-blue-600"
                    />
                    <span>{loc}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full px-4 py-3 pl-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" />
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={destination.images[0]}
                      alt={destination.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{destination.destination}</h3>
                      <p className="text-sm opacity-90">{destination.duration}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-xs">Starting from</p>
                        <p className="text-xl font-bold text-blue-600">${destination.price}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No destinations found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;