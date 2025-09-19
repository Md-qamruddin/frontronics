import { motion } from 'framer-motion';
import { FaImage, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
import SEO from '../components/SEO';

const FrontSaaS = () => {
  const products = [
    {
      title: 'QuoteCanvas',
      description: 'AI-powered quote-to-image generator for social media, presentations, and personal inspiration. Create stunning visual quotes in seconds.',
      icon: <FaImage className="w-6 h-6 sm:w-8 sm:h-8" />,
      features: ['AI Background Generation', 'High-Quality PNG Export', 'Custom Image Upload', 'Social Media Ready', 'Real-time Preview'],
      link: "https://quotecanvas.frontronics.in/",
      status: 'Live',
      category: 'Creative Tools',
      pricing: 'Free with Pro Features',
      users: '1000+ Daily Users'
    }
  ];

  return (
    <>
      <SEO 
        title="FrontSaaS - AI-Powered SaaS Products | Frontronics"
        description="Explore FrontSaaS products including QuoteCanvas AI quote generator, Analytics Suite, and Code Assistant Pro. Innovative SaaS solutions for modern businesses."
        canonical="/frontsaas"
        type="website"
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
                FrontSaaS Products
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                AI-powered SaaS solutions designed to enhance productivity and creativity for modern businesses and individuals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary text-xl">{product.icon}</div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      product.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-primary dark:text-primary mb-3 font-medium">
                    {product.category}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Pricing: </span>
                      <span className="font-semibold text-gray-900 dark:text-white">{product.pricing}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Users: </span>
                      <span className="font-semibold text-primary">{product.users}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    {product.status === 'Coming Soon' ? (
                      <button 
                        disabled
                        className="w-full bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                      >
                        Launching Soon
                      </button>
                    ) : (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-center"
                      >
                        Try {product.title}
                      </a>
                    )}
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already leveraging our AI-powered tools to boost their productivity and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://quotecanvas.frontronics.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform inline-flex items-center justify-center"
                >
                  Try QuoteCanvas Free
                  <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors transform hover:scale-105 transition-transform"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrontSaaS;