"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

interface Testimonial {
  author: string
  company: string
  role: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    author: "Ali Hassan",
    company: "Tech Innovations Ltd",
    role: "CEO & Founder",
    content:
      "Clyro Tech Solutions transformed our workflow with their AI products. The quality of code and support is exceptional. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    author: "Sarah Khan",
    company: "Digital Agency Pro",
    role: "Product Manager",
    content:
      "Working with Clyro Tech has been a game-changer. Their Jarvis AI assistant has increased our productivity by 300%. Outstanding value!",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    author: "Muhammad Ahmed",
    company: "StartUp Ecosystem",
    role: "CTO",
    content:
      "The products are production-ready and well-documented. Clyro Tech's support team went above and beyond. Excellent experience.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    author: "Fatima Malik",
    company: "Enterprise Solutions",
    role: "Development Lead",
    content:
      "We integrated multiple Clyro Tech products into our platform. The performance and reliability have been outstanding. Worth every penny!",
    rating: 5,
    image: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Clyro Tech Solutions for their AI and
            software needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl glass-card hover-lift transition-all duration-300"
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-sm text-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
