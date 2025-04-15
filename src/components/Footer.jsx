import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Frontronics
            </h3>
            <p className="text-gray-400">
              Building the future of web development with AI-powered tools and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-primary transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/frontpilot" className="text-gray-400 hover:text-primary transition-colors">
                  FrontPilot
                </Link>
              </li>
              <li>
                <Link to="/products/backpilot" className="text-gray-400 hover:text-primary transition-colors">
                  BackPilot
                </Link>
              </li>
              <li>
                <Link to="/products/ai-assistant" className="text-gray-400 hover:text-primary transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/products/launchpad" className="text-gray-400 hover:text-primary transition-colors">
                  LaunchPad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/c/QAFELECTRONICS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/frontronics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/frontronics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Frontronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;