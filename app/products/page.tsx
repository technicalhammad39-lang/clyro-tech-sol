import ProductsClient from "@/components/products/products-client"
import { products } from "@/lib/products"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Products",
  description:
    "Explore premium AI tools, automation software, and SaaS starters built by Clyro Tech Solutions.",
  path: "/products",
})

export default async function ProductsPage() {
  return <ProductsClient products={products} />
}
