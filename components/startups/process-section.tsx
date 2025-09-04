import { MessageCircle, Lightbulb, Rocket, Target } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery Call",
      description:
        "Understand your vision, challenges, and goals to create a data-backed strategy.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Develop a tailored approach that aligns with your objectives.",
    },
    {
      icon: Rocket,
      title: "Execution & Launch",
      description: "Bring the strategy to life with precision and impact.",
    },
    {
      icon: Target,
      title: "Measure & Optimize",
      description: "Continuously improve through a data-driven optimization loop for lasting results.",
    },
  ]

  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              A streamlined 4-step process designed to minimize risk and maximize results
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="text-center space-y-6 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-signal-blue to-ambixous-neon rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="text-electric-ink" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-ambixous-neon rounded-full flex items-center justify-center text-electric-ink font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-warm-white">{step.title}</h3>
                    <p className="text-slate-gray leading-relaxed">{step.description}</p>
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
