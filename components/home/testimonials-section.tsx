"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "Ambixous helped me meet mentors I didn’t know I needed. It changed my direction completely.",
    author: "Sarah Chen",
    role: "Product Manager",
  },
  {
    id: 2,
    quote: "Their community sessions feel like family — warm, real, and game-changing.",
    author: "Rajesh Kumar",
    role: "Startup Founder",
  },
  {
    id: 3,
    quote: "Our event collab with Ambixous made our product launch more human and more impactful.",
    author: "Maria Rodriguez",
    role: "Marketing Director",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-light-ash text-electric-ink">
      <div className="container-width section-padding">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              What <span className="text-gradient">They're Saying</span>
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-3 bg-ambixous-neon/20 rounded-full">
                    <Quote className="text-ambixous-neon" size={32} />
                  </div>
                </div>

                <blockquote className="text-2xl md:text-3xl font-medium text-electric-ink leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="space-y-2">
                  <div className="text-xl font-bold text-electric-ink">{testimonials[currentIndex].author}</div>
                  <div className="text-signal-blue font-semibold">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-slate-gray text-slate-gray hover:border-ambixous-neon hover:text-ambixous-neon bg-transparent"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? "bg-ambixous-neon" : "bg-slate-gray/30 hover:bg-slate-gray/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-slate-gray text-slate-gray hover:border-ambixous-neon hover:text-ambixous-neon bg-transparent"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
