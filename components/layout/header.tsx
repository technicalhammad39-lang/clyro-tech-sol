"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "AI Lab", href: "/ai-lab" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const brand = { logo: "/clyro-official-logo.png", siteName: "Clyro Tech Solutions" }
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "glass-strong py-3 border-b border-border/40" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[60]">
            <Image
              src={brand.logo ?? "/clyro-official-logo.png"}
              alt={brand.siteName ?? "Clyro Tech Solutions"}
              width={240}
              height={48}
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm transition-colors duration-300 relative group",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 gradient-bg transition-all duration-300",
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/custom-project"
                className="relative px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden group hover-lift"
              >
              <span className="absolute inset-0 gradient-bg opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative text-foreground">Start Project</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground relative z-[60]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-[280px] z-[56] lg:hidden transition-transform duration-500 ease-out glass-strong border-r border-border/50",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-border/50">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={brand.logo ?? "/clyro-official-logo.png"}
                alt={brand.siteName ?? "Clyro Tech Solutions"}
                width={240}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xs text-muted-foreground">Software Solutions</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                        isActive
                          ? "text-foreground bg-secondary/80 hover-gradient-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 gradient-bg rounded-r" />
                      )}
                      <span className="ml-2">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA in sidebar */}
            <div className="mt-8">
              <Link
                href="/custom-project"
                className="block w-full px-6 py-3 rounded-full text-center text-sm font-medium gradient-bg text-foreground relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700" />
                <span className="relative">Start Project</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}
