import { Calendar, Rocket, Users, Palette, MessageSquare, Globe } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Calendar,
      title: "Corporate Events & Internal Offsites",
      description:
        "Memorable experiences that bring teams together and strengthen company culture through thoughtfully designed events.",
      features: ["Team building workshops", "Leadership retreats", "Company celebrations", "Hybrid event solutions"],
    },
    {
      icon: Rocket,
      title: "Product Launch Experiences",
      description:
        "Make your product debut unforgettable with strategic launch campaigns that generate buzz and drive adoption.",
      features: ["Launch strategy", "Media coordination", "Influencer partnerships", "Community activation"],
    },
    {
      icon: Users,
      title: "Talent Branding & Employer Collabs",
      description:
        "Attract top talent by showcasing your company culture and values through authentic employer branding initiatives.",
      features: ["Employer brand strategy", "Recruitment campaigns", "Culture showcases", "Talent acquisition events"],
    },
    {
      icon: Palette,
      title: "Social Media Campaigns & Digital Design",
      description:
        "Eye-catching visuals and strategic campaigns that cut through the noise and connect with your audience.",
      features: ["Visual identity design", "Social media strategy", "Content creation", "Brand guidelines"],
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Content Strategy",
      description:
        "Build thought leadership and engage your professional network with content that drives meaningful conversations.",
      features: ["Content planning", "Thought leadership", "Engagement strategy", "Performance analytics"],
    },
    {
      icon: Globe,
      title: "Website Dev & UX Optimization",
      description:
        "Digital experiences that not only look great but convert visitors into customers through strategic design.",
      features: ["Responsive web design", "UX/UI optimization", "Performance enhancement", "Conversion optimization"],
    },
  ]

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              What <span className="text-gradient">We Do</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              No price tags. No lock-ins. Just high-clarity execution across every touchpoint of your business growth
              journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-signal-blue/20 rounded-xl group-hover:bg-signal-blue/30 transition-colors duration-300 flex-shrink-0">
                        <Icon className="text-signal-blue" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-electric-ink leading-tight">{service.title}</h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-signal-blue rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-4">
            <p className="text-xl text-slate-600 font-medium">
              Whether you're looking to host, scale, pitch, or hire — we've got you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
