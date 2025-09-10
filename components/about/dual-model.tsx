import { Building2, ArrowRight, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DualModel() {
  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              The <span className="text-gradient">Dual Model</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Two powerful verticals, community empowerment and corporate innovation, working together to deliver measurable growth and meaningful impact.
            </p>
          </div>

          {/* Dual Model Visualization */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Community Arm */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-ambixous-neon/20 rounded-2xl group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                        <Heart className="text-ambixous-neon" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Ambixous Community</h3>
                        <p className="text-signal-blue font-semibold">Non-Profit Initiative</p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg">
                      Our heart and soul, a thriving peer learning community of builders, and learners, driving growth through mentorship, skill development, and community-led initiatives that inspire learning
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-ambixous-neon rounded-full"></div>
                        <span>5,000+ active community members</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-ambixous-neon rounded-full"></div>
                        <span>100+ mentors and industry experts</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-ambixous-neon rounded-full"></div>
                        <span>150+ successful job referrals</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-ambixous-neon text-electric-ink hover:bg-ambixous-neon/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-ambixous-neon/25 transition-all duration-200 hover:scale-105"
                    >
                      <Link href="https://chat.whatsapp.com/KWSzQoOLZ4vJHJZ7KSSD7I?mode=ems_copy_t" target="_blank" className="flex items-center justify-center gap-2">
                        Join Our Community
                        <ArrowRight size={20} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Business Arm */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-signal-blue/20 rounded-2xl group-hover:bg-signal-blue/30 transition-colors duration-300">
                        <Building2 className="text-signal-blue" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Ambixous Innovations LLP</h3>
                        <p className="text-signal-blue font-semibold">Full-Stack Experience Partner</p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg">
                      Our strategic execution arm that helps startups and established companies create meaningful experiences. We turn bold visions into impactful realities through thoughtful design and execution.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-signal-blue rounded-full"></div>
                        <span>End-to-end experience design</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-signal-blue rounded-full"></div>
                        <span>Corporate events and brand experiences</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-signal-blue rounded-full"></div>
                        <span>Digital solutions and strategy</span>
                      </div>
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

            {/* Connection Bridge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-16 h-16 bg-gradient-to-br from-ambixous-neon to-signal-blue rounded-full flex items-center justify-center animate-pulse-slow shadow-2xl">
                <Lightbulb className="text-electric-ink" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
