"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { TrendingUp, ArrowRight, LineChart, Wallet, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export function TradingCtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "relative rounded-[2.5rem] overflow-hidden transition-all duration-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-card to-accent/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-card/80" />

            {/* Animated lines */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(270 91% 65%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,200 Q200,100 400,200 T800,200"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <path
                  d="M0,250 Q200,150 400,250 T800,250"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </svg>
            </div>

            {/* Noise */}
            <div className="noise absolute inset-0" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Trading Platform</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  <span className="text-balance">
                    Automated AI Trading
                    <br />
                    <span className="gradient-text">Built for Success</span>
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Experience the future of trading with our AI-powered platform. Real-time analytics, automated strategies, and institutional-grade tools.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                    <LineChart className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">AI Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                    <Wallet className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Auto Trading</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Secure</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-foreground font-medium hover:opacity-90 transition-all group glow"
                >
                  Visit Trading Platform
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right visual - Trading chart mockup */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative p-6 rounded-3xl glass-strong">
                  {/* Chart header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Portfolio Value</div>
                      <div className="text-2xl font-bold text-foreground">$124,532.00</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400">+12.5%</div>
                      <div className="text-xs text-muted-foreground">24h Change</div>
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="h-32 flex items-end gap-1">
                    {[30, 45, 35, 60, 40, 70, 55, 80, 65, 90, 75, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t gradient-bg"
                        style={{
                          height: `${height}%`,
                          opacity: 0.4 + (i / 12) * 0.6,
                          animation: isVisible ? `scale-in 0.5s ease-out ${i * 50}ms forwards` : "none",
                        }}
                      />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground">87%</div>
                      <div className="text-xs text-muted-foreground">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground">1.8x</div>
                      <div className="text-xs text-muted-foreground">Avg Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
