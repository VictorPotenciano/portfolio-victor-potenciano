import { ChevronDown } from "lucide-react";
import { Project } from "../../../typing";
import { slugify } from "@/lib/utils";

interface ProjectRowProps {
  project: Project;
  active: boolean;
  onSelect: () => void;
  variant?: "index" | "accordion";
}

const StatusDot = ({ live }: { live: boolean }) => (
  <span className="relative flex w-2 h-2 shrink-0">
    {live && (
      <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-60 animate-ping" />
    )}
    <span
      className={`relative inline-flex w-2 h-2 rounded-full ${
        live ? "bg-live" : "bg-accent"
      }`}
    />
  </span>
);

const ProjectRow = ({
  project,
  active,
  onSelect,
  variant = "index",
}: ProjectRowProps) => {
  const live = Boolean(project.url);
  const slug = slugify(project.name);

  if (variant === "accordion") {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-expanded={active}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer"
      >
        <span className="flex items-center gap-3 min-w-0">
          <StatusDot live={live} />
          <span className="min-w-0">
            <span className="block font-display font-semibold text-foreground truncate">
              {project.name}
            </span>
            {project.inDevelopment && (
              <span className="block font-mono text-[11px] text-accent">
                {project.inDevelopment}
              </span>
            )}
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${
            active ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-md font-mono text-sm text-left transition-colors duration-200 cursor-pointer border ${
        active
          ? "bg-surface-hover border-accent/40 text-foreground"
          : "border-transparent text-muted hover:text-foreground hover:bg-surface-hover/60"
      }`}
    >
      <span className="flex items-center gap-2 min-w-0">
        <StatusDot live={live} />
        <span className="truncate">{slug}</span>
      </span>
    </button>
  );
};

export default ProjectRow;
