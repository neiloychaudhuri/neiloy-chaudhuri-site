'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-medium ${
                  pathname === link.href ? 'active text-earth-900 dark:text-earth-100' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Resume Download Button */}
            <a
              href="/Neiloy_Chaudhuri_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-earth-700 dark:bg-earth-400
                         text-earth-50 dark:text-earth-900
                         hover:bg-earth-600 dark:hover:bg-earth-300
                         transition-all duration-200 font-medium
                         hover:scale-105 active:scale-95"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden absolute right-6 sm:right-8 lg:right-12">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-earth-200/50 dark:hover:bg-earth-700/50
                         transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-earth-700 dark:text-earth-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-earth-700 dark:text-earth-300" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="glass mx-4 mt-2 rounded-2xl p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 text-lg font-medium
                                  ${pathname === link.href
                                    ? 'text-earth-900 dark:text-earth-100'
                                    : 'text-earth-600 dark:text-earth-400'
                                  }
                                  hover:text-earth-900 dark:hover:text-earth-100
                                  transition-colors duration-200`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <a
                    href="/Neiloy_Chaudhuri_Resume.pdf"
                    download
                    className="flex items-center gap-2 py-2 text-lg font-medium
                               text-earth-600 dark:text-earth-400
                               hover:text-earth-900 dark:hover:text-earth-100
                               transition-colors duration-200"
                  >
                    <FiDownload className="w-5 h-5" />
                    Resume
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

