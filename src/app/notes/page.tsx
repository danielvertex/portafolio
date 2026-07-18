import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Notes",
  description: "Writing about data analysis, automation, and systems engineering.",
};

export default function NotesPage() {
  const notesDir = path.join(process.cwd(), "content", "notes");
  let notes: any[] = [];

  if (fs.existsSync(notesDir)) {
    const files = fs.readdirSync(notesDir);
    notes = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(notesDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        return {
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          category: data.category || "",
          slug: file.replace(".mdx", ""),
          tags: data.tags || [],
        };
      })
      // Sort by date descending
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
      >
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

            <p className="text-muted leading-relaxed mb-6">
              {note.description}
            </p>

            {note.tags && note.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {note.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-background text-muted-2 border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
