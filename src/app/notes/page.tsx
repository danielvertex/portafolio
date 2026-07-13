import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Notes",
  description: "Writing about data analysis, automation, and systems engineering.",
};

const notes = [
  {
    title: "Cinco pasos para hacer un análisis estadístico (Migrated)",
    description: "A structured framework for approaching statistical analysis projects. From defining the core question to selecting the right models and presenting actionable results to stakeholders.",
    date: "Mar 2025",
    category: "Data Analysis",
    slug: "cinco-pasos-analisis-estadistico",
  }
];

export default function NotesPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Technical Notes</h1>
      <p className="text-muted text-lg mb-16 leading-relaxed">
        Occasional writing on data analysis, process automation, and how to build better systems.
      </p>

      <div className="space-y-6">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group block p-8 rounded-xl border border-border bg-surface glow-border"
          >
            <div className="flex items-center gap-3 text-xs text-muted mb-4 font-mono">
              <span>{note.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-accent-violet flex items-center gap-1">
                <BookOpen size={12} /> {note.category}
              </span>
            </div>
            
            <h2 className="font-heading font-semibold text-2xl text-foreground group-hover:text-accent transition-colors mb-3">
              {note.title}
            </h2>
            
            <p className="text-muted leading-relaxed mb-0">
              {note.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
