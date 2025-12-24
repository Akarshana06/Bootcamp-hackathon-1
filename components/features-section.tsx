export default function FeaturesSection() {
  const features = [
    {
      icon: "🚩",
      title: "Red Flag Detection",
      description:
        "AI identifies clauses that take away your rights, share personal data, or auto-renew subscriptions.",
      level: "High Risk",
    },
    {
      icon: "⚠️",
      title: "Yellow Flag Alerts",
      description: "Medium-risk clauses that may need closer attention before accepting terms.",
      level: "Medium Risk",
    },
    {
      icon: "✅",
      title: "Green Flag Overview",
      description: "Standard clauses that are fair and expected in terms & conditions.",
      level: "Standard",
    },
    {
      icon: "📖",
      title: "Plain English Translation",
      description: "Complex legal sentences simplified into everyday language anyone can understand.",
      level: "Translation",
    },
    {
      icon: "🔍",
      title: "Clause Search",
      description: 'Ask AI questions like "How do I cancel?" and find the exact relevant clause instantly.',
      level: "Search",
    },
    {
      icon: "💡",
      title: "Fair Clause Suggestions",
      description: "Get recommendations on how unfair clauses should have been written instead.",
      level: "Suggestions",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Everything you need to understand and protect yourself from unfair terms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all hover:border-primary/30"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-foreground/60 mb-4">{feature.description}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  feature.level === "High Risk"
                    ? "bg-destructive/10 text-destructive"
                    : feature.level === "Medium Risk"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : feature.level === "Standard"
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                }`}
              >
                {feature.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
