'use client';

import { IconType } from 'react-icons';

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
  index: number;
}

export default function SocialIcon({ href, icon: Icon, label, index: _index }: SocialIconProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="flex items-center gap-2 text-sm text-earth-500 hover:text-earth-900 transition-colors"
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
