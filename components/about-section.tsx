import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Clock, Star, Award, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Trophy,
      title: "Championship Tables",
      description: "Professional-grade tables maintained to tournament standards",
      color: "primary"
    },
    {
      icon: Users,
      title: "Elite Community",
      description: "Connect with passionate players in an upscale environment",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open daily with flexible hours for your convenience",
      color: "accent"
    },
    {
      icon: Star,
      title: "Premium Bar",
      description: "Curated selection of craft cocktails and premium spirits",
      color: "primary"
    },
  ]

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Experience</span>
          </div>
          <h2 className="font-sans text-4xl md:text-6xl font-bold mb-8 text-balance">
            Where Excellence Meets <span className="accent-glow text-secondary">Sophistication</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Step into a world of refined leisure where championship-quality snooker meets premium hospitality. 
            Our exclusive lounge offers an unparalleled experience for discerning players and social enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect border-border/30 hover:border-primary/30 card-hover group">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'gradient-primary professional-border' :
                  feature.color === 'secondary' ? 'gradient-secondary accent-border' :
                  'gradient-accent success-border'
                }`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full mb-4">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Exclusive Standards</span>
              </div>
              <h3 className="font-sans text-3xl md:text-4xl font-bold mb-6 professional-glow">
                Redefining the Game
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our meticulously maintained championship tables and sophisticated atmosphere create the perfect 
                environment for both serious play and social enjoyment. Every detail has been crafted to exceed expectations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're perfecting your technique or entertaining clients, our premium facilities and 
                attentive service ensure an exceptional experience every visit.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary professional-glow mb-2">15</div>
                <div className="text-muted-foreground font-medium">Premium Tables</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary accent-glow mb-2">24/7</div>
                <div className="text-muted-foreground font-medium">Concierge Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent success-glow mb-2">VIP</div>
                <div className="text-muted-foreground font-medium">Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-effect rounded-2xl p-2 professional-border">
              <img
                src="/people-drinking-cocktails-at-snooker-bar.jpg"
                alt="Elegant lounge atmosphere with premium service"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-secondary rounded-2xl flex items-center justify-center accent-border animate-gentle-pulse">
              <Star className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "/friends-playing-snooker-with-drinks.jpg",
              title: "Championship Play",
              subtitle: "Professional-grade equipment and atmosphere",
              gradient: "from-primary/80 to-primary/40"
            },
            {
              image: "/bartender-serving-drinks-snooker-club.jpg",
              title: "Craft Cocktails",
              subtitle: "Premium spirits and expert mixology",
              gradient: "from-secondary/80 to-secondary/40"
            },
            {
              image: "/people-drinking-cocktails-at-snooker-bar.jpg",
              title: "Social Excellence",
              subtitle: "Network in sophisticated surroundings",
              gradient: "from-accent/80 to-accent/40"
            }
          ].map((item, index) => (
            <div key={index} className="relative group card-hover">
              <div className="glass-effect rounded-2xl overflow-hidden professional-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent`}></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90 font-medium">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
