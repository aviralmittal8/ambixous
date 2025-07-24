import { AboutHero } from "@/components/about/about-hero"
import { DualModel } from "@/components/about/dual-model"
import { Values } from "@/components/about/values"
import { ImpactMetrics } from "@/components/about/impact-metrics"
import { JoinCTA } from "@/components/about/join-cta"

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <AboutHero />
      <DualModel />
      <Values />
      <ImpactMetrics />
      <JoinCTA />
    </div>
  )
}
