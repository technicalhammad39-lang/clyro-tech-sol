"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import {
  Sparkles,
  Code2,
  Smartphone,
  Globe,
  Database,
  Bot,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Sparkles,
    title: "AI Development",
    description: "Custom AI solutions powered by GPT-4, Claude, and proprietary models.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Full-stack SaaS applications with modern architecture and scalability.",
    features: ["Multi-tenancy", "Subscription Billing", "Analytics Dashboard"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and web applications with cutting-edge tech.",
    features: ["Next.js", "React", "Headless CMS"],
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "Scalable backend systems and RESTful/GraphQL APIs.",
    features: ["Node.js", "Python", "Cloud Infrastructure"],
  },
  {
    icon: Bot,
    title: "Automation",
    description: "Intelligent automation solutions to streamline your workflows.",
    features: ["Process Automation", "Chatbots", "Integration"],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = service.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative p-8 rounded-3xl glass hover-gradient-border transition-all duration-500",
        "hover:bg-secondary/30 hover:scale-[1.02]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="w-14 h-14 rounded-2xl gradient-bg-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors group/link"
      >
        Learn more
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              End-to-End
              <span className="gradient-text"> Development</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we deliver premium software solutions that scale with your business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-foreground font-medium hover:opacity-90 transition-opacity group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
