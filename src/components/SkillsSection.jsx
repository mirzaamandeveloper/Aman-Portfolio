import React from 'react';
import { motion } from 'framer-motion';
import SkillCanvas from './SkillCanvas';

const skillGroups = [
  {
    category: 'Frontend Engineering',
    description: 'Building responsive, performant user interfaces',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript/TypeScript'],
    color: '#3b82f6',
  },
  {
    category: 'Backend Engineering',
    description: 'Designing scalable, reliable server systems',
    skills: ['Node.js', 'Express', 'Java', 'MongoDB', 'REST APIs', 'Authentication', 'Redis'],
    color: '#8b5cf6',
  },
  {
    category: 'AI & Machine Learning',
    description: 'Training and deploying intelligent systems',
    skills: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Model Optimization'],
    color: '#ec4899',
  },
  {
    category: 'Developer Tools & Cloud',
    description: 'Infrastructure, deployment, and development tooling',
    skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'Deployment', 'Optimization'],
    color: '#06b6d4',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function SkillsSection() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">What I Build With</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical depth across the full stack
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg border border-gray-700 overflow-hidden bg-gray-800 hover:border-gray-600 transition-colors"
            >
              {/* 3D Canvas */}
              <SkillCanvas label={group.category} color={group.color} />
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{group.category}</h3>
                <p className="text-gray-400 text-sm mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
