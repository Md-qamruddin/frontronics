import { motion } from 'framer-motion';
import { FaRobot, FaTools, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import SEO from '../components/SEO';

const Brands = () => {
  const brands = [
    {
      title: 'Front Web Services',
      description: 'Premium SEO & WordPress development services. Complete website solutions from ₹199.',
      icon: <FaRobot className="w-8 h-8" />,
      features: ['WordPress Development', 'SEO Optimization', 'Technical Support', 'Domain & Hosting'],
      link: "https://fws.frontronics.in/",
      status: 'Live',
      category: 'Web Development',
      pricing: 'Starting ₹499'
    },
    {
      title: 'FrontSaaS',
      description: 'Digital SaaS products featuring QuoteCanvas - AI-powered quote-to-image generator for social media and content creation.',
      icon: <FaServer className="w-8 h-8" />,
      features: ['QuoteCanvas (AI Quote Images)', 'AI Background Generation', 'High-Quality PNG Export', 'Social Media Ready'],
      link: "https://frontsaas.frontronics.in/",
      status: 'Live',
      category: 'SaaS Products',
      pricing: 'Free with Pro Features'
    },
    {
      title: 'Frontools',
      description: 'A multi-utility developer and SEO tools platform offering fast, browser-based utilities for students, developers, and creators.',
      icon: <FaTools className="w-8 h-8" />,
      features: ['Developer Utilities', 'SEO Tools', 'Student Tools', 'Creator Tools'],
      link: "https://frontools.frontronics.in/",
      status: 'Live',
      category: 'Web Tools SaaS',
      pricing: 'Freemium'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Brand Portfolio - 3 Innovative Brands | Frontronics"
        description="Explore Frontronics' complete brand ecosystem: Frontools, Front Web Services, and FrontSaaS. Innovation across technology and digital services."
        canonical="/brands"
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
                Our Brand Portfolio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Three innovative brands spanning technology and digital services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary text-xl">{brand.icon}</div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      brand.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {brand.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {brand.title}
                  </h3>
                  
                  <p className="text-sm text-primary dark:text-primary mb-3 font-medium">
                    {brand.category}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {brand.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {brand.features.map((feature, i) => (
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
                      <span className="font-semibold text-gray-900 dark:text-white">{brand.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    {brand.status === 'Coming Soon' ? (
                      <button 
                        disabled
                        className="w-full bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                      >
                        Launching Soon
                      </button>
                    ) : (
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-center"
                      >
                        Explore Brand
                      </a>
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
                Ready to Partner with Frontronics?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in revolutionizing multiple industries. Whether you need web services, SaaS solutions, or want to collaborate on future innovations, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-block"
                >
                  Get In Touch
                </Link>
                <a
                  href="https://fws.frontronics.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  Try Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Brands;