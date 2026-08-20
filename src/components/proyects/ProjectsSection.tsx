"use client";

import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectRow from "./ProjectRow";
import ProjectDetail from "./ProjectDetail";
import SectionHeading from "@/components/helper/SectionHeading";

const translations: { [key: string]: TranslationKeys } = { es, en };

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = t.projects.projects;

  const [selected, setSelected] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          path="~/projects"
          subtitle={t.projects.subtitle}
          title={t.projects.title}
        />

        {/* Explorador de escritorio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:grid grid-cols-[280px_1fr] max-w-6xl mx-auto rounded-xl border border-line bg-surface/40 overflow-hidden"
        >
          <div className="border-r border-line p-3 max-h-[560px] overflow-y-auto thin-scroll">
            <p className="font-mono text-[11px] text-muted px-3 pb-2 pt-1">
              ~/projects
            </p>
            <div className="space-y-1">
              {projects.map((project, index) => (
                <ProjectRow
                  key={index}
                  project={project}
                  active={index === selected}
                  onSelect={() => setSelected(index)}
                />
              ))}
            </div>
          </div>

          <div className="p-8 lg:p-10 min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectDetail project={projects[selected]} t={t} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Acordeón móvil/tablet */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-3">
          {projects.map((project, index) => {
            const isOpen = expandedMobile === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="rounded-xl border border-line bg-surface overflow-hidden"
              >
                <ProjectRow
                  project={project}
                  active={isOpen}
                  onSelect={() => setExpandedMobile(isOpen ? null : index)}
                  variant="accordion"
                />
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 pt-1 border-t border-line">
                    <div className="pt-4">
                      <ProjectDetail project={project} t={t} compact />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
