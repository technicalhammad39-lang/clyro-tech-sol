import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { JarvisShowcase } from "@/components/home/jarvis-showcase"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { WhyClyroSection } from "@/components/home/why-clyro-section"
import { TradingCtaSection } from "@/components/home/trading-cta-section"
import { TeamSection } from "@/components/home/team-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <JarvisShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <WhyClyroSection />
      <TradingCtaSection />
    </main>
  )
}
