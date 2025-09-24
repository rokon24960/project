import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function LocationHoursSection() {
  const hours = [
    { day: "Monday", time: "10:00 - 02:00" },
    { day: "Tuesday", time: "10:00 - 02:00" },
    { day: "Wednesday", time: "10:00 - 02:00" },
    { day: "Thursday", time: "10:00 - 02:00" },
    { day: "Friday", time: "10:00 - 03:00" },
    { day: "Saturday", time: "10:00 - 03:00" },
    { day: "Sunday", time: "10:00 - 02:00" }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 neon-glow text-secondary">Location & Hours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of Hackney, open late for serious players
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Location Card */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Location</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Basement Floor- 201-203 Hackney Road<br />
                    London<br />
                    E2 8JL
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transport</h4>
                  <p className="text-muted-foreground text-sm">
                    • 5 min walk from Hackney Central Station<br />
                    • Multiple bus routes nearby<br />
                    • Limited street parking available
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">+44 020 7916 1244</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">snookerloversbar@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Opening Hours</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h4 className="font-semibold text-accent mb-2">Members Only</h4>
                <p className="text-muted-foreground text-sm">
                  Access requires valid membership. Guest passes available for members.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real Static Map */}
        <div className="mt-6 max-w-4xl mx-auto">
          <Card className="bg-card border-border/50 overflow-hidden">
            <div className="aspect-[2/1] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0123456789!2d-0.0553!3d51.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d3c4b123456%3A0x123456789abcdef0!2sMare%20St%2C%20London%20E8%2C%20UK!5e0!3m2!1sen!2suk!4v1703123456789!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="X Snooker Lovers Bar Location"
              ></iframe>
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-lg p-2 border border-border/50">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Snooker Lovers Bar</p>
                    <p className="text-xs text-muted-foreground">201-203 Hackney Road, E2 8JL</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}