import type { LucideIcon } from "lucide-react"
import { Crown, Sparkles, Star, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ProductBadge } from "@/lib/products"

type ProductBadgeDefinition = {
  label: string
  Icon: LucideIcon
  className: string
  priority: number
}

const PRODUCT_BADGE_DEFINITIONS: Record<ProductBadge, ProductBadgeDefinition> = {
  featured: {
    label: "Featured",
    Icon: Star,
    className: "border-transparent bg-gradient-to-r from-primary/90 to-accent/90 text-foreground",
    priority: 0,
  },
  bestseller: {
    label: "Best Seller",
    Icon: Crown,
    className: "border-orange-500/30 bg-orange-500/15 text-orange-300",
    priority: 1,
  },
  popular: {
    label: "Popular",
    Icon: TrendingUp,
    className: "border-primary/30 bg-primary/15 text-primary",
    priority: 2,
  },
  new: {
    label: "New",
    Icon: Sparkles,
    className: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
    priority: 3,
  },
}

export function getProductBadgeDefinition(badge: ProductBadge): ProductBadgeDefinition {
  return PRODUCT_BADGE_DEFINITIONS[badge]
}

export function sortProductBadges(badges: ProductBadge[]): ProductBadge[] {
  return [...new Set(badges)].sort(
    (a, b) => getProductBadgeDefinition(a).priority - getProductBadgeDefinition(b).priority
  )
}

export function ProductBadgePill({
  badge,
  className,
}: {
  badge: ProductBadge
  className?: string
}) {
  const definition = getProductBadgeDefinition(badge)
  const Icon = definition.Icon

  return (
    <Badge
      className={cn(
        "gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm",
        definition.className,
        className
      )}
    >
      <Icon className="h-3 w-3" aria-hidden="true" />
      {definition.label}
    </Badge>
  )
}

export function ProductBadges({
  badges,
  className,
  max,
  orientation = "column",
}: {
  badges?: ProductBadge[]
  className?: string
  max?: number
  orientation?: "row" | "column"
}) {
  const sortedBadges = sortProductBadges(badges ?? [])
  const displayBadges = typeof max === "number" ? sortedBadges.slice(0, max) : sortedBadges
  if (displayBadges.length === 0) return null

  return (
    <div
      className={cn(
        orientation === "row" ? "flex flex-wrap items-center gap-2" : "flex flex-col items-start gap-1",
        className
      )}
    >
      {displayBadges.map((badge) => (
        <ProductBadgePill key={badge} badge={badge} />
      ))}
    </div>
  )
}

