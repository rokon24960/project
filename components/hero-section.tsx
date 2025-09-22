import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Music, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/friends-playing-snooker-with-drinks.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-pulse-neon"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-pulse-neon"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-pulse-neon"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-60 right-10 w-5 h-5 bg-secondary rounded-full animate-pulse-neon"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Music className="h-8 w-8 text-secondary animate-pulse" />
          <Zap className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="neon-glow text-primary">ELITE</span>
          <span className="block text-secondary neon-glow">SNOOKER LOUNGE</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Experience premium snooker in a sophisticated atmosphere. Professional tables, craft cocktails, and an exclusive ambiance for discerning players.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reserve">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 neon-border"
            >
              Reserve Now
            </Button>
          </Link>
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3 bg-transparent neon-border"
            >
              What's On Tonight
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-accent neon-glow" />
      </div>
    </section>
  )
}
