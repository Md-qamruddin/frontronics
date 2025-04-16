import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
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
                <Link to="/" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/frontpilot" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  FrontPilot
                </Link>
              </li>
              <li>
                <Link to="/products/backpilot" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  BackPilot
                </Link>
              </li>
              <li>
                <Link to="/products/ai-assistant" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/products/launchpad" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors inline-block py-1">
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
                className="text-gray-400 hover:text-primary transition-colors p-2 -ml-2"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/frontronics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/frontronics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="mt-4">
              <a href="mailto:contact@frontronics.com" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">
                contact@frontronics.com
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