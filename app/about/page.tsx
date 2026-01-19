'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import StarField from '@/components/StarField';

export default function About() {
  return (
    <PageTransition>
      <section className="py-16 sm:py-24 relative overflow-hidden min-h-screen">
        {/* Star background */}
        <StarField />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
                About Me
              </h1>
              <div className="w-20 h-1 bg-earth-500 dark:bg-earth-400 rounded-full" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card p-8 sm:p-10"
            >
              <div className="space-y-6 text-lg text-earth-700 dark:text-earth-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  I&apos;m a{' '}
                  <span className="font-semibold text-earth-800 dark:text-earth-200">
                    Management Engineering
                  </span>{' '}
                  student at the University of Waterloo, where I&apos;ve developed a unique perspective 
                  that sits at the intersection of technology, design, and business. My background 
                  gives me the ability to see both the forest and the trees, understanding how 
                  individual technical decisions ripple through entire systems and organizations.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  I&apos;m drawn to problems that require{' '}
                  <span className="font-semibold text-earth-800 dark:text-earth-200">
                    systems thinking
                  </span>—whether that&apos;s architecting scalable software, designing intuitive 
                  user experiences, or optimizing complex workflows. I approach every project with 
                  deep{' '}
                  <span className="font-semibold text-earth-800 dark:text-earth-200">
                    curiosity
                  </span>{' '}
                  and a commitment to learning fast. I believe the best engineers are also 
                  designers at heart: people who care deeply about both how things work and 
                  how they feel to use.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                  to projects that push me outside my comfort zone, and constantly seeking to 
                  understand the &quot;why&quot; behind every system I encounter.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/3 right-0 w-72 h-72 rounded-full
                          bg-gradient-to-bl from-earth-300/20 to-earth-400/10
                          dark:from-earth-700/20 dark:to-earth-600/10
                          blur-3xl pointer-events-none" />
          <div className="absolute -z-10 bottom-1/4 left-0 w-80 h-80 rounded-full
                          bg-gradient-to-tr from-earth-400/15 to-earth-300/10
                          dark:from-earth-600/15 dark:to-earth-700/10
                          blur-3xl pointer-events-none" />
        </div>
      </section>
    </PageTransition>
  );
}
