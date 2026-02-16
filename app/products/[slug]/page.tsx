import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ProductPageClient } from "./product-page-client"
import { getProductBySlug } from "@/lib/products"
import { JsonLd } from "@/components/seo/json-ld"
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildProductSchema,
  cleanText,
} from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return buildPageMetadata({
    title: product.name,
    description: cleanText(product.shortDescription || product.longDescription, 160),
    path: `/products/${product.slug}`,
    image: product.thumbnail || "/og-image.jpg",
  })
}

export default async function ProductPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams?: Record<string, string | string[] | undefined> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product || product.isPublished === false) notFound()
  const from = typeof searchParams?.from === "string" ? searchParams.from : undefined
  const url = absoluteUrl(`/products/${product.slug}`)

  const schema = [
    buildProductSchema(product, url),
    buildBreadcrumbSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Products", url: absoluteUrl("/products") },
      { name: product.name, url },
    ]),
  ]

  if (product.faq && product.faq.length > 0) {
    schema.push(buildFaqSchema(product.faq))
  }

  return (
    <>
      <JsonLd data={schema} />
      <ProductPageClient product={product} from={from} />
    </>
  )
}
