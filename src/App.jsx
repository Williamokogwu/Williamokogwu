import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { workProjects } from "./data/workProjects";

const THEME_STORAGE_KEY = "portfolio-theme";

// Converts the URL hash into the page name the app should render.
function getPageFromHash() {
  if (window.location.hash === "#about-page") {
    return "about";
  }

  if (window.location.hash === "#work-page") {
    return "work";
  }

  return "home";
}

// Loads the saved theme when available, then falls back to light mode.
function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "light";
}

// Short experience list shown on the home page.
const experiences = [
  {
    role: "IT Support Specialist",
    organization: "University of Wisconsin - Parkside",
    date: "Dec 2025 - May 2026",
    summary:
      "Diagnosed and resolved endpoint, VPN, and network configuration issues across Windows, macOS, and Ubuntu systems for 5,000+ users in an enterprise environment.",
  },
  {
    role: "Operations Assistant",
    organization: "University of Wisconsin - Parkside",
    date: "May 2024 - Sep 2024",
    summary:
      "Coordinated scheduling and task tracking across 100+ campus facilities, maintaining consistent service delivery and on-time completion for daily operations requests.",
  },
  // {
  //   role: "Cloud and Security Projects",
  //   organization: "AWS, IAM, serverless systems",
  //   date: "2025",
  //   summary:
  //     "Designing small practical systems around least-privilege access, serverless workflows, data storage, and conversational cloud tools.",
  // },
];

// Renders a small pill for each technology attached to a project.
function ProjectTags({ tools }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.split(", ").map((tool) => (
        <span
          key={tool}
          className="rounded-full bg-[color:var(--color-chip-bg)] px-3 py-1 text-[0.78rem] leading-none text-[color:var(--color-text-muted)]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

// Home page: quick intro, experience summary, and the first few projects.
function HomePage() {
  return (
    <section className="mx-auto max-w-[68rem] py-12 sm:py-16 lg:py-20">
      <header className="space-y-7">
        {/* Intro block at the top of the home page. */}
        <div className="space-y-4">
          <h1 className="text-[2.45rem] leading-tight text-[color:var(--color-text-primary)] sm:text-[3.1rem]">
            Hi, I&apos;m Chijioke
          </h1>

          <p className="flex items-center gap-2 text-[1.06rem] text-[color:var(--color-text-muted)]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]"
            />
            currently building in IT support, cloud, and software
          </p>
        </div>

        <div className="space-y-3 text-[1.08rem] leading-8 text-[color:var(--color-text-primary)]">
          <p>
            I like making practical systems easier to use and maintain -{" "}
            <a
              className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-65"
              href="mailto:okogwuc@yahoo.com"
            >
              let&apos;s chat
            </a>
          </p>
          <p>
            Computer science graduate focused on support, secure infrastructure,
            frontend projects, and cloud systems.
          </p>
        </div>
      </header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        {/* Left column: professional experience highlights. */}
        <section className="space-y-8">
          <h2 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.role}
                className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2"
              >
                <h3 className="text-[1.08rem] font-semibold">
                  {experience.role}
                </h3>
                <p className="text-[0.98rem] text-[color:var(--color-text-muted)]">
                  {experience.date}
                </p>
                <div className="col-span-2 space-y-2 pl-0 sm:pl-8">
                  <p className="text-[1rem] text-[color:var(--color-text-secondary)]">
                    {experience.organization}
                  </p>
                  <p className="max-w-[30rem] text-[0.98rem] leading-7 text-[color:var(--color-text-muted)]">
                    {experience.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Right column: selected project previews pulled from workProjects. */}
        <section className="space-y-8">
          <h2 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
            Projects
          </h2>

          <div className="space-y-10">
            {workProjects.slice(0, 3).map((project) => (
              <article key={project.id} className="space-y-3">
                <div className="flex items-baseline justify-between gap-5">
                  <h3 className="text-[1.08rem] font-semibold">
                    {project.title}
                  </h3>

                  <nav
                    aria-label={`${project.title} links`}
                    className="flex shrink-0 items-center gap-3 text-[0.95rem] text-[color:var(--color-text-faint)]"
                  >
                    <a
                      href={project.href}
                      className="underline underline-offset-4 transition-opacity duration-200 hover:opacity-65"
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      github
                    </a>
                  </nav>
                </div>

                <ProjectTags tools={project.tools} />

                <p className="max-w-[33rem] text-[1rem] leading-7 text-[color:var(--color-text-primary)]">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

// Main app shell: manages hash-based routing and theme state.
export default function App() {
  const [page, setPage] = useState(getPageFromHash());
  const [theme, setTheme] = useState(getInitialTheme);

  // Keep the current page in sync when the user clicks hash navigation links.
  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Reset scroll position when switching between home, work, and about views.
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#about-page" || hash === "#work-page") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (hash === "#top" || hash === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  // Apply the active theme to the document and save it for future visits.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // Switch between the two theme values used by the CSS variables.
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)]"
    >
      <SiteLayout
        currentPage={page}
        theme={theme}
        onToggleTheme={toggleTheme}
      >
        {page === "about" ? (
          <AboutPage />
        ) : page === "work" ? (
          <WorkPage />
        ) : (
          <HomePage />
        )}
      </SiteLayout>
    </div>
  );
}
