const focusAreas = [
  "IT support and user-facing troubleshooting",
  "Frontend projects with React",
  "AWS, IAM, and cloud infrastructure fundamentals",
  "Secure systems, networking, and practical reliability",
];

const links = [
  { label: "email", href: "mailto:okogwuc@yahoo.com" },
  { label: "work", href: "#work-page" },
  {
    label: "resume",
    href: "https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing",
    external: true,
  },
];

function TextLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-65"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <section id="about-page" className="mx-auto max-w-[68rem] py-12 sm:py-16 lg:py-20">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-20">
        <header className="space-y-4">
          {/* <p className="text-[1rem] text-[color:var(--color-text-muted)]">
            About
          </p>
          <h1 className="max-w-[12ch] text-[2.35rem] leading-tight text-[color:var(--color-text-primary)] sm:text-[3rem]">
            Support-minded developer.
          </h1> */}
        </header>

        <div className="space-y-10">
          <div className="space-y-5 text-[1.06rem] leading-8 text-[color:var(--color-text-primary)]">
            <p>
              I&apos;m Chijioke, a computer science student with hands-on IT
              support experience and a growing focus on software engineering,
              cloud systems, and secure infrastructure.
            </p>
            <p>
              I like work that sits close to real people and real systems:
              solving access issues, making tools easier to understand, and
              building projects that are useful before they are flashy.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-[1.25rem] font-semibold tracking-[-0.02em]">
              Focus
            </h2>
            <ul className="space-y-3 text-[1rem] leading-7 text-[color:var(--color-text-muted)]">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[1.25rem] font-semibold tracking-[-0.02em]">
              Now
            </h2>
            <p className="max-w-[38rem] text-[1rem] leading-7 text-[color:var(--color-text-muted)]">
              Currently strengthening my engineering foundation through
              frontend work, AWS projects, security practice, and support
              systems that keep teams moving.
            </p>
          </section>

          <nav
            aria-label="About links"
            className="flex flex-wrap gap-x-5 gap-y-2 text-[1rem] text-[color:var(--color-text-primary)]"
          >
            {links.map((link) => (
              <TextLink key={link.label} href={link.href} external={link.external}>
                {link.label}
              </TextLink>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
