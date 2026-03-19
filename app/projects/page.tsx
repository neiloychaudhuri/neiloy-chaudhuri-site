'use client';

import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'CyberCTRL',
    description:
      'A real-time, AI-powered browser extension that warns developers before they copy-paste or install suspicious code, APIs, or libraries.',
    link: 'https://devpost.com/software/devguard',
    tech: 'TypeScript, Chrome APIs, Llama-3.2B-Instruct',
  },
  {
    name: 'ImpostorGPT',
    description:
      'A pass-the-phone party game where players secretly receive roles, with real-time turn-based gameplay built using React and Node.js.',
    link: 'https://github.com/neiloychaudhuri/ImpostorGPT',
    tech: 'React, Node.js, Gemini API',
  },
  {
    name: 'Candid',
    description:
      'A BeReal-style app for private events — everyone gets notified at the same time, snaps a photo, and it all feeds into a shared album you can throw on a big screen.',
    link: 'https://github.com/vavaviper/bereal-dupe',
    tech: 'Next.js, React, Firebase',
  },
  {
    name: 'Singe',
    description:
      'An AI-powered life assessment tool that gives you a brutally honest read on how "cooked" you are — complete with a leaderboard and shareable result cards.',
    link: 'https://getsinged.com/',
    tech: 'Next.js, Gemini API, Supabase, Three.js',
  },
  {
    name: 'Industry 4.0 Case Competition',
    description:
      'A data-driven high school competition focused on manufacturing, big data, and Industry 4.0, organized at the University of Waterloo as Vice President.',
    link: 'https://www.uwindustry4.ca/',
    tech: 'Figma, Notion, Google Cloud, data tooling',
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <section className="py-16 sm:py-24">
        <div className="section-container">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Projects
            </h1>
            <div className="w-20 h-1 bg-earth-500 dark:bg-earth-400 rounded-full mb-4" />
            <p className="text-earth-600 dark:text-earth-400 text-lg max-w-2xl">
              A selection of projects that showcase my approach to building 
              thoughtful, impactful software.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                index={index}
                tech={project.tech}
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

