"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "AI for Social Good Workshop",
    date: "March 15, 2025",
    time: "2:00 PM - 5:00 PM",
    type: "Community",
    location: "Virtual",
    attendees: 200,
    description: "Learn how AI can be leveraged to solve real-world social problems and create positive impact.",
    speakers: ["Dr. Sarah Chen", "Raj Patel"],
    status: "Open",
  },
  {
    id: 2,
    title: "Corporate Innovation Summit",
    date: "March 22, 2025",
    time: "9:00 AM - 6:00 PM",
    type: "Corporate",
    location: "Mumbai",
    attendees: 150,
    description: "A full-day summit exploring the latest trends in corporate innovation and digital transformation.",
    speakers: ["CEO Panel", "Innovation Leaders"],
    status: "Limited Seats",
  },
  {
    id: 3,
    title: "Women in Tech Networking",
    date: "April 5, 2025",
    time: "6:00 PM - 9:00 PM",
    type: "Community",
    location: "Bangalore",
    attendees: 100,
    description: "An evening of networking, mentorship, and celebrating women making waves in technology.",
    speakers: ["Industry Leaders", "Startup Founders"],
    status: "Open",
  },
  {
    id: 4,
    title: "Product Strategy Bootcamp",
    date: "April 12, 2025",
    time: "10:00 AM - 4:00 PM",
    type: "Corporate",
    location: "Delhi",
    attendees: 80,
    description: "Intensive workshop on product strategy, roadmapping, and execution for growing companies.",
    speakers: ["Product VPs", "Strategy Consultants"],
    status: "Early Bird",
  },
]

export function EventsListing() {
  const [filter, setFilter] = useState<"All" | "Community" | "Corporate">("All")

  const filteredEvents = upcomingEvents.filter((event) => filter === "All" || event.type === filter)

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
              Join us for transformative experiences that blend learning, networking, and real-world impact.
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
            {filteredEvents.map((event, index) => (
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
                        <Badge
                          className={
                            event.type === "Community"
                              ? "bg-ambixous-neon/20 text-ambixous-neon border-ambixous-neon/30"
                              : "bg-signal-blue/20 text-signal-blue border-signal-blue/30"
                          }
                        >
                          {event.type}
                        </Badge>
                        <Badge
                          className={
                            event.status === "Open"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : event.status === "Limited Seats"
                                ? "bg-orange-100 text-orange-700 border-orange-200"
                                : "bg-blue-100 text-blue-700 border-blue-200"
                          }
                        >
                          {event.status}
                        </Badge>
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
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-signal-blue" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-sun-coral" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-ambixous-neon" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Speakers */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-electric-ink">Featured Speakers:</div>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, speakerIndex) => (
                        <span key={speakerIndex} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button className="w-full bg-signal-blue text-electric-ink hover:bg-signal-blue/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-signal-blue/25 transition-all duration-200 hover:scale-105 group">
                    <span className="flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
