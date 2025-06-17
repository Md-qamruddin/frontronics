import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import qrcodeImage from '../assets/qrcode.jpg';
import PageLayout from '../components/layout/PageLayout';

const Payment = () => {
  const qrImageRef = useRef(null);

  // Handle QR code download
  const handleDownload = useCallback(() => {
    const image = qrImageRef.current;
    if (image) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      
      // Draw the image onto the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      
      // Create download link
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'frontronics-payment-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  return (
    <PageLayout
      title="Payment & Donations"
      description="Support our work through secure payments and donations"
      className="pt-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section with reduced height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" // Reduced margin bottom
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2"> {/* Reduced text size and margin */}
            Secure Payment Solutions
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300"> {/* Reduced text size */}
            Choose your preferred payment method and experience hassle-free transactions
          </p>
        </motion.div>

        {/* QR Code Section with Enhanced Design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaQrcode className="mr-3 text-primary" /> Scan & Pay
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Quickly complete your payment by scanning our QR code with your preferred payment app
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                onClick={handleDownload}
              >
                Download QR Code
              </motion.button>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-64 h-64 bg-white rounded-lg shadow-inner p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="w-full h-full border-2 border-dashed border-primary rounded-lg flex items-center justify-center">
                  <img
                    ref={qrImageRef}
                    src={qrcodeImage}
                    alt="Payment QR Code"
                    className="w-56 h-56 object-contain"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Contact Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Need Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-6 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/5 rounded-xl"
            >
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <FaPhoneAlt className="text-primary text-xl" />
              </div>
              <div>                <p className="font-semibold text-lg mb-1">Connect with us</p>
                <p className="text-gray-600 dark:text-gray-400">linkedin.com/company/frontronics</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-6 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/5 rounded-xl"
            >
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Email Support</p>
                <p className="text-gray-600 dark:text-gray-400">frontronics.in@gmail.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Payment;