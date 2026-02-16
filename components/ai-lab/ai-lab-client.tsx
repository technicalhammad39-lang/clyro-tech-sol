"use client"

import { useState } from "react"
import Link from "next/link"
import { Brain, Cpu, Play, Sparkles, Zap } from "lucide-react"
import { allProducts, formatPricePKRCompact, formatPriceUSDCompact } from "@/lib/products"
import { ProductBadges } from "@/components/products/product-badges"
import { Badge } from "@/components/ui/badge"
import { TypingText } from "@/components/ui/typing-text"
import { ProductImage } from "@/components/ui/product-image"

export default function AILabPage({ faqItems }: { faqItems: { question: string; answer: string }[] }) {
  const [searchQuery] = useState("")

  // Filter AI products only
  const aiProducts = allProducts.filter((p) => p.category === "AI Tools")
  const jarvisProduct = aiProducts.find((p) => p.id === "jarvis-ai")
  const otherProducts = aiProducts.filter((p) => p.id !== "jarvis-ai")

  const filteredProducts = otherProducts.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const jarvisUSD = jarvisProduct ? formatPriceUSDCompact(jarvisProduct.pricing) : ""
  const jarvisPKR = jarvisProduct ? formatPricePKRCompact(jarvisProduct.pricing) : ""

  return (
    <main className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* AI-Themed Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Compact Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-bold tracking-wider text-primary uppercase">AI Innovation Lab</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">
          <TypingText
            text="Clyro AI Lab & Solutions"
            speed={45}
            delay={0}
            loop={false}
            className="gradient-text"
          />
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Cutting-edge AI tools, rapid experiments, and automation workflows that shape our production releases.
        </p>
      </section>

      {/* Jarvis AI - Flagship Product (if exists) */}
      {jarvisProduct && (
        <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
          <Link href={`/products/${jarvisProduct.slug}?from=ai-lab`}>
            <div className="group relative rounded-2xl overflow-hidden glass-strong hover:glow transition-all duration-300 p-6 lg:p-8 cursor-pointer">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="border-primary/30 bg-primary/15 text-primary text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
                      Flagship
                    </Badge>
                    <ProductBadges badges={jarvisProduct.badges} orientation="row" />
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {jarvisProduct.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{jarvisProduct.shortDescription}</p>

                  {/* Quick Features */}
                  {jarvisProduct.capabilities && (
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {jarvisProduct.capabilities.slice(0, 4).map((capability) => (
                        <div key={capability} className="flex items-start gap-2">
                          <Sparkles className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="inline-block p-3 rounded-lg glass mb-4">
                    <div className="text-xl font-bold gradient-text">{jarvisUSD}</div>
                    {jarvisPKR && <div className="text-sm text-muted-foreground">{jarvisPKR}</div>}
                  </div>
                </div>

                {/* Right - Demo Video Thumbnail */}
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden aspect-video glass bg-gradient-to-br from-primary/20 to-accent/20">
                    <ProductImage
                      src={jarvisProduct.thumbnail}
                      alt={jarvisProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {jarvisProduct.demoVideoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-7 h-7 text-foreground fill-foreground ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Stats Mini Cards */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[
                      { icon: Cpu, label: "Fast", value: "ML" },
                      { icon: Zap, label: "Power", value: "AI" },
                      { icon: Brain, label: "Smart", value: "NLP" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-2 rounded-lg glass text-center">
                        <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                        <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Other AI Products Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-xl font-bold mb-6">All AI Products</h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Brain className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No AI products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <AIProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="rounded-[2rem] border border-border/50 glass-strong p-8 lg:p-10">
          <h2 className="text-2xl font-semibold text-foreground">AI Lab FAQ</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Learn how our lab work turns into real-world automation and chatbot outcomes.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/40 bg-secondary/30 p-5">
                <p className="text-sm font-semibold text-foreground">{item.question}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

interface AIProductCardProps {
  product: (typeof allProducts)[0]
}

function AIProductCard({ product }: AIProductCardProps) {
  const priceUSDDisplay = formatPriceUSDCompact(product.pricing)
  const pricePKRDisplay = formatPricePKRCompact(product.pricing)

  return (
    <Link href={`/products/${product.slug}?from=ai-lab`}>
      <div className="group h-full rounded-xl glass-strong hover-gradient-border hover:glow-sm transition-all duration-300 overflow-hidden flex flex-col cursor-pointer">
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10">
          <ProductImage
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <ProductBadges badges={product.badges} className="absolute top-2 left-2" />

          {/* Play Icon */}
          {product.demoVideoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
              </div>
            </div>
          )}
        </div>

        {/* Content - Minimal */}
        <div className="flex-1 flex flex-col p-4">
          <h3 className="font-bold text-foreground text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* One-line summary */}
          <p className="text-xs text-muted-foreground mb-3 line-clamp-1 flex-1">
            {product.shortDescription.split(".")[0]}
          </p>

          {/* Price */}
          <div className="pt-3 border-t border-border/50">
            <div className="font-bold gradient-text text-sm">{priceUSDDisplay}</div>
            <div className="text-sm text-muted-foreground">{pricePKRDisplay}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
