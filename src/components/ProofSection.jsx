import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const proofs = [
  {
    label: 'GitHub',
    description: 'Where code lives. Open source contributions and systems.',
    url: 'https://github.com',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    description: 'Professional background and recommendations from colleagues.',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'Email',
    description: 'Direct line. Let me know what you are building.',
    url: 'mailto:mdamaanbaig2484@gmail.com',
    icon: Mail,
  },
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

export default function ProofSection() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Proof, Not Claims</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Links to code, recommendations, and direct contact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {proofs.map((proof, index) => {
            const Icon = proof.icon;
            return (
              <motion.a
                key={index}
                href={proof.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group cursor-pointer"
              >
                <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{proof.label}</h3>
                <p className="text-gray-400 mb-4">{proof.description}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Visit <ExternalLink size={16} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
