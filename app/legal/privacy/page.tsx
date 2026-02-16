import {
  Cookie,
  Database,
  Info,
  Lock,
  Mail,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react"

import { LegalPageLayout, type LegalSection } from "@/components/legal/legal-page-layout"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy outlining how Clyro Tech Solutions collects and uses your data.",
  path: "/privacy",
})

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Info,
    description:
      "Clyro Tech Solutions is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information.",
    bullets: [
      "Applies to our website, products, and services.",
      "Explains what data we collect and why.",
      "Describes your choices and how to contact us.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    description: "We may collect information in a variety of ways, including the following categories:",
    bullets: [
      "Personal data such as name, email address, phone number, and billing details.",
      "Device information like browser type, IP address, and device identifiers.",
      "Usage data including pages visited, time spent, and features used.",
    ],
  },
  {
    id: "use-of-information",
    title: "Use of Your Information",
    icon: Sparkles,
    description:
      "We use the information we collect to provide a smooth, efficient, and customized experience.",
    bullets: [
      "Process transactions and send related information.",
      "Email you regarding your order or product.",
      "Fulfill and manage purchases, orders, payments, and transactions.",
      "Improve site performance, product quality, and customer experience.",
      "Maintain internal records for support and service delivery.",
    ],
  },
  {
    id: "disclosure",
    title: "Disclosure of Your Information",
    icon: Users,
    description:
      "We may share information with trusted third parties who perform services for us, such as payment processors and hosting providers.",
    bullets: [
      "We do not sell or trade your personally identifiable information.",
      "We may share data to provide services, support, and infrastructure.",
      "We may disclose information when required by law or to protect rights and safety.",
    ],
  },
  {
    id: "security",
    title: "Security of Your Information",
    icon: Lock,
    description: "We use administrative, technical, and physical safeguards to protect your information.",
    bullets: [
      "We use reasonable security measures to protect data.",
      "No method of transmission or storage is 100% secure.",
      "You should protect your credentials and devices.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: Cookie,
    description: "We may use cookies and similar technologies to improve your experience.",
    bullets: [
      "Cookies help us understand how you use our services.",
      "You can control cookie preferences through your browser settings.",
      "Some features may not function properly without cookies.",
    ],
  },
  {
    id: "privacy-rights",
    title: "Your Privacy Rights",
    icon: UserCheck,
    description: "You may have certain rights related to your personal data, depending on your location.",
    bullets: [
      "Right to access your personal information.",
      "Right to correct or update your information.",
      "Right to request deletion of your information.",
      "Right to opt out of certain data uses.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    description: "Questions about privacy or data handling? Contact us for help or clarification.",
    bullets: [
      "Email us with questions about data access or deletion.",
      "Provide context so we can respond quickly.",
      "We may request verification to protect your privacy.",
    ],
    extra: (
      <div className="p-5 rounded-2xl glass-strong border border-border/50">
        <p className="text-sm text-muted-foreground m-0">Email: clyrotech1@gmail.com</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Phone: +92 307 6924116</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Location: Hasilpur, Punjab, Pakistan</p>
      </div>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      badge="Privacy Policy"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect information when you use Clyro Tech Solutions."
      lastUpdated="February 2026"
      sections={sections}
      sidebarNote="If you need a data processing addendum or project-specific terms, contact us."
    />
  )
}
