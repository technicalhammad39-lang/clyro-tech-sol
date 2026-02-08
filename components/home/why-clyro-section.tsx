"use client"

import { useRef, useEffect, useState } from "react"
import { Shield, Zap, Users, Award, Clock, HeartHandshake } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "150+", label: "Products Delivered", icon: Award },
  { number: "99%", label: "Satisfaction Rate", icon: HeartHandshake },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Get your project completed in record time with our optimized development workflow.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Every product is thoroughly tested, documented, and ready for immediate deployment.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with senior developers who have shipped products for Fortune 500 companies.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Get priority support and assistance throughout your project lifecycle.",
  },
]

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = Number.parseInt(target.replace(/\D/g, ""), 10)
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps
          let currentStep = 0

          const animate = () => {
            currentStep++
            const progress = currentStep / steps
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentValue = Math.round(numericValue * easeOut)

            setCount(
              target.includes("+")
                ? `${currentValue}+`
                : target.includes("%")
                  ? `${currentValue}%`
                  : target.includes("/")
                    ? target
                    : currentValue.toString()
            )

            if (currentStep < steps && !target.includes("/")) {
              setTimeout(animate, stepDuration)
            } else {
              setCount(target)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  )
}

export function WhyClyroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              Built by Experts,
              <span className="gradient-text"> Trusted by Thousands</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with years of experience to deliver exceptional results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "relative p-8 rounded-3xl glass text-center transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <AnimatedCounter target={stat.number} />
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "flex gap-6 p-6 rounded-2xl transition-all duration-700 hover:bg-secondary/30",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
