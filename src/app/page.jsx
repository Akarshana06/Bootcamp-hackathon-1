'use client';

import { useState } from 'react';
import { Search, FileText, Scale, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const analyzeClause = async () => {
    if (!inputText.trim()) {
      setError('Please enter a legal clause to analyze');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response - in a real app, this would come from your API
      setAnalysisResult({
        summary: 'This appears to be a standard confidentiality clause commonly found in non-disclosure agreements.',
        keyPoints: [
          'Defines confidential information',
          'Outlines obligations of the receiving party',
          'Specifies duration of confidentiality',
          'Includes exceptions to confidentiality'
        ],
        riskAssessment: 'Medium Risk',
        suggestions: [
          'Consider adding a return or destruction clause for confidential information',
          'Specify remedies for breach of confidentiality',
          'Define the governing law and jurisdiction',
          'Consider adding an indemnification clause'
        ]
      });
    } catch (err) {
      setError('Failed to analyze the clause. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    analyzeClause();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Legal Clause Analyzer
              </h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Templates</a></li>
                <li><a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              AI-Powered Legal Clause Analysis
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get instant insights, risk assessments, and suggestions for any legal clause in seconds.
            </p>
            
            <div className="bg-card p-1 rounded-xl shadow-lg max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <textarea
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200 resize-none min-h-[120px]"
                    placeholder="Paste your legal clause here (e.g., 'The Receiving Party shall keep confidential all Confidential Information...')"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={isAnalyzing}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze Clause
                    </>
                  )}
                </button>
              </form>
              
              {error && (
                <div className="mt-3 p-3 bg-destructive/10 text-destructive text-sm rounded-lg flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {analysisResult && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-primary/5 to-primary/20">
                <div className="bg-card p-6">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    Analysis Results
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">SUMMARY</h4>
                      <p className="text-foreground">{analysisResult.summary}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">KEY POINTS</h4>
                        <ul className="space-y-2">
                          {analysisResult.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">RISK ASSESSMENT</h4>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          {analysisResult.riskAssessment}
                        </div>
                        
                        <h4 className="text-sm font-medium text-muted-foreground mt-6 mb-3">SUGGESTIONS</h4>
                        <ul className="space-y-2">
                          {analysisResult.suggestions.map((suggestion, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <button 
                      onClick={() => setAnalysisResult(null)}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      ← Analyze another clause
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {!analysisResult && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI analyzes legal clauses to help you understand risks, identify key terms, and get actionable suggestions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <FileText className="h-8 w-8 text-primary" />,
                  title: 'Paste Your Clause',
                  description: 'Copy and paste any legal clause into our analyzer.'
                },
                {
                  icon: <Search className="h-8 w-8 text-primary" />,
                  title: 'AI Analysis',
                  description: 'Our AI processes the text to identify key elements and potential issues.'
                },
                {
                  icon: <Scale className="h-8 w-8 text-primary" />,
                  title: 'Get Insights',
                  description: 'Receive a detailed breakdown with risk assessment and suggestions.'
                }
              ].map((feature, i) => (
                <div key={i} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary/20 transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-medium">Legal Clause Analyzer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Legal Clause Analyzer. Not legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}
