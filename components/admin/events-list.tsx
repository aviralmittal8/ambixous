"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image_url: string | null
  event_type: "upcoming" | "past"
  created_at: string
  updated_at: string
}

interface EventsListProps {
  events: Event[]
  onEdit: (event: Event) => void
  onDelete: (eventId: string) => void
}

export default function EventsList({ events, onEdit, onDelete }: EventsListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (eventId: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    setDeletingId(eventId)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("events").delete().eq("id", eventId)

      if (error) throw error
      onDelete(eventId)
    } catch (error) {
      console.error("Delete error:", error)
      alert("Failed to delete event")
    } finally {
      setDeletingId(null)
    }
  }

  const upcoming = events.filter((e) => e.event_type === "upcoming")
  const past = events.filter((e) => e.event_type === "past")

  return (
    <div className="space-y-8">
      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Events ({upcoming.length})</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.length > 0 ? (
            upcoming.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onEdit={onEdit}
                onDelete={handleDelete}
                isDeleting={deletingId === event.id}
              />
            ))
          ) : (
            <p className="text-muted-foreground col-span-full">No upcoming events</p>
          )}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Past Events ({past.length})</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {past.length > 0 ? (
            past.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onEdit={onEdit}
                onDelete={handleDelete}
                isDeleting={deletingId === event.id}
              />
            ))
          ) : (
            <p className="text-muted-foreground col-span-full">No past events</p>
          )}
        </div>
      </div>
    </div>
  )
}

function EventCard({
  event,
  onEdit,
  onDelete,
  isDeleting,
}: {
  event: Event
  onEdit: (event: Event) => void
  onDelete: (eventId: string) => void
  isDeleting: boolean
}) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card>
      {event.image_url && (
        <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
          <Image src={event.image_url || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
          <Badge variant={event.event_type === "upcoming" ? "default" : "secondary"}>{event.event_type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        <div className="space-y-1 text-sm">
          <p className="text-foreground">
            <span className="font-semibold">Date:</span> {formattedDate}
          </p>
          <p className="text-foreground">
            <span className="font-semibold">Location:</span> {event.location}
          </p>
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" onClick={() => onEdit(event)} className="flex-1">
            Edit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(event.id)}
            disabled={isDeleting}
            className="flex-1"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
