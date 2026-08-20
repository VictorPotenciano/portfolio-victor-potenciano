import { motion, Variants } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { TranslationKeys } from "../../../typing";
import { useState } from "react";

interface ExperienceCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const isCurrentJob = (period: string) => /actualidad|present/i.test(period);

const ExperienceCard = ({ cardVariants, t }: ExperienceCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div variants={cardVariants}>
      <div className="max-w-6xl mx-auto bg-surface rounded-xl border border-line overflow-hidden">
        <div className="flex items-center gap-3 px-6 sm:px-10 pt-8 sm:pt-10 pb-6">
          <Briefcase className="w-5 h-5 text-accent" />
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            {t.about.experience.title}
          </h3>
        </div>

        <div className="px-6 sm:px-10 pb-8 sm:pb-10 relative">
          {/* Línea del log */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[26px] sm:left-[30px] top-2 bottom-8 w-px bg-line origin-top"
          />

          <div className="space-y-8">
            {t.about.experience.jobs.map((job, index) => {
              const isExpanded = expandedIndex === index;
              const current = isCurrentJob(job.period);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pl-14 sm:pl-16"
                >
                  {/* Nodo */}
                  <span
                    className={`absolute left-[20px] sm:left-[24px] top-2 w-3 h-3 rounded-[3px] border-2 ${
                      current
                        ? "bg-accent border-accent"
                        : "bg-ink border-line"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left rounded-lg hover:bg-surface-hover transition-colors duration-300 -ml-3 pl-3 py-2 pr-3 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm">
                          <span className={current ? "text-accent" : "text-muted"}>
                            {job.period}
                          </span>
                        </div>
                        <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mt-1">
                          {job.position}
                        </h4>
                        <p className="text-sm text-muted mt-0.5">
                          <span className="text-foreground/80 font-medium">
                            {job.company}
                          </span>{" "}
                          · {job.location}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 text-muted mt-1"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted leading-relaxed text-sm sm:text-base pt-3 pb-1 pl-3">
                      {job.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
