"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Loader2, LinkIcon } from "lucide-react"

interface AnalyzerFormProps {
  onAnalyze: (url: string) => Promise<void>
  loading: boolean
}

export default function AnalyzerForm({ onAnalyze, loading }: AnalyzerFormProps) {
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [error, setError] = useState("")

  const handleAnalyzeUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL")
      return
    }
    setError("")
    await onAnalyze(url)
  }

  const handleAnalyzeText = async () => {
    if (!text.trim()) {
      setError("Please paste some text")
      return
    }
    setError("")
    await onAnalyze(text.substring(0, 100))
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60 -z-10" />

          <div className="rounded-2xl border border-border/50 backdrop-blur-sm bg-card/80 p-8 md:p-10 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Scan Any Terms & Conditions</h2>
              <p className="text-foreground/70 text-lg">
                Paste a URL or text to instantly identify anti-consumer clauses, hidden fees, and risky data-sharing
                practices
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
                  <p className="text-sm text-foreground/50 mt-2">We'll fetch and analyze the terms from this page</p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-destructive" />
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
                  <label className="block text-sm font-semibold mb-3 text-foreground">Terms & Conditions Text</label>
                  <textarea
                    placeholder="Paste the full text of the terms and conditions here... We'll analyze it for risk factors and anti-consumer clauses."
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
                    <AlertCircle className="w-4 h-4 text-destructive" />
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    </section>
  )
}
