import {
  Ban,
  CheckCircle2,
  Clock,
  ClipboardList,
  Info,
  Mail,
  Percent,
  Repeat,
} from "lucide-react"

import { LegalPageLayout, type LegalSection } from "@/components/legal/legal-page-layout"

export const metadata = {
  title: "Refund Policy | Clyro Tech Solutions",
  description: "Refund policy for Clyro Tech Solutions products and services.",
}

const sections: LegalSection[] = [
  {
    id: "general-policy",
    title: "General Refund Policy",
    icon: Info,
    description:
      "We stand behind our products and services. Refunds are available under the conditions outlined below.",
    bullets: [
      "All refund requests must be submitted within the specified timeframe.",
      "Refund eligibility may vary by product or service.",
      "Proof of purchase is required for all requests.",
    ],
  },
  {
    id: "eligibility",
    title: "Refund Eligibility",
    icon: CheckCircle2,
    description: "To be eligible for a refund, you must meet the following conditions:",
    bullets: [
      "Requests must be submitted within 30 days of purchase.",
      "The product or service must be in its original condition.",
      "Provide proof of purchase (invoice or receipt).",
      "The issue must not result from misuse or improper installation.",
    ],
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    icon: Ban,
    description: "The following items are generally non-refundable:",
    bullets: [
      "Products purchased on final sale or clearance.",
      "Products modified or customized per your request.",
      "Digital products that have been downloaded or accessed.",
      "Custom or bespoke development services after delivery.",
    ],
  },
  {
    id: "refund-process",
    title: "Refund Process",
    icon: ClipboardList,
    description: "To request a refund, follow these steps:",
    bullets: [
      "Contact support at clyrotech1@gmail.com with your order details.",
      "Include your reason for requesting a refund and any relevant documentation.",
      "We will review your request and respond as soon as possible.",
      "If approved, the refund will be processed to the original payment method.",
    ],
  },
  {
    id: "refund-timeline",
    title: "Refund Timeline",
    icon: Clock,
    description: "Once your refund is approved:",
    bullets: [
      "Digital products: processed immediately after approval.",
      "Physical products: allow 5-10 business days for processing.",
      "Banks or card providers may take additional time to credit your account.",
    ],
  },
  {
    id: "partial-refunds",
    title: "Partial Refunds",
    icon: Percent,
    description: "In some cases, we may issue a partial refund based on usage or license activity.",
    bullets: [
      "Partial refunds are assessed on a case-by-case basis.",
      "Refund amounts will be communicated before processing.",
      "Eligibility depends on product type and usage history.",
    ],
  },
  {
    id: "exchanges",
    title: "Exchanges",
    icon: Repeat,
    description: "If you received a defective or incorrect product, we will replace it free of charge.",
    bullets: [
      "Contact support within 30 days of purchase.",
      "Provide photos and details of the issue.",
      "We will coordinate replacement once the issue is verified.",
    ],
  },
  {
    id: "contact",
    title: "Contact Support",
    icon: Mail,
    description: "If you have questions about our refund policy or need assistance, reach out to us.",
    bullets: [
      "Email support for refund questions or order issues.",
      "Provide your order details for faster assistance.",
      "We respond as quickly as possible during business hours.",
    ],
    extra: (
      <div className="p-5 rounded-2xl glass-strong border border-border/50">
        <p className="text-sm text-muted-foreground m-0">Email: clyrotech1@gmail.com</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Phone: +92 307 6924116</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Response time: 24-48 hours</p>
      </div>
    ),
  },
]

export default function RefundPage() {
  return (
    <LegalPageLayout
      badge="Refund Policy"
      title="Refund Policy"
      subtitle="Refund rules and timelines for Clyro Tech Solutions products and services."
      lastUpdated="February 2026"
      sections={sections}
      sidebarNote="Refund eligibility can vary by product or service. Contact us if you have questions."
    />
  )
}
