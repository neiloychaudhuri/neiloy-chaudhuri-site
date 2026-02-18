'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  emphasis: string;
  index: number;
  role?: string;
  tech?: string;
  outcome?: string;
}

export default function ProjectCard({
  name,
  description,
  link,
  emphasis,
  index: _index,
  role,
  tech,
  outcome,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -5 }}
      className="block glass-card p-8 cursor-pointer group glow-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-200
                       group-hover:text-earth-600 dark:group-hover:text-earth-400
                       transition-colors duration-200">
          {name}
        </h3>
        <FiExternalLink className="w-5 h-5 text-earth-500 dark:text-earth-400
                                    group-hover:text-earth-700 dark:group-hover:text-earth-300
                                    transition-all duration-200
                                    group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      <p className="text-earth-600 dark:text-earth-400 mb-4 leading-relaxed">
        {description}
      </p>

      {(role || outcome || tech) && (
        <div className="mb-4 space-y-1 text-sm text-earth-700 dark:text-earth-300">
          {role && (
            <p>
              <span className="font-medium">Role:</span> {role}
            </p>
          )}
          {outcome && (
            <p>
              <span className="font-medium">Outcome:</span> {outcome}
            </p>
          )}
          {tech && (
            <p className="text-xs text-earth-500 dark:text-earth-400">
              Tech: {tech}
            </p>
          )}
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {emphasis.split(', ').map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full
                       bg-earth-200/60 dark:bg-earth-700/60
                       text-earth-700 dark:text-earth-300
                       border border-earth-300/50 dark:border-earth-600/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

