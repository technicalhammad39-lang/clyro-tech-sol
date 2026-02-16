import type { Metadata } from "next"
import ServicesPageClient from "@/components/services/services-page-client"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "AI automation services, chatbot development, voice assistants, and product design from Clyro Tech Solutions.",
  path: "/services",
})

export default function ServicesPage() {
  return <ServicesPageClient />
}
