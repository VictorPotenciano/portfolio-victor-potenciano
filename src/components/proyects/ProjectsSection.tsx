"use client";

import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";
import ProjectCard from "./ProjectCard";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-16 lg:py-36 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Animación de título con efecto de onda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-2"
          >
            {t.projects.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t.projects.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full origin-left"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          className="max-h-[600px] overflow-y-auto space-y-6 px-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-100"
        >
          {t.projects.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }} 
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
                delay: index * 0.15, 
              }}
              whileHover="hover"
              variants={cardVariants} 
              onClick={() => setSelectedProject(index)}
              className="cursor-pointer my-4"
            >
              <ProjectCard project={project} t={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dialog con información completa */}
        <ProjectDialog
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          t={t}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
