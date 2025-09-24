import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Logo Section - Centered */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src="/Snooker club logo 2.svg" 
              alt="Snooker Club Logo" 
              className="h-32 w-auto animate-subtle-float drop-shadow-2xl hover:scale-125 transition-all duration-500"
            />
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the finest snooker facilities with professional tables, expert coaching, and an atmosphere of
            tradition and excellence.
          </p>
        </div>

        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-semibold text-accent mb-6 text-lg">Contact Info</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Basement Floor- 201-203 Hackney Road London E2 8JL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+44 020 7916 1244</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">snookerloversbar@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-6 text-lg">Opening Hours</h3>
            <div className="space-y-3 text-base text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="font-medium">10:00 - 03:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 - 03:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3 text-base">
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 duration-300">
                About Us
              </a>
              <a href="#facilities" className="block text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 duration-300">
                Facilities
              </a>
              <a href="#events" className="block text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 duration-300">
                Events
              </a>
              <a href="#membership" className="block text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 duration-300">
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
