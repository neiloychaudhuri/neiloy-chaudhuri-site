'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
  index: number;
}

export default function SocialIcon({ href, icon: Icon, label, index: _index }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="p-5 rounded-2xl glass-card glow-hover
                 flex items-center justify-center
                 group"
      aria-label={label}
    >
      <Icon className="w-8 h-8 text-earth-600 dark:text-earth-400
                       group-hover:text-earth-800 dark:group-hover:text-earth-200
                       transition-colors duration-200" />
    </motion.a>
  );
}

