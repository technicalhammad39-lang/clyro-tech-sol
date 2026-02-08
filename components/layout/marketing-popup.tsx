"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { Badge } from "@/components/ui/badge"

const STORAGE_KEY = "cts_marketing_popup_v1"
const AUTO_CLOSE_MS = 2600

export function MarketingPopup() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<{
    enabled?: boolean
    badge?: string
    title?: string
    subtitle?: string
    image_url?: string
    cta_text?: string
    cta_link?: string
    duration?: number
  } | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem(STORAGE_KEY)) return

    setSettings({
      enabled: true,
      badge: "HOT",
      title: "Jarvis Personal Voice Assistant AI",
      subtitle: "The premium AI assistant that runs continuously and automates your entire workflow.",
      image_url: "/jarvis-ai.jpeg",
      cta_text: "View Jarvis",
      cta_link: "/products/jarvis-ai",
      duration: 3,
    })
    const timer = window.setTimeout(() => setOpen(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "1")
      setOpen(false)
    }, (settings?.duration ? Number(settings.duration) : AUTO_CLOSE_MS / 1000) * 1000)

    return () => window.clearTimeout(timer)
  }, [open, settings])

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "1")
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-border/60 glass-strong shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.95, y: 20 }
            }
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 rounded-full border border-border/50 bg-secondary/70 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid gap-0 md:grid-cols-[1.1fr,1.4fr]">
              <div className="relative min-h-[220px]">
                <Image
                  src={settings?.image_url ?? "/jarvis-ai.jpeg"}
                  alt={settings?.title ?? "Jarvis Personal Voice Assistant AI"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-background/10" />
                <Badge className="absolute left-4 top-4 border-border/60 bg-secondary/70 text-[10px] uppercase tracking-[0.2em] text-foreground">
                  {settings?.badge ?? "HOT"}
                </Badge>
              </div>
              <div className="p-6 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Trending Drop
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
                  {settings?.title ?? "Jarvis Personal Voice Assistant AI"}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {settings?.subtitle ??
                    "The premium AI assistant that runs continuously and automates your entire workflow. Voice control, smart automation, and advanced intelligence in one polished product."}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={settings?.cta_link ?? "/products/jarvis-ai"}
                    className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground overflow-hidden"
                  >
                    <span className="absolute inset-0 gradient-bg" />
                    <span className="relative">{settings?.cta_text ?? "View Jarvis"}</span>
                  </Link>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex items-center justify-center rounded-full border border-border/60 bg-secondary/40 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
