import React from 'react';
import { motion } from 'framer-motion';

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

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

export default function Projects() {
  const projects = [
    {
      title: 'Jupiter5000',
      description: 'An AI-based futuristic web project with interactive features.',
      liveUrl: 'https://jupiter5000.netlify.app/',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 text-center bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={projectVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl w-full sm:w-96 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500"
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="mb-6 text-gray-300 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
              >
                Live Demo
              </motion.a>
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all w-full sm:w-auto"
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}