import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Clyro Tech Solutions - AI Software Insights & Tutorials",
  description:
    "Stay updated with the latest insights on AI software development, SaaS trends, web development tutorials, and tech industry news from Clyro Tech Solutions.",
  keywords: [
    "Clyro Tech blog",
    "AI software development",
    "SaaS development",
    "web development tutorials",
    "tech industry insights",
    "software engineering blog",
  ],
  openGraph: {
    title: "Blog | Clyro Tech Solutions - AI Software Insights & Tutorials",
    description:
      "Stay updated with the latest insights on AI software development, SaaS trends, web development tutorials, and tech industry news.",
    type: "website",
  },
}

// Sample blog posts data - In production, this would come from a CMS or database
const blogPosts = [
  {
    id: "building-scalable-saas-applications",
    title: "Building Scalable SaaS Applications with Modern AI",
    excerpt:
      "Learn how to architect and build production-ready SaaS applications that scale seamlessly using cutting-edge AI technologies and best practices.",
    category: "Development",
    date: "2024-02-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    author: "Clyro Tech Team",
  },
  {
    id: "ai-integration-best-practices",
    title: "AI Integration Best Practices for Web Applications",
    excerpt:
      "Discover proven strategies and patterns for integrating AI capabilities into your web applications without compromising performance or user experience.",
    category: "AI",
    date: "2024-02-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Clyro Tech Team",
  },
  {
    id: "choosing-tech-stack-2024",
    title: "Choosing the Right Tech Stack for Your SaaS in 2024",
    excerpt:
      "A comprehensive guide to selecting the perfect technology stack for your SaaS product, covering frameworks, databases, and deployment strategies.",
    category: "Technology",
    date: "2024-02-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    author: "Clyro Tech Team",
  },
  {
    id: "monetization-strategies-saas",
    title: "Effective Monetization Strategies for SaaS Products",
    excerpt:
      "Explore different pricing models, billing strategies, and revenue optimization techniques that work for modern SaaS businesses.",
    category: "Business",
    date: "2024-01-30",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    author: "Clyro Tech Team",
  },
  {
    id: "api-design-principles",
    title: "API Design Principles for Developer-Friendly Products",
    excerpt:
      "Master the art of designing intuitive, scalable, and developer-friendly APIs that your users will love to integrate with.",
    category: "Development",
    date: "2024-01-25",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: "Clyro Tech Team",
  },
  {
    id: "future-of-no-code-ai",
    title: "The Future of No-Code AI Tools in Software Development",
    excerpt:
      "Examine how no-code AI platforms are democratizing software development and what it means for developers and businesses.",
    category: "AI",
    date: "2024-01-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    author: "Clyro Tech Team",
  },
]

const categories = ["All", "Development", "AI", "Technology", "Business"]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            <span className="text-foreground">Clyro Tech </span>
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up delay-100 leading-relaxed">
            Insights, tutorials, and stories about AI software development, SaaS products, and the
            future of technology.
          </p>

          {/* Search Bar */}
          <div className="relative animate-fade-up delay-200">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl glass border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 animate-fade-up ${
                index === 0
                  ? "gradient-bg text-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group glass rounded-2xl overflow-hidden hover-gradient-border transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.id}`} className="block">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass text-xs font-medium text-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            type="button"
            className="px-4 py-2 rounded-lg glass text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Previous
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-lg gradient-bg text-sm font-medium text-foreground"
          >
            1
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-lg glass text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            2
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-lg glass text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            3
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg glass text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Next
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="glass rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our premium products or start a custom project with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="group relative px-8 py-3 rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 gradient-bg" />
                <span className="relative flex items-center gap-2 text-foreground font-medium">
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/custom-project"
                className="px-8 py-3 rounded-full glass hover:bg-secondary/50 transition-all duration-300 text-foreground font-medium"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
