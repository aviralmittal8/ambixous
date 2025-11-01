import { Calendar, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface PastHighlightsProps {
  pastEvents: Event[]
}

export function PastHighlights({ pastEvents }: PastHighlightsProps) {
  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white">
              Past <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              Our events have connected 5,000+ professionals and students - accelerating careers, closing deals, and
              building skills that last. Here's a look back at the experiences that made it happen.
            </p>
          </div>

          {/* Events Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-6">
                    {/* Event Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-ambixous-neon/20 text-ambixous-neon">
                          Past Event
                        </span>
                        <span className="text-slate-gray text-sm">
                          {new Date(event.date).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-warm-white group-hover:text-ambixous-neon transition-colors duration-200">
                        {event.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-gray leading-relaxed">{event.description}</p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-gray">
                      <Calendar size={16} className="text-ambixous-neon" />
                      <span className="text-sm">{event.location}</span>
                    </div>

                    {/* Learn Now Button */}
                    <Button className="mt-2 w-full bg-signal-blue text-electric-ink hover:bg-signal-blue/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-signal-blue/25 transition-all duration-200 hover:scale-105 group">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-gray col-span-full text-center py-8">No past events yet</p>
            )}
          </div>

          {/* Overall Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-ambixous-neon/20 rounded-2xl">
                  <Calendar className="text-ambixous-neon" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-ambixous-neon">50+</div>
              <div className="text-slate-gray">Events Hosted - in the last 24 months</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-signal-blue/20 rounded-2xl">
                  <Users className="text-signal-blue" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-signal-blue">5000+</div>
              <div className="text-slate-gray">Total Participants - engaged in learning, networking, and growth</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-sun-coral/20 rounded-2xl">
                  <Award className="text-sun-coral" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-sun-coral">98%</div>
              <div className="text-slate-gray">
                Satisfaction Rate - participants rated their experiences as highly valuable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
