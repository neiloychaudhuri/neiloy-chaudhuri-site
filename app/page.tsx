"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import StarField from "@/components/StarField";
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
    emphasis: "Developer Security, AI Integration, Product Thinking",
    role: "Built the extension MVP and end-to-end flow.",
    outcome:
      "Surfaced warnings at the copy-paste step instead of after deployment.",
    tech: "TypeScript, Chrome APIs, OpenAI API",
  },
  {
    name: "ImpostorGPT",
    description:
      "A pass-the-phone social deduction game with real-time, turn-based logic and AI-assisted prompts.",
    link: "https://github.com/neiloychaudhuri/ImpostorGPT",
    emphasis: "Real-time Systems, Full Stack",
    role: "Owned game design, backend, and client experience.",
    outcome: "Kept multiple concurrent games in sync with low-latency updates.",
    tech: "React, Node.js, Socket.io, Redis",
  },
];

const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Spectrum Health Care",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Built data pipelines to process and analyze healthcare operational data.",
      "Developed dashboards and reporting tools for data-driven decision making.",
      "Improved data quality and accessibility across organizational systems.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "TD Bank",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Developed and optimized backend services for enterprise banking applications.",
      "Collaborated with cross-functional teams to deliver scalable financial technology solutions.",
      "Applied agile methodologies and modern software engineering practices.",
    ],
  },
  {
    role: "Advanced Manufacturing Engineer Intern",
    company: "Kal-Polymers",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Implemented Industry 4.0 solutions to optimize manufacturing processes.",
      "Analyzed production data to identify efficiency improvements and cost savings.",
      "Designed automation workflows for quality control and inventory management.",
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
      <section className="py-12 sm:py-16 relative overflow-hidden">
        {/* Animated stars background */}
        <StarField />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-3 text-earth-800 dark:text-earth-100 font-semibold">
              <DecryptedText text="Neiloy C." />
            </h1>

            <p className="text-lg sm:text-xl text-earth-600 dark:text-earth-400 mb-8">
              Management Engineering @ University of Waterloo
            </p>

            <p className="text-base sm:text-lg text-earth-700 dark:text-earth-300 mb-8 leading-relaxed">
              Building fast and learning even faster.
            </p>

            <div className="space-y-2 text-sm sm:text-base text-earth-600 dark:text-earth-400">
              <p className="font-semibold text-earth-800 dark:text-earth-200 mb-3">
                What you should know:
              </p>
              <p>
                • Shipped production systems at TD Bank, Spectrum Health Care,
                and Kal-Polymers
              </p>
              <p>
                • Built real-time multiplayer games and AI-powered devtools from
                scratch
              </p>
              <p>
                • Led Industry 4.0 competition as VP, organizing data-driven
                events for 100+ students
              </p>
              <p>
                • Debug from first principles, design with constraints, ship
                tight end-to-end slices
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship projects preview */}
      <section id="projects" className="py-12 sm:py-16">
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
                emphasis={project.emphasis}
                index={index}
                role={project.role}
                tech={project.tech}
                outcome={project.outcome}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About / how I work */}
      <section id="about" className="py-16 sm:py-20">
        <div className="section-container max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200 mb-3">
              About
            </h2>
            <p className="text-earth-600 dark:text-earth-400 text-base sm:text-lg leading-relaxed">
              I&apos;m a Management Engineering student at the University of
              Waterloo who builds software at the intersection of systems, data,
              and user experience. I like taking ambiguous problems and turning
              them into small, production-ready pieces that real people can use.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-semibold text-earth-800 dark:text-earth-200">
              How I work
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-earth-700 dark:text-earth-300">
              <li>
                <span className="font-medium">
                  Ship tight end-to-end slices
                </span>{" "}
                instead of sprawling, half-finished systems.
              </li>
              <li>
                <span className="font-medium">Debug from first principles</span>{" "}
                by tracing data and requests through the stack.
              </li>
              <li>
                <span className="font-medium">
                  Design with constraints in mind
                </span>{" "}
                – infra, time, and the people who will maintain the system.
              </li>
              <li>
                <span className="font-medium">Communicate clearly</span> so
                teammates understand trade-offs and decisions without guesswork.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="section-container max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200 mb-3">
              Experience
            </h2>
            <p className="text-earth-600 dark:text-earth-400 text-base sm:text-lg">
              Recent roles across healthcare, banking, and manufacturing.
            </p>
          </div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}`}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                bullets={exp.bullets}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / social links */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-earth-800 dark:text-earth-200 mb-3">
              Get in touch
            </h2>
            <p className="text-earth-600 dark:text-earth-400 text-base sm:text-lg max-w-md mx-auto">
              Open to software roles, collaborations, and conversations about
              systems, data, and product.
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
    </PageTransition>
  );
}
