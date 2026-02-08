import Link from "next/link"
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  FileText,
  Info,
  Mail,
  Power,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { LegalPageLayout, type LegalSection } from "@/components/legal/legal-page-layout"

export const metadata = {
  title: "Usage Policy | Clyro Tech Solutions",
  description: "Usage policy and acceptable use guidelines for Clyro Tech Solutions.",
}

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: Info,
    description:
      "This Usage Policy explains how you may use the Clyro Tech Solutions website, products, services, and related content.",
    bullets: [
      "Applies to our website, products, services, and supporting resources.",
      "Product-specific terms may apply in addition to this policy.",
      "Designed to protect users, clients, and our infrastructure.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    icon: CheckCircle2,
    description: "You may use our Services for lawful purposes, including commercial use, if you follow this policy.",
    bullets: [
      "Use the Services in a way that is respectful to others and does not cause harm.",
      "Follow the rules of any third-party platforms you connect to (messaging platforms, browsers, APIs).",
      "Keep your account, devices, and credentials secure.",
      "Provide accurate information when purchasing or requesting support.",
      "Use automation responsibly with appropriate human oversight.",
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    icon: Ban,
    description: "You may not use the Services to engage in illegal, harmful, deceptive, or abusive activity.",
    bullets: [
      "Attempting to gain unauthorized access to systems, accounts, or networks.",
      "Distributing malware, phishing content, or running scams.",
      "Harassing, threatening, doxxing, or discriminating against others.",
      "Generating or distributing content that violates applicable law.",
      "Circumventing safety controls, rate limits, or technical restrictions.",
      "Reverse engineering, scraping, or abusing the Services in ways that degrade reliability for others.",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation Guidelines",
    icon: Sparkles,
    description: "Automation can create real-world impact quickly, so we ask that you use it carefully.",
    bullets: [
      "Keep a human in the loop for high-impact decisions (payments, security, or sensitive communications).",
      "Do not use automation for spam, unsolicited outreach at scale, or deceptive behavior.",
      "Respect third-party terms of service when automating workflows on other platforms.",
      "Test in a safe environment before running automations on live systems.",
      "Use appropriate logging and access controls if multiple people can run automations.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data & Privacy Notes",
    icon: ShieldCheck,
    description: "Our Services may process data you provide. You are responsible for ensuring you have the right to share it.",
    bullets: [
      "Avoid uploading highly sensitive information unless it is necessary and permitted.",
      "If your project involves personal data, consider legal obligations and security requirements early.",
      "Review our Privacy Policy for details on how we handle information.",
    ],
    note: "This section is provided for general guidance and is not legal advice.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: FileText,
    description: "Our Services and branding are owned by Clyro Tech Solutions or our licensors unless stated otherwise.",
    bullets: [
      "Do not use our trademarks or logos in a way that implies endorsement without permission.",
      "Deliverables and licenses are defined by the product page or delivery agreement.",
      "Respect third-party licenses and attribution requirements in any provided assets.",
    ],
  },
  {
    id: "service-limitations",
    title: "Service Limitations",
    icon: AlertTriangle,
    description: "We work hard to keep everything running smoothly, but availability and features may change over time.",
    bullets: [
      "Services may be unavailable due to maintenance, updates, outages, or third-party dependencies.",
      "Features may evolve as we improve products and infrastructure.",
      "You are responsible for verifying AI outputs when results could impact users, finances, or security.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    icon: Power,
    description: "We may suspend or terminate access if we believe there is a violation of this policy or harmful activity.",
    bullets: [
      "Violations or suspected abuse may result in suspension or termination.",
      "We will attempt to provide notice and an opportunity to resolve issues when appropriate.",
      "Contact support if you believe action was taken in error.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    description: "Questions about this policy or a potential edge case? Reach out and we will help you get it right.",
    bullets: [
      "Email support for policy questions or clarification.",
      "Use the contact form for project or service inquiries.",
      "Provide context and screenshots when relevant for faster review.",
    ],
    extra: (
      <div className="p-5 rounded-2xl glass-strong border border-border/50">
        <p className="text-sm text-muted-foreground m-0">
          Email:{" "}
          <a className="text-primary hover:text-accent transition-colors" href="mailto:clyrotech1@gmail.com">
            clyrotech1@gmail.com
          </a>
        </p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">
          Prefer a form?{" "}
          <Link className="text-primary hover:text-accent transition-colors" href="/contact">
            Contact us here
          </Link>
          .
        </p>
      </div>
    ),
  },
]

export default function UsagePolicyPage() {
  return (
    <LegalPageLayout
      badge="Usage Policy"
      title="Usage Policy"
      subtitle="Clear, practical guidelines for using our products, services, and automation responsibly."
      lastUpdated="February 2026"
      sections={sections}
      sidebarNote="This page is intended to be clear and practical. It does not replace professional legal advice."
    />
  )
}
