import { Calendar, Rocket, Users, Palette, MessageSquare, Globe } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Calendar,
      title: "Corporate Events & Internal Offsites",
      description:
        "Memorable experiences that boost productivity, build team cohesion, and inspire leadership, from team workshops and leadership summits to corporate celebrations and hybrid events with proven ROI.",
      features: ["Team building workshops", "Leadership retreats", "Company celebrations", "Hybrid event solutions"],
    },
    {
      icon: Rocket,
      title: "Product Launch Experiences",
      description:
        "Strategic launch campaigns that turn your debut into a market event customers remember and competitors notice, from market entry strategy and PR activation to influencer partnerships and community events that get everyone talking from day one.",
      features: ["Launch strategy", "Media coordination", "Influencer partnerships", "Community activation"],
    },
    {
      icon: Users,
      title: "Talent Branding & Employer Collabs",
      description:
        "Showcase your culture and values while attracting top talent, through employer brand strategy, recruitment campaigns, culture videos, and talent acquisition events. Strengthen your reputation, improve candidate experience, and run high-impact recruitment events with a trusted employer branding agency and recruitment marketing expertise.",
      features: ["Employer brand strategy", "Recruitment campaigns", "Culture showcases", "Talent acquisition events"],
    },
    {
      icon: Palette,
      title: "Social Media Campaigns & Digital Design",
      description:
        "Eye-catching visuals and campaigns that drive results, from visual identity design and brand guidelines to social media strategy and content creation. We build brand equity, generate leads, and deliver measurable growth through content marketing, cross-platform strategies, and creative branding. Ideal for digital marketing for startups and effective social media growth strategies.",
      features: ["Visual identity design", "Social media strategy", "Content creation", "Brand guidelines"],
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Content Strategy",
      description:
        "Build thought leadership that elevates your brand, from content planning and engagement strategy to performance analytics. Turn your leadership team into industry authorities through executive branding, strategic content series, and analytics tracking. Perfect for B2B content marketing and professional network growth.",
      features: ["Content planning", "Thought leadership", "Engagement strategy", "Performance analytics"],
    },
    {
      icon: Globe,
      title: "Website Dev & UX Optimization",
      description:
        "Digital experiences that convert, from concept to launch, we build responsive websites optimized for high conversions. Services include UX/UI strategy, mobile-first design, SEO optimization, performance enhancement, and analytics integration. Ideal for conversion-focused web design and results-driven UX strategy.",
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
              High-impact execution without hidden costs or long contracts.
              Your reliable, result-oriented partner delivering proven strategies and flawless delivery at every stage of your growth journey.
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
