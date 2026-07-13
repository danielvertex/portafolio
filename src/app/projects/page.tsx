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
  
  // Work in Progress
  {
    title: "Real Estate Data Pipeline",
    description: "Building an automated pipeline to scrape, clean, and analyze local real estate data for market trend visualization.",
    tech: ["Python", "BeautifulSoup", "SQL", "Streamlit"],
    status: "WIP",
    category: "Data",
    slug: "real-estate-pipeline",
    links: {},
    privacyLevel: "public"
  },
  {
    title: "Personal CRM Template",
    description: "Designing a lightweight, automation-first personal CRM using n8n and Notion to manage professional relationships.",
    tech: ["n8n", "Notion API", "Webhooks"],
    status: "WIP",
    category: "Automation",
    slug: "personal-crm",
    links: {},
    privacyLevel: "public"
  },

  // Selected Client Work (Anonymized)
  {
    title: "Automated Certificate Delivery",
    description: "Developed a system to automatically generate and email personalized PDF certificates to webinar attendees upon registration verification.",
    tech: ["n8n", "Google Sheets", "PDF Generator API", "Email API"],
    status: "Completed",
    category: "Automation",
    slug: "certificate-automation",
    links: {},
    privacyLevel: "private"
  },
  {
    title: "AI Social Media Pipeline",
    description: "Architected a fully automated content pipeline that triggers on a schedule, generates context-aware posts using AI, and publishes to multiple platforms.",
    tech: ["n8n", "OpenAI API", "LinkedIn API", "Twitter API"],
    status: "Completed",
    category: "Automation",
    slug: "social-media-automation",
    links: {},
    privacyLevel: "private"
  },
  {
    title: "Delivery Web App",
    description: "Frontend interface and order management system for a local cleaning supplies business. Streamlined the order fulfillment process.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    status: "Completed",
    category: "Web",
    slug: "delivery-webapp",
    links: {},
    privacyLevel: "private"
  },
  {
    title: "Golf Tournament Registration",
    description: "Built a custom registration portal for a local golf tournament, handling team signups, automated confirmations, and roster management.",
    tech: ["HTML/JS", "Form Backend", "Stripe"],
    status: "Completed",
    category: "Web",
    slug: "golf-registration",
    links: {},
    privacyLevel: "private"
  }
];

export default function ProjectsPage() {
  const publicProjects = allProjects.filter(p => p.privacyLevel === "public");
  const privateProjects = allProjects.filter(p => p.privacyLevel === "private");

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

      {/* Selected Client Work */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
           <h2 className="font-heading font-semibold text-2xl flex items-center gap-3">
            <span className="w-8 h-[1px] bg-border block"></span>
            Selected Client Work
          </h2>
          <span className="text-sm text-muted-2 md:ml-4 px-3 py-1 rounded-full border border-border/50 bg-surface/50 inline-block w-fit">
            Anonymized for privacy
          </span>
        </div>
       
        <div className="grid md:grid-cols-2 gap-6">
          {privateProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-8 rounded-xl border border-border bg-background glow-border flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle pattern for private projects */}
               <div
                  className="absolute inset-0 opacity-[0.015] pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #E6EDF3 0, #E6EDF3 1px, transparent 0, transparent 50%)",
                    backgroundSize: "10px 10px"
                  }}
                />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors pr-4">
                  {project.title}
                </h3>
                 <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-gray/10 text-accent-gray shrink-0 border border-accent-gray/20">
                    System Architecture
                  </span>
              </div>
              
              <p className="text-muted text-sm mb-8 leading-relaxed flex-grow relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
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
      </div>

    </div>
  );
}
