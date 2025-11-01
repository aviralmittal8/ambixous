"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

interface EventFormProps {
  event?: Event
  onEventAdded?: (event: Event) => void
  onEventUpdated?: (event: Event) => void
  onCancel: () => void
}

export default function EventForm({ event, onEventAdded, onEventUpdated, onCancel }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: event?.title || "",
    description: event?.description || "",
    date: event ? new Date(event.date).toISOString().slice(0, 16) : "",
    location: event?.location || "",
    image_url: event?.image_url || "",
    event_type: event?.event_type || ("upcoming" as "upcoming" | "past"),
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      if (event) {
        // Update event
        const { data, error: updateError } = await supabase
          .from("events")
          .update({
            ...formData,
            date: new Date(formData.date).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", event.id)
          .select()
          .single()

        if (updateError) throw updateError
        if (data && onEventUpdated) onEventUpdated(data)
      } else {
        // Create event
        const { data, error: insertError } = await supabase
          .from("events")
          .insert({
            ...formData,
            date: new Date(formData.date).toISOString(),
          })
          .select()
          .single()

        if (insertError) throw insertError
        if (data && onEventAdded) onEventAdded(data)
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{event ? "Edit Event" : "Add New Event"}</CardTitle>
        <CardDescription>{event ? "Update event details" : "Create a new event"}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date & Time</Label>
              <Input
                id="date"
                type="datetime-local"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="event_type">Type</Label>
              <Select
                value={formData.event_type}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    event_type: value as "upcoming" | "past",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="past">Past</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://..."
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (event ? "Updating..." : "Creating...") : event ? "Update Event" : "Create Event"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
