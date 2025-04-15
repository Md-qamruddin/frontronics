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
    icon: <FaBrain className="w-8 h-8" />,
  },
  {
    title: 'Secure by Design',
    description: 'Enterprise-grade security built into every product',
    icon: <FaShieldAlt className="w-8 h-8" />,
  },
  {
    title: 'Rapid Deployment',
    description: 'Deploy your applications with confidence and speed',
    icon: <FaRocket className="w-8 h-8" />,
  },
  {
    title: 'Modern Stack',
    description: 'Built with the latest technologies and best practices',
    icon: <FaCode className="w-8 h-8" />,
  },
];

const Home = () => {
  // Memoize products array to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      title: 'FrontPilot',
      description: 'AI-powered landing page generator that creates stunning, responsive pages in minutes.',
      icon: <FaRobot className="w-8 h-8" />,
      link: '/products/frontpilot',
      comingSoon: false
    },
    {
      title: 'BackPilot',
      description: 'Automated CRUD and internal tools builder to streamline your backend development.',
      icon: <FaServer className="w-8 h-8" />,
      link: '/products/backpilot',
      comingSoon: true
    },
    {
      title: 'LaunchPad',
      description: 'Complete deployment and monitoring solution for your applications.',
      icon: <FaRocket className="w-8 h-8" />,
      link: '/products/launchpad',
      comingSoon: true
    },
    {
      title: 'AI Assistant',
      description: 'Intelligent coding assistant that helps you write better code faster.',
      icon: <FaBrain className="w-8 h-8" />,
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Welcome to Frontronics
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  AI-powered development tools for modern applications
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
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
                className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto"
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
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Explore Our Tools
                </Link>
                <Link
                  to="/contact"
                  className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors transform hover:scale-105 transition-transform"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <div className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose Frontronics?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our tools are designed to help you build better software, faster.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive suite of tools to streamline your development workflow
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      to={product.link}
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                    {product.comingSoon && (
                      <span className="text-primary font-semibold">Coming Soon</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Transform Your Development?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building better applications faster with our AI-powered tools
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary/10 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;