import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/frontronics.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Frontronics Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-primary">Frontronics</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                location.pathname === '/' ? 'text-primary dark:text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                location.pathname === '/products' ? 'text-primary dark:text-primary' : ''
              }`}
            >
              Products
            </Link>
            <Link
              to="/career"
              className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                location.pathname === '/career' ? 'text-primary dark:text-primary' : ''
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact-us"
              className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                location.pathname === '/contact-us' ? 'text-primary dark:text-primary' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/'
                  ? 'text-primary dark:text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/products'
                  ? 'text-primary dark:text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/career"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/career'
                  ? 'text-primary dark:text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              onClick={toggleMenu}
            >
              Career
            </Link>
            <Link
              to="/contact-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/contact-us'
                  ? 'text-primary dark:text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 