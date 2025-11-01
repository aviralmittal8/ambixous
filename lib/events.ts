import { cache } from "react"
import type { SupabaseClient } from "@supabase/supabase-js"
import {
  upcomingEventsFallback,
  pastEventsFallback,
  type UpcomingEventRecord,
  type PastEventRecord,
} from "@/components/events/data"
import { getSupabaseClient } from "@/lib/supabase/client"

export type UpcomingEventRow = {
  id: string
  title: string
  summary: string | null
  description: string | null
  start_at: string | null
  end_at: string | null
  timezone: string | null
  type_label: string | null
  venue_name: string | null
  venue_city: string | null
  venue_country: string | null
  registration_url: string | null
  expected_attendees: number | null
  status: string | null
  speakers: string[] | null
}

export type PastEventRow = {
  id: string
  title: string
  summary: string | null
  description: string | null
  start_at: string | null
  end_at: string | null
  timezone: string | null
  type_label: string | null
  venue_city: string | null
  venue_country: string | null
  registration_url: string | null
  recap_url: string | null
  expected_attendees: number | null
  actual_attendees: number | null
  impact_summary: string | null
}

export const titleCase = (value: string | null | undefined) => {
  if (!value) return ""
  return value
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export const formatDate = (iso: string | null, timezone: string | null) => {
  if (!iso) return ""
  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeZone: timezone ?? "UTC",
    }).format(new Date(iso))
  } catch (error) {
    console.warn("Unable to format date", error)
    return ""
  }
}

export const formatTimeRange = (
  startIso: string | null,
  endIso: string | null,
  timezone: string | null
) => {
  if (!startIso || !endIso) return ""
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: timezone ?? "UTC",
    })
    return `${formatter.format(new Date(startIso))} – ${formatter.format(new Date(endIso))}`
  } catch (error) {
    console.warn("Unable to format time range", error)
    return ""
  }
}

export const resolveLocation = (row: UpcomingEventRow | PastEventRow) => {
  const parts = [row.venue_city, row.venue_country].filter(Boolean)
  if (parts.length === 0) {
    return row.venue_city ?? row.venue_country ?? ""
  }
  return parts.join(", ")
}

export const normalizeUpcomingEvent = (
  row: UpcomingEventRow
): UpcomingEventRecord => {
  return {
    id: row.id,
    title: row.title,
    date: formatDate(row.start_at, row.timezone) || "",
    time: formatTimeRange(row.start_at, row.end_at, row.timezone) || "",
    type: row.type_label ?? "Community",
    location: resolveLocation(row) || "",
    attendees: row.expected_attendees ?? 0,
    description: row.summary ?? row.description ?? "",
    speakers: Array.isArray(row.speakers) ? row.speakers.filter(Boolean) : [],
    status: titleCase(row.status) || "Published",
    registrationUrl: row.registration_url ?? "#",
  }
}

export const normalizePastEvent = (row: PastEventRow): PastEventRecord => {
  return {
    id: row.id,
    title: row.title,
    date: formatDate(row.start_at ?? row.end_at, row.timezone) || "",
    type: row.type_label ?? "Community",
    attendees: row.actual_attendees ?? row.expected_attendees ?? 0,
    impact: row.impact_summary ?? "",
    description: row.summary ?? row.description ?? "",
    learnUrl: row.recap_url ?? row.registration_url ?? "#",
  }
}

export const loadUpcomingEvents = async (
  client: SupabaseClient | null
): Promise<UpcomingEventRecord[]> => {
  if (!client) {
    return upcomingEventsFallback
  }

  const { data, error } = await client
    .from("view_upcoming_events")
    .select(
      "id, title, summary, description, start_at, end_at, timezone, type_label, venue_name, venue_city, venue_country, registration_url, expected_attendees, status, speakers"
    )
    .order("start_at", { ascending: true })

  if (error || !data || data.length === 0) {
    if (error) {
      console.error("Failed to load upcoming events from Supabase", error)
    }
    return upcomingEventsFallback
  }

  return data.map(normalizeUpcomingEvent)
}

export const loadPastEvents = async (
  client: SupabaseClient | null
): Promise<PastEventRecord[]> => {
  if (!client) {
    return pastEventsFallback
  }

  const { data, error } = await client
    .from("view_past_events")
    .select(
      "id, title, summary, description, start_at, end_at, timezone, type_label, venue_city, venue_country, registration_url, recap_url, expected_attendees, actual_attendees, impact_summary"
    )
    .order("end_at", { ascending: false })

  if (error || !data || data.length === 0) {
    if (error) {
      console.error("Failed to load past events from Supabase", error)
    }
    return pastEventsFallback
  }

  return data.map(normalizePastEvent)
}

const fetchUpcoming = cache(async (): Promise<UpcomingEventRecord[]> => {
  return loadUpcomingEvents(getSupabaseClient())
})

const fetchPast = cache(async (): Promise<PastEventRecord[]> => {
  return loadPastEvents(getSupabaseClient())
})

export const fetchEventsPageData = cache(async () => {
  const [upcomingEvents, pastEvents] = await Promise.all([fetchUpcoming(), fetchPast()])

  return {
    upcomingEvents,
    pastEvents,
  }
})
