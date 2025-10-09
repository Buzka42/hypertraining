import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-20 rounded-3xl"></div>
      
      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground mx-auto">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;