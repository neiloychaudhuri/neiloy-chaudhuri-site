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
              <div className="space-y-8 text-lg text-earth-700 dark:text-earth-300 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-3"
                >
                  <p>
                    I&apos;m a{' '}
                    <span className="font-semibold text-earth-800 dark:text-earth-200">
                      Management Engineering student at the University of Waterloo
                    </span>{' '}
                    who builds software at the intersection of systems, data, and user experience.
                    My work so far spans healthcare data, banking backends, advanced manufacturing,
                    and student-run competitions.
                  </p>
                  <p className="text-base text-earth-600 dark:text-earth-400">
                    Recently, I&apos;ve worked as a{' '}
                    <span className="font-medium">Data Engineer Intern at Spectrum Health Care</span>, a{' '}
                    <span className="font-medium">Software Engineering Intern at TD</span>, and an{' '}
                    <span className="font-medium">Advanced Manufacturing Engineer Intern at Kal-Polymers</span>.
                    Outside internships, I helped run the{' '}
                    <span className="font-medium">Industry 4.0 Case Competition</span> as a VP and organizer.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-y-3"
                >
                  <h2 className="text-xl font-semibold text-earth-800 dark:text-earth-200">
                    How I think about engineering
                  </h2>
                  <p className="text-base text-earth-700 dark:text-earth-300">
                    I like problems where you have to balance real constraints: latency, data quality,
                    business rules, and how the product actually feels in someone&apos;s hands. I use
                    systems thinking to understand how a small change in one part of the stack affects
                    reliability, operations, and the user experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-3"
                >
                  <h2 className="text-xl font-semibold text-earth-800 dark:text-earth-200">
                    How I work
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-base text-earth-700 dark:text-earth-300">
                    <li>
                      <span className="font-medium">Ship small, production-ready pieces</span> – I prefer
                      tight end-to-end slices over half-finished systems.
                    </li>
                    <li>
                      <span className="font-medium">Debug from first principles</span> – trace data and
                      requests instead of relying only on framework magic.
                    </li>
                    <li>
                      <span className="font-medium">Design with constraints in mind</span> – infra, time,
                      and the people who will maintain the system.
                    </li>
                    <li>
                      <span className="font-medium">Communicate clearly</span> – write down decisions and
                      trade-offs so teammates can follow the reasoning.
                    </li>
                  </ul>
                </motion.div>
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
