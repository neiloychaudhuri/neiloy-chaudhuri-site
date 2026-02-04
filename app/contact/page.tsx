'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
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
            className="flex justify-center gap-6 flex-wrap"
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
          </motion.div>

          {/* UWaterloo Webring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mt-10"
          >
            <Script
              src="https://uwaterloo.network/embed.js"
              data-webring=""
              data-user="neiloy"
              strategy="lazyOnload"
            />
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

