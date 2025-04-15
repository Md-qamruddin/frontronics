import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaExclamationTriangle, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LaunchPad = () => {
  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'One-click Deployment',
      description: 'Deploy your applications with a single click to any cloud platform.'
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Monitor your application performance in real-time with detailed metrics.'
    },
    {
      icon: <FaExclamationTriangle className="w-6 h-6" />,
      title: 'Error Tracking',
      description: 'Track and analyze errors across your application stack.'
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Get comprehensive insights into your application usage and performance.'
    }
  ];

  return (
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
              LaunchPad
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete deployment and monitoring solution for your applications
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Streamline your deployment and monitoring process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Ready to Launch Your Application?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Start using LaunchPad today and simplify your deployment process
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LaunchPad;