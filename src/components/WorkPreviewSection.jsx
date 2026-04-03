import { workProjects } from "../data/workProjects";

function ProjectVisual({ project }) {
  return (
    <div className="theme-panel relative overflow-hidden rounded-[1.5rem] border">
      <div className={`aspect-[16/9] bg-gradient-to-br ${project.visual}`} />
      <div className="theme-preview-overlay absolute inset-0" />
      <div className="absolute inset-0">
        <div className="absolute left-[9%] top-[16%] h-[20%] w-[28%] rounded-full bg-white/75 blur-[8px]" />
        <div className="absolute right-[12%] top-[14%] h-[21%] w-[21%] rounded-full border-[18px] border-amber-300/95" />
        <div className="absolute bottom-[18%] left-[8%] h-[38%] w-[18%] rotate-[8deg] rounded-[2rem] bg-fuchsia-300/85 blur-[1px]" />
        <div className="absolute bottom-[14%] left-[29%] h-[18%] w-[26%] rounded-full bg-amber-300/90 blur-[2px]" />
        <div className="absolute bottom-[11%] right-[7%] h-[12%] w-[14%] rounded-full bg-amber-300/95 blur-[1px]" />
      </div>
      <div className="theme-preview-copy absolute inset-x-0 bottom-0 px-6 py-5 sm:px-8">
        <p className="font-header text-[0.72rem] uppercase tracking-[0.2em] text-white/85">
          {project.role}
        </p>
        <p className="font-body mt-2 max-w-[36rem] text-[0.95rem] leading-7 tracking-[-0.015em] text-white/88 sm:text-[1rem]">
          {project.summary}
        </p>
      </div>
    </div>
  );
}

export default function WorkPreviewSection() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-28">
      <div className="space-y-16 sm:space-y-20">
        <header className="border-t border-[color:var(--color-border-soft)] pt-12 sm:pt-16">
          <p className="font-header text-[0.8rem] uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
            Selected Work
          </p>
        </header>

        {workProjects.map((project) => (
          <article
            key={project.id}
            className="space-y-6 border-b border-[color:var(--color-border-soft)] pb-12 last:border-b-0 last:pb-0 sm:space-y-8 sm:pb-16"
          >
            <header className="max-w-[72rem] space-y-4">
              <h2 className="font-body text-[2.35rem] leading-[1.02] tracking-[-0.05em] text-[color:var(--color-text-primary)] sm:text-[4rem] lg:text-[5.5rem]">
                {project.title}
              </h2>
            </header>

            <ProjectVisual project={project} />

            <div className="flex flex-col gap-4 font-body text-[0.98rem] tracking-[-0.015em] text-[color:var(--color-text-secondary)] sm:flex-row sm:items-start sm:justify-between sm:text-[1.08rem]">
              <div className="space-y-1">
                <p>{project.meta}</p>
                <p className="text-[color:var(--color-text-muted)]">
                  Tools: {project.tools}
                </p>
              </div>

              <a
                href={project.href}
                className="font-header inline-flex items-center gap-3 text-[0.95rem] uppercase tracking-[0.16em] text-[color:var(--color-text-primary)] transition-opacity duration-200 hover:opacity-70"
              >
                View Project
                <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
