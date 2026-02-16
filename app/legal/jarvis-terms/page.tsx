import {
  AlertTriangle,
  Bot,
  Camera,
  Cpu,
  LifeBuoy,
  Mail,
  RefreshCcw,
  UserCheck,
} from "lucide-react"

import { LegalPageLayout, type LegalSection } from "@/components/legal/legal-page-layout"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Jarvis AI Terms & Conditions",
  description: "Terms and conditions specific to Jarvis AI Voice Assistant product.",
  path: "/legal/jarvis-terms",
})

const sections: LegalSection[] = [
  {
    id: "software-license",
    title: "Software License",
    icon: Cpu,
    description:
      "This agreement grants you a limited, non-exclusive license to use the Jarvis AI Voice Assistant software.",
    bullets: [
      "Install and use Jarvis on the number of devices specified in your plan.",
      "The software is licensed, not sold, and remains the property of Clyro Tech Solutions.",
      "Licenses are non-transferable without written permission.",
    ],
  },
  {
    id: "usage-responsibility",
    title: "Software Usage Responsibility",
    icon: UserCheck,
    description: "As a Jarvis user, you are responsible for the following:",
    bullets: [
      "Use the software in compliance with all applicable laws and regulations.",
      "Maintain the security and confidentiality of your installation credentials.",
      "Do not use Jarvis for illegal activities, hacking, or unauthorized system access.",
      "Ensure your system meets the minimum hardware and software requirements.",
    ],
  },
  {
    id: "automation-limitations",
    title: "AI Automation Limitations",
    icon: Bot,
    description: "Jarvis is an AI assistant and may not be 100% accurate in all scenarios.",
    bullets: [
      "Some applications or websites may not be compatible with automation features.",
      "Voice recognition accuracy depends on audio quality and environmental factors.",
      "AI responses are generated based on training data and may have limitations or biases.",
      "Clyro Tech Solutions is not liable for errors in automation or unexpected software behavior.",
    ],
  },
  {
    id: "privacy-consent",
    title: "Privacy & Camera Usage Consent",
    icon: Camera,
    description: "Jarvis includes camera and screen monitoring features that require your consent.",
    bullets: [
      "Camera access for security monitoring and object recognition.",
      "Screen capture and analysis for automating tasks on websites and applications.",
      "Audio recording for voice command processing (recordings are not stored permanently).",
      "You can disable camera and audio features at any time in settings.",
      "Privacy data is encrypted and not shared with third parties unless required by law.",
    ],
  },
  {
    id: "updates",
    title: "Feature Updates & Version Differences",
    icon: RefreshCcw,
    description: "Jarvis is available in multiple versions with different features and update policies.",
    bullets: [
      "Versions include Basic, Professional, and Enterprise tiers.",
      "Free updates include bug fixes and minor improvements.",
      "Major version upgrades may require additional purchase or subscription renewal.",
      "Feature availability depends on your plan and subscription status.",
      "Clyro Tech Solutions reserves the right to discontinue features with 30 days notice.",
    ],
  },
  {
    id: "refund-support",
    title: "Refund & Support Scope",
    icon: LifeBuoy,
    description: "Refunds and support are available within the scope defined below:",
    bullets: [
      "Refunds are available within 30 days of purchase if you are not satisfied.",
      "Support includes technical assistance for installation, setup, and troubleshooting.",
      "Premium support includes priority response and custom configuration assistance.",
      "Support does not cover issues caused by system incompatibility or user error.",
    ],
  },
  {
    id: "liability",
    title: "Liability Disclaimer",
    icon: AlertTriangle,
    description: 'Jarvis AI is provided "AS IS" without warranty.',
    bullets: [
      "Clyro Tech Solutions is not responsible for data loss or system damage.",
      "Always maintain backups before using automation features.",
      "Use Jarvis at your own risk for high-impact workflows.",
    ],
  },
  {
    id: "support-contact",
    title: "Support Contact",
    icon: Mail,
    description: "For Jarvis-specific support and questions, reach out to our team.",
    bullets: [
      "Email support for installation or troubleshooting questions.",
      "Include your license details for faster assistance.",
      "Support hours are Monday to Friday, 9 AM to 6 PM PKT.",
    ],
    extra: (
      <div className="p-5 rounded-2xl glass-strong border border-border/50">
        <p className="text-sm text-muted-foreground m-0">Email: clyrotech1@gmail.com</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Phone: +92 307 6924116</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Support Hours: 9 AM - 6 PM PKT, Monday - Friday</p>
      </div>
    ),
  },
]

export default function JarvisTermsPage() {
  return (
    <LegalPageLayout
      badge="Jarvis AI Terms"
      title="Jarvis AI - Terms & Conditions"
      subtitle="Product-specific terms for the Jarvis AI Voice Assistant software."
      lastUpdated="February 2026"
      sections={sections}
      sidebarNote="These product terms apply to Jarvis AI in addition to the general Terms & Conditions."
    />
  )
}
