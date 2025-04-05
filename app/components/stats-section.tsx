export function StatsSection() {
  return (
    <section className="py-12 bg-primary/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">250+</p>
            <p className="text-sm md:text-base text-muted-foreground font-medium">Properties Managed</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">98%</p>
            <p className="text-sm md:text-base text-muted-foreground font-medium">Resident Satisfaction</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">24h</p>
            <p className="text-sm md:text-base text-muted-foreground font-medium">Response Time</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">15+</p>
            <p className="text-sm md:text-base text-muted-foreground font-medium">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

