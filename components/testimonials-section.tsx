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
          <h2 className="text-4xl font-bold mb-6 neon-glow text-primary">What Our Members Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the players who make X Snooker Lovers Bar their home away from home
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-accent/30 absolute -top-2 -left-2" />
                  <p className="text-foreground leading-relaxed italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.membership}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}