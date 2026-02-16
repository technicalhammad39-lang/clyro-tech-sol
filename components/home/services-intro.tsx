import Link from "next/link"

const serviceLinks = [
  {
    href: "/services/ai-automation",
    label: "AI automation services",
    description: "Workflow automation for businesses that want measurable time savings.",
  },
  {
    href: "/services/ai-chatbot-development",
    label: "AI chatbot development for websites",
    description: "Customer support, lead capture, and smart routing with human tone.",
  },
  {
    href: "/services/voice-assistants",
    label: "voice assistant development",
    description: "Custom AI assistant for business, including Gemini API integration services.",
  },
  {
    href: "/services/graphic-design",
    label: "logo design and brand identity",
    description: "Premium brand systems, UI UX design for SaaS, and social media post design.",
  },
]

export function HomeServicesIntro() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-border/50 glass-strong p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground">
              Build with Clyro Tech Solutions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We ship AI, automation, and design work that feels premium. Choose a service below to explore deliverables,
              timelines, and real outcomes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-border/40 bg-secondary/30 p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
