import React from 'react';
import { motion } from 'framer-motion';

const differences = [
  'AI + Full Stack combined—I speak both languages',
  'Product thinking over assignments—I ask "why" before "how"',
  'Focus on impact, not just code—Systems matter more than syntax',
  'Preparing for industry before graduation—Already thinking at scale',
  'Systems thinking, not just features—Understanding constraints and trade-offs',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function DifferenceSection() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">What Makes Me Different</h2>
          <p className="text-gray-400 text-lg">
            Why I'm not another developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <p className="text-lg text-gray-200 leading-relaxed">{diff}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
