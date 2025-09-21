export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">500</h1>
        <p className="text-xl text-muted-foreground mb-8">Server Error</p>
        <p className="text-muted-foreground">Something went wrong on our end.</p>
      </div>
    </div>
  )
}