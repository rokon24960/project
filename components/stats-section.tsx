import { Users, Clock, Lightbulb } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "8",
      label: "Full-size tables",
      description: "Professional tournament-grade tables"
    },
    {
      icon: () => <div className="w-6 h-6 bg-accent rounded-full"></div>,
      number: "100%",
      label: "Strachan cloth",
      description: "Premium quality playing surface"
    },
    {
      icon: Lightbulb,
      number: "LED",
      label: "Low-glare lighting",
      description: "Perfect visibility for precision play"
    },
    {
      icon: Clock,
      number: "1AM",
      label: "Open till Fri–Sat",
      description: "Extended hours for members"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-orange">Club</span>{" "}
            <span className="neon-pink">Statistics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes our snooker club the premier destination for serious players
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  {typeof stat.icon === 'function' ? (
                    <stat.icon />
                  ) : (
                    <stat.icon className="h-8 w-8 text-accent" />
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

              </div>
    </section>
  )
}