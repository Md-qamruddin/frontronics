import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
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
              We're a team of passionate developers and innovators dedicated to building the future of software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
            <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
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
      <section className="py-16 bg-white dark:bg-gray-800">
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
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
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