"use client";

import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import { motion, Variants } from "framer-motion";
import TechnologiesCard from "./TechnologiesCard";

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

const TechnologiesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experience"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Titulo */}
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
                <TechnologiesCard
                  technology={technology}
                  containerVariants={containerVariants}
                  cardItemVariants={cardItemVariants}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
