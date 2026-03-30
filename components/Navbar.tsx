'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Work' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-earth-100' : 'bg-white'
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-sm font-semibold text-earth-900 hover:text-earth-600 transition-colors"
        >
          Neiloy Chaudhuri
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-earth-900'
                  : 'text-earth-500 hover:text-earth-800'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/Neiloy_Chaudhuri_Resume.pdf"
            download
            aria-label="Download resume"
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg
                       bg-earth-900 text-white hover:bg-earth-700
                       transition-colors duration-200"
          >
            <FiDownload className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
