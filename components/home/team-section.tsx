"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { teamMembers } from "@/lib/team"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
        <div className="noise absolute inset-0 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Partners who <span className="gradient-text">ship</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We blend AI engineering and product delivery to build premium software that feels polished, fast, and
            reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/35 via-accent/25 to-transparent"
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-3xl glass-card p-6 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={member.image.src}
                    width={member.image.width}
                    height={member.image.height}
                    alt={member.image.alt}
                    className="h-[240px] sm:h-[260px] w-full object-cover"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />
                  <Badge className="absolute left-3 top-3 glass border-border/60 bg-secondary/60 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {member.experience}
                  </Badge>
                </div>

                <div className="mt-5">
                  <div className="text-lg font-semibold text-foreground">{member.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{member.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.slice(0, 4).map((specialty) => (
                    <Badge
                      key={specialty}
                      className="border-border/60 bg-secondary/60 text-[10px] uppercase tracking-wide text-foreground/90"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass hover:bg-secondary/50 transition-all text-sm font-medium group"
          >
            Meet the Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
