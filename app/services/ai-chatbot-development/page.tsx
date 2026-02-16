import Link from "next/link"
import { ArrowRight, Bot, Check, MessageSquare, ShieldCheck, Sparkles } from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo"

const faqItems = [
  {
    question: "Do you build AI chatbot development for websites or apps?",
    answer:
      "Yes. We design and deploy AI chatbots for websites, web apps, and internal dashboards with a focus on brand tone and reliable routing.",
  },
  {
    question: "Can you include WhatsApp chatbot development?",
    answer:
      "We can integrate WhatsApp chatbot development when it fits the workflow, including lead capture and support routing.",
  },
  {
    question: "Do you support AI chatbot development in Pakistan?",
    answer:
      "Yes. We work with teams across Pakistan, including Lahore, Karachi, and Islamabad, with local-first deployment options.",
  },
]

export const metadata = buildPageMetadata({
  title: "AI Chatbot Development",
  description:
    "Human-first AI chatbot development for websites, lead capture, and customer support. Built by Clyro Tech Solutions.",
  path: "/services/ai-chatbot-development",
})

export default function AiChatbotDevelopmentPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <JsonLd data={buildFaqSchema(faqItems)} />

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
          <Bot className="h-4 w-4 text-primary" />
          AI Chatbot Development
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-foreground">
          AI chatbot development for websites that feels human
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Clyro Tech Solutions designs AI chatbots that answer quickly, hand off cleanly, and support sales or service
          without losing brand tone. We focus on real outcomes like AI customer support chatbot deflection and AI lead
          generation automation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="px-6 py-3 rounded-full gradient-bg text-foreground font-medium">
            Start a chatbot project
          </Link>
          <Link href="/products" className="px-6 py-3 rounded-full glass hover:bg-secondary/40 transition-colors text-foreground font-medium">
            Explore products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl glass-strong border border-border/50 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              What we build
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Conversation design, fallback flows, and escalation to humans.",
                "Knowledge-base ingestion with structured retrieval.",
                "Omnichannel rollouts including WhatsApp chatbot development when relevant.",
                "Analytics, intent tracking, and continuous improvement sprints.",
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
              <MessageSquare className="h-4 w-4 text-primary" />
              Best-fit use cases
            </div>
            <div className="mt-4 grid gap-3">
              {[
                {
                  title: "Sales & lead capture",
                  description: "Qualify, route, and book calls with AI lead generation automation.",
                },
                {
                  title: "Customer support",
                  description: "Reduce tickets with an AI customer support chatbot that handles routine questions.",
                },
                {
                  title: "Internal enablement",
                  description: "Give teams a unified assistant for policies, SOPs, and product knowledge.",
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
            <ShieldCheck className="h-4 w-4 text-primary" />
            Why Clyro Tech Solutions
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            We build AI chatbot development for websites with clarity, measurable metrics, and polished UX. Our team
            balances automation with human experience so your customers feel supported, not filtered.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related services</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/services/ai-automation">
                AI automation services for workflow-ready teams
              </Link>
              <Link className="block hover:text-primary transition-colors" href="/services/voice-assistants">
                Voice assistant development for internal ops
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 glass-strong p-6">
            <h2 className="text-lg font-semibold text-foreground">Related products</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link className="block hover:text-primary transition-colors" href="/products/ai-chatbot">
                AI Chatbot Pro
              </Link>
              <Link className="block hover:text-primary transition-colors" href="/products/jarvis-ai">
                Jarvis AI Voice Assistant
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Ready to deploy a smarter chatbot?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell us about your audience, channels, and support goals. We will recommend the right build path.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-foreground font-medium"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
