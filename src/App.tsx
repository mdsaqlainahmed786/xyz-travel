import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
// import PopularDestinations from './components/PopularDestinations';
import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { destinations } from './destination';

function App() {
  // Filter featured destinations
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations destinations={featuredDestinations} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;