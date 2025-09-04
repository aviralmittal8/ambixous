export function ClientShowcase() {
  const clients = [
    "Commudle",
    "MyCTO",
    "FreeStand",
    "Piyush Academy",
    "Trainman",
    "Adani",
    "Expedia Group",
    "Deloitte",
    "American Express",
    "Info Edge India Ltd",
    "Adani Digital Labs",
    "Factacy.ai",
    "UKG, Ex- Mobikwik",
    "Capgemini",
    "Capgemini",
    "Cradlewise",
    "Paytm",
    "Maruti Suzuki",
    "Paypal",
    "Financial Express",
    "Astrotalk",
    "Tata Group",
    "EPAM",
    "Netskope",
    "Ex-Nagarro",
    "Microsoft",
    "Commudle",
    "Taylor & Francis Group",
    "Times Internet",
    "Tata 1Mg",
    "Signo",
    "IIT Delhi",
    "Airtel",
    "Adobe",
    "ClassCover",
    "NIT Andhra",
    "Policybazaar",
    "Lenskart",
    "Leap Wallet",
    "Payoneer",
    "HARMAN International",
    "Cadre Tech",
    "ARC Document Solutions",
    "OLA",
    "Deutsche Telekom Digital Labs",
    "Amazon","Microsoft",
    "ThoughtWorks",
    "Kraftz Diaries",
    "Yumscop",
    "PolicyBazaar",
    "Ofis Square",
    "Deloitte",
    "Nagarro",
  ]

  const testimonials = [
    {
      quote:
        "Ambixous transformed our product launch… ",
      result: "300% increase in sign-ups",
      company: "Tech Startup",

    },
    {
      quote:
        "heir employer branding helped us attract talent… ",
      company: "Growing Scale-up",
      result: "50% faster hiring process",
    },
    {
      quote:
        "The corporate event they designed…",
      company: "Enterprise Client",
      result: "95% employee satisfaction",
    },
    {
      quote:
        "Content and social media strategy boosted engagement… ",
      company: "E-commerce Brand",
      result: "4x higher click-through rates",
    },
    {
      quote:
        "Digital experience revamp increased conversions… ",
      company: "Fintech startup",
      result: "35% revenue growth in 3 months.",
    },
    {
      quote:
        "Strategic launch campaign reduced time-to-market… ",
      company: "Consulting Firm",
      result: "Saving $50k dollar in operational costs",
    },
  ]

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Clients & Collabs</span>
            </h2>
          </div>

          {/* Client Logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-electric-ink font-bold text-xl whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-light-ash to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-light-ash to-transparent pointer-events-none"></div>
          </div>

          {/* Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <blockquote className="text-slate-600 italic leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="space-y-2">
                    <div className="text-signal-blue font-bold">{testimonial.result}</div>
                    <div className="font-semibold text-electric-ink">{testimonial.company}</div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
