'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'CyberCTRL',
    description:
      'A real-time, AI-powered browser extension that warns developers before they copy-paste or install suspicious code, APIs, or libraries.',
    link: 'https://devpost.com/software/devguard',
    emphasis: 'Developer Security, Product Thinking, AI Integration',
    role: 'Built the end-to-end prototype and UX for the extension.',
    outcome:
      'Helped developers avoid risky snippets at selection time instead of after the fact.',
    tech: 'TypeScript, Chrome APIs, OpenAI API',
  },
  {
    name: 'ImpostorGPT',
    description:
      'A pass-the-phone party game where players secretly receive roles, with real-time turn-based gameplay built using React and Node.js.',
    link: 'https://github.com/neiloychaudhuri/ImpostorGPT',
    emphasis: 'Real-time Systems, API Integration, Full Stack',
    role: 'Designed and implemented real-time game flow and backend.',
    outcome:
      'Supported multiple concurrent games with synchronized turns on modest infra.',
    tech: 'React, Node.js, Socket.io, Redis',
  },
  {
    name: 'Industry 4.0 Case Competition',
    description:
      'A data-driven high school competition focused on manufacturing, big data, and Industry 4.0, organized at the University of Waterloo as Vice President.',
    link: 'https://www.uwindustry4.ca/',
    emphasis: 'Leadership, Systems Thinking, Design Strategy',
    role: 'Vice President and lead organizer for competition experience.',
    outcome:
      'Brought dozens of students to a multi-round competition with industry-backed cases.',
    tech: 'Figma, Notion, Google Cloud, data tooling',
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <section className="py-16 sm:py-24">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Projects
            </h1>
            <div className="w-20 h-1 bg-earth-500 dark:bg-earth-400 rounded-full mb-4" />
            <p className="text-earth-600 dark:text-earth-400 text-lg max-w-2xl">
              A selection of projects that showcase my approach to building 
              thoughtful, impactful software.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                emphasis={project.emphasis}
                index={index}
              />
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-0 w-96 h-96 rounded-full
                          bg-gradient-to-r from-earth-300/15 to-earth-400/10
                          dark:from-earth-700/15 dark:to-earth-600/10
                          blur-3xl pointer-events-none" />
        </div>
      </section>
    </PageTransition>
  );
}

