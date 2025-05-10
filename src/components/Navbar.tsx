import React, { useState, useEffect } from "react";
import { Search, Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <Globe
              className={`mr-2 ${isScrolled ? "text-blue-600" : "text-white"}`}
            />
            <span className={`${isScrolled ? "text-blue-600" : "text-white"}`}>
              XYZ Travel
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Destinations
          </a>
          <a
            href="#"
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Deals
          </a>
          <a
            href="#"
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            About Us
          </a>
          <a
            href="#"
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Contact
          </a>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations..."
              className="py-2 pl-10 pr-4 rounded-full text-sm border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-56"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <form onSubmit={handleSearchSubmit} className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full py-2 pl-10 pr-4 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              >
                Deals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
