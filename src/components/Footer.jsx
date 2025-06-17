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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Frontronics
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-xs">
              Building the future of web development with AI-powered tools and innovative solutions.
            </p>
          </div>

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
                  to="/products" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/products' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/products' ? 'page' : undefined}
                >
                  Products
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products/frontpilot" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/products/frontpilot' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/products/frontpilot' ? 'page' : undefined}
                >
                  FrontPilot
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/backpilot" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/products/backpilot' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/products/backpilot' ? 'page' : undefined}
                >
                  BackPilot
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/ai-assistant" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/products/ai-assistant' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/products/ai-assistant' ? 'page' : undefined}
                >
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/launchpad" 
                  className={`text-sm sm:text-base transition-colors inline-block py-1 ${
                    location.pathname === '/products/launchpad' 
                      ? 'text-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                  aria-current={location.pathname === '/products/launchpad' ? 'page' : undefined}
                >
                  LaunchPad
                </Link>
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
                href="https://www.instagram.com/frontronics"
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