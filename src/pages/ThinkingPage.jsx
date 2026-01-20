import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Footer from '../components/Footer';

const lessons = [
  {
    title: 'Overengineering Early',
    description: 'Built a microservices architecture for a prototype. Should have started monolithic.',
    improvement: 'Now I validate product-market fit before optimizing for scale.',
  },
  {
    title: 'Ignoring Performance Until Production',
    description: 'Implemented an N+1 query problem in a production API. 50ms became 5 seconds.',
    improvement: 'Profile early and often. Performance is a feature, not an afterthought.',
  },
  {
    title: 'No Tests Until Crisis',
    description: 'A refactor broke 3 systems simultaneously because I had no test coverage.',
    improvement: 'Tests are insurance. Not writing them is betting against yourself.',
  },
  {
    title: 'Underestimating Deployment Complexity',
    description: 'Estimated 1 hour, took 8 hours. Lacked database migration and rollback planning.',
    improvement: 'Infrastructure as code, automated deployments, proper staging environments.',
  },
  {
    title: 'Not Asking for Help Early',
    description: 'Spent 2 days debugging when a 5-minute conversation could have solved it.',
    improvement: 'Communication bandwidth is an asset. Use it strategically.',
  },
  {
    title: 'Perfectionism Over Progress',
    description: 'Rewrote the same component 3 times because it was never perfect enough.',
    improvement: 'Ship 1.0 with 70% perfection. Iterate based on real feedback.',
  },
];

const improvements = [
  'Building a distributed tracing system to catch performance regressions early',
  'Implementing chaos engineering to understand failure modes before they happen',
  'Writing more production code to understand deployment challenges',
  'Contributing to open source to learn how mature systems handle edge cases',
  'Studying distributed systems deeply instead of just knowing the buzzwords',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ThinkingPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ChevronLeft size={20} />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">How I Think</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Mistakes made, lessons learned, and what comes next. This page is intentionally visible—engineering is about transparency and continuous improvement.
          </p>
        </motion.div>

        {/* Mistakes Section */}
        <motion.div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-8"
          >
            Engineering Mistakes
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gray-900 rounded-lg border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 text-red-400">{lesson.title}</h3>
                <p className="text-gray-300 mb-4">{lesson.description}</p>
                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-blue-400">Lesson:</span> {lesson.improvement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Improvements Section */}
        <motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            What I'm Improving Next
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {improvements.map((improvement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <p className="text-gray-200 flex items-start gap-4">
                  <span className="text-blue-400 font-bold mt-1">→</span>
                  <span>{improvement}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 p-8 bg-gray-900 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
          <p className="text-gray-300 leading-relaxed">
            I believe the best engineers are those who've failed and learned from it. Every mistake here represents a level of system thinking I've gained. The difference between juniors and seniors isn't fewer mistakes—it's faster learning loops.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
