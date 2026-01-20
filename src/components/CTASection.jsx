import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:mdamaanbaig2484@gmail.com',
      text: 'mdamaanbaig2484@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      text: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      text: 'View on GitHub',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something Meaningful
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            If you're building something meaningful and need someone who learns fast and thinks deep — let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : undefined}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Icon size={20} />
                {contact.text}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
