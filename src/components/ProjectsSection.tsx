"use client";

import { ExternalLink, Github, LayoutDashboard } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../typing";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const cardItemsVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const buttonItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
          className="grid gap-8 lg:grid-cols-3 grid-cols-1 w-full mx-auto justify-center"
        >
          {t.projects.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="flex flex-col h-full bg-white border border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-purple-600/10 to-blue-600/5">
                <CardHeader>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <LayoutDashboard className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">
                      {project.name}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <motion.div
                    className="prose prose-lg max-w-none mb-4 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      {project.description1}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description2}
                    </p>
                  </motion.div>

                  {/* Sección de tecnologías */}
                  <motion.div
                    className="mt-auto pt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      {t.projects.techUsed}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology, techIndex) => (
                        <motion.div
                          key={techIndex}
                          variants={cardItemsVariants}
                          custom={techIndex}
                          whileHover="hover"
                        >
                          <Badge
                            className={`${technology.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {technology.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>

                <CardFooter>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardItemsVariants}
                    className="flex flex-wrap items-center justify-center gap-4 w-full"
                  >
                    <motion.div
                      variants={buttonItemVariants}
                      whileHover="hover"
                    >
                      <Link
                        href={project.url}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {t.projects.button}
                      </Link>
                    </motion.div>

                    {project.code && (
                      <motion.div
                        variants={buttonItemVariants}
                        whileHover="hover"
                      >
                        <Link
                          href={project.code}
                          className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          {t.projects.code}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
