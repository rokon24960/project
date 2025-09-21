import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Clock, Star } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Trophy,
      title: "Quality Tables",
      description: "Well-maintained tables perfect for both beginners and pros",
    },
    {
      icon: Users,
      title: "Friendly Atmosphere",
      description: "Welcoming space where everyone feels at home, members and walk-ins alike",
    },
    {
      icon: Clock,
      title: "Open Late",
      description: "Open 7 days a week until late - perfect for after-work drinks and games",
    },
    {
      icon: Star,
      title: "Full Bar",
      description: "Cold beers, cocktails, and snacks to keep you fueled while you play",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">
            Your Local <span className="text-accent">Hangout Spot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Whether you're a snooker pro or just want to hang out with friends over drinks, we've got you covered. Great
            tables, cold drinks, and a relaxed vibe that keeps people coming back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair text-3xl font-bold mb-6">Come As You Are</h3>
            <p className="text-muted-foreground mb-4">
              We're not your stuffy old-school club. Sure, we've got quality tables and take the game seriously, but
              we're all about having a good time first and foremost.
            </p>
            <p className="text-muted-foreground mb-4">
              Drop in for a quick game after work, bring your mates for a night out, or become a member for regular
              games and discounts at the bar. Everyone's welcome here.
            </p>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-muted-foreground">Tables</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Open</div>
                <div className="text-muted-foreground">7 Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">All</div>
                <div className="text-muted-foreground">Welcome</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/people-drinking-cocktails-at-snooker-bar.jpg"
              alt="People enjoying drinks and socializing at the bar"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="relative">
            <img
              src="/friends-playing-snooker-with-drinks.jpg"
              alt="Friends playing snooker with drinks"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-lg">Game & Drinks</h4>
              <p className="text-sm opacity-90">Perfect combo for a great night</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/bartender-serving-drinks-snooker-club.jpg"
              alt="Bartender serving drinks"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-lg">Full Bar Service</h4>
              <p className="text-sm opacity-90">Cocktails, beers, and more</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/people-drinking-cocktails-at-snooker-bar.jpg"
              alt="Social atmosphere"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-lg">Social Vibes</h4>
              <p className="text-sm opacity-90">Meet new people, have fun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
