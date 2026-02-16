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
  Check,
  Zap,
  Shield,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Sparkles,
    title: "AI Development",
    description: "Custom AI solutions powered by GPT-4, Claude, and proprietary models. From chatbots to complex ML pipelines.",
    features: [
      "Custom GPT/Claude integrations",
      "Machine learning models",
      "Natural language processing",
      "Computer vision solutions",
      "AI-powered automation",
      "Data analysis & prediction",
    ],
    price: "From $5,000",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Full-stack SaaS applications with modern architecture, multi-tenancy, and scalable infrastructure.",
    features: [
      "Multi-tenant architecture",
      "Subscription billing (Stripe)",
      "User management & auth",
      "Analytics dashboard",
      "API development",
      "Admin panel",
    ],
    price: "From $8,000",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with stunning UI/UX.",
    features: [
      "React Native / Flutter",
      "Native iOS (Swift)",
      "Native Android (Kotlin)",
      "Push notifications",
      "Offline-first design",
      "App Store deployment",
    ],
    price: "From $10,000",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and web applications with cutting-edge technologies and best practices.",
    features: [
      "Next.js / React apps",
      "Headless CMS integration",
      "E-commerce solutions",
      "Performance optimization",
      "SEO optimization",
      "Progressive Web Apps",
    ],
    price: "From $3,000",
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "Scalable backend systems, RESTful APIs, GraphQL, and cloud infrastructure setup.",
    features: [
      "Node.js / Python backends",
      "REST & GraphQL APIs",
      "Database design",
      "Cloud infrastructure (AWS/GCP)",
      "Microservices architecture",
      "CI/CD pipelines",
    ],
    price: "From $4,000",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "Intelligent automation solutions to streamline your business workflows and operations.",
    features: [
      "Workflow automation",
      "Chatbots & assistants",
      "Data scraping & ETL",
      "Integration services",
      "RPA solutions",
      "Custom scripts",
    ],
    price: "From $2,000",
  },
]

const landingLinks = [
  {
    href: "/services/ai-chatbot-development",
    title: "AI chatbot development for websites",
    description: "Conversion-ready chat experiences, support deflection, and lead capture.",
  },
  {
    href: "/services/ai-automation",
    title: "AI automation services",
    description: "Workflow automation for businesses, lead ops, and backend systems.",
  },
  {
    href: "/services/voice-assistants",
    title: "Voice assistant development",
    description: "Custom AI assistant for business workflows and voice-first UX.",
  },
  {
    href: "/services/graphic-design",
    title: "logo design and brand identity",
    description: "UI UX design for SaaS, social media post design, and modern visual systems.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your requirements, goals, and vision to create a comprehensive project plan.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our design team creates stunning UI/UX mockups and prototypes for your approval.",
  },
  {
    number: "03",
    title: "Development",
    description: "Expert developers bring your project to life with clean, scalable code and best practices.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous testing ensures your product is bug-free and performs flawlessly.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy your product and provide support to ensure a smooth launch.",
  },
  {
    number: "06",
    title: "Support",
    description: "Ongoing maintenance and support to keep your product running at peak performance.",
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
        "hover:bg-secondary/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl gradient-bg-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price and CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border/50">
        <span className="text-lg font-semibold gradient-text">{service.price}</span>
        <Link
          href="/custom-project"
          className="flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors group/link"
        >
          Get Quote
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4 animate-fade-up">
            Premium Agency Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            <span className="text-balance">
              Transform Your Vision Into
              <br />
              <span className="gradient-text">Digital Reality</span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            We build premium software solutions that drive growth. From AI-powered applications to scalable SaaS platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Link
              href="/custom-project"
              className="group relative px-8 py-4 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 gradient-bg" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2 text-foreground font-medium">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full glass hover:bg-secondary/50 transition-colors text-foreground font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>



      {/* Services Grid */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="rounded-[2rem] border border-border/50 glass-strong p-8 lg:p-10">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Service pages</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground">
                  Explore dedicated service playbooks
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Each service page outlines deliverables, timelines, and outcomes so you can pick the right path
                  quickly.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {landingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-border/40 bg-secondary/30 p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
                  >
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-balance">
                Comprehensive
                <span className="gradient-text"> Development Services</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your software development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-balance">
                How We
                <span className="gradient-text"> Deliver Excellence</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-8 rounded-3xl glass group hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-[2.5rem] glass-strong relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your requirements and create something amazing together. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/custom-project"
                  className="group relative px-8 py-4 rounded-full overflow-hidden glow"
                >
                  <span className="absolute inset-0 gradient-bg" />
                  <span className="relative flex items-center gap-2 text-foreground font-medium">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="https://wa.me/3076924116?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-secondary/50 transition-colors text-foreground font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
