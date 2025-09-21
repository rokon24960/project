import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Monthly Championship",
      date: "Every First Saturday",
      time: "2:00 PM - 8:00 PM",
      location: "Main Hall",
      participants: "32 Players",
      prize: "£500 Prize Pool",
      description: "Our flagship monthly tournament featuring the best players from our club and beyond.",
    },
    {
      title: "Beginners Workshop",
      date: "Every Wednesday",
      time: "6:00 PM - 8:00 PM",
      location: "Practice Room",
      participants: "8 Players",
      prize: "Free Coaching",
      description: "Learn the fundamentals of snooker with our certified instructors.",
    },
    {
      title: "Ladies Night",
      date: "Every Thursday",
      time: "7:00 PM - 10:00 PM",
      location: "VIP Lounge",
      participants: "Open",
      prize: "Special Rates",
      description: "Exclusive evening for female players with discounted table rates and complimentary refreshments.",
    },
  ]

  return (
    <section id="events" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join our vibrant community through tournaments, workshops, and special events designed for players of all
            skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{event.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>
                      {event.location} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>
                      {event.participants} • {event.prize}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
