import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my work in data analysis, automation, and digital operations.",
};

export default function ProjectsPage() {
  const projectsDir = path.join(process.cwd(), "content", "projects");
  let projects: any[] = [];

  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir);
    projects = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(projectsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        return {
          title: data.title || "",
          description: data.description || "",
          thumbnail: data.thumbnail || "",
          tags: data.tags || [],
          status: data.status || "",
          featured: data.featured || false,
          slug: file.replace(".mdx", ""),
          date: data.date || "",
        };
      })
      // Sort by date descending
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
      >
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
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
              status={project.status}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
