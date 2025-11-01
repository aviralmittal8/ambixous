import { EventsHero } from "@/components/events/events-hero"
import { EventsListing } from "@/components/events/events-listing"
import { PastHighlights } from "@/components/events/past-highlights"
import { EventsCTA } from "@/components/events/events-cta"
import { fetchEventsPageData } from "@/lib/events"

export default async function EventsPage() {
  const { upcomingEvents, pastEvents } = await fetchEventsPageData()

  return (
    <div className="space-y-0">
      <EventsHero />
      <EventsListing events={upcomingEvents} />
      <PastHighlights events={pastEvents} />
      <EventsCTA />
    </div>
  )
}
