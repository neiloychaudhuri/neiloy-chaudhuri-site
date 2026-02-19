'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiDownload, FiHome } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
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
      
      // Determine if we're scrolled past the initial position
      setIsScrolled(currentScrollY > 20);
      
      // Show navbar when scrolling up or at the top
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
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-transparent backdrop-blur-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="section-container relative flex items-center justify-center">
          <div className="flex w-full items-center justify-between gap-2 sm:justify-center sm:gap-8 flex-nowrap whitespace-nowrap py-1 text-xs sm:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-medium ${
                  pathname === link.href ? 'active text-earth-900 dark:text-earth-100' : ''
                }`}
                aria-label={link.label}
              >
                {link.href === '/' ? <FiHome className="w-4 h-4 sm:w-5 sm:h-5" /> : link.label}
              </Link>
            ))}
            
            {/* Resume Download Button */}
            <a
              href="/Neiloy_Chaudhuri_Resume.pdf"
              download
              aria-label="Download resume"
              title="Download resume"
              className="flex items-center gap-1 px-2 py-1 sm:gap-2 sm:px-4 sm:py-2 rounded-lg
                         bg-earth-700 dark:bg-earth-400
                         text-earth-50 dark:text-earth-900
                         hover:bg-earth-600 dark:hover:bg-earth-300
                         transition-all duration-200 font-medium
                         hover:scale-105 active:scale-95"
            >
              <FiDownload className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

