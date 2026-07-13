import { Mail, ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    href: "mailto:ag.herreradaniel@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/daniel-herrera-aguirre",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.kaggle.com/danielphi",
    label: "Kaggle",
    icon: ExternalLink,
  },
  {
    href: "https://bsky.app/profile/danielvertex.bsky.social",
    label: "Bluesky",
    icon: ExternalLink,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Daniel Herrera. Built with Next.js.
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
