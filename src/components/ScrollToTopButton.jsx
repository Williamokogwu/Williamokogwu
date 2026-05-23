import { useEffect, useState } from "react";

// Floating button that appears after the user scrolls down the page.
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Listen to scroll position and only show the button on longer pages.
  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 900);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`theme-toggle fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border text-lg backdrop-blur transition-all duration-300 hover:text-[color:var(--color-accent)] sm:bottom-8 sm:right-8 ${
        // Toggle visibility without removing the button from the DOM.
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
