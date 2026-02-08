"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { TypingText } from "@/components/ui/typing-text"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Throttled mouse tracking using requestAnimationFrame
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return

      rafRef.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const { width, height, left, top } = container.getBoundingClientRect()
        const x = (clientX - left) / width
        const y = (clientY - top) / height

        container.style.setProperty("--mouse-x", `${x}`)
        container.style.setProperty("--mouse-y", `${y}`)

        rafRef.current = null
      })
    }

    container.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-20"
    >
      {/* Animated gradient background - GPU accelerated */}
      <div className="absolute inset-0 will-change-transform">
        {/* Base gradient - static for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15" />

        {/* Radial glow following mouse - desktop only, optimized */}
        <div
          className="hidden lg:block absolute inset-0 opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), hsl(217 91% 60% / 0.12), transparent 35%)`,
            willChange: "opacity",
          }}
        />

        {/* Grid overlay - static */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Noise overlay */}
        <div className="noise absolute inset-0" />
      </div>

      {/* Floating UI elements - Desktop only, GPU optimized */}
      <div className="hidden xl:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating card 1 - optimized animation */}
        <div className="absolute top-1/4 left-[10%] glass rounded-2xl p-4 w-48 animate-float delay-100 opacity-60 will-change-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">AI Powered</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-3/4 gradient-bg" />
          </div>
        </div>

        {/* Floating card 2 - optimized animation */}
        <div className="absolute top-1/3 right-[8%] glass rounded-2xl p-4 w-52 animate-float-slow delay-300 opacity-60 will-change-transform">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground">Revenue</span>
            <span className="text-xs text-green-400">+24%</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
              <div
                key={i}
                className="flex-1 gradient-bg rounded-sm opacity-70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Floating card 3 - optimized animation */}
        <div className="absolute bottom-1/4 left-[15%] glass rounded-2xl p-4 w-44 animate-float delay-500 opacity-60 will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-foreground">Live Preview</span>
          </div>
          <p className="text-[10px] text-muted-foreground">Production ready</p>
        </div>

        {/* Floating card 4 - optimized animation */}
        <div className="absolute bottom-1/3 right-[12%] glass rounded-2xl p-4 w-40 animate-float-slow delay-700 opacity-60 will-change-transform">
          <div className="text-2xl font-bold gradient-text mb-1">150+</div>
          <p className="text-xs text-muted-foreground">Premium Products</p>
        </div>

        {/* Gradient orbs - reduced blur for better performance */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[80px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[60px] opacity-50" />
      </div>

      {/* Main content - GPU optimized */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center py-8 lg:py-0 will-change-transform"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 lg:mb-8 animate-fade-up will-change-transform">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm text-muted-foreground">
            The Future of Software Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 lg:mb-6 animate-fade-up delay-100 will-change-transform">
          <span className="text-balance text-foreground">
            Clyro Tech Solutions
            <br />
            <TypingText 
              text="Premium AI Software, Apps & Source Code"
              speed={40}
              delay={800}
              loop={true}
              className="gradient-text block"
            />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 lg:mb-10 animate-fade-up delay-200 text-pretty leading-relaxed will-change-transform">
          High-performance AI tools, SaaS products, websites, and custom development. Transform
          your ideas into reality with production-ready solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 animate-fade-up delay-300 will-change-transform">
          <Link
            href="/products"
            className="group relative w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 rounded-full overflow-hidden will-change-transform"
          >
            <span className="absolute inset-0 gradient-bg" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 will-change-transform" />
            <span className="relative flex items-center justify-center gap-2 text-foreground font-medium text-sm lg:text-base">
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="/custom-project"
            className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 rounded-full glass hover:bg-secondary/50 transition-colors duration-300 flex items-center justify-center gap-2 text-foreground font-medium text-sm lg:text-base will-change-transform"
          >
            <Play className="w-4 h-4" />
            Start Custom Project
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-8 animate-fade-up delay-500">
          <div className="text-center">
            <div className="text-xl lg:text-2xl font-bold text-foreground">500+</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-xl lg:text-2xl font-bold text-foreground">150+</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Products Shipped</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-xl lg:text-2xl font-bold text-foreground">99%</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-up delay-700">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
