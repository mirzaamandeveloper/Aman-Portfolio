import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Contact() {
  const contactMethods = [
    { icon: '✉️', label: 'Email', value: 'mdamaanbaig2484@gmail.com', href: 'mailto:mdamaanbaig2484@gmail.com' },
    { icon: '📱', label: 'Phone', value: '7396500556', href: 'tel:7396500556' },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 text-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col sm:flex-row justify-center gap-6 mt-10 sm:mt-12 max-w-2xl mx-auto"
      >
        {contactMethods.map((method) => (
          <motion.a
            key={method.label}
            href={method.href}
            variants={contactVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex-1 bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-600 hover:border-purple-500"
          >
            <div className="text-4xl mb-3">{method.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">{method.label}</h3>
            <p className="text-gray-300 text-sm sm:text-base break-all hover:text-purple-400 transition-colors">{method.value}</p>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mt-12 sm:mt-16 flex justify-center gap-4"
      >
        <motion.a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          LinkedIn
        </motion.a>
        <motion.a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all"
        >
          GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}