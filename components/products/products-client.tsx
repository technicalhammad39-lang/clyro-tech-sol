"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Play, Search, SlidersHorizontal, X } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"
import { formatPricePKRCompact, formatPriceUSDCompact, getPriceUSDForSorting, getProductBadges } from "@/lib/products"
import { ProductBadges } from "@/components/products/product-badges"
import { TypingText } from "@/components/ui/typing-text"
import { ProductImage } from "@/components/ui/product-image"

interface ProductsClientProps {
  products: Product[]
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const reduceMotion = useReducedMotion()
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category))).sort()], [products])
  const techStacks = useMemo(() => Array.from(new Set(products.flatMap((p) => p.techStack))).sort(), [products])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"featured" | "price" | "newest">("featured")
  const [showFilters, setShowFilters] = useState(false)

  const getFeaturedSortRank = (product: Product) => {
    const badges = getProductBadges(product)
    if (badges.includes("featured")) return 0
    if (badges.includes("bestseller")) return 1
    if (badges.includes("popular")) return 2
    if (badges.includes("new")) return 3
    return 4
  }

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch = selectedCategory === "All" || selectedCategory === product.category
      const query = searchQuery.toLowerCase()
      const searchMatch =
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.longDescription.toLowerCase().includes(query)
      const techMatch =
        selectedTechStack.length === 0 || selectedTechStack.every((tech) => product.techStack.includes(tech))

      return categoryMatch && searchMatch && techMatch
    })
    .sort((a, b) => {
      if (sortBy === "featured") return getFeaturedSortRank(a) - getFeaturedSortRank(b)
      if (sortBy === "price") return getPriceUSDForSorting(a.pricing) - getPriceUSDForSorting(b.pricing)
      return 0
    })

  const toggleTechStack = (tech: string) => {
    setSelectedTechStack((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedTechStack([])
    setSearchQuery("")
  }

  const hasActiveFilters = selectedTechStack.length > 0 || selectedCategory !== "All" || searchQuery.trim().length > 0

  return (
    <main className="min-h-screen pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">
          <TypingText text="Clyro Products & Solutions" speed={45} delay={0} loop={false} className="gradient-text" />
        </h1>
        <p className="text-muted-foreground">Production-ready AI tools & software solutions</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg glass">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery("")} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors",
              showFilters || hasActiveFilters ? "gradient-bg text-foreground" : "glass hover:bg-secondary/50 text-muted-foreground"
            )}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && !showFilters && (
              <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-xs">
                {selectedTechStack.length + (selectedCategory !== "All" ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-4 rounded-lg glass-strong space-y-4 animate-fade-up">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Category</span>
                {hasActiveFilters && (
                  <button type="button" onClick={clearFilters} className="text-xs text-primary hover:text-accent">
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                      selectedCategory === category ? "gradient-bg text-foreground" : "glass hover:bg-secondary/50 text-muted-foreground"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-foreground block mb-3">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {techStacks.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggleTechStack(tech)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                      selectedTechStack.includes(tech) ? "gradient-bg text-foreground" : "glass hover:bg-secondary/50 text-muted-foreground"
                    )}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-foreground block mb-3">Sort by</span>
              <div className="flex flex-wrap gap-2">
                {(["featured", "price", "newest"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSortBy(option)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                      sortBy === option ? "gradient-bg text-foreground" : "glass hover:bg-secondary/50 text-muted-foreground"
                    )}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-bold mb-2">No products found</h2>
            <p className="text-sm text-muted-foreground mb-6">Try adjusting your filters</p>
            <button type="button" onClick={clearFilters} className="px-6 py-2 rounded-full gradient-bg text-foreground font-medium text-sm">
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} source="products" reduceMotion={reduceMotion} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

interface ProductCardProps {
  product: Product
  source: "products" | "ai-lab"
  reduceMotion: boolean
}

function ProductCard({ product, source, reduceMotion }: ProductCardProps) {
  const priceUSDDisplay = formatPriceUSDCompact(product.pricing)
  const pricePKRDisplay = formatPricePKRCompact(product.pricing)

  return (
    <Link href={`/products/${product.slug}?from=${source}`}>
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
          <h3 className="font-bold text-foreground text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-muted-foreground mb-3 line-clamp-1 flex-1">
            {product.shortDescription.split(".")[0]}
          </p>

          <div className="pt-3 border-t border-border/50">
            <div className="font-bold gradient-text text-sm">{priceUSDDisplay}</div>
            <div className="text-sm text-muted-foreground">{pricePKRDisplay}</div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
