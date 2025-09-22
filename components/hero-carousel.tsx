"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users, Clock, Lightbulb, Calendar } from "lucide-react"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/friends-playing-snooker-with-drinks.jpg",
      alt: "Members playing snooker"
    },
    {
      image: "/neon-lit-snooker-table-in-dark-nightclub-with-colo.jpg",
      alt: "Professional snooker table"
    },
    {
      image: "/vintage-snooker-club-interior-with-elegant-wooden-.jpg",
      alt: "Club interior"
    },
    {
      image: "/bartender-serving-drinks-snooker-club.jpg",
      alt: "Bar and lounge area"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-background/80"></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-background/50 text-foreground hover:bg-background/70 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-background/50 text-foreground hover:bg-background/70 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-primary" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6 text-balance">
          <span className="neon-glow text-primary">Members-Only Snooker</span>
          <span className="block text-accent neon-glow">in the Heart of Hackney</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
          Tournament-grade tables, a proper bar, and a calm place to play—open late for members.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/membership">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 neon-border"
            >
              Apply for Membership
            </Button>
          </Link>
          <Link href="/reserve">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3 bg-transparent neon-border"
            >
              Book Table
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            <span>8 full-size tables</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-accent rounded-full"></div>
            <span>Strachan cloth</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="h-4 w-4 text-accent" />
            <span>Low-glare LED lighting</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>Open till 1am Fri–Sat</span>
          </div>
        </div>
      </div>
    </section>
  )
}