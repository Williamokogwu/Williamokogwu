import { workProjects } from "../data/workProjects";

function ProjectDetailVisual({ project }) {
  return (
    <div className="theme-panel relative overflow-hidden rounded-[1.75rem] border">
      <div className={`aspect-[16/9] bg-gradient-to-br ${project.visual}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.25))]" />
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-[22%] w-[32%] rounded-full bg-white/70 blur-[10px]" />
        <div className="absolute right-[10%] top-[12%] h-[22%] w-[22%] rounded-full border-[20px] border-amber-300/95" />
        <div className="absolute bottom-[14%] left-[8%] h-[44%] w-[18%] rotate-[8deg] rounded-[2.5rem] bg-fuchsia-300/85" />
        <div className="absolute bottom-[18%] left-[28%] h-[14%] w-[32%] rounded-full bg-amber-300/90 blur-[2px]" />
        <div className="absolute bottom-[10%] right-[8%] h-[13%] w-[16%] rounded-full bg-amber-300/95" />
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <section id="work-page" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[118rem] space-y-20 sm:space-y-24">
        {workProjects.map((project) => (
          <article
            key={project.id}
            className="grid gap-8 border-b border-[color:var(--color-border-soft)] pb-14 last:border-b-0 last:pb-0 sm:gap-10 sm:pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,28rem)]"
          >
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="font-header text-[0.78rem] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                  {project.role}
                </p>
                <h2 className="font-body text-[2.15rem] leading-[1.02] tracking-[-0.05em] text-[color:var(--color-text-primary)] sm:text-[3.4rem] lg:text-[4.5rem]">
                  {project.title}
                </h2>
                <p className="font-body max-w-[44rem] text-[1rem] leading-8 tracking-[-0.015em] text-[color:var(--color-text-secondary)] sm:text-[1.08rem]">
                  {project.summary}
                </p>
              </div>

              <ProjectDetailVisual project={project} />

              <div className="grid gap-6 lg:grid-cols-3">
                <section className="space-y-3">
                  <h3 className="font-header text-[0.78rem] uppercase tracking-[0.2em] text-[color:var(--color-text-faint)]">
                    Challenge
                  </h3>
                  <p className="font-body text-[0.98rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-secondary)]">
                    {project.challenge}
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-header text-[0.78rem] uppercase tracking-[0.2em] text-[color:var(--color-text-faint)]">
                    Approach
                  </h3>
                  <p className="font-body text-[0.98rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-secondary)]">
                    {project.approach}
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-header text-[0.78rem] uppercase tracking-[0.2em] text-[color:var(--color-text-faint)]">
                    Outcome
                  </h3>
                  <p className="font-body text-[0.98rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-secondary)]">
                    {project.outcome}
                  </p>
                </section>
              </div>
            </div>

            <aside className="theme-panel-soft space-y-6 rounded-[1.5rem] border p-6 sm:p-8">
              <div className="space-y-1 border-b border-[color:var(--color-border-soft)] pb-5">
                <p className="font-header text-[0.76rem] uppercase tracking-[0.18em] text-[color:var(--color-text-faint)]">
                  Project Info
                </p>
                <p className="font-body text-[1rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-primary)]">
                  {project.meta}
                </p>
              </div>

              <div className="space-y-2 border-b border-[color:var(--color-border-soft)] pb-5">
                <p className="font-header text-[0.76rem] uppercase tracking-[0.18em] text-[color:var(--color-text-faint)]">
                  Tools
                </p>
                <p className="font-body text-[1rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-primary)]">
                  {project.tools}
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-header text-[0.76rem] uppercase tracking-[0.18em] text-[color:var(--color-text-faint)]">
                  Notes
                </p>
                <div className="space-y-3">
                  {project.details.map((detail) => (
                    <p
                      key={detail}
                      className="font-body text-[0.98rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-secondary)]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </article>
        ))}
      </div>
    </section>
  );
}
