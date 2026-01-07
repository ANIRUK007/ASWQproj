import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12 mt-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-[#6B7F69] rounded-full p-2">
              <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wider text-gray-800">JAHANJI</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-[#6B7F69] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-sm font-medium text-gray-600 hover:text-[#6B7F69] transition-colors"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-[#6B7F69] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-[#6B7F69] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#"
              className="bg-gray-100 p-2 rounded-full hover:bg-[#6B7F69] hover:text-white transition-all duration-300"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-2 rounded-full hover:bg-[#6B7F69] hover:text-white transition-all duration-300"
            >
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-2 rounded-full hover:bg-[#6B7F69] hover:text-white transition-all duration-300"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-2 rounded-full hover:bg-[#6B7F69] hover:text-white transition-all duration-300"
            >
              <Youtube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <p className="text-xs md:text-sm text-gray-500 text-center">
            Copyright 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
