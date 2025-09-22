import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Coffee, Calendar, Trophy, Eye, Lock, Brush } from "lucide-react"

export default function AboutPage() {
  const facilities = [
    {
      icon: Trophy,
      title: "8× full-size tables",
      description: "Strachan pro cloth (green)"
    },
    {
      icon: Eye,
      title: "Low-glare LED lighting",
      description: "Aramith balls"
    },
    {
      icon: Users,
      title: "Quiet Zone & Social Zone",
      description: "Cue racks & personal lockers (limited)"
    },
    {
      icon: Brush,
      title: "Table brushing after each session",
      description: "Re-cloth schedule published"
    },
    {
      icon: Shield,
      title: "CCTV in shared areas",
      description: "Safe & respectful environment"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/vintage-snooker-club-interior-with-elegant-wooden-.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 neon-glow text-primary">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a members-only snooker club in the heart of Hackney, created by players for players. 
              Our goal is simple: perfect tables, a respectful vibe, and a lounge and bar that make you want to stay for one more frame.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 neon-glow text-secondary text-center">Our Story</h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from late-night frames and local league nights in Hackney, X Snooker Lovers Bar was created by players 
                who wanted somewhere calm, consistent, and genuinely welcoming to play. We set out to build a members-only 
                space that values great tables, respectful etiquette, and proper hospitality over noise and crowds.
              </p>
              
              <p>
                Today, the club features 5 English pool tables (match-ready) and 3 full-size snooker tables with pro-level 
                cloth and low-glare lighting, maintained on a strict schedule so they play true. Between frames, members can 
                unwind at the bar, serving quality coffee, softs, and a considered selection of beers, wines, and classic cocktails.
              </p>
              
              <p>
                Whether you're practising breaks, playing a friendly frame, or joining a league night, you'll find a focused 
                atmosphere, fair play, and a community that looks after its tables—and each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-glow text-accent">Our Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for the perfect game, maintained to the highest standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-full bg-background w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{facility.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 neon-glow text-primary">Join Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to experience snooker the way it should be? Apply for membership and become part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
                Apply for Membership
              </Button>
            </Link>
            <Link href="/reserve">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent neon-border">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}