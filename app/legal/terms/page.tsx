import {
  AlertTriangle,
  FileText,
  Info,
  Mail,
  Power,
  RefreshCcw,
  Shield,
  ShieldCheck,
  UserCheck,
} from "lucide-react"

import { LegalPageLayout, type LegalSection } from "@/components/legal/legal-page-layout"

export const metadata = {
  title: "Terms & Conditions | Clyro Tech Solutions",
  description: "Terms and conditions for using Clyro Tech Solutions products and services.",
}

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: Info,
    description: "By accessing and using our products and services, you agree to these Terms & Conditions.",
    bullets: [
      "If you do not agree, you should not use this service.",
      "These terms apply to all visitors, users, and customers.",
      "Additional product-specific terms may also apply.",
    ],
  },
  {
    id: "license",
    title: "License Grant",
    icon: FileText,
    description: "We grant you a limited, non-exclusive, non-transferable license to use our products.",
    bullets: [
      "Use is permitted for personal or commercial purposes within the stated scope.",
      "You may not resell, sublicense, or distribute without permission.",
      "Access can be revoked if terms are violated.",
    ],
  },
  {
    id: "ip-rights",
    title: "Intellectual Property Rights",
    icon: ShieldCheck,
    description: "Content, features, and functionality are owned by Clyro Tech Solutions or licensors.",
    bullets: [
      "Materials are protected by copyright and other applicable laws.",
      "You may not copy or reproduce without written permission.",
      "Brand assets and trademarks require explicit approval for use.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    icon: UserCheck,
    description: "You agree to use our products responsibly and comply with all applicable laws.",
    bullets: [
      "Maintain the confidentiality of your account information.",
      "Do not use our products for illegal or unauthorized purposes.",
      "Comply with all applicable laws and regulations.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    icon: AlertTriangle,
    description: 'Our products are provided on an "AS IS" basis without warranties of any kind.',
    bullets: [
      "We do not warrant uninterrupted or error-free operation.",
      "We make no implied warranties of merchantability or fitness.",
      "You use the products at your own risk.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: Shield,
    description: "Clyro Tech Solutions is not liable for indirect or consequential damages.",
    bullets: [
      "We are not responsible for lost profits or data.",
      "Liability is limited to the maximum extent permitted by law.",
      "Claims must relate directly to use of our products or services.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    icon: Power,
    description: "We may suspend or terminate access at any time for any reason.",
    bullets: [
      "Accounts can be terminated with or without notice.",
      "Termination does not waive any rights or obligations.",
      "You remain responsible for any outstanding obligations.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: RefreshCcw,
    description: "We may modify these Terms & Conditions at any time.",
    bullets: [
      "Changes are effective upon posting to the website.",
      "Continued use after changes means acceptance.",
      "We encourage you to review the terms periodically.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: Mail,
    description: "If you have questions about these terms, contact us using the details below.",
    bullets: [
      "Email is the fastest way to reach our team.",
      "Include your name and order details if relevant.",
      "We may request verification to protect your account.",
    ],
    extra: (
      <div className="mt-2 p-5 rounded-2xl glass-strong border border-border/50">
        <p className="text-sm text-muted-foreground m-0">Email: clyrotech1@gmail.com</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Phone: +92 307 6924116</p>
        <p className="text-sm text-muted-foreground mt-2 mb-0">Location: Hasilpur, Punjab, Pakistan</p>
      </div>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      badge="Terms & Conditions"
      title="Terms & Conditions"
      subtitle="Clear terms for using Clyro Tech Solutions products, services, and digital assets."
      lastUpdated="February 2026"
      sections={sections}
      sidebarNote="These terms are provided for general guidance and do not replace legal advice."
    />
  )
}
