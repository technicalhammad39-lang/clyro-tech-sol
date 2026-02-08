import React from "react"
import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"
import { RootShell } from "@/components/layout/root-shell"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  metadataBase: new URL("https://clyrotechsol.site"),
  title: {
    default: "Clyro Tech Solutions | Premium AI Software & Development",
    template: "%s | Clyro Tech Solutions",
  },
  description:
    "Clyro Tech Solutions delivers premium AI software, apps & source code ready to launch. Expert AI development, SaaS products, custom web & mobile app development.",
  keywords: [
    "Clyro Tech Solutions",
    "Clyro Tech",
    "AI software development",
    "SaaS development company",
    "custom software development",
    "AI tools",
    "web development",
    "mobile app development",
    "source code marketplace",
    "premium software solutions",
  ],
  authors: [{ name: "Clyro Tech Solutions" }],
  creator: "Clyro Tech Solutions",
  publisher: "Clyro Tech Solutions",
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
    url: "https://clyrotechsol.site",
    siteName: "Clyro Tech Solutions",
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
    canonical: "https://clyrotechsol.site",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clyro Tech Solutions",
    alternateName: "Clyro Tech",
    url: "https://clyrotechsol.site",
    logo: "https://clyrotechsol.site/clyro-official-logo.png",
    description:
      "Premium AI software development company specializing in SaaS products, custom web and mobile applications, and AI-powered solutions.",
    email: "clyrotech1@gmail.com",
    sameAs: [
      "https://x.com/clyrotech",
      "https://youtube.com/@clyrotechsolutions",
      "https://instagram.com/clyrotechpk",
      "https://facebook.com/clyrotech",
    ],
    address: {
      "@type": "Hasilpur, Punjab",
      addressCountry: "Pakistan",
    },
    founder: {
      "@type": "Organization",
      name: "Clyro Tech Solutions",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Clyro Tech Solutions",
    url: "https://clyrotechsol.site",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://clyrotechsol.site/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

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
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <RootShell>{children}</RootShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
