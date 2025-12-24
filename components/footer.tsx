import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-secondary/20 to-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                ⚖️
              </div>
              <h3 className="font-bold text-lg">LegalShield</h3>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Your AI-powered digital lawyer for understanding terms and conditions. Protect yourself from unfair
              clauses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/60">© {currentYear} LegalShield. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="inline-flex p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
