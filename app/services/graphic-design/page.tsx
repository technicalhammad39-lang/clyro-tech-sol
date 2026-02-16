import Link from "next/link"
import { ArrowRight, Check, Palette, PenTool, Sparkles, Type } from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo"

const faqItems = [
  {
    question: "Do you offer logo design and brand identity packages?",
    answer:
      "Yes. We deliver logo design and brand identity systems with guidelines, color palettes, and usage rules.",
  },
  {
    question: "Can you handle UI UX design for SaaS?",
    answer:
      "We design UI UX for SaaS products with clear flows, conversion-ready layouts, and modern UI polish.",
  },
  {
    question: "Is graphic design services Pakistan-based?",
    answer:
      "We serve clients across Pakistan with remote-first workflows and fast turnarounds when needed.",
  },
]

export const metadata = buildPageMetadata({
  title: "Graphic Design Services",
  description:
    "Premium graphic design services for brand identity, UI UX design for SaaS, and modern website design.",
  path: "/services/graphic-design",
})

export default function GraphicDesignPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <JsonLd data={buildFaqSchema(faqItems)} />

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
          <Palette className="h-4 w-4 text-primary" />
          Graphic Design
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-foreground">
          Premium design systems that feel modern and credible
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Clyro Tech Solutions delivers graphic design services Pakistan teams trust for brand identity design, social
          media post design, and website design modern UI. We build systems that scale with your product.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="px-6 py-3 rounded-full gradient-bg text-foreground font-medium">
            Start a design brief
          </Link>
          <Link href="/products" className="px-6 py-3 rounded-full glass hover:bg-secondary/40 transition-colors text-foreground font-medium">
            Explore product UI
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Type className="h-4 w-4 text-primary" />
              Deliverables
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Logo design and brand identity systems with guidelines.",
                "UI UX design for SaaS dashboards and onboarding flows.",
                "Social media post design for campaigns and launch kits.",
                "Pitch deck design for investors and partnerships.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <PenTool className="h-4 w-4 text-primary" />
              Best-fit use cases
            </div>
            <div className="mt-4 grid gap-3">
              {[
                {
                  title: "Brand identity design Pakistan",
                  description: "Founders needing a polished, credible visual system.",
                },
                {
                  title: "UI polish for SaaS",
                  description: "Upgrade product UI and visuals before launch.",
                },
                {
                  title: "Launch campaigns",
                  description: "Cohesive assets for social, web, and pitch meetings.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/40 bg-secondary/30 p-4">
                  <div className="text-sm font-semibold text-foreground">{item.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="rounded-3xl border border-border/50 glass-strong p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Why Clyro Tech Solutions
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            We pair design strategy with product context, so your brand looks premium and stays consistent across web,
            mobile, and marketing.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related services</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/services/ai-chatbot-development">
                AI chatbot development for websites
              </Link>
              <Link className="block hover:text-primary transition-colors" href="/services/ai-automation">
                AI automation services for product teams
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related products</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/products/saas-dashboard">
                SaaS Dashboard Kit
              </Link>
              <Link className="block hover:text-primary transition-colors" href="/products/ai-chatbot">
                AI Chatbot Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-semibold text-foreground">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border/40 bg-secondary/30 p-5">
              <p className="text-sm font-semibold text-foreground">{item.question}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2.5rem] glass-strong border border-border/50 p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Refresh your brand and visuals</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell us about your product and we will propose a clean, modern design system.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-foreground font-medium"
          >
            Request design pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
