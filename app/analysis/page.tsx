"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, LinkIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResultsSection from "@/components/results-section"

export default function AnalysisPage() {
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalysis = async (inputUrl: string) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const dummyResults = {
      url: inputUrl,
      overallRiskScore: Math.floor(Math.random() * 40) + 60,
      analyzedAt: new Date().toLocaleDateString(),
      criticalIssues: [
        {
          id: 1,
          severity: "critical",
          title: "Unlimited Liability Waiver",
          description: "Company claims full exemption from liability for data loss or service failures.",
          clause: '"Company shall not be liable for any indirect, incidental, or consequential damages."',
          recommendation: "Request specific liability caps and carve-outs for gross negligence.",
        },
        {
          id: 2,
          severity: "critical",
          title: "One-Sided Data Sharing Rights",
          description: "Your data can be shared with third parties without explicit consent.",
          clause: '"We may share your information with service providers and business partners."',
          recommendation: "Demand opt-in consent for non-essential data sharing.",
        },
      ],
      warnings: [
        {
          id: 3,
          severity: "warning",
          title: "Vague Termination Clause",
          description: "Company can terminate service without specific notice period.",
          clause: '"Company reserves the right to terminate service at any time."',
          recommendation: "Request minimum 30-day notice requirement.",
        },
        {
          id: 4,
          severity: "warning",
          title: "Automatic Renewal Hidden",
          description: "Subscription automatically renews without prominent reminder.",
          clause: '"Your subscription will automatically renew on the renewal date."',
          recommendation: "Look for clear reminder emails before renewal date.",
        },
      ],
      safe: [
        {
          id: 5,
          severity: "safe",
          title: "Clear Privacy Rights",
          description: "Users have clear rights to access and delete their data.",
          clause: '"You can request your data in a portable format or request deletion."',
        },
        {
          id: 6,
          severity: "safe",
          title: "Regular Updates Notice",
          description: "Company commits to 30-day notice before material changes.",
          clause: '"We will notify you 30 days before making material changes to these terms."',
        },
      ],
      summary: {
        totalClauses: 47,
        analyzed: 42,
        criticalCount: 2,
        warningCount: 2,
        safeCount: 2,
      },
    }

    setResults(dummyResults)
    setLoading(false)
  }

  const handleAnalyzeUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL")
      return
    }
    setError("")
    await handleAnalysis(url)
  }

  const handleAnalyzeText = async () => {
    if (!text.trim()) {
      setError("Please paste some text")
      return
    }
    setError("")
    await handleAnalysis(text.substring(0, 100))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Legal Analysis</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {!results ? (
            <>
              {/* Analysis Form */}
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60 -z-10" />

                <div className="rounded-2xl border border-border/50 backdrop-blur-sm bg-card/80 p-8 md:p-10 shadow-2xl">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Analyze Terms & Conditions</h2>
                    <p className="text-foreground/70 text-lg">
                      Paste a URL or text to identify anti-consumer clauses and risky data-sharing practices
                    </p>
                  </div>

                  <Tabs defaultValue="url" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary/50 p-1">
                      <TabsTrigger value="url" className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        Paste URL
                      </TabsTrigger>
                      <TabsTrigger value="text">Paste Text</TabsTrigger>
                    </TabsList>

                    <TabsContent value="url" className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-foreground">Website URL</label>
                        <div className="relative">
                          <input
                            type="url"
                            placeholder="https://example.com/terms-and-conditions"
                            value={url}
                            onChange={(e) => {
                              setUrl(e.target.value)
                              setError("")
                            }}
                            className="w-full px-4 py-4 pr-12 border border-border rounded-xl bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          />
                          <LinkIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                        </div>
                        <p className="text-sm text-foreground/50 mt-2">
                          We'll fetch and analyze the terms from this page
                        </p>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <span className="text-destructive">⚠️</span>
                          <p className="text-sm text-destructive">{error}</p>
                        </div>
                      )}

                      <button
                        onClick={handleAnalyzeUrl}
                        disabled={loading}
                        className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <span>🔍</span>
                            Scan for Red Flags
                          </>
                        )}
                      </button>
                    </TabsContent>

                    <TabsContent value="text" className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-foreground">
                          Terms & Conditions Text
                        </label>
                        <textarea
                          placeholder="Paste the full text of the terms and conditions here..."
                          value={text}
                          onChange={(e) => {
                            setText(e.target.value)
                            setError("")
                          }}
                          rows={8}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        />
                        <p className="text-sm text-foreground/50 mt-2 flex justify-between">
                          <span>{text.length} characters</span>
                          {text.length > 0 && <span className="text-accent">Ready to analyze</span>}
                        </p>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <span className="text-destructive">⚠️</span>
                          <p className="text-sm text-destructive">{error}</p>
                        </div>
                      )}

                      <button
                        onClick={handleAnalyzeText}
                        disabled={loading}
                        className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <span>🔍</span>
                            Scan for Red Flags
                          </>
                        )}
                      </button>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Quick tips */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-border/30 bg-card/30">
                  <p className="text-sm font-semibold text-foreground mb-1">⚡ Instant Analysis</p>
                  <p className="text-xs text-foreground/60">Get results in seconds, not hours</p>
                </div>
                <div className="p-4 rounded-lg border border-border/30 bg-card/30">
                  <p className="text-sm font-semibold text-foreground mb-1">🔒 100% Private</p>
                  <p className="text-xs text-foreground/60">Your data is never stored or shared</p>
                </div>
                <div className="p-4 rounded-lg border border-border/30 bg-card/30">
                  <p className="text-sm font-semibold text-foreground mb-1">📊 Detailed Report</p>
                  <p className="text-xs text-foreground/60">Get actionable recommendations</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">Analysis Results</h2>
                <button
                  onClick={() => setResults(null)}
                  className="px-6 py-2 border border-primary/30 text-foreground rounded-lg hover:bg-primary/5 transition-all font-semibold"
                >
                  Analyze Again
                </button>
              </div>
              <ResultsSection results={results} />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
