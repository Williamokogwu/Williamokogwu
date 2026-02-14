import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { FooterSection } from "@/components/footer-section"
import { SectionDivider } from "@/components/section-divider"

/* 
  This is the main landing page layout.
  It just composes sections in order.
*/
export default function Page() {
  return (
    /* 
      relative → allows absolutely-positioned overlays
      min-h-screen → full viewport height
      grid-bg → custom grid background
      noise → subtle grain overlay
    */
    <div className="relative min-h-screen grid-bg noise">

      {/* Top navigation bar */}
      <Navigation />

      {/* 
        Main content wrapper
        z-10 → sits above the background + noise layer
      */}
      <main className="relative z-10">

        {/* Hero / intro */}
        <HeroSection />

        {/* Visual separator line */}
        <SectionDivider />

        {/* Work history */}
        <ExperienceSection />

        <SectionDivider />

        {/* Featured projects */}
        <ProjectsSection />

        <SectionDivider />

        {/* Tech stack & tools */}
        <SkillsSection />

        <SectionDivider />

        {/* Education timeline */}
        <EducationSection />
      </main>

      {/* Footer at the bottom */}
      <FooterSection />
    </div>
  )
}