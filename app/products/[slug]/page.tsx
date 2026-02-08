import { notFound } from "next/navigation"

import { ProductPageClient } from "./product-page-client"
import { getProductBySlug } from "@/lib/products"

export default async function ProductPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams?: Record<string, string | string[] | undefined> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product || product.isPublished === false) notFound()
  const from = typeof searchParams?.from === "string" ? searchParams.from : undefined

  return <ProductPageClient product={product} from={from} />
}
