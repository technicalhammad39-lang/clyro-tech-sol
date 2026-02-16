import React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"

import "@/styles/globals.css"
import { RootShell } from "@/components/layout/root-shell"
import { Toaster } from "@/components/ui/sonner"
import { SITE_NAME, buildOrganizationSchema, buildWebsiteSchema, getSiteUrl } from "@/lib/seo"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clyrotechsol.site"),
  title: {
    default: "Clyro Tech Solutions | Premium AI Software & Development",
    template: "%s | Clyro Tech Solutions",
  },
  description:
    "Clyro Tech Solutions builds premium AI software, automation systems, and digital products ready to launch. From AI chatbot development to workflow automation, we ship fast and polish the details.",
  keywords: [
    "Clyro Tech Solutions",
    "Clyro Tech",
    "AI automation services",
    "workflow automation for businesses",
    "AI chatbot development for websites",
    "voice assistant development",
    "custom AI assistant for business",
    "electron desktop app development",
    "Gemini API integration services",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.clyrotechsol.site",
    siteName: SITE_NAME,
    title: "Clyro Tech Solutions | Premium AI Software & Development",
    description:
      "Premium AI software, apps & source code ready to launch. High-performance AI tools, SaaS products, websites, and custom development solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clyro Tech Solutions - Premium AI Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@clyrotech",
    creator: "@clyrotech",
    title: "Clyro Tech Solutions | Premium AI Software & Development",
    description:
      "Premium AI software, apps & source code ready to launch. High-performance AI tools, SaaS products, websites, and custom development solutions.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.clyrotechsol.site",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/clyro-official-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = buildOrganizationSchema()
  const websiteSchema = buildWebsiteSchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <RootShell>{children}</RootShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
