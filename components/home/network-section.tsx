export function NetworkSection() {
  const partners = [
    "Microsoft",
    "Google",
    "ThoughtWorks",
    "PolicyBazaar",
    "Deloitte",
    "Nagarro",
    "Kraftz Diaries",
    "Yumscop",
    "Sambhav Samwaad",
    "Ofis Square",
  ]

  return (
    <section className="py-24 bg-electric-ink overflow-hidden">
      <div className="container-width section-padding">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white">
              Our <span className="text-gradient">Network</span>
            </h2>
            <p className="text-xl text-slate-gray">Trusted by professionals and partners from:</p>
          </div>

          {/* Logo Marquee */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex-shrink-0 mx-8 px-6 py-4 bg-slate-900/50 rounded-xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300"
                  >
                    <span className="text-warm-white font-semibold text-lg whitespace-nowrap">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-electric-ink to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-electric-ink to-transparent pointer-events-none"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-ambixous-neon">5k+</div>
              <div className="text-slate-gray">Community Members</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-signal-blue">100+</div>
              <div className="text-slate-gray">Mentors Onboarded</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-sun-coral">150+</div>
              <div className="text-slate-gray">Hiring Referrals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
