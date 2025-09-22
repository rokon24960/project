import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The best cloth I've played on in London",
      author: "Marcus T.",
      membership: "Premium Member",
      rating: 5
    },
    {
      quote: "Friendly, focused atmosphere with a proper bar",
      author: "Sarah L.",
      membership: "Standard Member", 
      rating: 5
    },
    {
      quote: "Finally, a place where you can play serious snooker without the noise and crowds. The tables are maintained to perfection.",
      author: "David R.",
      membership: "Premium Member",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="neon-orange">What Our</span>{" "}
            <span className="neon-pink">Members</span>{" "}
            <span className="neon-accent-green">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the players who make <span className="neon-orange">Snooker</span>{" "}
            <span className="neon-pink">Lovers</span>{" "}
            <span className="neon-accent-green">Bar</span> their home away from home
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-accent/30 transition-all duration-500 group card-hover glass-effect relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current group-hover:animate-pulse transition-all duration-300" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-accent/30 absolute -top-2 -left-2 group-hover:text-accent/60 group-hover:scale-110 transition-all duration-300" />
                  <p className="text-foreground leading-relaxed italic pl-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:neon-border group-hover:scale-110 transition-all duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <span className="text-primary font-bold text-sm group-hover:neon-orange relative z-10">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:neon-accent-green transition-all duration-300">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{testimonial.membership}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}