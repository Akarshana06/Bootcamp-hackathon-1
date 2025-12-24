import { Zap, Brain, Search, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react"

export default function FeaturesGrid() {
  const features = [
    {
      icon: AlertCircle,
      title: "Red Flag Detection",
      description:
        "AI identifies clauses that take away your rights, share personal data, or auto-renew subscriptions.",
      color: "destructive",
    },
    {
      icon: AlertTriangle,
      title: "Yellow Flag Alerts",
      description: "Medium-risk clauses that may need closer attention before accepting terms.",
      color: "yellow",
    },
    {
      icon: CheckCircle,
      title: "Safe Clause Overview",
      description: "Standard clauses that are fair and expected in terms & conditions.",
      color: "accent",
    },
    {
      icon: Brain,
      title: "AI Plain English",
      description: "Complex legal sentences simplified into everyday language anyone can understand.",
      color: "primary",
    },
    {
      icon: Search,
      title: "Smart Clause Search",
      description: 'Ask questions like "How do I cancel?" and find exact relevant clauses instantly.',
      color: "primary",
    },
    {
      icon: Zap,
      title: "Fair Suggestions",
      description: "Get recommendations on how unfair clauses should have been written instead.",
      color: "accent",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">Powerful AI-Driven Features</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Everything you need to understand, analyze, and protect yourself from unfair terms and conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
