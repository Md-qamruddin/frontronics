import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/frontronics.jpg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const supportDropdownRef = useRef(null);
  const location = useLocation();
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Payment', path: '/payment' },
    {
      name: 'Support',
      submenu: [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const isPaymentTab = (path) => path === '/payment';

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {!imgError ? (
                <img 
                  src={logo} 
                  alt="Frontronics Logo" 
                  className="h-12 w-12 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="h-12 w-12 flex items-center justify-center bg-primary text-white text-xl font-bold rounded">
                  F
                </span>
              )}
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontronics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative" ref={supportDropdownRef}>
                  <button
                    onClick={() => setIsSupportOpen(!isSupportOpen)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative inline-flex items-center
                      ${isSupportOpen 
                        ? 'text-primary dark:text-primary'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                      }`}
                  >
                    {item.name}
                    <FaChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform origin-left ${isSupportOpen ? 'scale-x-100' : ''}`} />
                  </button>
                  {isSupportOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              subItem.highlighted 
                                ? 'bg-primary text-white dark:text-white'
                                : isActivePath(subItem.path)
                                  ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-700'
                                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => setIsSupportOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  key={item.name}
                  whileHover={isPaymentTab(item.path) ? { scale: 1.05 } : {}}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${
                      isPaymentTab(item.path)
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transform transition-all duration-300'
                        : ''
                    }`}
                  >
                    <span className={`${isActivePath(item.path)
                      ? isPaymentTab(item.path) ? 'text-white' : 'text-primary dark:text-primary'
                      : isPaymentTab(item.path) ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                    }`}>
                      {item.name}
                      {isPaymentTab(item.path) && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                        </span>
                      )}
                    </span>
                    {!isPaymentTab(item.path) && (
                      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ${isActivePath(item.path) ? 'scale-x-100' : ''}`} />
                    )}
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary p-2 rounded-md"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsSupportOpen(!isSupportOpen)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium inline-flex items-center justify-between ${
                      isSupportOpen
                        ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                    }`}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSupportOpen && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            subItem.highlighted 
                              ? 'bg-primary text-white dark:text-white'
                              : isActivePath(subItem.path)
                                ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                          }`}
                          onClick={() => {
                            setIsOpen(false);
                            setIsSupportOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isPaymentTab(item.path)
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : isActivePath(item.path)
                        ? 'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {isPaymentTab(item.path) && (
                    <span className="ml-2 inline-flex h-2 w-2 relative">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                    </span>
                  )}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;