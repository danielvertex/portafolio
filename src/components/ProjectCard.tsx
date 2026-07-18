import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  status: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  status,
  slug,
}: ProjectCardProps) {
  // Fallback if no thumbnail is specified
  const imageUrl = thumbnail || "/thumbnails/projects/default.png";

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-xl border border-border bg-surface glow-border flex flex-col h-full overflow-hidden hover:border-border-hover transition-colors"
    >
      <div className="relative w-full aspect-video bg-background overflow-hidden border-b border-border/50">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          {status === "WIP" ? (
            <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-amber/10 text-accent-amber shrink-0">
              WIP
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm bg-accent-green/10 text-accent-green shrink-0">
              Completed
            </span>
          )}
        </div>
        
        <p className="text-muted text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 rounded bg-background text-muted-2 border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
