import { Compass, Users, Zap } from "lucide-react"

export function Values() {
  const values = [
    {
      icon: Compass,
      title: "Curiosity",
      description:
        "We believe asking the right questions sparks breakthroughs. For communities, it opens new learning pathways; for businesses, it uncovers untapped opportunities and market insights.",
      color: "text-ambixous-neon",
      bgColor: "bg-ambixous-neon/20",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "When diverse minds connect, innovation multiplies. We create spaces where communities share knowledge and corporates co-create solutions, leading to ideas greater than the sum of their parts.",
      color: "text-signal-blue",
      bgColor: "bg-signal-blue/20",
    },
    {
      icon: Zap,
      title: "Courage",
      description:
        "Bold moves turn visions into reality. We empower individuals to take the leap in their growth journeys and enable businesses to execute high-impact strategies with confidence.",
      color: "text-sun-coral",
      bgColor: "bg-sun-coral/20",
    },
  ]

  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              What we stand on, and stand for.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 ${value.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={value.color} size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-warm-white">{value.title}</h3>
                    </div>
                    <p className="text-slate-gray leading-relaxed">{value.description}</p>
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
