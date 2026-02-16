import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.clyrotechsol.site"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/ctsadmin/", "/drafts/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
