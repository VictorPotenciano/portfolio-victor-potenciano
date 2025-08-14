"use client";

import { BadgeCheck, Bolt, LayoutDashboard, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../typing";
import { motion, Variants } from "framer-motion";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardHoverVariants: Variants = {
  hover: (custom: number) => ({
    y: custom,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  rest: { y: 0 },
};

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Función para mapear el nivel a color
  const getLevelColor = (level: string) => {
    if (language === "es") {
      switch (level) {
        case "Intermedio":
          return "text-purple-600";
        case "Básico":
          return "text-blue-600";
        case "Experto":
          return "text-emerald-600";
        default:
          return "text-gray-600";
      }
    }
    // Niveles en inglés
    else {
      switch (level) {
        case "Intermediate":
          return "text-purple-600";
        case "Beginner":
          return "text-blue-600";
        case "Expert":
          return "text-emerald-600";
        default:
          return "text-gray-600";
      }
    }
  };
  // Función para mapear el icono segun la tecnologia
  const getTechnologyAvatar = (avatar: string) => {
    switch (avatar) {
      case "layout":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-8 h-8 text-white" />
          </div>
        );
      case "server":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Server className="w-8 h-8 text-white" />
          </div>
        );
      case "tools":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bolt className="w-8 h-8 text-white" />
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-8 h-8 text-white" />
          </div>
        );
    }
  };

  return (
    <section
      id="experience"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
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
            {t.technologies.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t.technologies.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full origin-left"
          />
        </motion.div>

        {/* Contenedor de tarjetas con animación escalonada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {t.technologies.technology.map((technology, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              whileHover="hover"
            >
              <motion.div variants={cardHoverVariants} className="h-full">
                <Card className="flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={containerVariants}
                      className="text-center"
                    >
                      {getTechnologyAvatar(technology.avatar)}
                      <motion.div variants={cardItemVariants}>
                        <CardTitle className="text-2xl font-bold text-gray-800">
                          {technology.title}
                        </CardTitle>
                      </motion.div>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={containerVariants}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {technology.items.map((tech, techIndex) => (
                        <motion.article
                          key={techIndex}
                          variants={cardItemVariants}
                          whileHover={{ scale: 1.03 }}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ type: "spring" }}
                          >
                            <BadgeCheck className="w-6 h-6 mr-3 flex-shrink-0" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {tech.name}
                            </h3>
                            <p
                              className={`text-sm ${getLevelColor(tech.level)}`}
                            >
                              {tech.level}
                            </p>
                          </div>
                        </motion.article>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
