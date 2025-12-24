"use client"

import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Paste & Scan",
      description: "Enter a URL or paste the full text of any terms & conditions document",
    },
    {
      number: "2",
      title: "AI Analysis",
      description:
        'Our AI scans the document looking for keywords like "third-party," "auto-renewal," and "arbitration"',
    },
    {
      number: "3",
      title: "Risk Report",
      description:
        "Get an instant report showing Red Flags (high risk), Yellow Flags (medium), and Green Flags (standard)",
    },
    {
      number: "4",
      title: "Ask Questions",
      description: 'Use our clause search to ask "How do I cancel?" and find the exact relevant section instantly',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Four simple steps to understand any terms and conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="rounded-xl border-2 border-primary/20 bg-card p-6 text-center hover:border-primary/50 transition-colors">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-foreground/60">{step.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-center text-primary/30">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold">Start Your First Analysis Today</h3>
          <p className="mb-6 text-foreground/60">Completely free. No credit card required. No signup needed.</p>
          <Link href="/analysis">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Analyze Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
