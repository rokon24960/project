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
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-pink">Why</span>{" "}
            <span className="neon-accent-green">Join</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of a members-only snooker club designed by players, for players
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-500 group card-hover glass-effect relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`p-4 rounded-full bg-gradient-to-br from-background to-card w-fit mx-auto mb-6 group-hover:neon-border group-hover:scale-110 transition-all duration-500 group-hover:animate-pulse-neon relative`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <IconComponent className={`h-8 w-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:neon-orange transition-all duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}