import React from 'react';
import { FaGamepad, FaRobot, FaCode, FaPuzzlePiece } from 'react-icons/fa';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Fun and engaging way to learn programming concepts',
    icon: <FaGamepad className="w-8 h-8" />,
  },
  {
    title: 'AI-Powered Games',
    description: 'Games that adapt to your skill level and learning pace',
    icon: <FaRobot className="w-8 h-8" />,
  },
  {
    title: 'Code Playground',
    description: 'Safe environment to experiment with code',
    icon: <FaCode className="w-8 h-8" />,
  },
  {
    title: 'Puzzle Challenges',
    description: 'Solve coding puzzles and improve your skills',
    icon: <FaPuzzlePiece className="w-8 h-8" />,
  },
];

const Toys = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Coding Toys
            </span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Make learning to code fun and engaging with our collection of interactive coding toys and games.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Learning Through Play</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our collection of coding toys and games designed to make learning fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Browse Toys
            </button>
            <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys; 