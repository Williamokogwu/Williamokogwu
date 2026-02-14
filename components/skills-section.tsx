"use client"

import { useState, useRef, useEffect } from "react"

interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "{ }",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 88 },
      // { name: "Go", level: 78 }, --- IGNORE ---
      // { name: "Rust", level: 70 }, --- IGNORE ---
      { name: "Java", level: 95 },
      { name: "SQL", level: 88 },
      // { name: "C++", level: 72 }, --- IGNORE ---
      { name: "Bash", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    icon: "< />",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "Node.js", level: 90 },
      { name: "FastAPI", level: 85 },
      // { name: "PyTorch", level: 78 }, --- IGNORE ---
      { name: "TailwindCSS", level: 92 },
      // { name: "Express", level: 88 },
      // { name: "Django", level: 75 }, --- IGNORE ---
    ],
  },
  {
    title: "Tools & Cloud",
    icon: ">>_",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 85 },
      // { name: "Kubernetes", level: 75 }, --- IGNORE ---
      { name: "Git", level: 90 },
      { name: "PostgreSQL", level: 88 },
      // { name: "Redis", level: 82 }, --- IGNORE ---
      // { name: "Terraform", level: 70 }, --- IGNORE ---
      { name: "CI/CD", level: 88 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">{"03."}</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-3 rounded-xl px-5 py-3.5 font-mono text-sm transition-all ${
                activeCategory === i
                  ? "glass glow-sm text-primary border border-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground"
              }`}
            >
              <span className="text-xs opacity-60">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories[activeCategory].skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Bottom summary stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Languages", value: "5+" },
            { label: "Frameworks", value: "5+" },
            { label: "Cloud Platforms", value: "3" },
            { label: "Years Coding", value: "2+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl px-5 py-4 text-center"
            >
              <p className="font-mono text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: { name: string; level: number } }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex flex-col gap-3 rounded-xl border bg-card p-4 transition-all duration-300 ${
        hovered
          ? "border-primary/30 glow-sm"
          : "border-border"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
          }}
        />
      </div>
    </div>
  )
}
