import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Star } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Premium Street", "Elite District, London", "EC1A 1BB"],
      color: "text-primary",
      gradient: "gradient-primary",
      border: "professional-border"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+44 20 7123 4567", "+44 20 7123 4568", "Emergency: +44 20 7123 4569"],
      color: "text-secondary",
      gradient: "gradient-secondary",
      border: "accent-border"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elitesnooker.com", "bookings@elitesnooker.com", "events@elitesnooker.com"],
      color: "text-accent",
      gradient: "gradient-accent",
      border: "success-border"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Thu: 2PM - 2AM", "Fri-Sat: 2PM - 4AM", "Sun: 2PM - 12AM"],
      color: "text-primary",
      gradient: "gradient-primary",
      border: "professional-border"
    }
  ]

  const reasons = [
    {
      title: "Table Reservations",
      description: "Book your preferred table and time slot"
    },
    {
      title: "Event Inquiries",
      description: "Learn about upcoming tournaments and DJ nights"
    },
    {
      title: "Membership Information",
      description: "Discover our VIP membership benefits"
    },
    {
      title: "Private Events",
      description: "Plan your exclusive party or corporate event"
    },
    {
      title: "General Questions",
      description: "Any other questions about our services"
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
            backgroundImage: `url('/bartender-serving-drinks-snooker-club.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect">
                <MessageSquare className="h-12 w-12 text-primary professional-glow" />
              </div>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 professional-glow text-primary">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for reservations, inquiries, or to learn more 
              about our premium snooker experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us for all your snooker needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className={`glass-effect ${info.border} card-hover`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`p-4 rounded-full ${info.gradient} w-fit mx-auto mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className={`text-xl ${info.color}`}>{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 success-glow text-accent">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            
            <Card className="glass-effect professional-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="glass-effect border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="glass-effect border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="Enter your email"
                        className="glass-effect border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="glass-effect border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?"
                      className="glass-effect border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="glass-effect border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary hover:scale-105 transition-all duration-300 professional-border"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reasons to Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">Why Contact Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some common reasons our customers reach out to us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="glass-effect professional-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of London's premium district
            </p>
          </div>
          
          <Card className="glass-effect professional-border overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4 professional-glow" />
                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  123 Premium Street, Elite District, London EC1A 1BB
                </p>
                <Button className="mt-4 gradient-primary professional-border">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 success-glow text-accent">Quick Actions</h2>
            <p className="text-xl text-muted-foreground">
              Need something specific? Use these quick links
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gradient-primary hover:scale-105 transition-all duration-300 professional-border">
              Book a Table
            </Button>
            <Button size="lg" className="gradient-secondary hover:scale-105 transition-all duration-300 accent-border">
              Join Membership
            </Button>
            <Button size="lg" className="gradient-accent hover:scale-105 transition-all duration-300 success-border">
              View Events
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-primary hover:bg-primary/10">
              Download Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}