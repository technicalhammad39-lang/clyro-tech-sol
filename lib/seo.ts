import type { Metadata } from "next"
import type { Product, ProductFAQ, ProductPricing } from "@/lib/products"

export const SITE_NAME = "Clyro Tech Solutions"
export const SITE_URL = "https://www.clyrotechsol.site"
export const TITLE_SEPARATOR = " \u2014 "

export function getSiteUrl() {
  if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
    return SITE_URL
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString()
}

export function cleanText(text: string, max = 160) {
  return text.replace(/\s+/g, " ").trim().slice(0, max)
}

function buildFullTitle(title: string) {
  if (!title) return SITE_NAME
  if (title.includes(SITE_NAME)) return title
  return `${title}${TITLE_SEPARATOR}${SITE_NAME}`
}

export function buildPageMetadata(options: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const imageUrl = options.image ? absoluteUrl(options.image) : absoluteUrl("/og-image.jpg")
  const fullTitle = buildFullTitle(options.title)

  return {
    title: {
      absolute: fullTitle,
    },
    description: options.description,
    alternates: {
      canonical: absoluteUrl(options.path),
    },
    openGraph: {
      title: fullTitle,
      description: options.description,
      url: absoluteUrl(options.path),
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: options.description,
      images: [imageUrl],
    },
  }
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://www.clyrotechsol.site",
    logo: `https://www.clyrotechsol.site/clyro-official-logo.png`,
    sameAs: [],
  }
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: "https://www.clyrotechsol.site",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://www.clyrotechsol.site/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

function buildOffer(pricing: ProductPricing, currency: "USD" | "PKR") {
  if (pricing.kind === "range") {
    const range = currency === "USD" ? pricing.usd : pricing.pkr
    if (!range) return null
    return {
      "@type": "AggregateOffer",
      priceCurrency: currency,
      lowPrice: range.min,
      highPrice: range.max,
    }
  }
  const price = currency === "USD" ? pricing.usd : pricing.pkr
  if (!price) return null
  return {
    "@type": "Offer",
    priceCurrency: currency,
    price,
  }
}

export function buildProductSchema(product: Product, url: string) {
  const offers = [buildOffer(product.pricing, "USD"), buildOffer(product.pricing, "PKR")].filter(Boolean)

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: cleanText(product.shortDescription || product.longDescription, 200),
    image: [absoluteUrl(product.thumbnail || "/og-image.jpg")],
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    sku: product.id,
    url,
    ...(offers.length > 0 ? { offers } : {}),
  }
}

export function buildFaqSchema(faqItems: ProductFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
