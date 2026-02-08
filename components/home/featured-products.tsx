import FeaturedProductsClient from "@/components/products/featured-products-client"
import { getFeaturedProducts, getHotSellingProducts } from "@/lib/products"

export async function FeaturedProducts() {
  const featured = getFeaturedProducts()
  const hot = getHotSellingProducts()
  const display = Array.from(new Map([...featured, ...hot].map((p) => [p.id, p])).values()).slice(0, 4)

  return <FeaturedProductsClient products={display} />
}
