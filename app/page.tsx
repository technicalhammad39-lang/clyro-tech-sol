import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { JarvisShowcase } from "@/components/home/jarvis-showcase"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { WhyClyroSection } from "@/components/home/why-clyro-section"
import { TradingCtaSection } from "@/components/home/trading-cta-section"
import { TeamSection } from "@/components/home/team-section"
import { HomeServicesIntro } from "@/components/home/services-intro"
import { HomeFaq } from "@/components/home/home-faq"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "AI Automation, Chatbots & Product Studio",
  description:
    "Clyro Tech Solutions delivers AI automation services, chatbot development, and premium software products. We build fast, polished, and production-ready solutions.",
  path: "/",
})

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <JarvisShowcase />
      <HomeServicesIntro />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <WhyClyroSection />
      <HomeFaq />
      <TradingCtaSection />
    </main>
  )
}
