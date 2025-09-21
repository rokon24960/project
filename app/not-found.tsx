export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page Not Found</p>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      </div>
    </div>
  )
}