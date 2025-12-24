"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AnalyzerForm from "@/components/analyzer-form"
import ResultsSection from "@/components/results-section"
import FeaturesGrid from "@/components/features-grid"
import HowItWorks from "@/components/how-it-works"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalysis = async (url: string) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const dummyResults = {
      url,
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

    // Scroll to results
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <AnalyzerForm onAnalyze={handleAnalysis} loading={loading} />
      {results && <ResultsSection results={results} />}
      <div id="features">
        <FeaturesGrid />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </main>
  )
}
