import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Clock, Users, Zap, Star, Trophy, Target, Gamepad2 } from "lucide-react"

export default function TablesPage() {
  const tableTypes = [
    {
      name: "Championship Tables",
      description: "Professional tournament-grade tables with precision cloth and diamond cushions",
      features: ["Tournament specification", "Heated slate bed", "Premium cloth", "LED lighting"],
      price: "£25/hour",
      icon: Trophy,
      gradient: "gradient-primary",
      glow: "professional-glow",
      border: "professional-border"
    },
    {
      name: "VIP Private Suites",
      description: "Exclusive private rooms with premium tables and personalized service",
      features: ["Private room", "Dedicated service", "Premium bar", "Sound system"],
      price: "£45/hour",
      icon: Crown,
      gradient: "gradient-secondary",
      glow: "accent-glow",
      border: "accent-border"
    },
    {
      name: "Social Tables",
      description: "Perfect for casual games and social gatherings with friends",
      features: ["Comfortable seating", "Shared space", "Standard tables", "Group friendly"],
      price: "£15/hour",
      icon: Users,
      gradient: "gradient-accent",
      glow: "success-glow",
      border: "success-border"
    }
  ]

  const games = [
    {
      name: "Snooker",
      description: "The classic game with 15 red balls and 6 colored balls",
      players: "2 players",
      duration: "45-90 minutes",
      difficulty: "Advanced"
    },
    {
      name: "Pool (8-Ball)",
      description: "Popular American pool variant with stripes and solids",
      players: "2 players",
      duration: "15-30 minutes",
      difficulty: "Intermediate"
    },
    {
      name: "Pool (9-Ball)",
      description: "Fast-paced pool game with numbered balls 1-9",
      players: "2 players",
      duration: "10-20 minutes",
      difficulty: "Intermediate"
    },
    {
      name: "English Billiards",
      description: "Traditional cue sport with three balls",
      players: "2 players",
      duration: "30-60 minutes",
      difficulty: "Advanced"
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
            backgroundImage: `url('/neon-lit-snooker-table-in-dark-nightclub-with-colo.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect">
                <Target className="h-12 w-12 text-primary professional-glow" />
              </div>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 professional-glow text-primary">
              Tables & Games
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the finest snooker and pool tables with professional-grade equipment 
              and premium playing conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Table Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Our Premium Tables</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our selection of world-class tables, each designed for the perfect game
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {tableTypes.map((table, index) => {
              const IconComponent = table.icon
              return (
                <Card key={index} className={`glass-effect ${table.border} card-hover`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`p-4 rounded-full ${table.gradient} w-fit mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={`text-2xl ${table.glow}`}>{table.name}</CardTitle>
                    <p className="text-muted-foreground">{table.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {table.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold mb-4 ${table.glow}`}>{table.price}</div>
                      <Button className={`w-full ${table.gradient} hover:scale-105 transition-all duration-300 ${table.border}`}>
                        Reserve Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 success-glow text-accent">Available Games</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master various cue sports with our comprehensive game selection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="glass-effect professional-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{game.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {game.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Players:</span>
                      <Badge variant="outline">{game.players}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <Badge variant="outline">{game.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Difficulty:</span>
                      <Badge variant={game.difficulty === 'Advanced' ? 'default' : 'secondary'}>
                        {game.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">Premium Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail designed for the ultimate playing experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect professional-border w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">LED Lighting</h3>
              <p className="text-muted-foreground text-sm">Professional LED lighting systems for perfect visibility</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect accent-border w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
              <p className="text-muted-foreground text-sm">Play anytime with our round-the-clock availability</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect success-border w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tournament Grade</h3>
              <p className="text-muted-foreground text-sm">Official tournament specification tables and equipment</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect professional-border w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Service</h3>
              <p className="text-muted-foreground text-sm">Dedicated staff and personalized attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Ready to Play?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your table now and experience the finest snooker facilities in the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover:scale-105 transition-all duration-300 professional-border">
              <Crown className="h-4 w-4 mr-2" />
              Reserve Premium Table
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-secondary/30 text-secondary hover:bg-secondary/10">
              View Availability
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}