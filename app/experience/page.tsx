"use client";

import PageTransition from "@/components/PageTransition";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Spectrum Health Care",
    period: "Sep 2025 – Dec 2025",
    website: "https://spectrumhealthcare.com/",
    logoSrc: "/photos/SHCLogo.png",
    logoBgClass: "bg-white",
    bullets: [
      "Built data pipelines to process and analyze healthcare operational data",
      "Developed dashboards and reporting tools for data-driven decision making",
      "Improved data quality and accessibility across organizational systems",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "TD Bank",
    period: "Jan 2025 – May 2025",
    website:
      "https://www.td.com/content/dam/tdcom/canada/about-td/pdf/esg/2024-td-bank-group-statement-on-aml-atf-and-sanctions-en.pdf",
    logoSrc: "/photos/TDLogo.svg",
    logoBgClass: "bg-[#54b949]",
    bullets: [
      "Developed and optimized backend services for enterprise banking applications",
      "Collaborated with cross-functional teams to deliver scalable financial technology solutions",
      "Applied agile methodologies and modern software engineering practices",
    ],
  },
  {
    role: "Manufacturing Engineer Intern",
    company: "Kal-Polymers",
    period: "May 2024 – Aug 2024",
    website: "https://www.kalpolymers.com/",
    logoSrc: "/photos/KalPolymersLogo.jpeg",
    logoBgClass: "bg-white",
    bullets: [
      "Implemented Industry 4.0 solutions to optimize manufacturing processes",
      "Analyzed production data to identify efficiency improvements and cost savings",
      "Designed automation workflows for quality control and inventory management",
    ],
  },
];

export default function Experience() {
  return (
    <PageTransition>
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Experience
            </h1>
            <div className="w-20 h-1 bg-earth-500 dark:bg-earth-400 rounded-full mb-4" />
            <p className="text-earth-600 dark:text-earth-400 text-lg max-w-2xl">
              My professional journey across software engineering, data, and
              manufacturing.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                website={exp.website}
                logoSrc={exp.logoSrc}
                logoBgClass={exp.logoBgClass}
                bullets={exp.bullets}
                index={index}
              />
            ))}
          </div>

          {/* Decorative elements */}
          <div
            className="absolute -z-10 top-1/3 right-0 w-80 h-80 rounded-full
                          bg-gradient-to-l from-earth-300/15 to-earth-400/10
                          dark:from-earth-700/15 dark:to-earth-600/10
                          blur-3xl pointer-events-none"
          />
        </div>
      </section>
    </PageTransition>
  );
}
