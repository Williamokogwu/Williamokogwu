"use client"

import { useState } from "react"
import { Briefcase, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  period: string
  role: string
  company: string
  companyUrl?: string
  description: string
  technologies: string[]
  achievements: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "Dec 2024 — Present",
    role: "Information Support Specialist",
    company: "University of Wisconsin-Parkside",
    companyUrl: "https://www.uwp.edu/",
    description:
      "Provide Tier 1 technical and application support for incidents across university systems, maintaining a high customer satisfaction rating",
    technologies: ["Active Directory", "Ivanti", "Okta Administration", "SCCM"],
    achievements: [
      "Resolved 600+ Tier 1 & Tier 2 technical incidents annually,",
      "Reduced average ticket resolution time by 20% through automation and improved documentation",
      "Owned end-to-end ticket triage and escalation for 500+ service requests.",
    ],
  },
  {
    id: 2,
    period: "May 2024 — September 2024",
    role: "Operations Assistant",
    company: "University of Wisconsin-Parkside",
    companyUrl: "https://www.uwp.edu/",
    description:
      "Investigating transformer architectures for low-resource language understanding. Developing novel attention mechanisms for improved cross-lingual transfer learning.",
      technologies: ["Facilities Management", "Event Coordination", "Logistics Planning", "Team Leadership"],
    // technologies: ["Python", "PyTorch", "Hugging Face", "CUDA", "Weights & Biases"],
    achievements: [
      "Coordinated logistics for 100+ campus facilities for summer conferences",
      "Led daily workflows for a 5-person team in a fast-paced environment",
      "Increased task completion efficiency by 15%",
    ],
  },
  // {
  //   id: 3,
  //   period: "May 2024 — Aug 2024",
  //   role: "Full-Stack Developer Intern",
  //   company: "Vercel",
  //   companyUrl: "https://vercel.com",
  //   description:
  //     "Worked on the Next.js DX team building developer tools and improving build performance. Shipped features used by thousands of developers daily.",
  //   technologies: ["TypeScript", "Next.js", "React", "Turborepo", "Rust"],
  //   achievements: [
  //     "Implemented incremental static regeneration improvements",
  //     "Reduced cold start time by 35% for serverless functions",
  //     "Contributed 15+ PRs to the open-source Next.js repo",
  //   ],
  // },
  // {
  //   id: 4,
  //   period: "Sep 2023 — Dec 2023",
  //   role: "Teaching Assistant — Algorithms",
  //   company: "MIT EECS",
  //   description:
  //     "Led weekly recitation sections for 6.046J Design and Analysis of Algorithms. Developed supplementary problem sets and guided 30+ students through advanced algorithmic concepts.",
  //   technologies: ["Python", "LaTeX", "Algorithm Design", "Data Structures"],
  //   achievements: [
  //     "Received 4.8/5.0 student evaluation rating",
  //     "Created 20+ original problem sets with detailed solutions",
  //     "Mentored 8 students through independent study projects",
  //   ],
  // },
]

export function ExperienceSection() {
  const [activeId, setActiveId] = useState<number>(1)

  const active = experiences.find((e) => e.id === activeId) ?? experiences[0]

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">{"01."}</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Timeline left */}
          <div className="relative flex flex-col lg:w-72 shrink-0">
            {/* Vertical line */}
              {/**
               * Originally line was this 
               * <div className="absolute left-[7px] top- bottom-0 w-px bg-border lg:left-[7px]" /> 
               */}
            <div className="absolute left-[7px] top- bottom-0 w-px bg-border lg:left-[7px]" /> 

            {experiences.map((exp) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveId(exp.id)}
                className={`group relative flex items-start gap-4 py-4 text-left transition-all ${
                  activeId === exp.id ? "" : ""
                }`}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 mt-1 h-[15px] w-[15px] shrink-0 rounded-full border-2 transition-all ${
                    activeId === exp.id
                      ? "border-primary bg-primary/20 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                      : "border-border bg-card group-hover:border-primary/40"
                  }`}
                />

                <div className="flex flex-col">
                  <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
                    {exp.period}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      activeId === exp.id
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary/80"
                    }`}
                  >
                    {exp.role}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {exp.company}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Details right */}
          <div className="flex-1 glass rounded-xl p-6 sm:p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {active.role}
                </h3>
                <p className="mt-1 flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                  {active.companyUrl ? (
                    <a
                      href={active.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-primary hover:underline"
                    >
                      {active.company}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-primary">
                      {active.company}
                    </span>
                  )}
                </p>
              </div>
              <span className="shrink-0 rounded-md bg-secondary px-3 py-1 font-mono text-[11px] text-secondary-foreground">
                {active.period}
              </span>
            </div>

            <p className="mb-6 leading-relaxed text-muted-foreground text-sm">
              {active.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Key Achievements
              </h4>
              <ul className="flex flex-col gap-2">
                {active.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                    <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {active.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
