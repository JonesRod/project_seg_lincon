import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://solidyprotecaoveicular.com.br/wp-content/uploads/2025/05/logo-da-solidy.png"
            alt="Solidy Proteção Veicular"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </motion.header>
  );
};