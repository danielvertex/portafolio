import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from 'next';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-heading font-bold mt-12 mb-6 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-foreground border-b border-border pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-heading font-semibold mt-8 mb-4 text-foreground" {...props} />,
  p: (props: any) => <p className="text-muted leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-muted space-y-2 mb-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-muted space-y-2 mb-6" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-accent pl-4 italic text-muted my-6" {...props} />,
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      title: `${data.title} | Projects`,
      description: data.description,
    };
  } catch (e) {
    return {
      title: 'Project Not Found',
    };
  }
}

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), 'content', 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(projectsDir);
  return files
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
    }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 text-sm mb-6 font-mono">
           {data.status === "WIP" ? (
              <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-amber/10 text-accent-amber">
              WIP
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-green/10 text-accent-green">
              Completed
            </span>
          )}
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-muted-2">{data.category}</span>
        </div>
        
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight text-foreground">
          {data.title}
        </h1>
        
        <p className="text-xl text-muted leading-relaxed mb-8">
          {data.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
            {data.github && (
              <a 
                href={data.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface border border-border text-foreground text-sm hover:border-accent transition-colors"
              >
                <FaGithub size={16} /> View Code
              </a>
            )}
             {data.demo && (
              <a 
                href={data.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-background font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
        </div>
      </div>

      <div className="w-full h-[1px] bg-border mb-12" />

      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
