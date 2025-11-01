"use client"

import { useState } from "react"
import type { User } from "@supabase/supabase-js"
import EventForm from "./event-form"
import EventsList from "./events-list"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

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

interface EventsAdminDashboardProps {
  initialEvents: Event[]
  user: User
}

export default function EventsAdminDashboard({ initialEvents, user }: EventsAdminDashboardProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const router = useRouter()

  const handleLogout = async () => {
    const { createClient } = await import("@/lib/supabase/client")
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  const handleEventAdded = (newEvent: Event) => {
    setEvents([newEvent, ...events])
    setShowForm(false)
  }

  const handleEventUpdated = (updatedEvent: Event) => {
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)))
    setEditingEvent(null)
  }

  const handleEventDeleted = (eventId: string) => {
    setEvents(events.filter((e) => e.id !== eventId))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events Manager</h1>
          <p className="text-sm text-muted-foreground mt-1">Logged in as {user.email}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={() => {
            setEditingEvent(null)
            setShowForm(!showForm)
          }}
          className="bg-primary text-primary-foreground"
        >
          {showForm ? "Cancel" : "Add Event"}
        </Button>
      </div>

      {/* Form */}
      {showForm && <EventForm onEventAdded={handleEventAdded} onCancel={() => setShowForm(false)} />}

      {/* Edit Form */}
      {editingEvent && (
        <EventForm event={editingEvent} onEventUpdated={handleEventUpdated} onCancel={() => setEditingEvent(null)} />
      )}

      {/* Events List */}
      <EventsList events={events} onEdit={setEditingEvent} onDelete={handleEventDeleted} />
    </div>
  )
}
