import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaLinkedin } from 'react-icons/fa';
import MrQamruddin from '../assets/Mr.Qamruddin.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Qamruddin',
      role: 'CEO & Founder',
      image: MrQamruddin,
      bio: 'Visionary leader with extensive experience in software development and business strategy.'
    }
  ];

  const values = [
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: 'Creativity',
      description: 'We encourage creative thinking to solve complex problems.'
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Frontronics
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A multi-industry innovation company building the future across technology, mobility, and lifestyle with five distinct brands serving diverse markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Portfolio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Brand Ecosystem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Five innovative brands serving different industries and markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Front Web Services
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">
                  Live
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Premium website development and SEO services
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete WordPress solutions starting at ₹199
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  FrontSaaS
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">
                  Live
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Digital SaaS products and AI solutions
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cloud-based software solutions for businesses
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Front Pilot
                </h3>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-orange-900 dark:text-orange-200">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Autonomous drone technology for transportation
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ride services and delivery solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Front EV
                </h3>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-orange-900 dark:text-orange-200">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Electric vehicle solutions and technology
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Compact electric cars and sustainable mobility
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  FrontSip
                </h3>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-orange-900 dark:text-orange-200">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Premium beverages and lifestyle products
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drinks, snacks, and tea for modern lifestyle
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide all our brands and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
            <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="text-center mb-4">
                  {value.icon}
                      </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {value.description}
                </p>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the people behind our success
            </p>
          </motion.div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <a
                    href="https://in.linkedin.com/in/md-qamruddin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;