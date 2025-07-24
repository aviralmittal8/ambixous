import { CommunityHero } from "@/components/community/community-hero"
import { CommunityBenefits } from "@/components/community/community-benefits"
import { JoinProcess } from "@/components/community/join-process"
import { CommunityImpact } from "@/components/community/community-impact"

export default function CommunityPage() {
  return (
    <div className="space-y-0">
      <CommunityHero />
      <CommunityBenefits />
      <JoinProcess />
      <CommunityImpact />
    </div>
  )
}
