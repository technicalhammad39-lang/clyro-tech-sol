"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import type { Product } from "@/lib/products"
import { formatPricePKRCompact, formatPriceUSDCompact } from "@/lib/products"
import { ProductBadges } from "@/components/products/product-badges"
import { ProductImage } from "@/components/ui/product-image"

interface FeaturedProductsClientProps {
  products: Product[]
}

export default function FeaturedProductsClient({ products }: FeaturedProductsClientProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs text-primary font-medium mb-3">Featured Products</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            <span className="text-balance">
              Premium Products Ready to
              <span className="gradient-text"> Launch</span>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">Production-ready software solutions with source code and documentation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} reduceMotion={reduceMotion} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass hover:bg-secondary/50 transition-all text-sm font-medium group">
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, reduceMotion }: { product: Product; reduceMotion: boolean }) {
  const priceUSDDisplay = formatPriceUSDCompact(product.pricing)
  const pricePKRDisplay = formatPricePKRCompact(product.pricing)

  return (
    <Link href={`/products/${product.slug}?from=home`}>
      <motion.div
        className="group h-full rounded-2xl glass-card hover-gradient-border hover-lift overflow-hidden flex flex-col cursor-pointer"
        whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10">
          <ProductImage
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <ProductBadges badges={product.badges} className="absolute top-2 left-2" />

          {product.demoVideoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col p-4">
          <h3 className="font-bold text-foreground text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-1 flex-1">{product.shortDescription.split(".")[0]}</p>
          <div className="pt-3 border-t border-border/50">
            <div className="font-bold gradient-text text-sm">{priceUSDDisplay}</div>
            <div className="text-sm text-muted-foreground">{pricePKRDisplay}</div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
