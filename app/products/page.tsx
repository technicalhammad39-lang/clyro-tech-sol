import ProductsClient from "@/components/products/products-client"
import { products } from "@/lib/products"

export default async function ProductsPage() {
  return <ProductsClient products={products} />
}
