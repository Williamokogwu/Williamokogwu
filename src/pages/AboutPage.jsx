const accentText = "text-[color:var(--color-text-primary)]";

// Reusable inline link for About page paragraphs.
function AccentLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="text-[color:var(--color-text-primary)] underline underline-offset-4 transition-opacity duration-200 hover:opacity-65"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

// Shared section wrapper so each About section keeps the same spacing and type scale.
function AboutSection({ title, children }) {
  return (
    <section className="space-y-6">
      <h2 className={`${accentText} text-[2rem] leading-tight sm:text-[2.45rem]`}>
        {title}
      </h2>
      <div className="space-y-5 text-[1.08rem] leading-8 text-[color:var(--color-text-primary)] sm:text-[1.16rem] sm:leading-9">
        {children}
      </div>
    </section>
  );
}

// About page: long-form personal introduction in a centered essay layout.
export default function AboutPage() {
  return (
    <section id="about-page" className="mx-auto max-w-[58rem] py-14 sm:py-18 lg:py-20">
      {/* Large page title inspired by the reference layout. */}
      <header className="mb-20 text-center sm:mb-24">
        <h1 className={`${accentText} font-display text-[4.2rem] leading-none sm:text-[6rem]`}>
          About me
        </h1>
      </header>

      <div className="space-y-14 sm:space-y-16">
        {/* Quick overview of who you are and what you like building. */}
        <AboutSection title="In a nutshell">
          <p>
            Hi there, I&apos;m Chijioke. I&apos;m a computer science student
            with hands-on IT support experience and a growing focus on software
            engineering, cloud systems, and secure infrastructure.
          </p>

          <p>
            I like building things that are practical before they are flashy:
            tools that make work easier, systems that stay understandable, and
            support experiences that help people move with less friction.
          </p>
        </AboutSection>

        {/* Professional background and current technical focus. */}
        <AboutSection title="Professional life">
          <p>
            My work sits close to real users and real systems. I spend time
            troubleshooting endpoints, helping with access and account issues,
            supporting internal workflows, and learning how reliable technical
            operations are built from small, careful decisions.
          </p>

          <p>
            Alongside support work, I build software projects with React,
            TypeScript, Node.js, Supabase, PostgreSQL, and AWS. Recent projects
            include a mobile finance app, a personal expense platform, a
            serverless booking assistant, and cloud IAM practice focused on
            least-privilege access.
          </p>

          <p>
            I&apos;m especially interested in the overlap between{" "}
            <AccentLink href="#work-page">software engineering</AccentLink>,{" "}
            <AccentLink href="#work-page">cloud infrastructure</AccentLink>,
            and secure systems - the kind of work where usability, reliability,
            and trust all matter at once.
          </p>
        </AboutSection>

        {/* Personal note and contact links. */}
        <AboutSection title="Personal life">
          <p>
            Outside of work and school, I keep learning through side projects,
            technical reading, and hands-on practice. I enjoy breaking down
            unfamiliar systems until they feel less mysterious and more useful.
          </p>

          <p>
            I&apos;m always open to connecting about support, software, cloud,
            security, or early-career engineering paths. You can reach me by{" "}
            <AccentLink
              href="mailto:okogwuc@yahoo.com">
                email
            </AccentLink> or
            view my{" "}
            <AccentLink
              href="https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing"
              external
            >
              resume
            </AccentLink>
            .
          </p>
        </AboutSection>
      </div>
    </section>
  );
}
