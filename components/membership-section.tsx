import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MembershipSection() {
  const plans = [
    {
      name: "Standard Membership",
      price: "£25",
      period: "per year",
      description: "Perfect for regular players",
      features: [
        "Access during standard hours",
        "Basic table booking privileges",
        "Access to social events",
        "Basic equipment included",
        "Locker rental available",
        "Monthly tournaments access",
      ],
      popular: true,
    },
    {
      name: "Student Membership",
      price: "£15",
      period: "per year",
      description: "40% discount for students",
      features: [
        "All Standard Membership benefits",
        "Student ID verification required",
        "Access during off-peak hours",
        "Study group booking discounts",
        "Student tournament participation",
        "Flexible payment options",
      ],
      popular: false,
    },
  ]

  return (
    <section id="membership" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">
            Choose Your <span className="text-accent">Membership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Select the membership tier that best fits your playing style and commitment level. All memberships include
            access to our world-class facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border hover:border-accent/50 transition-all duration-300 ${
                plan.popular ? "border-accent shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="font-playfair text-2xl text-accent">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
