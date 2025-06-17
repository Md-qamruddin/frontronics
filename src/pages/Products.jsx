import { motion } from 'framer-motion';
import { FaRobot, FaServer, FaBrain, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import SEO from '../components/SEO';

const Products = () => {  const products = [
    {
      title: 'CV Pilot',
      description: 'Create professional, ATS-friendly resumes in minutes with our AI-powered CV builder.',
      icon: <FaRobot className="w-8 h-8" />,
      features: ['Smart CV Builder', 'AI Content Generation', 'Multiple Export Formats'],
      link: '/products/cv-pilot',
      comingSoon: false
    },
    {      title: 'Coding Toys',
      description: 'Interactive coding toys and games to make learning programming fun and engaging.',
      icon: <FaServer className="w-8 h-8" />,
      features: ['Interactive Learning', 'AI-Powered Games', 'Code Playground'],
      link: '/products/toys',
      comingSoon: true
    }
  ];

  return (
    <>
      <SEO 
        title="AI Development Tools & Products | Frontronics"
        description="Explore Frontronics' suite of AI-powered development tools including FrontPilot, BackPilot, and AI Assistant. Build better software faster with our innovative solutions."
        canonical="/products"
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
                Our Products
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our innovative AI-powered development tools
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-primary mb-6">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      to={product.link}
                      className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity inline-block"
                    >
                      Learn More
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
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Transform Your Development?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building better applications faster with our AI-powered tools. Our team is ready to help you get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-block"
                >
                  Contact Us
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-primary text-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;