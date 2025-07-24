import { Calendar, Users, Award, TrendingUp } from "lucide-react"

export function PastHighlights() {
  const pastEvents = [
    {
      title: "SkillUp Bootcamp",
      date: "Aug 2, 2024",
      type: "Community",
      attendees: 150,
      impact: "95% completion rate",
      description: "Intensive 3-day bootcamp covering modern web development, AI tools, and career growth strategies.",
    },
    {
      title: "Fusion Forum",
      date: "July 19, 2024",
      type: "Corporate",
      attendees: 80,
      impact: "12 partnerships formed",
      description: "Corporate networking event bringing together startups and established companies for collaboration.",
    },
    {
      title: "The Ambitious Women: LIVE",
      date: "Mar 8, 2024",
      type: "Community",
      attendees: 300,
      impact: "50+ mentorship connections",
      description:
        "International Women's Day celebration featuring inspiring stories from women leaders across industries.",
    },
    {
      title: "AI for Social Good",
      date: "Apr 5, 2024",
      type: "Community",
      attendees: 200,
      impact: "5 social projects launched",
      description:
        "Collaborative workshop with Google WTM exploring AI applications for social impact and community development.",
    },
  ]

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
              A look back at the impactful events that brought our community together and created lasting connections.
            </p>
          </div>

          {/* Events Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  {/* Event Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.type === "Community"
                            ? "bg-ambixous-neon/20 text-ambixous-neon"
                            : "bg-signal-blue/20 text-signal-blue"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span className="text-slate-gray text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-warm-white group-hover:text-ambixous-neon transition-colors duration-200">
                      {event.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-gray leading-relaxed">{event.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-gray">
                      <Users size={16} className="text-ambixous-neon" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-gray">
                      <TrendingUp size={16} className="text-signal-blue" />
                      <span className="text-sm">{event.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              <div className="text-slate-gray">Events Hosted</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-signal-blue/20 rounded-2xl">
                  <Users className="text-signal-blue" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-signal-blue">5000+</div>
              <div className="text-slate-gray">Total Participants</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-sun-coral/20 rounded-2xl">
                  <Award className="text-sun-coral" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-sun-coral">98%</div>
              <div className="text-slate-gray">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
