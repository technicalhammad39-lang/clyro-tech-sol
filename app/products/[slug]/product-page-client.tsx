"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Crown, Sparkles, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"
import {
  formatPricePKRDetailed,
  formatPriceUSDDetailed,
  getPricingPKRText,
  getPricingUSDText,
} from "@/lib/products"
import { buyViaWhatsApp } from "@/lib/whatsapp"
import { ProductBadges } from "@/components/products/product-badges"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductImage } from "@/components/ui/product-image"

const relatedServices = [
  { href: "/services/ai-automation", label: "workflow automation for businesses" },
  { href: "/services/ai-chatbot-development", label: "AI chatbot development for websites" },
  { href: "/services/voice-assistants", label: "voice assistant development" },
  { href: "/services/graphic-design", label: "website design modern UI" },
]

const relatedProducts = [
  { href: "/products/jarvis-ai", label: "Jarvis AI Voice Assistant" },
  { href: "/products/ai-chatbot", label: "AI Chatbot Pro" },
  { href: "/products/saas-dashboard", label: "SaaS Dashboard Kit" },
]

export function ProductPageClient({ product, from }: { product: Product; from?: string }) {
  const isJarvis = product.slug === "jarvis-ai" && (product.tieredOffers?.length ?? 0) > 0

  if (isJarvis) {
    return <JarvisProductPage product={product} from={from} />
  }

  return <DefaultProductPage product={product} from={from} />
}

function DefaultProductPage({ product, from }: { product: Product; from?: string }) {
  const searchParams = useSearchParams()
  const source = from ?? searchParams.get("from") ?? "products"

  const [selectedScreenshot, setSelectedScreenshot] = useState(0)

  // Determine back link based on source
  const backLink = source === "ai-lab" ? "/ai-lab" : "/products"
  const backLabel = source === "ai-lab" ? "Back to AI Lab" : "Back to Products"

  const priceUSDDisplay = formatPriceUSDDetailed(product.pricing)
  const pricePKRDisplay = formatPricePKRDetailed(product.pricing)

  return (
    <main className="min-h-screen pt-20 pb-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
      </div>

      {/* Product Header with Title */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge className="glass border-border/50 bg-secondary/40 text-muted-foreground">{product.category}</Badge>
          <ProductBadges badges={product.badges} orientation="row" />
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-3">{product.name}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{product.longDescription}</p>
      </section>

      {/* Demo Video - AT THE TOP */}
      {product.demoVideoUrl && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="relative rounded-xl overflow-hidden aspect-video glass bg-gradient-to-br from-primary/10 to-accent/10">
            <iframe src={product.demoVideoUrl} title={`${product.name} demo`} className="w-full h-full" allowFullScreen />
          </div>
        </section>
      )}

      {/* Price & CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          {/* Left - Price & Details */}
          <div>
            <div className="p-6 rounded-xl glass-strong mb-6">
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">{priceUSDDisplay}</div>
              <div className="text-base text-muted-foreground">{pricePKRDisplay}</div>
              <p className="text-xs text-muted-foreground mt-2">Flexible pricing for all budgets</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA & Stats */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl glass-strong space-y-3">
              <button
                type="button"
                onClick={() =>
                  buyViaWhatsApp({
                    name: product.name,
                    category: product.category,
                    priceUSD: getPricingUSDText(product.pricing),
                    pricePKR: getPricingPKRText(product.pricing),
                    type: "full",
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Buy Now via WhatsApp
              </button>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg glass text-center">
                  <div className="text-xl font-bold gradient-text">150+</div>
                  <div className="text-[10px] text-muted-foreground">Users</div>
                </div>
                <div className="p-3 rounded-lg glass text-center">
                  <div className="text-xl font-bold gradient-text">4.8</div>
                  <div className="text-[10px] text-muted-foreground">Rating</div>
                </div>
                <div className="p-3 rounded-lg glass text-center">
                  <div className="text-xl font-bold gradient-text">24/7</div>
                  <div className="text-[10px] text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="p-4 rounded-lg glass flex items-start gap-3">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Screenshots Gallery */}
      {product.screenshots.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="space-y-4">
            {/* Main Screenshot */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary/20 glass">
              <ProductImage
                src={product.screenshots[selectedScreenshot]}
                alt={`Screenshot ${selectedScreenshot + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Navigation */}
            {product.screenshots.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(Math.max(0, selectedScreenshot - 1))}
                  disabled={selectedScreenshot === 0}
                  className="p-2 rounded-lg glass hover:bg-secondary/50 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 flex gap-2 overflow-x-auto pb-2">
                  {product.screenshots.map((screenshot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedScreenshot(idx)}
                      className={cn(
                        "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedScreenshot === idx ? "border-primary scale-105" : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <ProductImage src={screenshot} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(Math.min(product.screenshots.length - 1, selectedScreenshot + 1))}
                  disabled={selectedScreenshot === product.screenshots.length - 1}
                  className="p-2 rounded-lg glass hover:bg-secondary/50 disabled:opacity-30 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* What You Get */}
      {product.whatYouGet && product.whatYouGet.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.whatYouGet.map((item) => (
              <div key={item} className="p-4 rounded-lg glass flex items-start gap-3">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.reviews.map((review) => (
              <div key={review.author} className="p-5 rounded-lg glass">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Product-Specific Terms - For Jarvis */}
      {product.id === "jarvis-ai" && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="p-6 rounded-lg glass border border-border/50">
            <p className="text-sm text-muted-foreground mb-3">
              Before purchasing Jarvis AI, please review the product-specific terms and conditions:
            </p>
            <Link
              href="/legal/jarvis-terms"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              Jarvis AI - Terms & Conditions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <RelatedLinksSection />

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 lg:p-12 rounded-2xl glass-strong text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Join hundreds of satisfied customers using {product.name}
          </p>
          <button
            type="button"
            onClick={() =>
              buyViaWhatsApp({
                name: product.name,
                category: product.category,
                priceUSD: getPricingUSDText(product.pricing),
                pricePKR: getPricingPKRText(product.pricing),
                type: "full",
              })
            }
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Purchase Now
          </button>
        </div>
      </section>
    </main>
  )
}

function JarvisProductPage({ product, from }: { product: Product; from?: string }) {
  const searchParams = useSearchParams()
  const source = from ?? searchParams.get("from") ?? "products"
  const backLink = source === "ai-lab" ? "/ai-lab" : "/products"
  const backLabel = source === "ai-lab" ? "Back to AI Lab" : "Back to Products"
  const tiers = product.tieredOffers ?? []
  const pricingNote = product.pricingNote ?? "Current prices are discounted and may increase with future updates."
  const updatePolicy = product.updatePolicy ?? "Free updates for the purchased version."

  const [selectedScreenshot, setSelectedScreenshot] = useState(0)
  const formatPKR = (value: number) => `PKR ${value.toLocaleString("en-PK")}`

  const openWhatsApp = (tier: (typeof tiers)[number], type: "app" | "source") => {
    const price =
      type === "app" ? formatPKR(tier.app_price_pkr) : formatPKR(tier.source_price_pkr)
    const itemName = `${product.name} - ${tier.name} (${tier.versionLabel})`
    buyViaWhatsApp({
      name: itemName,
      category: product.category,
      pricePKR: price,
      type: type === "app" ? "app-only" : "source-code",
    })
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge className="glass border-border/50 bg-secondary/40 text-muted-foreground">{product.category}</Badge>
          <ProductBadges badges={product.badges} orientation="row" />
          <Badge className="border-primary/30 bg-primary/10 text-primary">Limited-time discount</Badge>
        </div>
        <h1 className="text-3xl lg:text-5xl font-semibold text-foreground">Jarvis AI Voice Assistant</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
          Premium voice-first automation for your entire workstation. Choose the version that fits your workflow and
          scale.
        </p>
      </section>

      {product.demoVideoUrl && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-video glass-strong border border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
            <iframe src={product.demoVideoUrl} title={`${product.name} demo`} className="w-full h-full" allowFullScreen />
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="md:hidden sticky top-20 z-30 -mx-6 px-6 py-3 bg-background/80 backdrop-blur border-b border-border/40">
          <div className="flex gap-2 overflow-x-auto">
            {tiers.map((tier) => (
              <a
                key={tier.key}
                href={`#tier-${tier.key}`}
                className="rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-xs font-medium text-muted-foreground whitespace-nowrap"
              >
                {tier.versionLabel.toUpperCase()} {tier.name}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              id={`tier-${tier.key}`}
              className={cn(
                "relative rounded-3xl border border-border/60 glass-strong p-6 transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]",
                tier.recommended && "border-primary/40 bg-gradient-to-b from-primary/10 to-transparent"
              )}
            >
              {tier.recommended && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  <Crown className="h-3 w-3" />
                  Recommended
                </div>
              )}
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{tier.versionLabel}</div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-4 space-y-2">
                {tier.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border/50 bg-secondary/30 p-4">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">App</div>
                <div className="text-2xl font-semibold text-foreground">{formatPKR(tier.app_price_pkr)}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Source Code</div>
                <div className="text-2xl font-semibold text-foreground">{formatPKR(tier.source_price_pkr)}</div>
                <p className="mt-2 text-xs text-muted-foreground">{pricingNote}</p>
              </div>

              <div className="mt-5 grid gap-2">
                <Button className="rounded-full gradient-bg text-foreground hover:opacity-90" onClick={() => openWhatsApp(tier, "app")}>
                  Buy App
                </Button>
                <Button variant="secondary" className="rounded-full" onClick={() => openWhatsApp(tier, "source")}>
                  Buy Source Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              What you get (App)
            </div>
            <div className="mt-4 space-y-2">
              {(product.appIncludes ?? []).map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              What you get (Source Code)
            </div>
            <div className="mt-4 space-y-2">
              {(product.sourceIncludes ?? []).map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="rounded-3xl glass-strong border border-border/50 p-6">
          <h3 className="text-lg font-semibold text-foreground">Free Updates Policy</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {updatePolicy} Upgrade to a higher version is separate.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="rounded-3xl glass-strong border border-border/50 p-6">
          <h3 className="text-lg font-semibold text-foreground">Licensing & Usage</h3>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {(product.licenseSummary ?? []).map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {product.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-foreground">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-lg font-semibold text-foreground mb-4">FAQ</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {(product.faq ?? []).map((item) => (
            <div key={item.question} className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
              <p className="text-sm font-semibold text-foreground">{item.question}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {product.features && product.features.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="p-4 rounded-lg glass flex items-start gap-3">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {product.screenshots.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary/20 glass">
              <ProductImage
                src={product.screenshots[selectedScreenshot]}
                alt={`Screenshot ${selectedScreenshot + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {product.screenshots.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(Math.max(0, selectedScreenshot - 1))}
                  disabled={selectedScreenshot === 0}
                  className="p-2 rounded-lg glass hover:bg-secondary/50 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 flex gap-2 overflow-x-auto pb-2">
                  {product.screenshots.map((screenshot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedScreenshot(idx)}
                      className={cn(
                        "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedScreenshot === idx ? "border-primary scale-105" : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <ProductImage src={screenshot} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(Math.min(product.screenshots.length - 1, selectedScreenshot + 1))}
                  disabled={selectedScreenshot === product.screenshots.length - 1}
                  className="p-2 rounded-lg glass hover:bg-secondary/50 disabled:opacity-30 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {product.reviews && product.reviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.reviews.map((review) => (
              <div key={review.author} className="p-5 rounded-lg glass">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Direct WhatsApp purchase flow on tier buttons */}
      <RelatedLinksSection />
    </main>
  )
}

function RelatedLinksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-border/50 glass-strong p-6">
          <h3 className="text-lg font-semibold text-foreground">Related services</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {relatedServices.map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 glass-strong p-6">
          <h3 className="text-lg font-semibold text-foreground">Related products</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {relatedProducts.map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
