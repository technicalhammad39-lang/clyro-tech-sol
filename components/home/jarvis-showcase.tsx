"use client"

import Link from "next/link"
import { Mic, Zap, Home, MessageSquare, Calendar, Music, Check } from "lucide-react"
import {
  formatPricePKRCompact,
  formatPriceUSDCompact,
  getPricingPKRText,
  getPricingUSDText,
  getProductBySlug,
} from "@/lib/products"
import { buyViaWhatsApp } from "@/lib/whatsapp"
import { ProductBadgePill } from "@/components/products/product-badges"

const features = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Natural Voice Recognition",
    description: "Advanced speech processing with 99% accuracy",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Smart Home Control",
    description: "Control lights, thermostat, and all connected devices",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Contextual Conversations",
    description: "Understands context and maintains conversation flow",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Schedule Management",
    description: "Manages your calendar, reminders, and tasks",
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Media Control",
    description: "Play music, podcasts, and control entertainment",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "AI Learning",
    description: "Learns your preferences and adapts over time",
  },
]

const useCases = [
  "Personal productivity assistant",
  "Smart home automation hub",
  "Customer service automation",
  "Healthcare voice interface",
  "Elderly care companion",
  "Educational assistant",
]

const voiceBars = [
  { height: 44, duration: 0.86 },
  { height: 46, duration: 1.18 },
  { height: 65, duration: 0.94 },
  { height: 47, duration: 0.89 },
  { height: 34, duration: 0.98 },
]

export function JarvisShowcase() {
  const jarvis = getProductBySlug("jarvis-ai")
  const jarvisUSD = jarvis ? formatPriceUSDCompact(jarvis.pricing) : "$15 - $150 USD"
  const jarvisPKR = jarvis ? formatPricePKRCompact(jarvis.pricing) : "Rs 3000 - 50,000 PKR"

  const handleBuyNow = () => {
    if (!jarvis) return
    buyViaWhatsApp({
      name: jarvis.name,
      category: jarvis.category,
      priceUSD: getPricingUSDText(jarvis.pricing),
      pricePKR: getPricingPKRText(jarvis.pricing),
      type: "full",
    })
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Featured Product</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Jarvis AI</span>
            <br />
            <span className="text-foreground">Voice Assistant</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your personal AI assistant with natural language understanding, smart home control, and
            advanced automation capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Demo/Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative glass-strong rounded-3xl p-8 lg:p-12">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-primary via-accent to-primary opacity-50">
                <div className="absolute inset-[1px] rounded-3xl bg-card/50 backdrop-blur-xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Voice visualization */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {voiceBars.map((bar, i) => (
                    <div
                      key={`${bar.height}-${i}`}
                      className="w-1 bg-gradient-to-t from-primary to-accent rounded-full animate-pulse"
                      style={{
                        height: `${bar.height}px`,
                        animationDelay: `${(i * 0.1).toFixed(1)}s`,
                        animationDuration: `${bar.duration.toFixed(2)}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Demo message */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">
                      You
                    </div>
                    <div className="flex-1 px-4 py-3 rounded-2xl rounded-tl-none bg-secondary">
                      <p className="text-sm text-foreground">
                        "Hey Jarvis, turn on the living room lights and play some jazz"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                      <Mic className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 px-4 py-3 rounded-2xl rounded-tr-none glass">
                      <p className="text-sm text-foreground">
                        "Of course! I've turned on the living room lights and started playing your
                        jazz playlist. Perfect mood for a relaxing evening!"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Demo video placeholder */}
                <div className="mt-8 p-1 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3">
                        <Mic className="w-8 h-8 text-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Watch Demo Video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {jarvis?.badges?.includes("bestseller") && (
              <div className="absolute -top-4 -right-4">
                <ProductBadgePill badge="bestseller" className="shadow-sm" />
              </div>
            )}
          </div>

          {/* Right side - Features & CTA */}
          <div className="space-y-8">
            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl glass hover:glass-strong transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-primary">{feature.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Use cases */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Perfect For:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="p-6 rounded-2xl glass-strong">
              <div className="mb-4">
                <div className="text-3xl font-bold gradient-text">{jarvisUSD}</div>
                <div className="text-base text-muted-foreground">{jarvisPKR}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Buy via WhatsApp
                </button>
                <Link
                  href={jarvis ? `/products/${jarvis.slug}` : "/products"}
                  className="px-6 py-3 rounded-xl glass hover:glass-strong text-center text-foreground font-medium transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
