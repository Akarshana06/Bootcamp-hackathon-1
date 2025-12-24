"use client"

import { AlertCircle, CheckCircle2, AlertTriangle, FileText } from "lucide-react"

interface Clause {
  id: number
  severity: "critical" | "warning" | "safe"
  title: string
  description: string
  clause?: string
  recommendation?: string
}

interface Results {
  url: string
  overallRiskScore: number
  analyzedAt: string
  criticalIssues: Clause[]
  warnings: Clause[]
  safe: Clause[]
  summary: {
    totalClauses: number
    analyzed: number
    criticalCount: number
    warningCount: number
    safeCount: number
  }
}

export default function ResultsSection({ results }: { results: Results }) {
  const getRiskColor = (score: number) => {
    if (score >= 75) return "from-destructive to-red-600"
    if (score >= 50) return "from-yellow-500 to-orange-500"
    return "from-accent to-green-500"
  }

  const getRiskLabel = (score: number) => {
    if (score >= 75) return "High Risk"
    if (score >= 50) return "Medium Risk"
    return "Low Risk"
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Analysis Results</h2>
          <p className="text-foreground/60 text-lg">Detailed breakdown of findings from {results.url}</p>
        </div>

        {/* Risk Score Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Overall Risk */}
          <div className="relative md:col-span-1 overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative">
              <p className="text-foreground/60 text-sm font-medium mb-4">Overall Risk Score</p>
              <div className="flex items-end gap-4">
                <div
                  className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getRiskColor(results.overallRiskScore)}`}
                >
                  {results.overallRiskScore}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-foreground">{getRiskLabel(results.overallRiskScore)}</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-6 w-full h-2 bg-border/30 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getRiskColor(results.overallRiskScore)} transition-all duration-500`}
                  style={{ width: `${results.overallRiskScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <p className="text-sm font-medium text-foreground/60">Critical Issues</p>
              </div>
              <p className="text-4xl font-bold text-destructive">{results.summary.criticalCount}</p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <p className="text-sm font-medium text-foreground/60">Warnings</p>
              </div>
              <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">{results.summary.warningCount}</p>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <p className="text-sm font-medium text-foreground/60">Safe Clauses</p>
              </div>
              <p className="text-4xl font-bold text-accent">{results.summary.safeCount}</p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-primary" />
                <p className="text-sm font-medium text-foreground/60">Total Analyzed</p>
              </div>
              <p className="text-4xl font-bold text-primary">{results.summary.analyzed}</p>
            </div>
          </div>
        </div>

        {/* Critical Issues */}
        {results.criticalIssues.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              Critical Issues ({results.criticalIssues.length})
            </h3>
            <div className="space-y-4">
              {results.criticalIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 hover:bg-destructive/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-foreground mb-2">{issue.title}</h4>
                      <p className="text-foreground/70 mb-4">{issue.description}</p>
                      {issue.clause && (
                        <div className="mb-4 p-3 bg-background/50 rounded-lg border-l-4 border-destructive">
                          <p className="text-sm font-mono text-foreground/60">"{issue.clause}"</p>
                        </div>
                      )}
                      {issue.recommendation && (
                        <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                          <p className="text-sm font-semibold text-primary mb-1">Recommendation</p>
                          <p className="text-sm text-primary/80">{issue.recommendation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
        {results.warnings.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-600 dark:bg-yellow-400" />
              Warnings ({results.warnings.length})
            </h3>
            <div className="space-y-4">
              {results.warnings.map((warning) => (
                <div
                  key={warning.id}
                  className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6 hover:bg-yellow-500/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-foreground mb-2">{warning.title}</h4>
                      <p className="text-foreground/70 mb-4">{warning.description}</p>
                      {warning.clause && (
                        <div className="mb-4 p-3 bg-background/50 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400">
                          <p className="text-sm font-mono text-foreground/60">"{warning.clause}"</p>
                        </div>
                      )}
                      {warning.recommendation && (
                        <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                          <p className="text-sm font-semibold text-accent mb-1">Recommendation</p>
                          <p className="text-sm text-accent/80">{warning.recommendation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safe Clauses */}
        {results.safe.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Safe Clauses ({results.safe.length})
            </h3>
            <div className="space-y-4">
              {results.safe.map((safe) => (
                <div
                  key={safe.id}
                  className="rounded-xl border border-accent/30 bg-accent/5 p-6 hover:bg-accent/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-foreground mb-2">{safe.title}</h4>
                      <p className="text-foreground/70">{safe.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
