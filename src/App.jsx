import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout";
import WorkPreviewSection from "./components/WorkPreviewSection";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";

const THEME_STORAGE_KEY = "portfolio-theme";

function getPageFromHash() {
  if (window.location.hash === "#about-page") {
    return "about";
  }

  if (window.location.hash === "#work-page") {
    return "work";
  }

  return "home";
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function HomePage() {
  return (
    <section className="space-y-16 sm:space-y-20 lg:space-y-24">
      <section className="flex min-h-screen flex-col">
        <main className="flex flex-1 items-end">
          <section className="w-full pb-2 sm:pb-4">
            <div className="max-w-[76rem] space-y-8 sm:space-y-10">
              <h1 className="font-display max-w-[28ch] text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-[2.55rem] sm:leading-[1.08] lg:text-[3.35rem] lg:leading-[1.06]">
                Chijioke is an{" "}
                <span className="italic text-[color:var(--color-accent)]">
                  IT support specialist
                </span>{" "}
                and computer science student building toward software
                engineering, cloud systems, and secure infrastructure.
              </h1>

              <p className="font-body max-w-[34rem] text-[1rem] leading-[1.62] tracking-[-0.02em] text-[color:var(--color-text-secondary)] sm:text-[1.2rem] sm:leading-[1.58]">
                He works across support, systems, and usability while
                continuing to build frontend projects and cloud-focused work
                that strengthens his software engineering foundation.
              </p>
            </div>
          </section>
        </main>
      </section>

      <WorkPreviewSection />
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash());
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

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
