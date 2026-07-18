import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
          <span className="text-accent font-mono text-base">03.</span>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Certification */}
          <div className="p-6 rounded-xl border border-border bg-surface glow-border flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
              <Award className="text-accent-blue" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Google Data Analytics Professional Certificate
              </h3>
              <p className="text-sm text-muted mb-4">Coursera • Issued 2024</p>
              <Link
                href="https://www.coursera.org/account/accomplishments/professional-cert/V7ZBV9IUKFAV"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Credential <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          {/* CS50 Certification */}
          <div className="p-6 rounded-xl border border-border bg-surface glow-border flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
              <Award className="text-accent-blue" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                CS50's Introduction to Programming with Python
              </h3>
              <p className="text-sm text-muted mb-4">CS50 • Issued Dec 2023 • ID: 0eeb79a0-7af9-4a9a-b389-2601a3bcbc43</p>
              <Link
                href="https://certificates.cs50.io/0eeb79a0-7af9-4a9a-b389-2601a3bcbc43.pdf?size=letter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Credential <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          {/* freeCodeCamp Certification */}
          <div className="p-6 rounded-xl border border-border bg-surface glow-border flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
              <Award className="text-accent-blue" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Data Analysis with Python
              </h3>
              <p className="text-sm text-muted mb-4">freeCodeCamp • Issued Jan 2025 • ID: daniel_herrera_aguirre-dawp</p>
              <Link
                href="https://freecodecamp.org/certification/daniel_herrera_aguirre/data-analysis-with-python-v7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Credential <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
