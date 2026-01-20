import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-gray-800 bg-gray-950">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <p className="text-gray-400 text-sm mb-2">
          © {new Date().getFullYear()} Mohammed Aman Baig. Built with React, Vite, and Framer Motion.
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xs"
        >
          Engineer first. Designer second. Always learning.
        </motion.p>
      </motion.div>
    </footer>
  );
}