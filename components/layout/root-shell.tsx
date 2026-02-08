"use client"

import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { MarketingPopup } from "@/components/layout/marketing-popup"
import { RouteTransition } from "@/components/motion/route-transition"
import { TechBackground } from "@/components/ui/tech-background"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"

export function RootShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TechBackground />
      <Header />
      <RouteTransition>{children}</RouteTransition>
      <Footer />
      <WhatsAppButton />
      <MarketingPopup />
    </>
  )
}
