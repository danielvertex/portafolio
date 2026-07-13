import { ArrowRight } from "lucide-react";
import Link from "next/link";

const previewProjects = [
  {
    title: "Google Data Analytics Capstone",
    description: "End-to-end case study in R: user behavior analysis, data cleaning, and strategic recommendations.",
    tech: ["R", "Data Visualization", "Analysis"],
    status: "Completed",
    slug: "google-capstone",
  },
  {
    title: "Ticker Information CLI",
    description: "Financial analysis tool built with Python and yfinance for visual stock comparison and validation.",
    tech: ["Python", "yfinance", "CLI", "Financial Data"],
    status: "Completed",
    slug: "ticker-information",
  }
];

export function ProjectsPreview() {
  return (
    <section id="projects" className="section-padding border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading font-bold text-2xl flex items-center gap-3">
            <span className="text-accent font-mono text-base">04.</span>
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {previewProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-6 rounded-xl border border-border bg-background glow-border"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-green/10 text-accent-green">
                  {project.status}
                </span>
              </div>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded bg-surface text-muted-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
           <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
