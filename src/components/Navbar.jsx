import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../assets/frontronics.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const location = useLocation();
  const [imgError, setImgError] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2" aria-label="Frontronics Home">
              {!imgError ? (
                <img 
                  src={logo} 
                  alt="Frontronics Logo" 
                  className="h-12 w-12 object-contain"
                  onError={() => setImgError(true)}
                  loading="eager"
                />
              ) : (
                <span className="h-12 w-12 flex items-center justify-center bg-primary text-white text-xl font-bold rounded">
                  F
                </span>
              )}
              <span className="text-2xl font-bold text-primary dark:text-white">
                Frontronics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-100 hover:text-primary font-medium ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/brands"
              className={`text-gray-100 hover:text-primary font-medium ${
                location.pathname === '/brands' ? 'text-primary' : ''
              }`}
              aria-current={location.pathname === '/brands' ? 'page' : undefined}
            >
              Brands
            </Link>
            <Link
              to="/contact"
              className={`text-gray-100 hover:text-primary font-medium ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
            <a
              href="https://blog.frontronics.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-primary font-medium"
            >
              Blog
            </a>
            
            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSupportDropdown}
                className={`text-gray-100 hover:text-primary font-medium flex items-center ${
                  location.pathname === '/about' || location.pathname === '/career' ? 'text-primary' : ''
                }`}
                aria-expanded={isSupportDropdownOpen}
              >
                Support
                <svg className={`ml-1 h-4 w-4 transition-transform ${isSupportDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isSupportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      to="/about"
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === '/about'
                          ? 'text-primary bg-gray-800'
                          : 'text-gray-100 hover:bg-gray-800 hover:text-primary'
                      }`}
                      onClick={() => setIsSupportDropdownOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      to="/career"
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === '/career'
                          ? 'text-primary bg-gray-800'
                          : 'text-gray-100 hover:bg-gray-800 hover:text-primary'
                      }`}
                      onClick={() => setIsSupportDropdownOpen(false)}
                    >
                      Career
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-md p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/'
                ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                : 'text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={toggleMenu}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/brands"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/brands'
                ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                : 'text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={toggleMenu}
            aria-current={location.pathname === '/brands' ? 'page' : undefined}
          >
            Brands
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/contact'
                ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                : 'text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={toggleMenu}
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
          
          {/* Support Section - Mobile */}
          <div className="px-3 py-2">
            <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2">
              Support
            </div>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about'
                  ? 'text-primary bg-gray-800'
                  : 'text-gray-100 hover:bg-gray-800 hover:text-primary'
              }`}
              onClick={toggleMenu}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
            <Link
              to="/career"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/career'
                  ? 'text-primary bg-gray-800'
                  : 'text-gray-100 hover:bg-gray-800 hover:text-primary'
              }`}
              onClick={toggleMenu}
              aria-current={location.pathname === '/career' ? 'page' : undefined}
            >
              Career
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
               location.pathname === '/blog'
                  ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
              aria-current={location.pathname === '/blog' ? 'page' : undefined}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;