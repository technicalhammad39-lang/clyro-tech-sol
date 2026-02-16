import type { Metadata } from "next"
import ContactPageClient from "@/components/contact/contact-page-client"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Talk to Clyro Tech Solutions about AI automation, chatbot development, or premium product delivery.",
  path: "/contact",
})

export default function ContactPage() {
  return <ContactPageClient />
}
