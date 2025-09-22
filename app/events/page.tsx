import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Music, Trophy, Mic, PartyPopper, Star, Zap } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Championship Tournament",
      date: "March 15, 2024",
      time: "7:00 PM",
      description: "Monthly championship tournament with cash prizes and trophies",
      price: "£25 entry",
      category: "Tournament",
      attendees: "32 players max",
      image: "/friends-playing-snooker-with-drinks.jpg"
    },
    {
      title: "DJ Night - Electronic Vibes",
      date: "March 22, 2024",
      time: "9:00 PM",
      description: "Premium DJ set with electronic music and signature cocktails",
      price: "£15 entry",
      category: "DJ Night",
      attendees: "150 guests",
      image: "/people-drinking-cocktails-at-snooker-bar.jpg"
    },
    {
      title: "Ladies Night Special",
      date: "March 29, 2024",
      time: "8:00 PM",
      description: "Exclusive evening for ladies with special offers and entertainment",
      price: "Free entry",
      category: "Special Event",
      attendees: "80 guests",
      image: "/bartender-serving-drinks-snooker-club.jpg"
    }
  ]

  const eventTypes = [
    {
      name: "Tournament Nights",
      description: "Competitive tournaments for players of all skill levels",
      icon: Trophy,
      features: ["Cash prizes", "Professional referees", "Live scoring", "Trophy ceremony"],
      frequency: "Weekly",
      gradient: "gradient-primary",
      glow: "professional-glow",
      border: "professional-border"
    },
    {
      name: "DJ Events",
      description: "Premium DJ performances with top-tier sound systems",
      icon: Music,
      features: ["Professional DJs", "Premium sound", "Light shows", "Signature cocktails"],
      frequency: "Bi-weekly",
      gradient: "gradient-secondary",
      glow: "accent-glow",
      border: "accent-border"
    },
    {
      name: "Private Parties",
      description: "Exclusive venue hire for your special celebrations",
      icon: PartyPopper,
      features: ["Full venue hire", "Custom catering", "Personal host", "Flexible timing"],
      frequency: "On demand",
      gradient: "gradient-accent",
      glow: "success-glow",
      border: "success-border"
    }
  ]

  const djLineup = [
    {
      name: "DJ Marcus Steel",
      genre: "Deep House & Techno",
      experience: "10+ years",
      specialty: "Underground electronic beats",
      nextShow: "March 22"
    },
    {
      name: "DJ Luna Vibe",
      genre: "Progressive House",
      experience: "8+ years",
      specialty: "Melodic progressive journeys",
      nextShow: "March 29"
    },
    {
      name: "DJ Phoenix",
      genre: "Tech House",
      experience: "12+ years",
      specialty: "High-energy club anthems",
      nextShow: "April 5"
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
            backgroundImage: `url('/people-drinking-cocktails-at-snooker-bar.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect">
                <Music className="h-12 w-12 text-secondary accent-glow" />
              </div>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 accent-glow text-secondary">
              Events & DJs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience electrifying tournaments, world-class DJ performances, and exclusive events 
              in our premium entertainment venue.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss out on our exciting lineup of tournaments and entertainment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="glass-effect professional-border card-hover overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl professional-glow">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.attendees}
                    </div>
                    <div className="text-lg font-bold text-accent success-glow">
                      {event.price}
                    </div>
                  </div>
                  <Button className="w-full gradient-primary hover:scale-105 transition-all duration-300 professional-border">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Event Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our diverse range of entertainment options
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className={`glass-effect ${type.border} card-hover`}>
                  <CardHeader className="text-center">
                    <div className={`p-4 rounded-full ${type.gradient} w-fit mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={`text-2xl ${type.glow}`}>{type.name}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="mb-4">
                        {type.frequency}
                      </Badge>
                      <Button className={`w-full ${type.gradient} hover:scale-105 transition-all duration-300 ${type.border}`}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* DJ Lineup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 success-glow text-accent">Featured DJs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class DJs bringing you the best in electronic music
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {djLineup.map((dj, index) => (
              <Card key={index} className="glass-effect accent-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full gradient-secondary">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold accent-glow">{dj.name}</h3>
                      <p className="text-sm text-muted-foreground">{dj.experience}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Genre:</span>
                      <p className="font-medium">{dj.genre}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Specialty:</span>
                      <p className="font-medium">{dj.specialty}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Next Show:</span>
                      <Badge variant="outline" className="ml-2">{dj.nextShow}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">Event Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium amenities for unforgettable experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect professional-border w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Sound</h3>
              <p className="text-muted-foreground text-sm">State-of-the-art sound systems for crystal clear audio</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect accent-border w-fit mx-auto mb-4">
                <Music className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Performances</h3>
              <p className="text-muted-foreground text-sm">Professional DJs and live entertainment</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect success-border w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Prize Tournaments</h3>
              <p className="text-muted-foreground text-sm">Competitive tournaments with cash prizes</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full glass-effect professional-border w-fit mx-auto mb-4">
                <PartyPopper className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Private Events</h3>
              <p className="text-muted-foreground text-sm">Exclusive venue hire for special occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Join the Experience</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on our exclusive events and world-class entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary hover:scale-105 transition-all duration-300 accent-border">
              <Music className="h-4 w-4 mr-2" />
              View Event Calendar
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-primary hover:bg-primary/10">
              Book Private Event
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}