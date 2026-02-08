import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  // In production, fetch blog data based on slug
  return {
    title: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} | Clyro Tech Blog`,
    description:
      "Learn about AI software development, SaaS best practices, and cutting-edge technology insights from Clyro Tech Solutions.",
    keywords: [
      "Clyro Tech",
      "AI development",
      "SaaS tutorial",
      "software engineering",
      slug.replace(/-/g, " "),
    ],
    openGraph: {
      type: "article",
      publishedTime: "2024-02-15T00:00:00.000Z",
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  // Sample blog post data - In production, fetch from CMS or database
  const post = {
    title: "Building Scalable SaaS Applications with Modern AI",
    excerpt:
      "Learn how to architect and build production-ready SaaS applications that scale seamlessly using cutting-edge AI technologies and best practices.",
    category: "Development",
    date: "2024-02-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    author: "Clyro Tech Team",
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6">
        {/* Category */}
        <div className="mb-6 animate-fade-up">
          <span className="inline-flex px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 animate-fade-up delay-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">C</span>
            </div>
            <span className="text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <button
            type="button"
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-secondary/50 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 animate-fade-up delay-300">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Table of Contents */}
        <div className="glass rounded-2xl p-6 mb-12 animate-fade-up delay-400">
          <h2 className="text-lg font-bold text-foreground mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a
              href="#introduction"
              className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
            >
              1. Introduction to Scalable SaaS Architecture
            </a>
            <a
              href="#ai-integration"
              className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
            >
              2. Integrating AI into Your Application
            </a>
            <a
              href="#database-design"
              className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
            >
              3. Database Design for Scale
            </a>
            <a
              href="#performance"
              className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
            >
              4. Performance Optimization Strategies
            </a>
            <a
              href="#conclusion"
              className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
            >
              5. Conclusion and Next Steps
            </a>
          </nav>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none animate-fade-up delay-500">
          <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-foreground mb-4 scroll-mt-24">
            Introduction to Scalable SaaS Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Building a scalable SaaS application requires careful planning and architectural
            decisions from day one. In this comprehensive guide, we'll explore the best practices
            and patterns that have proven successful for companies scaling from zero to millions of
            users.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Modern SaaS applications need to handle increasing loads gracefully while maintaining
            performance and reliability. This means thinking beyond just the initial launch and
            planning for growth at every layer of your application stack.
          </p>

          <h2 id="ai-integration" className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12 scroll-mt-24">
            Integrating AI into Your Application
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Artificial Intelligence has become a crucial differentiator for modern SaaS products.
            Whether it's automating customer support, providing intelligent recommendations, or
            analyzing data patterns, AI can significantly enhance user experience and operational
            efficiency.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The key is to integrate AI capabilities in a way that adds genuine value without
            compromising performance or user privacy. Here are some strategies we recommend:
          </p>
          <ul className="space-y-3 mb-6 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Use serverless functions for AI processing to scale automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Implement caching strategies to reduce API calls and improve response times</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Choose the right AI models based on your specific use case and requirements</span>
            </li>
          </ul>

          <h2 id="database-design" className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12 scroll-mt-24">
            Database Design for Scale
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your database architecture is the foundation of your SaaS application's scalability.
            Poor database design can become a bottleneck that limits growth and causes performance
            issues as your user base expands.
          </p>

          <h2 id="performance" className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12 scroll-mt-24">
            Performance Optimization Strategies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Performance optimization is an ongoing process that requires continuous monitoring and
            refinement. Start with these proven strategies to ensure your application remains fast
            and responsive at scale.
          </p>

          <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12 scroll-mt-24">
            Conclusion and Next Steps
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Building a scalable SaaS application with modern AI capabilities is an exciting journey.
            By following these best practices and continuously iterating based on user feedback and
            performance metrics, you'll be well-positioned to scale your application successfully.
          </p>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-2xl p-8 mt-16 animate-fade-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Your SaaS?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our premium SaaS templates and AI tools, or work with our team to build a
              custom solution tailored to your needs.
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

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/ai-integration-best-practices"
              className="group glass rounded-xl p-6 hover-gradient-border transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-foreground mb-3">
                AI
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                AI Integration Best Practices
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                Discover proven strategies for integrating AI into your applications.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/blog/choosing-tech-stack-2024"
              className="group glass rounded-xl p-6 hover-gradient-border transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-foreground mb-3">
                Technology
              </span>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                Choosing the Right Tech Stack
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                A comprehensive guide to selecting the perfect technology stack for your SaaS.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
