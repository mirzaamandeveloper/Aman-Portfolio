import React from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

export default function NewHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center relative z-10"
      >
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I turn unclear problems into working systems.
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full-Stack + AI Engineer | Java • Python • React • Node • Machine Learning
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="#thinking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            View My Thinking
          </motion.a>
          <motion.a 
            href="#systems"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-white transition-colors w-full sm:w-auto text-center"
          >
            See Systems I Built
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
