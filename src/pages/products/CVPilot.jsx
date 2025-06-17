import React from 'react';
import { FaFileAlt, FaMagic, FaDownload, FaHistory } from 'react-icons/fa';

const features = [
  {
    title: 'Smart CV Builder',
    description: 'AI-powered CV creation with professional templates and formatting',
    icon: <FaFileAlt className="w-8 h-8" />,
  },
  {
    title: 'Auto Content Generation',
    description: 'Generate impactful job descriptions and skill highlights automatically',
    icon: <FaMagic className="w-8 h-8" />,
  },
  {
    title: 'Multiple Formats',
    description: 'Export your CV in PDF, Word, or other professional formats',
    icon: <FaDownload className="w-8 h-8" />,
  },
  {
    title: 'Version Control',
    description: 'Keep track of different versions of your CV for various job applications',
    icon: <FaHistory className="w-8 h-8" />,
  },
];

const CVPilot = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              CV Pilot
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Create professional, ATS-friendly resumes in minutes with our AI-powered CV builder.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Why Choose CV Pilot?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">For Job Seekers</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                ATS-optimized templates that pass screening systems
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                AI-powered content suggestions for better impact
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Quick and easy CV creation in minutes
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">For Professionals</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Multiple CV versions for different roles
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Professional formatting maintained across devices
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                Regular updates with industry-standard templates
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Build Your Professional CV Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start creating your standout CV with our intelligent builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
            <button className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
              View Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPilot;
