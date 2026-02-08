// Centralized product catalog for Clyro Tech Solutions.
// `lib/products.ts` is the single source of truth for ALL product data.

export type ProductType = "tool" | "level"

export type ProductBadge = "featured" | "popular" | "new" | "bestseller"

export interface Review {
  author: string
  rating: number
  text: string
  date: string
}

export type ProductPricing =
  | {
      kind: "single"
      usd: number
      pkr?: number
    }
  | {
      kind: "range"
      usd: { min: number; max: number }
      pkr?: { min: number; max: number }
    }

export interface Product {
  id: string
  slug: string
  type: ProductType
  aliases?: string[]
  badges?: ProductBadge[]
  name: string
  shortDescription: string
  longDescription: string
  thumbnail: string
  screenshots: string[]
  category: string
  techStack: string[]
  pricing: ProductPricing

  // Optional UI-driven fields (kept centralized here to avoid scattered product logic)
  demoVideoUrl?: string
  features?: string[]
  whatYouGet?: string[]
  reviews?: Review[]
  capabilities?: string[]
  isPublished?: boolean
}

const KEBAB_CASE_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function normalizeSlug(input?: string | string[] | null): string {
  const raw = Array.isArray(input) ? input.join("/") : input ?? ""
  const trimmed = raw.trim().toLowerCase()
  let decoded = trimmed
  try {
    decoded = decodeURIComponent(trimmed)
  } catch {
    decoded = trimmed
  }

  const withoutQuery = decoded.split("?")[0].split("#")[0]
  const hyphenated = withoutQuery.replace(/[\s_]+/g, "-").replace(/-+/g, "-")
  return hyphenated.replace(/^\/+|\/+$/g, "").replace(/^-+|-+$/g, "")
}

function buildProductAssets(slug: string, screenshotCount: number) {
  return {
    thumbnail: "/placeholder.svg",
    screenshots: Array.from({ length: screenshotCount }, (_, i) => `/products/${slug}/screenshot-${i + 1}.webp`),
  }
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-US")
}

export function formatUSD(pricing: ProductPricing): string {
  if (pricing.kind === "range") return `$${formatNumber(pricing.usd.min)}-$${formatNumber(pricing.usd.max)} USD`
  return `$${formatNumber(pricing.usd)} USD`
}

export function formatPKR(pricing: ProductPricing): string {
  if (!pricing.pkr) return ""
  if (pricing.kind === "range") return `Rs ${formatNumber(pricing.pkr.min)}-Rs ${formatNumber(pricing.pkr.max)} PKR`
  return `Rs ${formatNumber(pricing.pkr)} PKR`
}

export function formatPriceUSDCompact(pricing: ProductPricing): string {
  return formatUSD(pricing)
}

export function formatPriceUSDDetailed(pricing: ProductPricing): string {
  return formatUSD(pricing)
}

export function formatPricePKRCompact(pricing: ProductPricing): string {
  return formatPKR(pricing)
}

export function formatPricePKRDetailed(pricing: ProductPricing): string {
  return formatPKR(pricing)
}

export function getPriceUSDForSorting(pricing: ProductPricing): number {
  return pricing.kind === "range" ? pricing.usd.min : pricing.usd
}

export function getPricingUSDText(pricing: ProductPricing): string {
  return pricing.kind === "range" ? `${pricing.usd.min}-${pricing.usd.max}` : `${pricing.usd}`
}

export function getPricingPKRText(pricing: ProductPricing): string | undefined {
  if (!pricing.pkr) return undefined
  return pricing.kind === "range" ? `${pricing.pkr.min}-${pricing.pkr.max}` : `${pricing.pkr}`
}

export const products: Product[] = [
  {
    id: "jarvis-ai",
    slug: "jarvis-ai",
    aliases: ["jarvis", "jarvis_ai", "jarvis-ai-assistant"],
    type: "tool",
    badges: ["featured", "bestseller"],
    name: "Jarvis AI Voice Assistant",
    shortDescription:
      "24/7 voice-powered AI assistant that runs continuously on your computer. Control everything with voice commands — no clicking required.",
    longDescription:
      "Jarvis AI is an advanced voice-powered assistant that runs 24/7 on your computer without interruption. It's available in multiple versions designed for different needs and budgets. Whether you're a student automating your workflow, a business owner streamlining operations, or a professional looking for hands-free productivity, Jarvis adapts to your needs. Simply purchase the version that fits your requirements, and you'll receive exactly that version with its specific features.",
    ...buildProductAssets("jarvis-ai", 4),
    thumbnail: "/jarvis-ai.jpeg",
    category: "AI Tools",
    techStack: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "React", "WebSocket", "Node.js"],
    pricing: { kind: "range", usd: { min: 15, max: 279 }, pkr: { min: 3000, max: 51999 } },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: [
      "Voice control your entire computer — open apps, close programs, control everything",
      "Browser automation — open websites, manage tabs, automate tasks on any website",
      "WhatsApp automation — send messages and automate replies",
      "Reminders & scheduling — set reminders, notes, and manage your calendar",
      "File finder — search and locate any file across your entire system",
      "PC control — lock your computer, shut down, adjust volume and brightness",
      "Live camera monitoring — security monitoring and ask questions by showing objects to camera",
      "Smart home control — manage lights, fans, and other connected devices",
      "AI memory — learns from you and remembers conversations for better responses",
      "Visual explanations — understands things through diagrams and visual examples",
      "Advanced GUI — smooth animations and modern, sleek interface",
      "Live news display — stay updated with real-time news feed",
    ],
    whatYouGet: [
      "Full source code with documentation",
      "1 year of free updates",
      "Priority support",
      "Video tutorials & setup guide",
      "API documentation",
      "Commercial license",
      "White-label ready",
    ],
    capabilities: [
      "Complete hands-free computer control using only your voice",
      "Automates repetitive tasks — no manual work needed",
      "Works with any website or application installed on your PC",
      "Camera monitoring for home security and object recognition",
      "Intelligent memory — learns your preferences and habits",
      "Smart home integration — control IoT devices seamlessly",
      "Real-time responses without delays or interruptions",
      "Available in multiple versions for different user needs",
      "Perfect for students, business owners, and professionals",
    ],
    reviews: [
      {
        author: "Ali Hassan",
        rating: 5,
        text: "Best AI assistant I've ever used. Jarvis changed how I work. Highly recommended!",
        date: "2024-02-01",
      },
      {
        author: "Sarah Khan",
        rating: 5,
        text: "Incredible voice control capabilities. Works perfectly with my smart home setup.",
        date: "2024-01-28",
      },
      {
        author: "Muhammad Ahmed",
        rating: 4,
        text: "Great product. Some features need refinement, but overall excellent value.",
        date: "2024-01-25",
      },
    ],
  },
  {
    id: "ai-chatbot",
    slug: "ai-chatbot",
    type: "tool",
    badges: ["popular"],
    name: "AI Chatbot Pro",
    shortDescription: "Enterprise-grade conversational AI with custom training capabilities",
    longDescription:
      "Build intelligent chatbots that understand context and provide human-like responses. Perfect for customer service, lead generation, and user engagement.",
    ...buildProductAssets("ai-chatbot", 2),
    thumbnail: "/ai-chatbot.jpeg",
    category: "AI Tools",
    techStack: ["Next.js", "OpenAI API", "PostgreSQL", "Redis", "TypeScript"],
    pricing: { kind: "single", usd: 30, pkr: 8999 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: ["Custom Knowledge Base", "Multi-language Support", "API Integration", "Chat Analytics", "User Management", "Export Conversations"],
    whatYouGet: ["Full source code", "3 months free updates", "Email support", "Setup guide"],
  },
  {
    id: "ai-image-gen",
    slug: "ai-image-gen",
    type: "tool",
    badges: ["featured"],
    name: "Vision Studio",
    shortDescription: "Advanced image generation and manipulation powered by AI",
    longDescription:
      "Create stunning AI-generated images from text prompts. Includes image enhancement, style transfer, and batch processing capabilities.",
    ...buildProductAssets("ai-image-gen", 2),
    thumbnail: "/vision-studio.jpeg",
    category: "AI Tools",
    techStack: ["Python", "Stable Diffusion", "FastAPI", "React", "CUDA"],
    pricing: { kind: "single", usd: 60, pkr: 17999 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: [
      "Text-to-Image Generation",
      "Image Enhancement",
      "Style Transfer",
      "Batch Processing",
      "API Access",
      "High-resolution Output",
    ],
    whatYouGet: ["Full source code", "1 year updates", "Priority support", "API documentation"],
  },
  {
    id: "ai-document",
    slug: "ai-document",
    type: "tool",
    badges: ["popular"],
    name: "DocuMind AI",
    shortDescription: "Intelligent document processing with OCR and semantic analysis",
    longDescription:
      "Automatically extract, classify, and summarize documents using advanced AI. Perfect for data entry automation and document management.",
    ...buildProductAssets("ai-document", 2),
    thumbnail: "/documind-ai.png",
    category: "AI Tools",
    techStack: ["Python", "Tesseract OCR", "OpenAI", "FastAPI", "React"],
    pricing: { kind: "single", usd: 99, pkr: 25800 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: ["Smart Extraction", "Auto Classification", "Summary Generation", "Multi-format Support", "Batch Processing", "Webhook Integration"],
    whatYouGet: ["Full source code", "1 year updates", "Setup assistance", "API keys"],
  },
  {
    id: "ai-code",
    slug: "ai-code",
    type: "tool",
    name: "CodePilot",
    shortDescription: "AI-powered code generation, review, and optimization assistant",
    longDescription:
      "Let AI help you write better code faster. Get AI-powered code suggestions, bug detection, and refactoring recommendations.",
    ...buildProductAssets("ai-code", 2),
    thumbnail: "/codepilot.jpg",
    category: "AI Tools",
    techStack: ["Python", "GPT-4", "VS Code Extension", "TypeScript", "Node.js"],
    pricing: { kind: "single", usd: 199, pkr: 59000 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: ["Code Generation", "Bug Detection", "Refactoring Suggestions", "Performance Analysis", "IDE Integration", "Team Collaboration"],
    whatYouGet: ["Extension + source code", "Lifetime updates", "Priority support", "Training videos"],
  },
  {
    id: "saas-dashboard",
    slug: "saas-dashboard",
    type: "tool",
    badges: ["featured"],
    name: "SaaS Dashboard Kit",
    shortDescription: "Complete SaaS starter with authentication, billing, and analytics",
    longDescription:
      "Launch your SaaS product in days. This kit includes everything: multi-tenant architecture, subscription billing, user management, and analytics dashboard.",
    ...buildProductAssets("saas-dashboard", 2),
    thumbnail: "/saascard.avif",
    category: "SaaS",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    pricing: { kind: "single", usd: 110, pkr: 31000 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: [
      "Multi-tenant Architecture",
      "Stripe Billing",
      "User Authentication",
      "Team Management",
      "Analytics Dashboard",
      "Email Notifications",
    ],
    whatYouGet: ["Full source code", "1 year updates", "Setup guide", "Video tutorials"],
  },
  {
    id: "trading-bot",
    slug: "trading-bot",
    type: "tool",
    badges: ["popular"],
    name: "AI Trading Bot",
    shortDescription: "Automated cryptocurrency trading with machine learning predictions",
    longDescription:
      "Trade crypto 24/7 with AI-powered predictions and risk management. Includes backtesting, portfolio management, and real-time alerts.",
    ...buildProductAssets("trading-bot", 2),
    thumbnail: "/ai-trading-bot.jpg",
    category: "Trading",
    techStack: ["Python", "TensorFlow", "TradingView API", "FastAPI", "React"],
    pricing: { kind: "single", usd: 500, pkr: 140500 },
    demoVideoUrl: "https://www.youtube.com/embed/Mc2_eJDTQRo",
    features: ["ML Price Predictions", "Auto Trading", "Risk Management", "Portfolio Tracking", "Backtesting", "Email Alerts"],
    whatYouGet: ["Full source code", "API credentials", "1 year updates", "Support"],
  },
]

export function getProductBadges(product: Product): ProductBadge[] {
  return product.badges ?? []
}

export function hasProductBadge(product: Product, badge: ProductBadge): boolean {
  return getProductBadges(product).includes(badge)
}

function buildSlugIndex() {
  const index = new Map<string, Product>()

  if (process.env.NODE_ENV !== "production") {
    const errors: string[] = []
    const warnings: string[] = []

    for (const product of products) {
      if (!product.slug || !product.slug.trim()) {
        errors.push(`[${product.id}] slug is missing or empty`)
        continue
      }

      const normalizedSlug = normalizeSlug(product.slug)
      if (!normalizedSlug) {
        errors.push(`[${product.id}] slug "${product.slug}" normalizes to empty`)
      }

      if (product.slug !== normalizedSlug) {
        errors.push(`[${product.id}] slug "${product.slug}" should be normalized as "${normalizedSlug}"`)
      }

      if (!KEBAB_CASE_REGEX.test(product.slug)) {
        errors.push(`[${product.id}] slug "${product.slug}" is not kebab-case`)
      }

      const existing = index.get(normalizedSlug)
      if (existing && existing.id !== product.id) {
        errors.push(`Duplicate slug "${normalizedSlug}" for "${existing.id}" and "${product.id}"`)
      } else if (normalizedSlug) {
        index.set(normalizedSlug, product)
      }

      for (const alias of product.aliases ?? []) {
        if (!alias || !alias.trim()) {
          errors.push(`[${product.id}] alias is empty`)
          continue
        }
        const normalizedAlias = normalizeSlug(alias)
        if (!normalizedAlias) {
          errors.push(`[${product.id}] alias "${alias}" normalizes to empty`)
          continue
        }
        if (alias !== normalizedAlias && !KEBAB_CASE_REGEX.test(alias)) {
          warnings.push(`[${product.id}] alias "${alias}" is not kebab-case; normalizes to "${normalizedAlias}"`)
        }
        const aliasExisting = index.get(normalizedAlias)
        if (aliasExisting && aliasExisting.id !== product.id) {
          errors.push(`Duplicate alias "${normalizedAlias}" for "${aliasExisting.id}" and "${product.id}"`)
        } else {
          index.set(normalizedAlias, product)
        }
      }
    }

    if (warnings.length > 0) {
      console.warn("Product slug warnings:\n" + warnings.join("\n"))
    }

    if (errors.length > 0) {
      console.error("Product slug validation failed:\n" + errors.join("\n"))
      throw new Error("Invalid product slugs detected")
    }
  } else {
    for (const product of products) {
      index.set(normalizeSlug(product.slug), product)
      for (const alias of product.aliases ?? []) {
        const normalizedAlias = normalizeSlug(alias)
        if (normalizedAlias) index.set(normalizedAlias, product)
      }
    }
  }

  return index
}

export const slugIndex = buildSlugIndex()
export const productsBySlug = slugIndex
export const productsById = new Map(products.map((product) => [product.id, product]))

// Backwards-compatible alias (prefer importing `products` moving forward)
export const allProducts = products

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return slugIndex.get(normalizeSlug(slug))
}

export function getProductById(id: string): Product | undefined {
  return productsById.get(id)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => hasProductBadge(p, "featured"))
}

export function getHotSellingProducts(): Product[] {
  return products.filter((p) => hasProductBadge(p, "popular") || hasProductBadge(p, "bestseller"))
}
