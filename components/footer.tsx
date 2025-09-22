import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center neon-border animate-pulse-neon">
                <span className="text-white font-bold text-sm neon-accent-green">SLB</span>
              </div>
              <span className="font-playfair text-xl font-bold">
                <span className="neon-orange">Snooker</span>{" "}
                <span className="neon-pink">Lover</span>{" "}
                <span className="neon-accent-green">Bar</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Experience the finest snooker facilities with professional tables, expert coaching, and an atmosphere of
              tradition and excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Basement Floor- 201-203 Hackney Road London E2 8JL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">info@royalsnookerclub.co.uk</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>09:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 22:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About Us
              </a>
              <a href="#facilities" className="block text-muted-foreground hover:text-accent transition-colors">
                Facilities
              </a>
              <a href="#events" className="block text-muted-foreground hover:text-accent transition-colors">
                Events
              </a>
              <a href="#membership" className="block text-muted-foreground hover:text-accent transition-colors">
                Membership
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Snooker Lover Bar. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
