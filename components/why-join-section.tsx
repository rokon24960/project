import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Wine, Calendar } from "lucide-react"

export function WhyJoinSection() {
  const benefits = [
    {
      icon: Trophy,
      title: "Tournament Grade Tables",
      description: "Professional-standard tables with Strachan cloth and precision maintenance for the perfect game every time.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Members Only Vibe",
      description: "A calm, respectful atmosphere where serious players can focus on their game without distractions.",
      color: "text-secondary"
    },
    {
      icon: Wine,
      title: "Bar & Lounge",
      description: "Quality coffee, craft beers, wines, and classic cocktails in a comfortable lounge setting between frames.",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Events & Leagues",
      description: "Regular tournaments, league nights, and social events that bring our community together.",
      color: "text-primary"
    }
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 neon-glow text-secondary">Why Join</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of a members-only snooker club designed by players, for players
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`p-4 rounded-full bg-background w-fit mx-auto mb-6 group-hover:neon-border transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}