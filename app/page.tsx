'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import StarField from '@/components/StarField';
import PeekingMoon from '@/components/PeekingMoon';
import { FiArrowRight } from 'react-icons/fi';

const photos = [
  { src: '/photos/photo1.png', alt: 'Neiloy at a cultural celebration' },
  { src: '/photos/photo2.png', alt: 'Neiloy overlooking a city view' },
  { src: '/photos/photo3.png', alt: 'Neiloy at Sagrada Familia' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-shuffle photos with quick snap
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <section className="h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
        {/* Animated stars background */}
        <StarField />
        
        {/* Moon peeking from the right */}
        <PeekingMoon />
        
        <div className="section-container relative z-10">
          <div className="flex flex-row gap-12 items-center justify-center">
            
            {/* Left side - Card shuffle photos (hidden on small screens) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex flex-shrink-0 items-center justify-center"
            >
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Card stack */}
                <div className="relative w-[300px] h-[400px]">
                  {photos.map((photo, index) => {
                    const offset = (index - currentIndex + photos.length) % photos.length;
                    const isActive = offset === 0;
                    const isBehind1 = offset === 1 || offset === -2;
                    const isBehind2 = offset === 2 || offset === -1;
                    
                    return (
                      <motion.div
                        key={photo.src}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isBehind1 ? 0.92 : 0.84,
                          y: isActive ? 0 : isBehind1 ? 15 : 30,
                          x: isActive ? 0 : isBehind1 ? 8 : 16,
                          rotateZ: isActive ? 0 : isBehind1 ? 2 : 4,
                          opacity: isActive ? 1 : isBehind1 ? 0.6 : 0.3,
                          zIndex: isActive ? 30 : isBehind1 ? 20 : 10,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        {/* Glow effect for active card */}
                        {isActive && (
                          <motion.div
                            className="absolute -inset-3 rounded-2xl
                                       bg-earth-400/20 dark:bg-earth-400/15 blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        <div className={`relative h-full overflow-hidden rounded-2xl
                                        ring-2 ${isActive 
                                          ? 'ring-earth-400/50 dark:ring-earth-500/50' 
                                          : 'ring-earth-200/30 dark:ring-earth-700/30'}
                                        shadow-xl shadow-earth-900/20 dark:shadow-black/40`}>
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="300px"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Shuffle indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {photos.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300
                                  ${index === currentIndex 
                                    ? 'bg-earth-600 dark:bg-earth-400' 
                                    : 'bg-earth-300 dark:bg-earth-700'}`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center md:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-earth-500 dark:text-earth-500 text-lg mb-4 font-medium"
              >
                Hi, I&apos;m
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl sm:text-7xl md:text-8xl mb-8
                           text-earth-700 dark:text-earth-100
                           font-serif italic"
              >
                Neiloy
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-earth-600 dark:text-earth-400
                           max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
              >
                I design systems and build products that bridge the gap between{' '}
                <span className="text-earth-700 dark:text-earth-300 font-semibold">
                  engineering
                </span>{' '}
                and{' '}
                <span className="text-earth-700 dark:text-earth-300 font-semibold">
                  human experience
                </span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2 text-lg"
                  >
                    View Projects
                    <FiArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg"
                  >
                    About Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
