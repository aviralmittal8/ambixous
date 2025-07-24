import { Quote } from "lucide-react"

export function FoundersSection() {
  const founders = [
    {
      name: "Riti Gupta",
      role: "Community Architect, Brand Strategist, and Storyteller-in-Chief",
      description:
        "Passionate about building authentic connections and crafting narratives that resonate. Riti brings communities together through the power of shared stories and meaningful experiences.",
    },
    {
      name: "Avnish Singh",
      role: "Systems Thinker, Operations Lead, and Growth Engine",
      description:
        "The strategic mind behind seamless execution. Avnish transforms complex challenges into streamlined solutions, ensuring every initiative scales with precision and purpose.",
    },
  ]

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="text-gradient">Humans</span> Behind the Hustle
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Together, they co-built Ambixous to blend community-first thinking with executional excellence.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="space-y-6 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-ambixous-neon/20 rounded-lg group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                        <Quote className="text-ambixous-neon" size={20} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-electric-ink">{founder.name}</h3>
                        <p className="text-signal-blue font-semibold">{founder.role}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{founder.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Origin Story */}
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-electric-ink">Our Origin Story</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                What started as late-night conversations about bridging the gap between community impact and business
                growth has evolved into a thriving ecosystem. We believe that the best innovations happen when purpose
                meets profit, and when individual growth fuels collective progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
