"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SocialIcon from "@/components/SocialIcon";
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiFileText } from "react-icons/fi";

const flagshipProjects = [
  {
    name: "Singe",
    description:
      "Designed and shipped a consumer AI app from 0 → 1. Defined the product concept, scoring logic, and virality mechanics (leaderboard + shareable results). Live with real users.",
    link: "https://getsinged.com/",
  },
  {
    name: "Candid",
    description:
      "Created a BeReal-style shared album app for private events. Designed product scope, image classification and location-based event discovery.",
    link: "https://bereal-dupe.vercel.app/",
  },
];

const experiences = [
  {
    role: "Product Manager",
    company: "Communitech",
    website: "https://www.communitech.ca/",
    logoSrc: "/photos/CommunitechLogo.jpg",
    logoBgClass: "bg-white",
    bullets: ["Incoming summer 2026"],
  },
  {
    role: "Data Engineer",
    company: "Spectrum Health Care",
    period: "Sep 2025 – Dec 2025",
    website: "https://spectrumhealthcare.com/",
    logoSrc: "/photos/SHCLogo.png",
    logoBgClass: "bg-white",
    bullets: [
      "Special populations + patient intake"
    ],
  },
  {
    role: "Software Engineering",
    company: "TD Bank",
    period: "Jan 2025 – May 2025",
    website:
      "https://www.td.com/content/dam/tdcom/canada/about-td/pdf/esg/2024-td-bank-group-statement-on-aml-atf-and-sanctions-en.pdf",
    logoSrc: "/photos/TDLogo.svg",
    logoBgClass: "bg-[#54b949]",
    bullets: [
      "Global anti-money laundering + internal tooling development"
    ],
  },
  {
    role: "Manufacturing Engineer",
    company: "Kal-Polymers",
    period: "May 2024 – Aug 2024",
    website: "https://www.kalpolymers.com/",
    logoSrc: "/photos/KalPolymersLogo.jpeg",
    logoBgClass: "bg-white",
    bullets: [
      "Implemented Industry 4.0 solutions to optimize manufacturing processes"
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
    href: "https://www.linkedin.com/in/neiloyc/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/_neiloy",
    icon: FiTwitter,
    label: "X (Twitter)",
  },
  {
    href: "https://github.com/neiloychaudhuri",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "/Neiloy_Chaudhuri_Resume.pdf",
    icon: FiFileText,
    label: "Resume",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        {/* Hero */}
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10">
          <div className="flex items-center gap-0">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-display text-earth-900 mb-3">
                Neiloy Chaudhuri
              </h1>
              <p className="text-lg text-earth-500">
                <a
                  href="https://uwaterloo.ca/future-students/programs/management-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted underline-offset-4 hover:text-earth-700 transition-colors"
                >
                  <span className="hidden sm:inline">Management Engineering</span>
                  <span className="sm:hidden">Engineering + AI</span>
                </a>{" "}
                <span className="hidden sm:inline">@ University of Waterloo</span>
                <span className="sm:hidden inline-flex items-center gap-1.5">
                  @{" "}
                  <span className="inline-flex items-center gap-1.5">
                    UWaterloo
                    <Image
                      src="/photos/UWaterlooLogo.svg"
                      alt="University of Waterloo"
                      width={22}
                      height={22}
                      className="flex-shrink-0"
                    />
                  </span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 ml-1.5 translate-y-1">
                  <Image
                    src="/photos/UWaterlooLogo.svg"
                    alt="University of Waterloo"
                    width={22}
                    height={22}
                    className="flex-shrink-0"
                  />
                </span>
              </p>
            </div>
            <div className="w-28 flex justify-center shrink-0">
              <Image
                src="/neiloy-sketch.gif"
                alt="Neiloy Chaudhuri"
                width={80}
                height={80}
              />
            </div>
          </div>
        </section>

        <div className="border-t border-earth-200" />

        {/* Experience */}
        <section id="experience" className="py-8 sm:py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-earth-400 mb-8">
            Experience
          </h2>
          <div>
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
        </section>

        <div className="border-t border-earth-200" />

        {/* Projects */}
        <section id="projects" className="py-8 sm:py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-earth-400 mb-8">
            Selected Work
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {flagshipProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-earth-200" />

        {/* Contact */}
        <section id="contact" className="py-8 sm:py-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-earth-400 mb-4">
            Get in touch
          </h2>
          <p className="text-earth-600 text-base mb-8">
            Reach out via email or connect on LinkedIn.
          </p>
          <div className="flex gap-5 flex-wrap items-center">
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
        </section>

      </div>
    </PageTransition>
  );
}
