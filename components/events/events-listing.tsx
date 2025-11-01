"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

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

interface EventsListingProps {
  upcomingEvents: Event[]
}

export function EventsListing({ upcomingEvents }: EventsListingProps) {
  const [filter, setFilter] = useState<"All" | "Community" | "Corporate">("All")

  const filteredEvents = upcomingEvents.filter((event) => {
    if (filter === "All") return true
    // Determine type from title or add to database if needed
    return event.title.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of experiences that change careers and grow businesses, blending learning, networking, and
              real-world impact. Book your spot before it's gone!
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4">
            {(["All", "Community", "Corporate"] as const).map((filterOption) => (
              <Button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={
                  filter === filterOption
                    ? "bg-ambixous-neon text-electric-ink hover:bg-ambixous-neon/90 font-bold px-6 py-3 rounded-xl shadow-lg"
                    : "bg-transparent text-slate-600 hover:text-ambixous-neon hover:border-ambixous-neon font-bold px-6 py-3 rounded-xl border-2 border-slate-300 transition-all duration-200"
                }
              >
                {filterOption}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-ambixous-neon/20 text-ambixous-neon border-ambixous-neon/30">
                            Event
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200">Closed</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-electric-ink group-hover:text-signal-blue transition-colors duration-200">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-ambixous-neon" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-signal-blue" />
                        <span>
                          {new Date(event.date).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin size={16} className="text-sun-coral" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    <Button className="mt-2 w-full bg-signal-blue text-electric-ink hover:bg-signal-blue/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-signal-blue/25 transition-all duration-200 hover:scale-105 group">
                      <span className="flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-600 col-span-full text-center py-8">No upcoming events</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
