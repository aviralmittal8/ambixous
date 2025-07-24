import { Users, BookOpen, Calendar, Gift } from "lucide-react"

export function CommunityBenefits() {
  const benefits = [
    {
      icon: Users,
      title: "Real-life mentors and peer-led growth",
      description: "Connect with experienced professionals and learn from peers who share your journey.",
    },
    {
      icon: BookOpen,
      title: "Access to panels, bootcamps, and learning sprints",
      description: "Participate in curated educational experiences designed to accelerate your growth.",
    },
    {
      icon: Calendar,
      title: "Invitations to community-only events",
      description: "Get exclusive access to networking events, workshops, and special gatherings.",
    },
    {
      icon: Gift,
      title: "No cost. No fluff. Just real value.",
      description: "Everything we offer is completely free, focused on delivering genuine impact and growth.",
    },
  ]

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              ✨ What <span className="text-gradient">You Get</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-ambixous-neon/20 rounded-xl group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                        <Icon className="text-ambixous-neon" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-electric-ink">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
