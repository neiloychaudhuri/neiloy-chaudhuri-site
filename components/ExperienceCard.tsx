'use client';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  index: number;
}

export default function ExperienceCard({
  role,
  company,
  period,
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
      
      {/* Content */}
      <div className="glass-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-earth-800 dark:text-earth-200">
              {role}
            </h3>
            <p className="text-earth-600 dark:text-earth-400 font-medium">
              {company}
            </p>
          </div>
          <span className="text-sm text-earth-500 dark:text-earth-500 whitespace-nowrap">
            {period}
          </span>
        </div>
        
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-earth-600 dark:text-earth-400">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-earth-400 dark:bg-earth-500 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

