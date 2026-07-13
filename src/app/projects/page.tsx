import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my work in data analysis, automation, and digital operations.",
};

const allProjects = [
  // Completed Public Projects
  {
    title: "Google Data Analytics Capstone",
    description: "End-to-end case study in R analyzing user behavior for a bike-share company. Cleaned, analyzed, and visualized data to provide strategic recommendations.",
    tech: ["R", "ggplot2", "Data Cleaning", "Data Visualization"],
    status: "Completed",
    category: "Data",
    slug: "google-capstone",
    links: {
      github: "https://github.com/danielvertex/google-data-analytics",
    },
    privacyLevel: "public"
  },
  {
    title: "Ticker Information CLI",
    description: "Financial analysis tool built with Python and yfinance. Allows users to fetch stock data, validate tickers, and generate visual comparisons of two stocks.",
    tech: ["Python", "yfinance", "CLI", "Matplotlib"],
    status: "Completed",
    category: "Data",
    slug: "ticker-information",
    links: {
      github: "https://github.com/danielvertex/cs50p-project",
    },
    privacyLevel: "public"
  },
  


];

export default function ProjectsPage() {
  const publicProjects = allProjects.filter(p => p.privacyLevel === "public");

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">All Projects</h1>
      <p className="text-muted text-lg max-w-3xl mb-16 leading-relaxed">
        A collection of case studies, tools, and systems I&apos;ve built. Includes personal data analysis projects and anonymized architectures from client work.
      </p>

      {/* Public Projects & WIP */}
      <div className="mb-20">
        <h2 className="font-heading font-semibold text-2xl mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-border block"></span>
          Personal & Public Work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {publicProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-8 rounded-xl border border-border bg-surface glow-border flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.status === "WIP" ? (
                   <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-amber/10 text-accent-amber shrink-0">
                    WIP
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-green/10 text-accent-green shrink-0">
                    Completed
                  </span>
                )}
              </div>
              
              <p className="text-muted text-sm mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded bg-background text-muted-2 border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>



    </div>
  );
}
