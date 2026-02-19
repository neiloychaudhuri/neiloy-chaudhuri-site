"use client";

import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import Galaxy from "@/components/Galaxy";
import ProjectCard from "@/components/ProjectCard";
import DecryptedText from "@/components/DecryptedText";
import ExperienceCard from "@/components/ExperienceCard";
import SocialIcon from "@/components/SocialIcon";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const flagshipProjects = [
  {
    name: "CyberCTRL",
    description:
      "AI-powered browser extension that flags risky code and dependencies before they reach your editor.",
    link: "https://devpost.com/software/devguard",
    tech: "TypeScript, Chrome APIs, Llama-3.2B-Instruct",
  },
  {
    name: "ImpostorGPT",
    description:
      "A pass-the-phone social deduction game with turn-based logic and AI-assisted game generation.",
    link: "https://github.com/neiloychaudhuri/ImpostorGPT",
    tech: "React, Node.js, Gemini API",
  },
];

const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Spectrum Health Care",
    period: "Sep 2025 – Dec 2025",
    website: "https://spectrumhealthcare.com/",
    logoSrc: "/photos/SHCLogo.png",
    logoBgClass: "bg-white",
    bullets: ["Special populations + patient intake "],
  },
  {
    role: "Software Engineering Intern",
    company: "TD Bank",
    period: "Jan 2025 – May 2025",
    website:
      "https://www.td.com/content/dam/tdcom/canada/about-td/pdf/esg/2024-td-bank-group-statement-on-aml-atf-and-sanctions-en.pdf",
    logoSrc: "/photos/TDLogo.svg",
    logoBgClass: "bg-[#54b949]",
    bullets: ["Global anti-money laundering + internal tooling development"],
  },
  {
    role: "Advanced Manufacturing Engineer Intern",
    company: "Kal-Polymers",
    period: "May 2024 – Aug 2024",
    website: "https://www.kalpolymers.com/",
    logoSrc: "/photos/KalPolymersLogo.jpeg",
    logoBgClass: "bg-white",
    bullets: [
      "Implemented Industry 4.0 solutions to optimize manufacturing processes.",
    ],
  },
];

const socials = [
  {
    href: "mailto:neiloy.chaudhuri@uwaterloo.ca",
    icon: FiMail,
    label: "Email",
  },
  {
    href: "https://github.com/neiloychaudhuri",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/neiloyc/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/_neiloy",
    icon: FiTwitter,
    label: "X (Twitter)",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="fixed inset-0 z-0 bg-[#050505]">
        <Galaxy starSpeed={0.25} glowIntensity={0.2} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <section className="pt-12 pb-6 sm:pt-16 sm:pb-6 relative overflow-hidden">
          <div className="section-container">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-3 text-earth-800 dark:text-earth-100 font-semibold">
                <DecryptedText text="Neiloy Chaudhuri" />
              </h1>

              <p className="text-lg sm:text-xl text-earth-600 dark:text-earth-400 mb-0 flex items-center gap-3">
                <span>
                  <a
                    href="https://uwaterloo.ca/future-students/programs/management-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-4 font-medium transition-all duration-200 ease-out hover:font-bold hover:text-earth-800 dark:hover:text-earth-200"
                  >
                    Management Engineering
                  </a>{" "}
                  @ University of Waterloo
                </span>
                <Image
                  src="/photos/UWaterlooLogo.svg"
                  alt="University of Waterloo"
                  width={28}
                  height={28}
                  className="flex-shrink-0"
                />
              </p>
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section id="experience" className="pt-0 pb-6 sm:pb-6">
          <div className="section-container">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200">
                Experience
              </h2>
            </div>

            <div className="relative">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={`${exp.company}-${exp.role}`}
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
          </div>
        </section>

        {/* Flagship projects preview */}
        <section id="projects" className="pt-0 pb-6 sm:pb-6">
          <div className="section-container">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200">
                Selected work
              </h2>
              <Link
                href="/projects"
                className="text-sm text-earth-600 dark:text-earth-400 hover:text-earth-800 dark:hover:text-earth-200 underline-offset-4 hover:underline"
              >
                View all projects
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {flagshipProjects.map((project, index) => (
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
          </div>
        </section>

        {/* Contact / social links */}
        <section id="contact" className="pt-0 pb-16 sm:pb-20">
          <div className="section-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200 mb-3">
                Get in touch
              </h2>
              <p className="text-earth-600 dark:text-earth-400 text-base sm:text-lg max-w-md mx-auto">
                Open to summer 2026 internships and part-time roles.
              </p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap items-center">
              {socials.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
