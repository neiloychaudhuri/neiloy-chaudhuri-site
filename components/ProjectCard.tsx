'use client';

import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  index: number;
  tech?: string;
}

export default function ProjectCard({
  name,
  description,
  link,
  index: _index,
  tech: _tech,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border border-earth-200 hover:border-earth-300 hover:shadow-sm transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-earth-900 group-hover:text-earth-700 transition-colors">
          {name}
        </h3>
        <FiExternalLink className="w-4 h-4 text-earth-400 group-hover:text-earth-600 transition-colors shrink-0 mt-0.5" />
      </div>
      <p className="text-sm text-earth-600 leading-relaxed">{description}</p>
    </a>
  );
}
