import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-heading font-bold mt-10 mb-6 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-foreground" {...props} />,
  p: (props: any) => <p className="text-muted leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-muted space-y-2 mb-6" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const filePath = path.join(process.cwd(), 'content', 'notes', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      title: `${data.title} | Technical Notes`,
      description: data.description,
    };
  } catch (e) {
    return {
      title: 'Note Not Found',
    };
  }
}

export async function generateStaticParams() {
  const notesDir = path.join(process.cwd(), 'content', 'notes');
  
  if (!fs.existsSync(notesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(notesDir);
  return files
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
    }));
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'notes', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <Link href="/notes" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10">
        <ArrowLeft size={16} /> Back to Notes
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 text-sm text-muted mb-6 font-mono">
          <span>{data.date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-accent-violet flex items-center gap-1">
            <BookOpen size={14} /> {data.category}
          </span>
        </div>
        
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight text-foreground">
          {data.title}
        </h1>
        
        <p className="text-xl text-muted leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="w-full h-[1px] bg-border mb-12" />

      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
