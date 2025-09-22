"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/C6069T01.JPG",
      alt: "Snooker club interior"
    },
    {
      image: "/C6110T01.JPG",
      alt: "Snooker playing area"
    },
    {
      image: "/C6131T01.JPG",
      alt: "Club facilities"
    },
    {
      image: "/C6138T01.JPG",
      alt: "Tournament setup"
    },
    {
      image: "/DSC07505.jpg",
      alt: "Professional snooker tables"
    },
    {
      image: "/DSC07531.jpg",
      alt: "Club atmosphere"
    },
    {
      image: "/DSC07549.jpg",
      alt: "Premium snooker experience"
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

      {/* Floating Neon Dots */}
      <div className="floating-dots">
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="p-8">
          <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6 text-balance" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)'}}>
            <span className="neon-orange">Members-Only</span>{" "}
            <span className="neon-pink">Snooker</span>
            <span className="block neon-accent-green">in the Heart of Hackney</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto leading-relaxed font-semibold" style={{color: '#ffffff', textShadow: '3px 3px 6px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8), 1px 1px 0px rgba(0,0,0,1)'}}>
            Tournament-grade tables, a proper bar, and a calm place to play—open late for members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-3 neon-border neon-button font-bold shadow-lg"
              >
                Apply for Membership
              </Button>
            </Link>
            <Link href="/reserve">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white text-lg px-8 py-3 bg-black/50 neon-border neon-button font-bold shadow-lg"
              >
                Book Table
              </Button>
            </Link>
          </div>

                  </div>
      </div>
    </section>
  )
}