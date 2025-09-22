import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsSection } from "@/components/stats-section"
import { WhyJoinSection } from "@/components/why-join-section"
import { MembershipOptionsSection } from "@/components/membership-options-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationHoursSection } from "@/components/location-hours-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <StatsSection />
      <WhyJoinSection />
      <MembershipOptionsSection />
      <TestimonialsSection />
      <LocationHoursSection />
      <Footer />
    </main>
  )
}
