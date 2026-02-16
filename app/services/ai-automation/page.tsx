import Link from "next/link"
import { ArrowRight, Check, Cpu, Gauge, Sparkles, Workflow } from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo"

const faqItems = [
  {
    question: "What is included in AI automation services?",
    answer:
      "We map your workflows, automate repetitive steps, integrate tools, and ship dashboards so teams can monitor outcomes.",
  },
  {
    question: "Do you handle chrome automation bot development?",
    answer:
      "Yes. We build browser automation and workflow automation for businesses, including data entry, QA, and outreach ops.",
  },
  {
    question: "Do you work with teams in Pakistan?",
    answer:
      "Yes. As an AI automation agency in Pakistan, we support Lahore, Karachi, and Islamabad with local-first rollout plans.",
  },
]

export const metadata = buildPageMetadata({
  title: "AI Automation Services",
  description:
    "AI automation services for workflow efficiency, lead ops, and operational scale. Built by Clyro Tech Solutions.",
  path: "/services/ai-automation",
})

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <JsonLd data={buildFaqSchema(faqItems)} />

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
          <Workflow className="h-4 w-4 text-primary" />
          AI Automation Services
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-foreground">
          Workflow automation for businesses that need scale
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          We design AI automation services that reduce manual work, improve handoffs, and keep teams focused on revenue.
          From AI lead generation automation to Gemini API integration services, our systems are built for measurable
          performance.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="px-6 py-3 rounded-full gradient-bg text-foreground font-medium">
            Start automation discovery
          </Link>
          <Link href="/products" className="px-6 py-3 rounded-full glass hover:bg-secondary/40 transition-colors text-foreground font-medium">
            Browse automation products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Workflow orchestration",
              description: "Automate complex flows across CRMs, inboxes, and internal tools with audit-ready logic.",
            },
            {
              title: "Browser & desktop automation",
              description: "Chrome automation bot development and desktop routines that run tasks with repeatable precision.",
            },
            {
              title: "AI decision support",
              description: "Use AI for routing, enrichment, and triage while keeping humans in the loop.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/50 glass-strong p-6">
              <div className="text-sm font-semibold text-foreground">{item.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="rounded-3xl glass-strong border border-border/50 p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Gauge className="h-4 w-4 text-primary" />
            Common automation wins
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
            {[
              "Lead qualification with AI enrichment and scoring.",
              "Support ticket routing with AI summaries.",
              "Web automation services for Pakistan-based teams needing repeatable ops.",
              "Data cleanup, reporting, and automated compliance logs.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="rounded-3xl border border-border/50 glass-strong p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Cpu className="h-4 w-4 text-primary" />
            Why Clyro Tech Solutions
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            We deliver AI automation with production-grade monitoring, clean handoffs, and long-term maintainability.
            Clients choose us for clear outcomes and systems that stay reliable after launch.
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
              <Link className="block hover:text-primary transition-colors" href="/services/voice-assistants">
                Voice assistant development for internal workflows
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related products</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/products/jarvis-ai">
                Jarvis AI Voice Assistant
              </Link>
              <Link className="block hover:text-primary transition-colors" href="/products/ai-document">
                DocuMind AI
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Ready to automate?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Share your workflow and we will map the best automation path for your team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-foreground font-medium"
          >
            Request an automation plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
