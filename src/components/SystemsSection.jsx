import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SystemCanvas from './SystemCanvas';

const systems = [
  {
    title: 'AI Plant Disease Detection System',
    problem: 'Farmers struggle to identify crop diseases early, leading to massive yield losses',
    solution: 'Built a computer vision system that detects diseases in real-time from plant images',
    keyDecisions: [
      'Chose TensorFlow with MobileNet for edge deployment',
      'Implemented data augmentation to work with limited labeled datasets',
      'Optimized model size for farming environment constraints',
    ],
    metrics: '92% accuracy across 5 major crop diseases',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'React Native'],
    tradeoffs: 'Prioritized accuracy over speed; 200ms inference is acceptable for agricultural use',
  },
  {
    title: 'E-Commerce Backend System',
    problem: 'Need scalable infrastructure for handling thousands of concurrent users and transactions',
    solution: 'Designed REST APIs with proper authentication, product management, and payment integration',
    keyDecisions: [
      'Used MongoDB for flexible schema and horizontal scaling',
      'Implemented JWT for stateless authentication',
      'Added Redis caching for product catalog and session management',
    ],
    metrics: '50,000+ daily users, sub-200ms API response time',
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
    tradeoffs: 'Chose consistency over availability for payment processing to prevent double-charges',
  },
  {
    title: 'Personal Portfolio Website',
    problem: 'Portfolio must communicate engineer mindset while maintaining exceptional performance and UX',
    solution: 'Built with React + Vite for instant loading, Tailwind for scalable design, Framer Motion for subtle animations',
    keyDecisions: [
      'Used Vite for build optimization and instant dev reloads',
      'Designed around mobile-first approach with responsive breakpoints',
      'Integrated Framer Motion for scroll-triggered animations',
    ],
    metrics: 'Perfect Lighthouse scores, <1s first contentful paint',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    tradeoffs: 'Minimal animations over flashy effects; function over form',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function SystemsSection() {
  return (
    <section id="systems" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Systems I Built</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not just projects—production-ready systems solving real problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {systems.map((system, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 3D Canvas */}
                <div className="lg:col-span-1">
                  <SystemCanvas />
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">{system.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Problem</h4>
                        <p className="text-gray-300 leading-relaxed">{system.problem}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Solution</h4>
                        <p className="text-gray-300 leading-relaxed">{system.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Outcome</h4>
                        <p className="text-blue-400 font-semibold">{system.metrics}</p>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Key Decisions</h4>
                        <ul className="space-y-2">
                          {system.keyDecisions.map((decision, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{decision}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Trade-offs</h4>
                        <p className="text-gray-300 text-sm italic">{system.tradeoffs}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {system.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
