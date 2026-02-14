"use client"

import { useEffect, useState, useCallback } from "react"
import { Github, Linkedin, Mail, ChevronDown, FileText } from "lucide-react"


// const titles = [
//   "Full-Stack Developer",
//   "AI / ML Researcher",
//   "Cloud Architect",
//   "Open-Source Contributor",
// ]
const titles = [
  "Quality Assurance Engineer",
  "Software Developer",
  "Full-Stack Developer",
  "AI Enthusiast",
  "Tech Explorer",
  "IT Support Specialist",
  "System Administrator",
]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  const tick = useCallback(() => {
    const current = titles[titleIndex]

    if (!isDeleting) {
      setDisplayText(current.substring(0, charIndex + 1))
      setCharIndex((prev) => prev + 1)

      if (charIndex + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      setDisplayText(current.substring(0, charIndex - 1))
      setCharIndex((prev) => prev - 1)

      if (charIndex - 1 === 0) {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
        return
      }
    }
  }, [charIndex, isDeleting, titleIndex])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          {/* Status badge */}
          <div className="flex items-center gap-2 rounded-full glass px-4 py-1.5 w-fit">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-xs text-primary">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-2">
              {"// Hello, I'm"}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              William Okogwu
            </h1>
          </div>

          {/* Typing title */}
          <div className="flex items-center gap-1 font-mono text-lg text-primary sm:text-xl">
            <span className="text-muted-foreground">{">"}</span>
            <span>{displayText}</span>
            <span className="animate-blink text-primary">_</span>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
            Computer Science student building high-performance web applications
            and exploring the intersection of AI and software engineering. Passionate
            about clean architecture, developer tooling, and scalable systems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-sm"
            >
              View Projects
              <ChevronDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: Github, href: "https://github.com/Williamokogwu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chijioke-okogwu/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:okogwuc@yahoo.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Terminal Card */}
        <div className="hidden w-full max-w-md lg:block">
          <TerminalCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-primary/60" />
      </div>
    </section>
  )
}

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  const lines = [
    { prompt: true, text: "cat about.json" },
    { prompt: false, text: "{" },
    { prompt: false, text: '  "name": "William Okogwu",' },
    { prompt: false, text: '  "role": "IT Support Specialist",' },
    { prompt: false, text: '  "university": "UWP",' },
    { prompt: false, text: '  "gpa": 3.12,' },
    { prompt: false, text: '  "interests": [' },
    { prompt: false, text: '    "information-technology",' },
    { prompt: false, text: '    "computer-science",' },
    { prompt: false, text: '    "football"' },
    { prompt: false, text: "  ]" },
    { prompt: false, text: "}" },
    { prompt: true, text: "" },
  ]

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 150)
      return () => clearTimeout(timer)
    }
  }, [visibleLines, lines.length])

  return (
    <div className="glass rounded-xl overflow-hidden glow-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/60" />
        <span className="h-3 w-3 rounded-full bg-chart-4/60" />
        <span className="h-3 w-3 rounded-full bg-primary/60" />
        <span className="ml-4 font-mono text-xs text-muted-foreground">
          terminal ~ portfolio
        </span>
      </div>
      {/* Content */}
      <div className="p-4 font-mono text-xs leading-relaxed">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            {line.prompt && (
              <span className="text-primary mr-2 select-none">{"~$"}</span>
            )}
            <span
              className={line.prompt ? "text-foreground" : "text-muted-foreground"}
            >
              {line.text}
            </span>
            {i === visibleLines - 1 && line.prompt && line.text === "" && (
              <span className="animate-blink text-primary">_</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
