import { Quote, Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export function FoundersSection() {
  const founders = [
    {
      name: "Riti Gupta",
      role: "Community Evangelist | Brand Strategist | Storyteller-in-Chief",
      description:
        "A community builder and strategist, 2x Community Founder. Recognised for creating authentic connections through powerful narrative and design.",
      linkedin: "https://www.linkedin.com/in/ritigupta05/",
      email: "codework.riti@gmail.com"
    },
    {
      name: "Avnish Singh",
      role: "Public Speaker | Product Manager | Community-Driven Builder",
      description:
        "A product professional with hands-on experience building products, scaling startups and enterprises. Known for turning bold ideas into measurable, high-impact growth.",
      linkedin: "https://www.linkedin.com/in/singhavi279/",
      email: "t20avnish@gmail.com"
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
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-bold text-electric-ink">{founder.name}</h3>
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn profile of ${founder.name}`}
                          >
                            <FaLinkedin size={20} color="#0A66C2" />
                          </a>
                          <a
                            href={`mailto:${founder.email}`}
                            aria-label={`Email ${founder.name}`}
                          >
                            <Mail size={20} color="#EA4335" />
                          </a>
                        </div>
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
                Ambixous began as small talks about blending community impact with business growth. Now, it’s a 5,000+ members strong grassroots-to-global network, inclusive of founders, investors, professionals & students, turning shared ideas into real, lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
