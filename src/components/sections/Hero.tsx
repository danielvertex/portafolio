import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider">
            Hello, I&apos;m
          </p>
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 font-heading font-bold text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
          Daniel Herrera
        </h1>

        <p className="animate-fade-in-up animation-delay-200 text-xl md:text-2xl text-muted max-w-2xl mb-4 leading-relaxed">
          Data Analyst & Automation Specialist
        </p>

        <p className="animate-fade-in-up animation-delay-300 text-base md:text-lg text-muted-2 max-w-xl mb-3">
          Analytical thinker. Engineering foundation. Systems-first approach.
        </p>

        <div className="animate-fade-in-up animation-delay-400 flex flex-wrap items-center gap-2 mb-10">
          {["Python", "R", "SQL", "n8n", "GoHighLevel"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="animate-fade-in-up animation-delay-500 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-[#0D0F12] font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            See projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
            <ArrowDown size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
