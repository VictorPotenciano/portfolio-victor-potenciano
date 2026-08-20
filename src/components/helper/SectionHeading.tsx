"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  path: string;
  subtitle: string;
  title: string;
  align?: "center" | "left";
}

const SectionHeading = ({
  path,
  subtitle,
  title,
  align = "center",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-12 lg:mb-16 ${isCenter ? "text-center" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-2 mb-4 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-6 bg-line" aria-hidden="true" />
        <span className="font-mono text-xs sm:text-sm tracking-wide text-accent">
          {path}
        </span>
      </div>
      <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-muted mb-3">
        {subtitle}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={`block h-0.5 w-16 bg-accent mt-5 rounded-full origin-left ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
