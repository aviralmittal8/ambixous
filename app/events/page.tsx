import { EventsHero } from "@/components/events/events-hero"
import { EventsListing } from "@/components/events/events-listing"
import { PastHighlights } from "@/components/events/past-highlights"
import { EventsCTA } from "@/components/events/events-cta"

export default function EventsPage() {
  return (
    <div className="space-y-0">
      <EventsHero />
      <EventsListing />
      <PastHighlights />
      <EventsCTA />
    </div>
  )
}
