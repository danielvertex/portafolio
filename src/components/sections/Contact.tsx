import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Ready to build something?
        </h2>
        
        <p className="text-muted md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need to extract insights from raw data, automate a manual process, or set up a robust CRM architecture — let&apos;s talk about your next project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ag.herreradaniel@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            <Mail size={18} />
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-herrera-aguirre"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <FaLinkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
