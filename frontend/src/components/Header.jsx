import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flower2, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <div className="bg-[#6B7F69] rounded-full p-2">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wider text-gray-800">JAHANJI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/events') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Events
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/about') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/contact') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Register Button */}
          <Button className="hidden md:block bg-[#6B7F69] hover:bg-[#5a6b58] text-white px-6 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
            Register Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-[#6B7F69] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`text-base font-medium transition-colors hover:text-[#6B7F69] py-2 ${
                  isActive('/') ? 'text-[#6B7F69]' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/events"
                onClick={closeMobileMenu}
                className={`text-base font-medium transition-colors hover:text-[#6B7F69] py-2 ${
                  isActive('/events') ? 'text-[#6B7F69]' : 'text-gray-600'
                }`}
              >
                Events
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`text-base font-medium transition-colors hover:text-[#6B7F69] py-2 ${
                  isActive('/about') ? 'text-[#6B7F69]' : 'text-gray-600'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`text-base font-medium transition-colors hover:text-[#6B7F69] py-2 ${
                  isActive('/contact') ? 'text-[#6B7F69]' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
              <Button className="bg-[#6B7F69] hover:bg-[#5a6b58] text-white px-6 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md w-full mt-2">
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
