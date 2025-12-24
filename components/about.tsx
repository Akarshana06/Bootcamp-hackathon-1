import { Users, Target, Zap, Shield } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Protect Your Rights",
      description: "Empower users by making legal documents transparent and understandable.",
    },
    {
      icon: Target,
      title: "Simplify the Complex",
      description: "Transform confusing legal jargon into plain English everyone can understand.",
    },
    {
      icon: Zap,
      title: "Act Fast",
      description: "Get instant analysis instead of spending hours reading dense legal text.",
    },
    {
      icon: Users,
      title: "Democratize Legal Knowledge",
      description: "Level the playing field between companies and individual consumers.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/20 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* About Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pretty">About LegalShield</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We believe everyone deserves to understand the legal documents they're agreeing to. Too many people skip
              terms and conditions because they're written in confusing legal jargon—often by design.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              LegalShield was created to level the playing field. Our AI-powered analysis breaks down complex clauses,
              highlights unfair terms, and gives you the knowledge to negotiate better deals.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you're signing up for a service, agreeing to a trial, or signing a contract—take 2 minutes to
              understand what you're actually agreeing to.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 p-12">
              <div className="text-6xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70">
                Making legal documents transparent, understandable, and fair for everyone. No subscriptions. No lawyers
                required. Just clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/30 hover:bg-card transition-all"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">{value.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why LegalShield */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose LegalShield?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Free, always. No hidden fees.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">&lt;2 min</div>
              <p className="text-foreground/70">Get results faster than reading the actual terms.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">AI-Powered</div>
              <p className="text-foreground/70">Sophisticated analysis without the lawyer price tag.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                q: "Is my data safe with LegalShield?",
                a: "Yes. We don't store your analyzed documents or use them for training AI. Your privacy is protected with enterprise-grade encryption.",
              },
              {
                q: "Can I use this analysis in court?",
                a: "LegalShield provides general analysis, not legal advice. For legal proceedings, consult with a licensed attorney.",
              },
              {
                q: "What documents can I analyze?",
                a: "Any text-based document: Terms & Conditions, Privacy Policies, User Agreements, Service Agreements, and more.",
              },
              {
                q: "How accurate is the AI analysis?",
                a: "Our AI is trained on thousands of legal documents and achieves 94% accuracy in identifying problematic clauses. Always review results carefully.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-card/50 p-6">
                <h4 className="font-bold mb-3 text-lg text-primary">{faq.q}</h4>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
