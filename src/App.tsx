import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import { destinations } from './destination';
import TripDetail from './components/TripDetail';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Hero/>
      <FeaturedDestinations destinations={featuredDestinations} />
      <Testimonials />
      <Footer />
    </>
  );
};

const SearchPage = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <SearchResults destinations={destinations} />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path = "/trip/:id"  element={<TripDetail destinations={destinations} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;