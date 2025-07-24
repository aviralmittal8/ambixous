"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Sparkles } from "lucide-react"

export function StartupsCTA() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hey, I have a business requirement")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section className="py-24 bg-electric-ink">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white">
              Ready to co-create something <span className="text-gradient">bold?</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray leading-relaxed">
              Let's chat. No decks unless you want one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email CTA */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-signal-blue/50 transition-all duration-300 hover:scale-105 group">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-signal-blue/20 rounded-2xl group-hover:bg-signal-blue/30 transition-colors duration-300">
                    <Mail className="text-signal-blue" size={32} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-warm-white">Email Us</h3>
                  <p className="text-slate-gray">
                    Drop us a detailed message about your project and we'll get back to you within 24 hours.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-signal-blue text-electric-ink hover:bg-signal-blue/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-signal-blue/25 transition-all duration-200 hover:scale-105"
                >
                  <a href="mailto:hi.ambixous@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail size={20} />
                    hi.ambixous@gmail.com
                  </a>
                </Button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-gray/20 hover:border-ambixous-neon/50 transition-all duration-300 hover:scale-105 group">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-ambixous-neon/20 rounded-2xl group-hover:bg-ambixous-neon/30 transition-colors duration-300">
                    <MessageCircle className="text-ambixous-neon" size={32} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-warm-white">WhatsApp Us</h3>
                  <p className="text-slate-gray">
                    Quick questions or want to start a conversation? Ping us directly on WhatsApp.
                  </p>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-ambixous-neon text-electric-ink hover:bg-ambixous-neon/90 font-bold py-3 rounded-xl shadow-lg hover:shadow-ambixous-neon/25 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Start Conversation
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="pt-8">
            <div className="flex items-center justify-center gap-2 text-slate-gray">
              <Sparkles className="text-ambixous-neon" size={20} />
              <span className="text-lg">Let's build something that matters together</span>
              <Sparkles className="text-ambixous-neon" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
