"use client"

import { useState } from "react"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  github: string
  live?: string
  technologies: string[]
  stars: number
  forks: number
  category: string
}

const projects: Project[] = [
  {
    title: "MoneyMentor",
    description:
      "Semantic search engine powered by transformer embeddings. Real-time indexing of 10M+ documents with sub-100ms query latency using HNSW approximate nearest neighbors.",
    image: "/images/MoneyMentor.png",
    github: "https://github.com/MoneyMentor-09/moneymentor-frontend",
    live: "https://moneymentor-09.vercel.app/",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Supabase"],
    stars: 1,
    forks: 0,
    category: "Full-Stack",
  },
  {
    title: "Book Ease",
    description:
      "Intelligent hotel reservation chatbot using Amazon Lex, AWS Lambda (Python), and DynamoDB to manage natural language booking requests, validate inputs, calculate costs, and securely store and retrieve reservations.",
    image: "/images/AWSlex.png",
    github: "https://github.com/Williamokogwu/BookEase",
    live: "https://us-east-1.console.aws.amazon.com/lexv2/home?region=us-east-1#bot/PUP2BMOKGY",
    technologies: ["AWS Lex", "AWS Lambda", "Python", "AWS DynamoDB"],
    stars: 0,
    forks: 0,
    category: "DevOps",
  },
  {
    title: "My HospitalApp",
    description:
      "A relational hospital database in MySQL with 13+ interconnected tables, enforcing referential integrity through foreign keys based on an ER-driven schema..",
    image: "/images/Myhospital.png",
    github: "https://github.com",
    technologies: ["SQL", "Database Design", "Data Grip", "Database Normalization"],
    stars: 0,
    forks: 89,
    category: "Database",
  },
  {
    title: "Semantic Synonym Finder",
    description:
      "Java-based semantic synonym finder that parses large literary corpora to build word vectors using nested HashMaps and applies cosine similarity to identify semantically related words.",
    image: "/images/Semantic-finder.jpg",
    github: "https://github.com",
    technologies: ["Java", "IntelliJ IDEA"],
    stars: 0,
    forks: 0,
    category: "Java",
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">{"02."}</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-md px-4 py-1.5 font-mono text-xs transition-all ${
                filter === cat
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group glass rounded-xl overflow-hidden transition-all duration-300 ${
        hovered ? "glow-sm border-primary/20" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project thumbnail`}
          fill
          className={`object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : ""
          }`}
        />
        <div className="absolute inset-0 bg-background/60" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-md bg-primary/15 border border-primary/30 px-3 py-1 font-mono text-[10px] text-primary uppercase tracking-wider">
          {project.category}
        </span>

        {/* Links overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 bg-background/80 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
            <span className="flex items-center gap-1 font-mono text-xs">
              <Star className="h-3 w-3" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1 font-mono text-xs">
              <GitFork className="h-3 w-3" />
              {project.forks}
            </span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
