import { Link, useLocation } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleSocialLinkClick = (platform) => {
    // Here you can add analytics or other tracking
    console.log(`Social link clicked: ${platform}`);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="text-center mb-8 pb-8 border-b border-gray-800">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Frontronics
          </h3>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Multi-industry innovation company with 3 brands spanning technology and digital services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/about' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/about' ? 'page' : undefined}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/brands" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/brands' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/brands' ? 'page' : undefined}
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link 
                  to="/career" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/career' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/career' ? 'page' : undefined}
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://fws.frontronics.in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1"
                >
                  Front Web Services
                </a>
              </li>
              <li>
                <a 
                  href="https://frontsaas.frontronics.in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1"
                >
                  FrontSaaS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-300">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/c/QAFELECTRONICS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 -ml-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                aria-label="YouTube"
                onClick={() => handleSocialLinkClick('YouTube')}
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/frontronics_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                aria-label="Instagram"
                onClick={() => handleSocialLinkClick('Instagram')}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/frontronics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                aria-label="LinkedIn"
                onClick={() => handleSocialLinkClick('LinkedIn')}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="mt-4">              <a 
                href="mailto:frontronics.in@gmail.com" 
                className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block py-1"
              >
                frontronics.in@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Frontronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;