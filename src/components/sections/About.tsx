export function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
          <span className="text-accent font-mono text-base">01.</span>
          About
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Engineer by training, analyst by practice. My background in
              mechanical design gave me a systematic way of approaching
              problems — that same structure now applies to data pipelines,
              automation flows, and digital operations.
            </p>
            <p>
              I work with Python, R, SQL, n8n, and GoHighLevel to build systems
              that measure, automate, and scale. Whether it&apos;s a data case study
              or a full automation flow for a client, I think in processes first.
            </p>
            <p>
              Looking for roles where technical depth and execution matter —
              data analysis, process automation, or digital operations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-border bg-surface">
              <p className="text-xs text-muted-2 uppercase tracking-wider mb-1">
                Background
              </p>
              <p className="text-sm text-foreground">
                B.Sc. Mechanical Design Engineering
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-surface">
              <p className="text-xs text-muted-2 uppercase tracking-wider mb-1">
                Focus
              </p>
              <p className="text-sm text-foreground">
                Data Analysis · Automation · Digital Ops
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-surface">
              <p className="text-xs text-muted-2 uppercase tracking-wider mb-1">
                Languages
              </p>
              <p className="text-sm text-foreground">
                Spanish (Native) · English
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
