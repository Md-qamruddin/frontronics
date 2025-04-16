import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaServer, FaShieldAlt, FaBrain, FaRocket, FaCode } from 'react-icons/fa';
import SEO from '../components/SEO';

// Memoize features array to prevent unnecessary re-renders
const features = [
  {
    title: 'AI-Powered Development',
    description: 'Leverage cutting-edge AI to accelerate your development process',
    icon: <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Secure by Design',
    description: 'Enterprise-grade security built into every product',
    icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Rapid Deployment',
    description: 'Deploy your applications with confidence and speed',
    icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Modern Stack',
    description: 'Built with the latest technologies and best practices',
    icon: <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

const Home = () => {
  // Memoize products array to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      title: 'FrontPilot',
      description: 'AI-powered landing page generator that creates stunning, responsive pages in minutes.',
      icon: <FaRobot className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: '/products/frontpilot',
      comingSoon: false
    },
    {
      title: 'BackPilot',
      description: 'Automated CRUD and internal tools builder to streamline your backend development.',
      icon: <FaServer className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: '/products/backpilot',
      comingSoon: true
    },
    {
      title: 'LaunchPad',
      description: 'Complete deployment and monitoring solution for your applications.',
      icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: '/products/launchpad',
      comingSoon: true
    },
    {
      title: 'AI Assistant',
      description: 'Intelligent coding assistant that helps you write better code faster.',
      icon: <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: '/products/ai-assistant',
      comingSoon: true
    },
  ], []);

  return (
    <>
      <SEO 
        title="Frontronics - AI-Powered Development Tools & Smart Technology"
        description="Transform your development process with Frontronics' AI-powered tools. From automated landing pages to intelligent coding assistants, discover our innovative solutions."
        canonical="/"
      />
      <div className="min-h-screen">
        {/* Welcome Section */}
        <section className="relative min-h-[80vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 dark:bg-gray-900 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto relative z-10 w-full py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-4 sm:mb-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Welcome to Frontronics
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">
                  AI-powered development tools for modern applications
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Build Better Software
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  with AI-Powered Tools
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto"
              >
                Accelerate your development workflow with our suite of intelligent tools designed for modern developers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Explore Our Tools
                </Link>
                <Link
                  to="/contact"
                  className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-6 py-3 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/10 transition-colors transform hover:scale-105 transition-transform"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose Frontronics?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Our tools are designed to help you build better software, faster.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Products
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive suite of tools to streamline your development workflow
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="text-primary mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    {product.comingSoon ? (
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    ) : (
                      <Link
                        to={product.link}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Learn more
                        <svg
                          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to supercharge your development?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of developers who are building faster and smarter with Frontronics tools.
              </p>
              <Link
                to="/products"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;