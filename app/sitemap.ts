import type { MetadataRoute } from "next"
import { products as productCatalog } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clyrotechsol.site"

  // Static pages
  const staticPages = [
    "",
    "/products",
    "/services",
    "/ai-lab",
    "/custom-project",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog posts - In production, fetch from CMS/database
  const blogPosts = [
    "building-scalable-saas-applications",
    "ai-integration-best-practices",
    "choosing-tech-stack-2024",
    "monetization-strategies-saas",
    "api-design-principles",
    "future-of-no-code-ai",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const products = productCatalog.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts, ...products]
}

