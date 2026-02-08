import type { ReactNode } from "react"
import { Check, ChevronDown, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export type LegalSection = {
  id: string
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
  note?: string
  extra?: ReactNode
}

type LegalPageLayoutProps = {
  badge: string
  title: string
  subtitle: string
  lastUpdated: string
  sections: LegalSection[]
  sidebarNote?: string
}

export function LegalPageLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections,
  sidebarNote,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[520px] h-[520px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-accent/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="noise absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-5">
            <span className="text-xs sm:text-sm text-muted-foreground">{badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-balance">{subtitle}</p>
          <div className="mt-6 flex items-center justify-center">
            <Badge className="glass border-border/60 bg-secondary/60 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Last updated: {lastUpdated}
            </Badge>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-8 items-start">
          <div>
            <div className="lg:hidden mb-6">
              <details className="group rounded-2xl glass-strong border border-border/50">
                <summary className="list-none flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  On this page
                  <ChevronDown className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-4">
                  <ul className="space-y-2 text-sm">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="p-6 md:p-7 rounded-3xl glass-strong border border-border/50 hover-gradient-border transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl gradient-bg-subtle flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">{section.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                        <ul className="mt-4 space-y-3">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                                <Check className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {section.note ? (
                          <div className="mt-4 rounded-2xl border border-border/50 bg-secondary/30 px-4 py-3">
                            <p className="text-xs text-muted-foreground leading-relaxed m-0">{section.note}</p>
                          </div>
                        ) : null}
                        {section.extra ? <div className="mt-4">{section.extra}</div> : null}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block lg:sticky lg:top-28">
            <div className="p-6 rounded-3xl glass-strong border border-border/50">
              <div className="text-sm font-semibold text-foreground mb-4">On this page</div>
              <ul className="space-y-2 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              {sidebarNote ? (
                <div className="mt-6 rounded-xl bg-secondary/40 p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed m-0">{sidebarNote}</p>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
