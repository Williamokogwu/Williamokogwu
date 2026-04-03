import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ScrollToTopButton from "./ScrollToTopButton";

export default function SiteLayout({
  currentPage,
  theme,
  onToggleTheme,
  children,
}) {
  return (
    <>
      <div className="animate-page-fade mx-auto max-w-[1600px] px-8 pt-4 pb-8 sm:px-12 sm:pt-5 sm:pb-10 lg:px-16 lg:pt-6 lg:pb-12">
        <SiteHeader
          currentPage={currentPage}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
        {children}
        <SiteFooter />
      </div>
      <ScrollToTopButton />
    </>
  );
}
