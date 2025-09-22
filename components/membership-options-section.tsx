import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, Star } from "lucide-react"

export function MembershipOptionsSection() {
  const membershipOptions = [
    {
      name: "Standard Membership",
      price: "£25",
      period: "per year",
      description: "Perfect for casual players who enjoy regular games",
      features: [],
      icon: Star,
      popular: true,
      buttonText: "Apply Now"
    },
    {
      name: "Student Membership - 40% discount",
      price: "£15",
      period: "per year",
      description: "Perfect for casual players who enjoy regular games",
      features: [],
      icon: Star,
      popular: false,
      buttonText: "Apply Now"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 neon-glow text-accent">Membership Options</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the membership that fits your playing style and commitment level
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {membershipOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <Card 
                key={index} 
                className={`relative bg-card border-border/50 hover:border-primary/30 transition-all duration-300 ${
                  option.popular ? 'ring-2 ring-primary/20 scale-105' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="p-4 rounded-full bg-background w-fit mx-auto mb-4 neon-border">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl neon-glow text-primary">{option.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{option.price}</span>
                    <span className="text-muted-foreground ml-2">{option.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/membership">
                    <Button 
                      className={`w-full text-lg py-3 neon-border ${
                        option.popular 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      }`}
                    >
                      {option.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}