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
    quote: "It was a blast kicking things off, glad the energy was there from the start. Excited for the next one!",
    result: "Yug",
    company: "Deputy Manager, Airtel",
  },
  {
    quote: "Your trust gave me confidence to deliver today’s session. Grateful for the seamless work!",
    result: "Anoushka",
    company: "SWE 2, Microsoft",
  },
  {
    quote: "It was a blast interacting with everyone and fellow speakers. Excited for more collaborations!",
    result: "Shruti Arora",
    company: "DevRel, Commudle",
  },
  {
    quote: "Thank you for the kind words and for organizing this interactive event. Truly an experience!",
    result: "Shruti Sinha",
    company: "Design Manager, Airtel",
  },
  {
    quote: "Incredibly well-organized event, delighted to be part of it! Loved the energy and insights.",
    result: "Hitesh Lakhyani",
    company: "Design Leader, Tata1MG",
  },
  {
    quote: "Thank you for making such an event to inspire people, you all brought such energy!",
    result: "Tia V",
    company: "AI Specialist, PR Department of Thailand",
  },
  ]

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Industry <span className="text-gradient">experts & mentors</span>
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
