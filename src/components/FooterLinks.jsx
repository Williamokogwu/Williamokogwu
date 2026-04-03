export default function FooterLinks({ links }) {
  return (
    <footer>
      <nav aria-label="External links" className="flex flex-wrap gap-x-2.5 gap-y-2">
        {links.map((link, index) => (
          <span
            key={link.label}
            className="flex items-center text-[0.74rem] tracking-[0.24em] text-stone-500 sm:text-[0.79rem]"
          >
            <a
              className="opacity-90 underline underline-offset-4 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
            {index < links.length - 1 ? (
              <span className="ml-2.5 text-stone-800">/</span>
            ) : null}
          </span>
        ))}
      </nav>
    </footer>
  );
}
