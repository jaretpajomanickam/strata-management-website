import { HeroSection } from "./components/hero-section"
import { QuickLinks } from "./components/quick-links"
import { BenefitsSection } from "./components/benefits-section"
import { StatsSection } from "./components/stats-section"
import { Testimonials } from "./components/testimonials"
import { RecentUpdates } from "./components/recent-updates"
import { FaqSection } from "./components/faq-section"
import { CtaSection } from "./components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <QuickLinks />
      <BenefitsSection />
      <Testimonials />
      <RecentUpdates />
      <FaqSection />
      <CtaSection />
    </>
  )
}

