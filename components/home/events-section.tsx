"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const events = [
   {
    id: 1,
    title: "Disrupting the Funnel",
    date: "September 13, 2025",
    type: "Corporate",
    location: "Noida",
    attendees: 100,
    description: "The Future of AdTech & Brand Marketing",
  },
  {
    id: 2,
    title: "SkillUp Bootcamp",
    date: "Aug 2, 2025",
    type: "Community",
    location: "Virtual",
    attendees: 150,
    description: "Intensive learning session for skill development",
  },
  {
    id: 3,
    title: "Fusion Forum",
    date: "July 19, 2025",
    type: "Corporate",
    location: "Noida",
    attendees: 80,
    description: "Corporate networking and innovation forum",
  },
  {
    id: 4,
    title: "AI for Social Good",
    date: "April 05, 2025",
    type: "Community",
    location: "Virtual",
    attendees: 200,
    description: "Panel discussion on AI applications for social impact",
  },
]

export function EventsSection() {
  const [filter, setFilter] = useState<"All" | "Community" | "Corporate">("All")

  const filteredEvents = events.filter((event) => filter === "All" || event.type === filter)

  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white">
              From Panels to Bootcamps to <span className="text-gradient">Corporate Lounges.</span>
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Every event we craft brings people closer to learning, networking, and creating value.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4">
            {(["All", "Community", "Corporate"] as const).map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className={
                  filter === filterOption
                    ? "bg-ambixous-neon text-electric-ink hover:bg-ambixous-neon/90"
                    : "border-slate-gray text-slate-gray hover:border-ambixous-neon hover:text-ambixous-neon"
                }
              >
                {filterOption}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge
                        variant="secondary"
                        className={
                          event.type === "Community"
                            ? "bg-ambixous-neon/20 text-ambixous-neon"
                            : "bg-signal-blue/20 text-signal-blue"
                        }
                      >
                        {event.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-warm-white group-hover:text-ambixous-neon transition-colors duration-200">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-gray">{event.description}</p>

                  <div className="flex items-center gap-4 text-sm text-slate-gray">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-signal-blue ext-signal-blue hover:bg-signal-blue hover:text-electric-ink group bg-transparent transition-all duration-300 hover:scale-105 group"
            >
              <Link href="/events" className="flex items-center gap-2">
                View All Events
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
