import { motion } from 'framer-motion';

const PageLayout = ({
  children,
  title,
  description,
  className = '',
  showHeader = true,
  ...props
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {showHeader && (
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {title && (
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${className}`} {...props}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout; 