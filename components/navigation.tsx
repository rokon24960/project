"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Memberships", href: "/membership" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <img 
              src="/Snooker club logo 2.svg" 
              alt="Snooker Club Logo" 
              className="h-20 w-auto group-hover:scale-130 transition-all duration-500 animate-subtle-float drop-shadow-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative hover:text-orange-400 transition-all duration-300 group nav-link font-bold"
                style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.9), 1px 1px 0px rgba(0,0,0,1)'}}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
            ))}
            <Link href="/membership">
              <Button
                variant="outline"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-black/50 neon-border neon-button relative overflow-hidden font-bold shadow-lg"
              >
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1)'}}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-border backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 hover:text-orange-400 transition-all duration-300 mobile-nav-link rounded-lg font-bold"
                  style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.9)'}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/membership">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-black/50 neon-border neon-button font-bold"
                  >
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
