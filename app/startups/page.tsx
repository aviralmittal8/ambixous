import { StartupsHero } from "@/components/startups/startups-hero"
import { ServicesGrid } from "@/components/startups/services-grid"
import { ClientShowcase } from "@/components/startups/client-showcase"
import { ProcessSection } from "@/components/startups/process-section"
import { StartupsCTA } from "@/components/startups/startups-cta"

export default function StartupsPage() {
  return (
    <div className="space-y-0">
      <StartupsHero />
      <ServicesGrid />
      <ProcessSection />
      <ClientShowcase />
      <StartupsCTA />
    </div>
  )
}
