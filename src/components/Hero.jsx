import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Mohammed Aman Baig
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300"
        >
          Full-Stack Developer | AI & Web Enthusiast
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg mb-8 text-gray-400 max-w-2xl mx-auto"
        >
          Building scalable web applications and interactive 3D experiences
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="https://github.com" 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
          >
            GitHub
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}