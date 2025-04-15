import { motion } from 'framer-motion';
import { FaRobot, FaBolt, FaPalette, FaMobile, FaCode, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import SEO from '../../components/SEO';

const FrontPilot = () => {
  const features = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: 'AI-Powered Design',
      description: 'Generate stunning layouts and designs using advanced AI algorithms.'
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: 'Rapid Development',
      description: 'Create landing pages in minutes instead of hours or days.'
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: 'Custom Templates',
      description: 'Choose from a variety of customizable templates for any industry.'
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'All pages are automatically optimized for any device size.'
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'Clean Code Output',
      description: 'Generate production-ready, optimized code for your pages.'
    },
    {
      icon: <FaWrench className="w-6 h-6" />,
      title: 'Easy Customization',
      description: 'Fine-tune every aspect of your design with our intuitive interface.'
    }
  ];

  return (
    <>
      <SEO 
        title="FrontPilot - AI Landing Page Generator | Frontronics"
        description="Create stunning, responsive landing pages in minutes with FrontPilot. Our AI-powered tool generates optimized, conversion-focused pages tailored to your needs."
        canonical="/products/frontpilot"
        type="product"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FrontPilot
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                AI-powered landing page generator that creates stunning, responsive pages in minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
                <Link
                  to="/products"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to create beautiful landing pages quickly and efficiently
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Build Your Landing Page?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Start creating beautiful, responsive landing pages in minutes with FrontPilot
              </p>
              <Link
                to="/products"
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-block"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrontPilot;