import {
  formatDate,
  formatTimeRange,
  loadPastEvents,
  loadUpcomingEvents,
  normalizePastEvent,
  normalizeUpcomingEvent,
  resolveLocation,
  titleCase,
} from "@/lib/events"
import {
  pastEventsFallback,
  upcomingEventsFallback,
} from "@/components/events/data"
import type { SupabaseClient } from "@supabase/supabase-js"

type QueryResult<T> = Promise<{ data: T[] | null; error: { message: string } | null }>

type QueryHandler<T> = {
  select: (columns: string) => {
    order: (column: string, options: { ascending: boolean }) => QueryResult<T>
  }
}

const createStubClient = <T>({
  rows,
  error,
}: {
  rows: T[] | null
  error?: { message: string } | null
}): SupabaseClient => {
  const handler: QueryHandler<T> = {
    select: () => ({
      order: async () => ({
        data: rows,
        error: error ?? null,
      }),
    }),
  }

  return {
    from: () => handler,
  } as unknown as SupabaseClient
}

describe("events utilities", () => {
  it("titleCase formats strings", () => {
    expect(titleCase("hello world")).toBe("Hello World")
    expect(titleCase("multi_word_status")).toBe("Multi Word Status")
    expect(titleCase(null)).toBe("")
  })

  it("resolveLocation gracefully joins parts", () => {
    expect(
      resolveLocation({
        venue_city: "New York",
        venue_country: "USA",
      } as any)
    ).toBe("New York, USA")

    expect(
      resolveLocation({
        venue_city: "London",
        venue_country: null,
      } as any)
    ).toBe("London")
  })

  it("normalizeUpcomingEvent fills defaults", () => {
    const record = normalizeUpcomingEvent({
      id: "1",
      title: "Test",
      summary: "Summary",
      description: null,
      start_at: "2024-01-01T10:00:00Z",
      end_at: "2024-01-01T12:00:00Z",
      timezone: "UTC",
      type_label: "Corporate",
      venue_name: "",
      venue_city: "New York",
      venue_country: "USA",
      registration_url: null,
      expected_attendees: 50,
      status: "published",
      speakers: ["Ada"],
    })

    expect(record).toMatchObject({
      title: "Test",
      type: "Corporate",
      location: "New York, USA",
      registrationUrl: "#",
    })
  })

  it("normalizePastEvent fills defaults", () => {
    const record = normalizePastEvent({
      id: "2",
      title: "Past",
      summary: null,
      description: "Description",
      start_at: "2024-01-01T10:00:00Z",
      end_at: "2024-01-01T12:00:00Z",
      timezone: "UTC",
      type_label: "Community",
      venue_city: "Paris",
      venue_country: "France",
      registration_url: null,
      recap_url: null,
      expected_attendees: 20,
      actual_attendees: 15,
      impact_summary: "Great",
    })

    expect(record).toMatchObject({
      impact: "Great",
      learnUrl: "#",
    })
  })

  it("formatDate respects timezone", () => {
    expect(formatDate("2024-05-20T15:30:00Z", "UTC")).toContain("2024")
    expect(formatDate(null, "UTC")).toBe("")
  })

  it("formatTimeRange handles invalid data", () => {
    expect(formatTimeRange(null, null, "UTC")).toBe("")
    const value = formatTimeRange("2024-05-20T10:00:00Z", "2024-05-20T12:00:00Z", "UTC")
    expect(value).toContain("–")
  })
})

describe("Supabase backed loaders", () => {
  const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})

  afterEach(() => {
    errorSpy.mockClear()
  })

  afterAll(() => {
    errorSpy.mockRestore()
  })

  it("falls back when no client is provided", async () => {
    const upcoming = await loadUpcomingEvents(null)
    const past = await loadPastEvents(null)

    expect(upcoming).toEqual(upcomingEventsFallback)
    expect(past).toEqual(pastEventsFallback)
  })

  it("returns normalized data when Supabase responds", async () => {
    const upcomingClient = createStubClient({
      rows: [
        {
          id: "1",
          title: "Supabase Event",
          summary: "Summary",
          description: "",
          start_at: "2024-06-01T10:00:00Z",
          end_at: "2024-06-01T11:00:00Z",
          timezone: "UTC",
          type_label: "Community",
          venue_name: "",
          venue_city: "Austin",
          venue_country: "USA",
          registration_url: "https://example.com",
          expected_attendees: 100,
          status: "published",
          speakers: ["Grace"],
        },
      ],
    })

    const pastClient = createStubClient({
      rows: [
        {
          id: "2",
          title: "Past Supabase Event",
          summary: "",
          description: "",
          start_at: "2024-04-01T10:00:00Z",
          end_at: "2024-04-01T11:00:00Z",
          timezone: "UTC",
          type_label: "Corporate",
          venue_city: "Berlin",
          venue_country: "Germany",
          registration_url: "https://example.com/register",
          recap_url: "https://example.com/recap",
          expected_attendees: 80,
          actual_attendees: 75,
          impact_summary: "Insightful",
        },
      ],
    })

    const [upcoming, past] = await Promise.all([
      loadUpcomingEvents(upcomingClient),
      loadPastEvents(pastClient),
    ])

    expect(upcoming).toHaveLength(1)
    expect(upcoming[0]).toMatchObject({
      title: "Supabase Event",
      location: "Austin, USA",
      registrationUrl: "https://example.com",
    })

    expect(past).toHaveLength(1)
    expect(past[0]).toMatchObject({
      title: "Past Supabase Event",
      learnUrl: "https://example.com/recap",
    })
  })

  it("logs and falls back when Supabase returns an error", async () => {
    const client = createStubClient({ rows: null, error: { message: "Boom" } })
    const result = await loadUpcomingEvents(client)

    expect(result).toEqual(upcomingEventsFallback)
    expect(errorSpy).toHaveBeenCalled()
  })
})
