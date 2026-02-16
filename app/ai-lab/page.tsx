import type { Metadata } from "next"
import AILabClient from "@/components/ai-lab/ai-lab-client"
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

const faqItems = [
  {
    question: "What is the Clyro AI Lab?",
    answer:
      "It is where Clyro Tech Solutions ships experimental AI tools, prototypes, and automation workflows before they become full products.",
  },
  {
    question: "Are these tools production-ready?",
    answer:
      "Some are experimental and some are ready for client pilots. We clearly label what is stable and what is in progress.",
  },
  {
    question: "Can I request a custom AI assistant for business from the Lab?",
    answer:
      "Yes. We use Lab prototypes to accelerate custom builds such as voice assistant development and AI chatbot development for websites.",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "AI Lab",
  description:
    "Explore the Clyro Tech Solutions AI Lab: experiments, prototypes, and tools that power our automation and chatbot products.",
  path: "/ai-lab",
})

export default function AILabPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(faqItems)} />
      <AILabClient faqItems={faqItems} />
    </>
  )
}
