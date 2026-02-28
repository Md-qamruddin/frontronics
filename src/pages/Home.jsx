import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaServer, FaShieldAlt, FaBrain, FaRocket, FaCode,FaTools } from 'react-icons/fa';
import SEO from '../components/SEO';

// Memoize features array to prevent unnecessary re-renders
const features = [
  {
    title: 'Multi-Industry Expertise',
    description: 'From web tools to SaaS and web development - we innovate across digital sectors',
    icon: <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Proven Track Record',
    description: 'Three successful brands live with Frontools, Front Web Services, and FrontSaaS delivering results',
    icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Future-Ready Innovation',
    description: 'Building tomorrow\'s solutions in SaaS, web tools, and web development',
    icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Affordable Excellence',
    description: 'Premium services starting at ₹199 - quality solutions accessible to all',
    icon: <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'End-to-End Solutions',
    description: 'Complete ecosystem from web tools to SaaS and web development under one roof',
    icon: <FaServer className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Visionary Leadership',
    description: 'Led by experienced founders with a clear roadmap for technological advancement',
    icon: <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

const Home = () => {
  // Memoize brands array to prevent unnecessary re-renders
  const brands = useMemo(() => [
      {
      title: 'Frontools',
      description: 'A multi-utility developer and SEO tools platform offering fast, browser-based utilities for students, developers, and creators.',
      icon: <FaTools className="w-8 h-8" />,
      features: ['Developer Utilities', 'SEO Tools', 'Student Tools', 'Creator Tools'],
      link: "https://frontools.frontronics.in/",
      status: 'Live',
      category: 'Web Tools SaaS',
      pricing: 'Freemium'
    },
    {
      title: 'Front Web Services',
      description: 'Premium SEO & WordPress development services. Complete website solutions from ₹199.',
      icon: <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://fws.frontronics.in/",
      status: 'Live',
      category: 'Web Development'
    },
    {
      title: 'FrontSaaS',
      description: 'Digital SaaS products including QuoteCanvas - AI-powered quote-to-image generator with 1000+ daily users.',
      icon: <FaRobot className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://frontsaas.frontronics.in/",
      status: 'Live',
      category: 'SaaS Products'
    },
  ], []);

  return (
    <>
      <SEO 
        title="Frontronics - Multi-Industry Innovation Company | 3 Brands Across Technology & Lifestyle"
        description="Discover Frontronics' diverse brand portfolio: Frontools (web tools SaaS), Front Web Services (web development), and FrontSaaS (digital products)."
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
                  Multi-industry innovation company with 3 distinct brands
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Innovating Across
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Multiple Industries
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto"
              >
                From web tools to SaaS and web development, Frontronics is building the future across digital sectors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/brands"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Explore Our Brands
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
              className="max-w-4xl mx-auto text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose Frontronics?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Your one-stop innovation partner across technology, modern theme, and delivering excellence from web services to saas
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Innovative Brands</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Brands Live</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹499</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Starting Price</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Industries</div>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary hover:border-secondary"
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

        {/* Brands Section */}
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
                Our Active Brands
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Currently active brands delivering innovative solutions in web development and SaaS products
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow group border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-primary text-xl">
                      {brand.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      brand.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {brand.status}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {brand.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-primary mb-2 font-medium">
                    {brand.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {brand.description}
                  </p>
                  <div className="mt-auto">
                    {brand.status === 'Coming Soon' ? (
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                        Launching Soon
                      </span>
                    ) : (
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Explore Brand
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
                      </a>
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
                Ready to explore our ecosystem?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how Frontronics is revolutionizing digital industries with innovative solutions across web tools, SaaS, and web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/brands"
                  className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Explore Our Brands
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-white dark:bg-gray-800 text-primary border-2 border-primary px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/10 transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;