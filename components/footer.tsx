import Link from "next/link"
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Community", href: "/community" },
    { name: "Startups", href: "/startups" },
    { name: "Events", href: "/events" },
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Twitter", href: "#", icon: Twitter },
  ]

  return (
    <footer className="bg-electric-ink border-t border-slate-gray/20">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-ambixous-neon">
              Ambixous
            </Link>
            <p className="text-slate-gray max-w-sm">
              Where ambition finds speed and impact finds scale
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-gray hover:text-ambixous-neon transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-semibold">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hi.ambixous@gmail.com"
                className="text-slate-gray hover:text-signal-blue transition-colors duration-200 block"
              >
                hi.ambixous@gmail.com
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-slate-gray hover:text-ambixous-neon transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-gray/20 mt-8 pt-8 text-center">
          <p className="text-slate-gray">© {new Date().getFullYear()} Ambixous. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
