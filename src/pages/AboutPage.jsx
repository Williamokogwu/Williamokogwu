const introLinks = [
  { label: "software engineering", href: "#work-page" },
  { label: "cloud systems", href: "#work-page" },
  { label: "secure infrastructure", href: "#work-page" },
];

const detailParagraphs = [
  "I work at the intersection of support, systems, and usability, with day-to-day experience in identity management, endpoint support, internal operations, and the practical systems teams rely on.",
  "Alongside support work, I continue building frontend projects and cloud-focused study work to strengthen my engineering foundation and move toward more technical software roles over time.",
  "Outside of work and school, I spend time learning through side projects, refining my technical skills, and exploring systems, networking, cloud infrastructure, and security.",
];

const contactLinks = [
  { label: "Work", href: "#work-page" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing",
    external: true,
  },
  { label: "Email", href: "mailto:hello@example.com" },
];

function InlineLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="underline decoration-[color:var(--color-accent)] underline-offset-[0.16em] transition-opacity duration-200 hover:opacity-70"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function AbstractPortrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-[2.5rem] sm:max-w-[22rem] lg:max-w-[24rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.92),rgba(255,255,255,0.45)_28%,transparent_50%),linear-gradient(180deg,rgba(255,240,245,0.95),rgba(255,255,255,0.15)_45%,transparent_100%)]" />
      <div className="absolute left-[28%] top-[28%] h-[32%] w-[26%] rounded-full bg-[rgba(222,173,178,0.48)] blur-[12px]" />
      <div className="absolute left-[38%] top-[24%] h-[18%] w-[16%] rounded-full bg-[rgba(196,140,147,0.42)] blur-[10px]" />
      <div className="absolute left-[34%] top-[48%] h-[30%] w-[18%] rounded-full bg-[rgba(182,104,144,0.34)] blur-[13px]" />
      <div className="absolute left-[44%] top-[60%] h-[14%] w-[13%] rounded-full bg-[rgba(149,81,120,0.48)] blur-[8px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_52%,rgba(255,255,255,0.95),transparent_20%),radial-gradient(circle_at_44%_72%,rgba(255,255,255,0.86),transparent_18%)]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="py-10 sm:py-14 lg:py-18">
      <div className="mx-auto grid max-w-[118rem] gap-14 lg:grid-cols-[minmax(15rem,24rem)_minmax(0,1fr)] lg:items-start lg:gap-24">
        <aside className="flex justify-center lg:pt-38">
          <AbstractPortrait />
        </aside>

        <div className="max-w-[74rem] space-y-9 sm:space-y-11">
          <header className="space-y-5 sm:space-y-6">
            <h1 className="max-w-[18ch] text-[2.1rem] leading-[1.08] tracking-[-0.045em] text-[color:var(--color-text-primary)] sm:text-[3rem] lg:text-[4.4rem]">
              Chijioke, a support engineer and software enthusiast.
            </h1>

            {/* <p className="text-[1rem] tracking-[-0.02em] text-[color:var(--color-text-muted)] sm:text-[1.15rem]">
              Welcome to my corner of the internet.
            </p> */}
          </header>

          <section className="space-y-6 text-[1.05rem] leading-[1.62] tracking-[-0.025em] text-[color:var(--color-text-primary)] sm:text-[1.28rem] sm:leading-[1.6]">
            <p className="max-w-[62rem]">
              I&apos;m especially interested in{" "}
              <InlineLink href={introLinks[0].href}>{introLinks[0].label}</InlineLink>
              , <InlineLink href={introLinks[1].href}>{introLinks[1].label}</InlineLink>,
              {" "}and{" "}
              <InlineLink href={introLinks[2].href}>{introLinks[2].label}</InlineLink>.
            </p>

            {detailParagraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[72rem]">
                {paragraph}
              </p>
            ))}
          </section>

          <footer className="space-y-5 pt-4">
            <p className="max-w-[70rem] text-[0.98rem] leading-8 tracking-[-0.02em] text-[color:var(--color-text-muted)] sm:text-[1.12rem]">
              Always open to connecting, collaborating, and discussing work
              across support, software, and infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[0.98rem] tracking-[-0.02em] text-[color:var(--color-text-faint)] sm:text-[1.08rem]">
              {contactLinks.map((link) => (
                <InlineLink
                  key={link.label}
                  href={link.href}
                  external={link.external}
                >
                  {link.label}
                </InlineLink>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
