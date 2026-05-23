export default function SiteFooter() {
  return (
    // Minimal footer with copyright on the left and key external links on the right.
    <footer className="mx-auto max-w-[68rem] border-t border-[color:var(--color-border-soft)] py-6">
      <div className="flex flex-col gap-4 text-[0.95rem] text-[color:var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Chijioke Okogwu</p>

        {/* Footer links repeat the most important ways to connect. */}
        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <a
            className="underline-offset-4 transition-opacity duration-200 hover:opacity-65"
            href="mailto:okogwuc@yahoo.com"
          >
            email
          </a>
          <a
            className="underline-offset-4 transition-opacity duration-200 hover:opacity-65"
            href="https://www.linkedin.com/in/chijioke-okogwu/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a
            className="underline-offset-4 transition-opacity duration-200 hover:opacity-65"
            href="https://github.com/Williamokogwu"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            className="underline-offset-4 transition-opacity duration-200 hover:opacity-65"
            href="https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
