import { CheckCircle2 } from "lucide-react";

export function Stack() {
  const stackCategories = [
    {
      title: "Data & Analytics",
      skills: ["Python (Pandas, yfinance)", "R", "SQL", "Data Visualization"],
    },
    {
      title: "Automation & Integration",
      skills: ["n8n", "Webhooks", "REST APIs", "Process Mapping"],
    },
    {
      title: "Digital Ops & CRM",
      skills: ["GoHighLevel", "Pipelines", "Payment Gateways", "System Architecture"],
    },
    {
      title: "Web & Foundations",
      skills: ["HTML/CSS/JS", "Next.js", "Git / GitHub", "Mechanical Engineering"],
    },
  ];

  return (
    <section id="stack" className="section-padding border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
          <span className="text-accent font-mono text-base">02.</span>
          Technical Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-border bg-background glow-border animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-accent-blue mt-0.5 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
