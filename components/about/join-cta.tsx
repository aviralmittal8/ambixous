import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2 } from "lucide-react"
import Link from "next/link"

export function JoinCTA() {
  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white">
              Get <span className="text-gradient">Started</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray leading-relaxed">
              Whether you’re scaling a vision or just starting yours, there’s a place here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Community CTA */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-ambixous-neon/20 rounded-2xl group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                    <Users className="text-ambixous-neon" size={32} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-warm-white">Join Our Community</h3>
                  <p className="text-slate-gray">
                    Join now to unlock mentorship, growth opportunities, and exclusive events. Connect with like-minded individuals in a supportive ecosystem designed for personal and professional growth.

                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-ambixous-neon text-electric-ink hover:bg-ambixous-neon/90 font-bold py-3 rounded-xl shadow-lg hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group"
                >
                  <Link href="https://chat.whatsapp.com/KWSzQoOLZ4vJHJZ7KSSD7I?mode=ems_copy_t" target="_blank" className="flex items-center justify-center gap-2">
                    Join Community
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Business CTA */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-signal-blue/50 transition-all duration-300 hover:scale-105 group">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-signal-blue/20 rounded-2xl group-hover:bg-signal-blue/30 transition-colors duration-300">
                    <Building2 className="text-signal-blue" size={32} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-warm-white">Start a Project</h3>
                  <p className="text-slate-gray">
                    Partner with us today to co-create meaningful experiences that drive real impact. Tap into startup support services and corporate collaboration opportunities that turn bold ideas into measurable results.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-transparent text-signal-blue hover:bg-signal-blue hover:text-electric-ink font-bold py-3 rounded-xl border-2 border-signal-blue transition-all duration-200 hover:scale-105"
                >
                  <Link href="/startups" className="flex items-center justify-center gap-2">
                    Explore Services
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
