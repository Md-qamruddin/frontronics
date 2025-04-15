import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverable = true,
  ...props
}) => {
  const baseStyles = 'bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-all duration-200';
  
  const classes = [
    baseStyles,
    hoverable && 'hover:shadow-xl',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      className={classes}
      whileHover={hoverable ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;