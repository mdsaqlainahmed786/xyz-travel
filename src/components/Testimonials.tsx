import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    text: "Our trip to Bali was absolutely magical! XYZ Travel took care of every detail, from airport transfers to accommodations. Our guide was knowledgeable and friendly. We'll definitely book with them again!",
    destination: "Bali, Indonesia"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    text: "The Kyoto itinerary was perfect - a great balance of cultural experiences and free time. The cherry blossom viewing spots they recommended were less crowded than the tourist traps. Highly recommend!",
    destination: "Kyoto, Japan"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "London, UK",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 4,
    text: "Santorini was even more beautiful than in the photos. The hotel had the most amazing caldera views. The only reason for 4 stars instead of 5 is that one of our tours was delayed, but the team quickly resolved it.",
    destination: "Santorini, Greece"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of travelers choose XYZ Travel for their dream vacations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3 text-white">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              
              <p className="text-blue-600 font-medium">
                Trip: {testimonial.destination}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;