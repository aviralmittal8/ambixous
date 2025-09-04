"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Disrupting the Funnel: The Future of AdTech & Brand Marketing",
    date: "September 13, 2025",
    time: "1:00 PM – 5:00 PM",
    type: "Corporate",
    location: "Noida",
    attendees: 100,
    description: "Disrupting the Funnel is an afternoon of candid insights, proven playbooks, and pitfalls to avoid from AdTech innovators and growth leaders on taking a brand from 0 → 1.",
    speakers: ["Ms.Shaweta Berry", "Rohit Kaul", "Rachita Gupta", "Sayantan Dasgupta"],
    status: "Open",
    registrationUrl: "https://www.commudle.com/communities/ambixous/events/disrupting-the-funnel-the-future-of-adtech-brand-marketing",
  },
  {
    id: 2,
    title: "SkillUp Bootcamp",
    date: "August 2, 2025",
    time: "10:30 AM – 04:00 PM",
    type: "Community",
    location: "Noida",
    attendees: 200,
    description: "A high-impact learning experience for developers, designers, and tech professionals to upskill through live sessions with experts from Google, Deloitte, Policy Bazaar, and Nagarro.",
    speakers: ["varedh nigam", "Nitasha Dhingra","Sneha Swaroop","Satendra Kumar"],
    status: "Closed",
    registrationUrl: "https://www.commudle.com/communities/ambixous/events/skillup-bootcamp",
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
              Be part of experiences that change careers and grow businesses,  blending learning, networking, and real-world impact. Book your spot before it’s gone!
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
                  <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-signal-blue text-electric-ink hover:bg-signal-blue/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-signal-blue/25 transition-all duration-200 hover:scale-105 group">
                      <span className="flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
