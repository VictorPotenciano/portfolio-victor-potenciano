import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Project, TranslationKeys } from "../../../typing";
import { slugify } from "@/lib/utils";

interface ProjectDetailProps {
  project: Project;
  t: TranslationKeys;
  compact?: boolean;
}

const ProjectDetail = ({ project, t, compact = false }: ProjectDetailProps) => {
  const live = Boolean(project.url);

  return (
    <div>
      {!compact && (
        <>
          <p className="font-mono text-xs text-muted mb-3">
            ~/projects/{slugify(project.name)}
          </p>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {project.name}
            </h3>
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded-full border ${
                live
                  ? "border-live/40 text-live"
                  : "border-accent/40 text-accent"
              }`}
            >
              {live ? "live" : project.inDevelopment ?? "dev"}
            </span>
          </div>
        </>
      )}

      <div className="space-y-3">
        <p className="text-foreground/90 leading-relaxed">
          {project.description1}
        </p>
        <p className="text-muted leading-relaxed text-sm">
          {project.description2}
        </p>
      </div>

      <div className="mt-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3">
          {t.projects.techUsed}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md border border-line text-foreground/80"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${technology.color}`} />
              {technology.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-7">
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            {t.projects.button}
          </Link>
        )}
        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-line text-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            {t.projects.code}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
