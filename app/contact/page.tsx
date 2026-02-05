'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SocialIcon from '@/components/SocialIcon';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socials = [
  {
    href: 'mailto:neiloy.chaudhuri@uwaterloo.ca',
    icon: FiMail,
    label: 'Email',
  },
  {
    href: 'https://github.com/neiloychaudhuri',
    icon: FiGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/neiloyc/',
    icon: FiLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/_neiloy',
    icon: FiTwitter,
    label: 'X (Twitter)',
  },
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="py-16 sm:py-24 min-h-[calc(100vh-16rem)] flex items-center">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Get in Touch
            </h1>
            <div className="w-20 h-1 bg-earth-500 dark:bg-earth-400 rounded-full mx-auto mb-6" />
            <p className="text-earth-600 dark:text-earth-400 text-lg max-w-md mx-auto">
              Always open to new opportunities and conversations.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center gap-6 flex-wrap items-center"
          >
            {socials.map((social, index) => (
              <SocialIcon
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
                index={index}
              />
            ))}
            
            {/* UWaterloo Webring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-5 rounded-2xl glass-card glow-hover flex items-center justify-center"
            >
              <a
                href="https://uwaterloo.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-600 dark:text-earth-400 hover:text-earth-800 dark:hover:text-earth-200 transition-colors duration-200"
                aria-label="UWaterloo Network"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full
                          bg-gradient-radial from-earth-300/10 to-transparent
                          dark:from-earth-700/10 dark:to-transparent
                          blur-3xl pointer-events-none" />
        </div>
      </section>
    </PageTransition>
  );
}

