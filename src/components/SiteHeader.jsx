export default function SiteHeader({ currentPage, theme, onToggleTheme }) {
  const navLinks = [
    { label: "home", href: "#top", active: currentPage === "home" },
    { label: "work", href: "#work-page", active: currentPage === "work" },
    {
      label: "resume",
      href: "https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing",
      external: true,
    },
    { label: "about", href: "#about-page", active: currentPage === "about" },
  ];

  return (
    <header className="flex justify-end py-4">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-8 gap-y-3 text-[1rem] leading-none text-[color:var(--color-text-primary)] sm:text-[1.08rem]"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={`underline-offset-4 transition-opacity duration-200 hover:opacity-65 ${
              link.active ? "underline" : ""
            }`}
          >
            {link.label}
          </a>
        ))}

        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={onToggleTheme}
          className="leading-none underline-offset-4 transition-opacity duration-200 hover:opacity-65"
        >
          {theme === "dark" ? "light" : "dark"}
        </button>
      </nav>
    </header>
  );
}
