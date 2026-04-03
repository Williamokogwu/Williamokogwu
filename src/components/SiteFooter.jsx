export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-border-soft)] pt-12 sm:pt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,30rem)_auto] lg:items-end lg:gap-16">
        <div className="space-y-6">
          <p className="font-header text-[0.92rem] tracking-[-0.02em] text-[color:var(--color-text-muted)] sm:text-[1rem]">
            Thanks for stopping by!
          </p>

          <h2 className="font-display text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-[2.7rem]">
            Let's Connect.
          </h2>

          <p className="font-body max-w-[30rem] text-[0.95rem] leading-7 tracking-[-0.015em] text-[color:var(--color-text-secondary)] sm:text-[1.02rem]">
            Feel free to reach out by{" "}
            <a
              className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
              href="mailto:okogwuc@yahoo.com"
            >
              email
            </a>{" "}
            or connect with me below.
          </p>
        </div>

        <div className="space-y-4 text-left lg:text-right">
          <div className="font-header flex flex-wrap items-center gap-4 text-[0.95rem] tracking-[-0.02em] text-[color:var(--color-text-muted)] lg:justify-end sm:text-[1rem]">
            <a className=" transition-opacity duration-200 hover:opacity-70" href="#">
              LinkedIn
            </a>
            <a className="transition-opacity duration-200 hover:opacity-70" href="#">
              GitHub
            </a>
            <a
              className="transition-opacity duration-200 hover:opacity-70"
              href="https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="font-body space-y-1 text-[0.9rem] tracking-[-0.01em] text-[color:var(--color-text-faint)] sm:text-[0.96rem]">
            <p>&copy; 2026 Chijioke Okogwu</p>
            <p>Built with React, Tailwind, and Coffee.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
