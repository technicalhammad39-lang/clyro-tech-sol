import Link from "next/link"
import { ArrowRight, Check, Headphones, Mic, Sparkles, Zap } from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo"

const faqItems = [
  {
    question: "What makes your voice assistant development different?",
    answer:
      "We build voice-first UX with clean command design, reliable fallback behavior, and optional desktop integrations.",
  },
  {
    question: "Can you deliver a custom AI assistant for business teams?",
    answer:
      "Yes. We tailor assistants for operations, sales, or support, including Gemini API integration services when needed.",
  },
  {
    question: "Do you support voice assistant developers in Pakistan?",
    answer:
      "We work with teams across Pakistan and can ship voice assistants that align with local infrastructure needs.",
  },
]

export const metadata = buildPageMetadata({
  title: "Voice Assistant Development",
  description:
    "Premium voice assistant development for desktop automation, customer workflows, and custom AI assistants.",
  path: "/services/voice-assistants",
})

export default function VoiceAssistantsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <JsonLd data={buildFaqSchema(faqItems)} />

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
          <Mic className="h-4 w-4 text-primary" />
          Voice Assistants
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-foreground">
          Voice assistant development for modern workflows
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          We build voice assistant development programs that feel fast, reliable, and brand-safe. From Electron desktop
          app development for automation to always-on copilots, we tailor every assistant to your business.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="px-6 py-3 rounded-full gradient-bg text-foreground font-medium">
            Plan a voice assistant
          </Link>
          <Link href="/products/jarvis-ai" className="px-6 py-3 rounded-full glass hover:bg-secondary/40 transition-colors text-foreground font-medium">
            View Jarvis AI
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Headphones className="h-4 w-4 text-primary" />
              Ideal for
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Customer-facing assistants that answer, route, and escalate.",
                "Internal copilots for task execution and scheduling.",
                "Voice-enabled dashboards with secure access controls.",
                "Command layers that orchestrate existing tools.",
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
              <Sparkles className="h-4 w-4 text-primary" />
              Highlights
            </div>
            <div className="mt-4 grid gap-3">
              {[
                {
                  title: "Custom AI assistant for business",
                  description: "Workflow-aware assistants tailored to your SOPs and tools.",
                },
                {
                  title: "Desktop-grade reliability",
                  description: "Electron desktop app development built for automation and uptime.",
                },
                {
                  title: "Intelligent integrations",
                  description: "Gemini API integration services or other LLM stacks as required.",
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
            <Zap className="h-4 w-4 text-primary" />
            Why Clyro Tech Solutions
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            We combine polished UX with stable automation layers, so your assistant feels premium and dependable across
            devices and teams.
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
                Workflow automation for businesses
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related products</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/products/jarvis-ai">
                Jarvis AI Voice Assistant
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Launch a voice-first experience</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Share your automation goals and we will scope the right assistant build.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-foreground font-medium"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
