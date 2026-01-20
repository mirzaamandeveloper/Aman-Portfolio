import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  const skills = ['React', 'Node.js', 'MongoDB', 'Java', 'TailwindCSS', 'Three.js'];

  return (
    <section className="py-16 sm:py-20 px-4 text-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
          I'm a passionate Full-Stack Developer and AI enthusiast specializing in creating scalable web applications and interactive 3D experiences.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm sm:text-base font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}