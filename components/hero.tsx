import { ArrowRight, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-24 pb-32 md:pt-40 md:pb-56">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI-Powered Legal Analysis</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight text-pretty">
              Your Digital Lawyer for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Terms & Conditions
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-xl text-foreground/70 leading-relaxed max-w-xl">
              Stop reading fine print blindly. LegalShield scans terms & conditions in seconds, flags anti-consumer
              clauses, and translates legal jargon into plain English you can understand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/analysis">
                <button className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-foreground/60">AI-Powered Analysis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-1">10K+</p>
                <p className="text-sm text-foreground/60">Terms Analyzed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">2 Sec</p>
                <p className="text-sm text-foreground/60">Average Scan Time</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Premium Card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Critical Issues Detected</p>
                    <p className="text-sm text-foreground/60">2 high-risk clauses found</p>
                  </div>
                </div>
                <div className="border-t border-border/20 pt-6" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Warnings Identified</p>
                    <p className="text-sm text-foreground/60">4 medium-risk clauses</p>
                  </div>
                </div>
                <div className="border-t border-border/20 pt-6" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Risk Score</p>
                  <div className="w-full h-3 bg-border/30 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-destructive to-yellow-500 rounded-full" />
                  </div>
                  <p className="text-sm text-destructive font-semibold mt-2">64% - High Risk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
