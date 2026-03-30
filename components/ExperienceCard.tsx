'use client';

import Image from "next/image";
import Link from "next/link";
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
  period,
  website,
  logoSrc,
  logoBgClass = "bg-white",
  bullets,
  index: _index,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-4 pb-6 last:pb-0">
      {/* Logo */}
      {logoSrc && (
        <div
          className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-earth-200 p-1.5 mt-0.5 ${logoBgClass}`}
        >
          <Image
            src={logoSrc}
            alt={`${company} logo`}
            fill
            sizes="40px"
            className="object-contain p-0.5"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-1">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-earth-900">{role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              {website ? (
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-earth-500 hover:text-earth-700 transition-colors"
                  aria-label={`Visit ${company} website`}
                >
                  {company}
                  <FiExternalLink className="w-3 h-3" aria-hidden />
                </Link>
              ) : (
                <p className="text-sm text-earth-500">{company}</p>
              )}
              {period && (
                <span className="text-xs text-earth-400 tabular-nums sm:hidden">
                  {period}
                </span>
              )}
            </div>
          </div>
          {period && (
            <span className="text-sm text-earth-400 shrink-0 tabular-nums hidden sm:block">
              {period}
            </span>
          )}
        </div>

        <ul className="mt-3 space-y-1.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-earth-600 leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
