import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="text-sm text-muted-foreground mb-6">This product doesn&apos;t exist or has been moved.</p>
          <Link href="/products" className="inline-block px-6 py-2.5 rounded-full gradient-bg text-foreground text-sm">
            Browse products
          </Link>
        </div>
      </div>
    </main>
  )
}

