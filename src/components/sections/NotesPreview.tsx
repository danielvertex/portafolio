import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function NotesPreview() {
  return (
    <section id="notes" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading font-bold text-2xl flex items-center gap-3">
            <span className="text-accent font-mono text-base">05.</span>
            Technical Notes
          </h2>
          <Link
            href="/notes"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            Read all notes <ArrowRight size={16} />
          </Link>
        </div>

        <Link
          href="/notes/cinco-pasos-analisis-estadistico"
          className="group block p-8 rounded-xl border border-border bg-surface glow-border"
        >
          <div className="flex items-center gap-3 text-xs text-muted mb-4 font-mono">
            <span>Mar 2025</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent-violet flex items-center gap-1">
              <BookOpen size={12} /> Data Analysis
            </span>
          </div>
          
          <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors mb-3">
            Cinco pasos para hacer un análisis estadístico (Migrated)
          </h3>
          
          <p className="text-muted leading-relaxed max-w-3xl mb-6">
            A structured framework for approaching statistical analysis projects. From defining the core question to selecting the right models and presenting actionable results to stakeholders.
          </p>
          
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read note <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <div className="md:hidden mt-6">
           <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Read all notes <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
