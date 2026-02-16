import type { MetadataRoute } from "next"
import { products } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.clyrotechsol.site"

  const staticRoutes = [
    "/products",
    "/ai-lab",
    "/team",
    "/terms",
    "/privacy",
    "/contact",
    "/services",
    "/services/ai-chatbot-development",
    "/services/ai-automation",
    "/services/voice-assistants",
    "/services/graphic-design",
    "/usage-policy",
    "/legal/refund",
    "/legal/jarvis-terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  const productRoutes = products
    .filter((product) => product.isPublished !== false)
    .map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: new Date(),
    }))

  const allRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...staticRoutes,
    ...productRoutes,
  ]

  return allRoutes
}
