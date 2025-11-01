import { EventsHero } from "@/components/events/events-hero"
import { EventsListing } from "@/components/events/events-listing"
import { PastHighlights } from "@/components/events/past-highlights"
import { EventsCTA } from "@/components/events/events-cta"
import { createClient } from "@/lib/supabase/server"

export default async function EventsPage() {
  const supabase = await createClient()

  const { data: events } = await supabase.from("events").select("*").order("date", { ascending: false })

  const upcomingEvents = events?.filter((e) => e.event_type === "upcoming") || []
  const pastEvents = events?.filter((e) => e.event_type === "past") || []

  return (
    <div className="space-y-0">
      <EventsHero />
      <EventsListing upcomingEvents={upcomingEvents} />
      <PastHighlights pastEvents={pastEvents} />
      <EventsCTA />
    </div>
  )
}
