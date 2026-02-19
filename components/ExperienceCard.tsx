'use client';

import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceCardProps {
  role: string;
  company: string;
  period?: string;
  website?: string;
  logoSrc?: string;
  logoBgClass?: string;
  bullets: string[];
  index: number;
}

export default function ExperienceCard({
  role,
  company,
  website,
  logoSrc,
  logoBgClass = "bg-white/90 dark:bg-earth-900/80",
  bullets,
  index: _index,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-earth-300 dark:bg-earth-700" />
      
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-3 h-3 -translate-x-[5px] rounded-full
                   bg-earth-500 dark:bg-earth-400
                   ring-4 ring-earth-100 dark:ring-earth-900"
      />
      
      <div className="glass-card p-6 w-full !border-earth-200/30 dark:!border-earth-700/30 border-[0.5px]">
        <div className="mb-4 flex items-start gap-4">
          {logoSrc && (
            <div
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-[16px] border border-black/5 p-2 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.8)] ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10 ${logoBgClass}`}
            >
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-earth-800 dark:text-earth-200">
              {role}
            </h3>
            {website ? (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-earth-600 dark:text-earth-400 font-medium transition-all duration-200 ease-out hover:font-bold hover:text-earth-700 dark:hover:text-earth-300"
                aria-label={`Visit ${company} website`}
              >
                <span>{company}</span>
                <FiExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden />
              </Link>
            ) : (
              <p className="text-earth-600 dark:text-earth-400 font-medium">
                {company}
              </p>
            )}
          </div>
        </div>
        
        <ul className="space-y-2 list-none">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-earth-600 dark:text-earth-400">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

