import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("zj8nMIMW951QFIMCA");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Check if we have a hash in the URL
    if (window.location.hash === '#contact-heading') {
      // Find the element
      const element = document.getElementById('contact-heading');
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });    try {
      const templateParams = {
        to_name: 'Frontronics Team',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };      await emailjs.send(
        'service_4lj9qyf',  // Your EmailJS service ID
        'template_qiw43cf', // Your EmailJS template ID
        templateParams
      );

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setSubmitStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        message: 'Sorry, there was an error sending your message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'frontronics.in@gmail.com',
    },
    {
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/company/frontronics',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Address',
      value: 'India',
    },
  ];

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with our team for any questions or inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.h1
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 sm:p-8 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white text-base"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white text-base"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white text-base"
                  required
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white text-base"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg transition-opacity text-base sm:text-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus.message && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    submitStatus.isError
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Have questions or need assistance? Our team is here to help you.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="text-primary mt-1">{info.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Map or Additional Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Business Hours
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                Saturday - Sunday: Closed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;