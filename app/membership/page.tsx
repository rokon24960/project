import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Zap, Gift, Clock, Users, Trophy, Sparkles, Check } from "lucide-react"

export default function MembershipPage() {
  const membershipTiers = [
    {
      name: "Standard Membership",
      price: "£25",
      period: "per year",
      description: "Perfect for casual players who enjoy regular games",
      features: [
        "10% discount on table bookings",
        "Priority booking (24h advance)",
        "Free equipment rental",
        "Monthly member events",
        "Complimentary welcome drink",
        "Member-only tournaments"
      ],
      icon: Star,
      gradient: "gradient-accent",
      glow: "success-glow",
      border: "success-border",
      popular: true
    },
    {
      name: "Student Membership - 40% discount",
      price: "£15",
      period: "per year",
      description: "Perfect for casual players who enjoy regular games",
      features: [
        "10% discount on table bookings",
        "Priority booking (24h advance)",
        "Free equipment rental",
        "Monthly member events",
        "Complimentary welcome drink",
        "Member-only tournaments"
      ],
      icon: Trophy,
      gradient: "gradient-primary",
      glow: "professional-glow",
      border: "professional-border",
      popular: false
    }
  ]

  const benefits = [
    {
      title: "Priority Booking",
      description: "Skip the wait with advance table reservations",
      icon: Clock,
      color: "text-primary"
    },
    {
      title: "Exclusive Events",
      description: "Access to member-only tournaments and social events",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Premium Equipment",
      description: "Complimentary use of professional-grade cues and accessories",
      icon: Trophy,
      color: "text-accent"
    },
    {
      title: "VIP Treatment",
      description: "Personalized service and dedicated member support",
      icon: Crown,
      color: "text-primary"
    }
  ]

  const testimonials = [
    {
      name: "James Mitchell",
      membership: "Gold Member",
      quote: "The Gold membership has transformed my snooker experience. The priority booking and member events are fantastic!",
      rating: 5
    },
    {
      name: "Sarah Chen",
      membership: "Platinum VIP",
      quote: "Absolutely worth every penny. The VIP suite and personal service make every visit special.",
      rating: 5
    },
    {
      name: "David Thompson",
      membership: "Silver Member",
      quote: "Great value for money. The discounts and member tournaments keep me coming back.",
      rating: 5
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
            backgroundImage: `url('/vintage-snooker-club-interior-with-elegant-wooden-.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect">
                <Crown className="h-12 w-12 text-secondary accent-glow" />
              </div>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 accent-glow text-secondary">
              VIP Membership
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elevate your snooker experience with exclusive benefits, priority access, 
              and premium services designed for discerning players.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">Choose Your Membership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect membership tier that matches your playing style and preferences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => {
              const IconComponent = tier.icon
              return (
                <Card key={index} className={`glass-effect ${tier.border} card-hover relative ${tier.popular ? 'scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`p-4 rounded-full ${tier.gradient} w-fit mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={`text-2xl ${tier.glow}`}>{tier.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                    <div className="mt-4">
                      <span className={`text-4xl font-bold ${tier.glow}`}>{tier.price}</span>
                      <span className="text-muted-foreground ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full ${tier.gradient} hover:scale-105 transition-all duration-300 ${tier.border}`}>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 success-glow text-accent">Member Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy exclusive privileges and premium services as an Elite Snooker member
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="p-4 rounded-full glass-effect professional-border w-fit mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 professional-glow text-primary">What Our Members Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our satisfied members about their Elite Snooker experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect professional-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.membership}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary professional-glow mb-2">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary accent-glow mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent success-glow mb-2">24/7</div>
              <div className="text-muted-foreground">Member Support</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary professional-glow mb-2">2</div>
              <div className="text-muted-foreground">Membership Tiers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-glow text-secondary">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">How do I apply for membership?</h3>
                <p className="text-muted-foreground">Complete our online application form and we'll review it within 48 hours. Successful applicants will be invited for a brief club tour.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Can I bring guests?</h3>
                <p className="text-muted-foreground">Premium members can bring up to 2 guests per month. Standard members can bring guests for a small fee. All guests must be accompanied by the member.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">What are the table rates?</h3>
                <p className="text-muted-foreground">Members enjoy discounted rates: £8/hour for snooker tables and £6/hour for pool tables. Non-member rates are £15/hour and £12/hour respectively.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Is there a joining fee?</h3>
                <p className="text-muted-foreground">Yes, there's a one-time joining fee of £50 for both membership types. This covers your welcome pack and initial setup.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Can I cancel my membership?</h3>
                <p className="text-muted-foreground">Yes, memberships are month-to-month with 30 days notice required for cancellation. No long-term contracts or penalties.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Do you offer day passes?</h3>
                <p className="text-muted-foreground">We're a members-only club, but prospective members can book a trial session for £25 which includes 2 hours of play and a club tour.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 accent-glow text-secondary">Ready to Join Elite?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your premium snooker journey today with exclusive member benefits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary hover:scale-105 transition-all duration-300 accent-border">
              <Crown className="h-4 w-4 mr-2" />
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-primary hover:bg-primary/10">
              Compare Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}