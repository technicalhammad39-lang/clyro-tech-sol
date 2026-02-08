import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Check, Handshake, Layers, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react"

import { teamMembers } from "@/lib/team"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Team | Clyro Tech Solutions",
  description: "Meet the partners behind Clyro Tech Solutions.",
}

const values = [
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description: "We build with sane defaults, clear boundaries, and practical security from day one.",
  },
  {
    icon: Sparkles,
    title: "Polished UX",
    description: "We care about details: spacing, motion, copy, and the feel of every interaction.",
  },
  {
    icon: Rocket,
    title: "Ship with speed",
    description: "Fast iteration with professional quality, then harden for production.",
  },
  {
    icon: Handshake,
    title: "Reliable partnership",
    description: "Transparent communication, predictable delivery, and long-term support when you need it.",
  },
]

const howWeWork = [
  {
    step: "01",
    title: "Align",
    description: "We clarify scope, success criteria, and constraints so delivery stays focused.",
  },
  {
    step: "02",
    title: "Build",
    description: "We design and engineer in parallel, shipping milestones with clean implementation.",
  },
  {
    step: "03",
    title: "Launch & support",
    description: "We deploy, monitor, and iterate so your product stays stable as it grows.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="absolute top-24 right-1/4 w-[420px] h-[420px] bg-accent/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="noise absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">Clyro Tech Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="gradient-text">team</span> behind premium builds
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-balance">
            Two partners, one standard: premium software that looks great, performs fast, and is built to scale.
          </p>
        </section>

        <section className="space-y-10 mb-20">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-primary/35 via-accent/25 to-transparent"
            >
              <div className="rounded-[2.4rem] glass-strong p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.05fr,1.45fr] items-start">
                  <div>
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/60 via-accent/40 to-transparent shadow-[0_0_45px_rgba(59,130,246,0.15)]">
                      <div className="relative overflow-hidden rounded-3xl">
                        <Image
                          src={member.image.src}
                          width={member.image.width}
                          height={member.image.height}
                          alt={member.image.alt}
                          className="h-[360px] sm:h-[420px] w-full object-cover"
                          sizes="(min-width: 1024px) 420px, (min-width: 640px) 520px, 100vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />
                        <Badge className="absolute left-4 top-4 glass border-border/60 bg-secondary/60 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {member.experience}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{member.name}</h3>
                        <Badge className="glass border-border/60 bg-secondary/60 text-[10px] uppercase tracking-wide text-muted-foreground">
                          Leadership
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
                      <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                        <div className="text-sm font-semibold text-foreground">Key Highlights</div>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {member.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                              <Check className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
                        <div className="text-sm font-semibold text-foreground">Specialties</div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            className="border-border/60 bg-secondary/60 text-[10px] uppercase tracking-wide text-foreground/90"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full glass text-xs text-primary font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How we <span className="gradient-text">work</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Clear communication, strong engineering fundamentals, and a product mindset from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg-subtle flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{value.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{value.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {howWeWork.map((item) => (
              <div
                key={item.step}
                className="p-7 rounded-3xl glass-strong hover:bg-secondary/20 transition-colors relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="text-4xl font-bold gradient-text opacity-30 mb-2">{item.step}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{item.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="p-10 md:p-12 rounded-[2.5rem] glass-strong relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Want to work with us?</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-7 max-w-2xl mx-auto">
                Tell us what you are building. We will help you shape the scope and ship a premium product.
              </p>
              <Link
                href="/custom-project"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full overflow-hidden group relative glow"
              >
                <span className="absolute inset-0 gradient-bg" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2 text-foreground font-medium">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
