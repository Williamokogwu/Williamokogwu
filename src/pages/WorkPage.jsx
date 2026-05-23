import { workProjects } from "../data/workProjects";

// Work page: a narrow project index inspired by simple writing archives.
export default function WorkPage() {
  return (
    <section
      id="work-page"
      className="mx-auto max-w-[42rem] py-14 sm:py-18 lg:py-20"
    >
      {/* Page intro mirrors a writing index: title first, short context second. */}
      <header className="space-y-4">
        <h1 className="text-[2.7rem] font-semibold leading-tight text-[color:var(--color-text-primary)] sm:text-[3.4rem]">
          Work
        </h1>
        <p className="text-[1.08rem] leading-8 text-[color:var(--color-text-muted)]">
          Projects across software, cloud infrastructure, and support systems.
        </p>
      </header>

      {/* Each project is treated like an archive entry with a quiet divider. */}
      <div className="mt-14 border-t border-[color:var(--color-border-soft)]">
        {workProjects.map((project) => (
          <article
            key={project.id}
            className="border-b border-[color:var(--color-border-soft)] py-8"
          >
            <div className="space-y-3">
              <p className="text-[0.92rem] uppercase tracking-[0.08em] text-[color:var(--color-text-faint)]">
                {project.meta}
              </p>

              <h2 className="text-[1.55rem] font-semibold leading-snug text-[color:var(--color-text-primary)]">
                {project.title}
              </h2>

              <p className="text-[1.02rem] leading-8 text-[color:var(--color-text-muted)]">
                {project.summary}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-[color:var(--color-text-muted)]">
                <p>{project.role}</p>
                <a
                  href={project.href}
                  className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-65"
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
