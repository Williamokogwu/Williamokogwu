import { useEffect, useState } from "react";

export default function SiteHeader({ currentPage, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const siteIconSrc = theme === "light" ? "/header-images/icon-513.png" : "/header-images/icon-512.png";

  useEffect(() => {
    if (isMobileMenuOpen) {
      handleCloseMobileMenu();
    }
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuVisible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuVisible]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuVisible(true);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsMobileMenuVisible(false);
    }, 260);

    return () => window.clearTimeout(timeoutId);
  }, [isMobileMenuOpen]);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuVisible(true);
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="font-header relative flex items-start justify-between gap-8">
      <a
        href="#top"
        aria-label="Back to top"
        className="block shrink-0 transition-opacity duration-200 hover:opacity-70"
      >
        <img
          src={siteIconSrc}
          alt="Site icon"
          className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
        />
      </a>

      <div className="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={onToggleTheme}
          className="theme-toggle inline-flex h-10 items-center gap-2 rounded-full border px-4 text-[0.8rem] uppercase tracking-[0.18em] backdrop-blur transition-all duration-200 sm:text-[0.85rem]"
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            isMobileMenuOpen ? handleCloseMobileMenu() : handleOpenMobileMenu()
          }
          className={`theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border text-[1rem] backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
            isMobileMenuOpen ? "scale-[0.96]" : "scale-100"
          }`}
        >
          <span
            aria-hidden="true"
            className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMobileMenuOpen ? "scale-[0.92]" : "scale-100"
            }`}
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </span>
        </button>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-[0.92rem] sm:flex sm:text-[0.98rem]"
        >
          <a
            className={`transition-opacity duration-200 hover:opacity-70 ${
              currentPage === "work"
                ? "text-[color:var(--color-accent)]"
                : "text-[color:var(--color-text-primary)]"
            }`}
            href="#work-page"
          >
            Work
          </a>
          <span className="text-[color:var(--color-text-faint)]">|</span>
          <a
            className="text-[color:var(--color-text-primary)] transition-opacity duration-200 hover:opacity-70"
            href="https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <span className="text-[color:var(--color-text-faint)]">|</span>
          <a
            className={`transition-opacity duration-200 hover:opacity-70 ${
              currentPage === "about"
                ? "text-[color:var(--color-accent)]"
                : "text-[color:var(--color-text-primary)]"
            }`}
            href="#about-page"
          >
            About
          </a>
        </nav>
      </div>

      {isMobileMenuVisible ? (
        <div
          className={`mobile-menu-overlay fixed inset-0 z-50 bg-[color:var(--color-bg)] sm:hidden ${
            isMobileMenuOpen ? "mobile-menu-overlay--open" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation"
        >
          <div className="relative min-h-screen px-8 pt-6 pb-10">
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={handleCloseMobileMenu}
                className={`mobile-menu-close inline-flex h-12 w-12 items-center justify-center text-[2.4rem] leading-none text-[color:var(--color-text-primary)] ${
                  isMobileMenuOpen ? "mobile-menu-close--open" : ""
                }`}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav
              id="mobile-navigation"
              aria-label="Mobile primary"
              className="mx-auto mt-32 flex w-full max-w-[16rem] flex-col items-center gap-10 text-center"
            >
              <a
                className={`mobile-menu-link block w-full text-[1.7rem] leading-none tracking-[-0.02em] transition-opacity duration-200 hover:opacity-70 ${
                  currentPage === "work"
                    ? "text-[color:var(--color-accent)]"
                    : "text-[color:var(--color-text-primary)]"
                } ${isMobileMenuOpen ? "mobile-menu-link--open" : ""}`}
                href="#work-page"
                onClick={handleCloseMobileMenu}
              >
                Work
              </a>
              <a
                className={`mobile-menu-link block w-full text-[1.7rem] leading-none tracking-[-0.02em] text-[color:var(--color-text-primary)] transition-opacity duration-200 hover:opacity-70 ${
                  isMobileMenuOpen ? "mobile-menu-link--open" : ""
                }`}
                href="https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseMobileMenu}
              >
                Resume
              </a>
              <a
                className={`mobile-menu-link block w-full text-[1.7rem] leading-none tracking-[-0.02em] transition-opacity duration-200 hover:opacity-70 ${
                  currentPage === "about"
                    ? "text-[color:var(--color-accent)]"
                    : "text-[color:var(--color-text-primary)]"
                } ${isMobileMenuOpen ? "mobile-menu-link--open" : ""}`}
                href="#about-page"
                onClick={handleCloseMobileMenu}
              >
                About
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
