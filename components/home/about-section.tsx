import { Users, Building2, Heart, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              We Are <span className="text-gradient">Ambixous.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Born at the intersection of purpose and progress, Ambixous is a collective space where individuals grow
              through learning, and brands grow through thoughtful action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Community Arm */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-ambixous-neon/20 rounded-xl group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                    <Heart className="text-ambixous-neon" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Ambixous Community</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A non-profit initiative for builders, dreamers, and learners. Where curiosity meets community and
                  growth happens together. Incubating innovations and creativity for the next-billion revolutionary
                  industry experts of future.
                </p>
                <div className="flex items-center gap-2 text-ambixous-neon font-semibold">
                  <Users size={16} />
                  <span>5k+ Active Members</span>
                </div>
              </div>
            </div>

            {/* Business Arm */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-signal-blue/20 rounded-xl group-hover:bg-signal-blue/30 transition-colors duration-300">
                    <Building2 className="text-signal-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Ambixous Innovations LLP</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A full-stack experience partner for startups and companies. Turning bold ideas into impactful
                  realities through strategic execution.
                </p>
                <div className="flex items-center gap-2 text-signal-blue font-semibold">
                  <Lightbulb size={16} />
                  <span>End-to-End Solutions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl text-slate-600 font-medium">
              Whether you're scaling a vision or just starting yours — there's a place here for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
