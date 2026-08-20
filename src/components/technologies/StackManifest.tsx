"use client";

import { motion, Variants } from "framer-motion";
import { Bolt, LayoutDashboard, Server } from "lucide-react";
import { TechnologyCategory } from "../../../typing";

interface StackManifestProps {
  technologies: TechnologyCategory[];
}

type Row =
  | { kind: "comment"; icon: typeof LayoutDashboard; label: string }
  | { kind: "item"; name: string; level: string }
  | { kind: "blank" };

const levelToDots = (level: string) => {
  switch (level) {
    case "Básico":
    case "Beginner":
      return 1;
    case "Intermedio":
    case "Intermediate":
      return 2;
    case "Experto":
    case "Expert":
      return 3;
    default:
      return 1;
  }
};

const getAvatarIcon = (avatar: string) => {
  switch (avatar) {
    case "server":
      return Server;
    case "tools":
      return Bolt;
    case "layout":
    default:
      return LayoutDashboard;
  }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.02, delayChildren: 0.1 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const StackManifest = ({ technologies }: StackManifestProps) => {
  const rows: Row[] = [];
  technologies.forEach((category, categoryIndex) => {
    if (categoryIndex > 0) rows.push({ kind: "blank" });
    rows.push({
      kind: "comment",
      icon: getAvatarIcon(category.avatar),
      label: category.title,
    });
    category.items.forEach((item) => {
      rows.push({ kind: "item", name: item.name, level: item.level });
    });
  });

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-line bg-surface overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
        </span>
        <span className="font-mono text-xs text-muted ml-2">
          stack.manifest
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="p-5 sm:p-8 font-mono text-sm overflow-x-auto"
      >
        {rows.map((row, index) => {
          const lineNumber = String(index + 1).padStart(2, "0");

          if (row.kind === "blank") {
            return (
              <div key={index} className="flex h-5">
                <span
                  className="w-7 shrink-0 text-muted select-none"
                  aria-hidden="true"
                >
                  {lineNumber}
                </span>
              </div>
            );
          }

          if (row.kind === "comment") {
            const Icon = row.icon;
            return (
              <motion.div
                key={index}
                variants={rowVariants}
                className="flex items-center gap-2 py-1.5 mt-2 first:mt-0"
              >
                <span
                  className="w-7 shrink-0 text-muted select-none"
                  aria-hidden="true"
                >
                  {lineNumber}
                </span>
                <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-accent whitespace-nowrap">
                  {`// ${row.label}`}
                </span>
              </motion.div>
            );
          }

          const filled = levelToDots(row.level);
          return (
            <motion.div
              key={index}
              variants={rowVariants}
              className="flex items-center gap-3 py-1"
            >
              <span
                className="w-7 shrink-0 text-muted select-none"
                aria-hidden="true"
              >
                {lineNumber}
              </span>
              <span className="text-foreground/85 flex-1 min-w-0 pl-1">
                {row.name}
              </span>
              <span
                className="flex items-center gap-1 shrink-0"
                title={row.level}
                role="img"
                aria-label={row.level}
              >
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full ${
                      dot < filled ? "bg-accent" : "bg-line"
                    }`}
                  />
                ))}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default StackManifest;
