import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Code } from 'lucide-react';
import ApproachCanvas from './ApproachCanvas';

const approaches = [
  {
    icon: Brain,
    title: 'Problem First',
    description: 'I start with understanding constraints, users, and failure cases before writing code. Context precedes implementation.',
    type: 'brain',
    color: '#3b82f6',
    speed: 0.5,
  },
  {
    icon: Zap,
    title: 'Build → Break → Improve',
    description: 'I intentionally test limits, break systems, and iterate for scalability. Failure is information, not a setback.',
    type: 'lightning',
    color: '#ec4899',
    speed: 0.7,
  },
  {
    icon: Code,
    title: 'Engineer Mindset',
    description: 'I prioritize clean architecture, performance, and long-term maintainability over quick wins.',
    type: 'code',
    color: '#8b5cf6',
    speed: 0.6,
  },
];

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
    transition: { duration: 0.6 },
  },
};

export default function ThinkingSection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">How I Approach Problems</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My framework for building systems that scale
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors bg-gray-800"
              >
                {/* 3D Canvas */}
                <ApproachCanvas type={approach.type} color={approach.color} speed={approach.speed} />

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 text-blue-400">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{approach.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
