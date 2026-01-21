"use client";

import es from "@/translations/es";
import en from "@/translations/en";
import { TranslationKeys } from "../../../typing";
import { useLanguage } from "@/context/LanguajeContext";
import { motion, Variants } from "framer-motion";
import DescriptionCard from "./DescriptionCard";
import CertificateCard from "./CertificateCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-4 lg:px-8"
      >
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
            {t.about.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t.about.title}
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
          viewport={{ amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-8"
        >
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Tarjeta de descripción */}
            <DescriptionCard cardVariants={cardVariants} t={t} />

            {/* Tarjeta de certificados */}
            <CertificateCard cardVariants={cardVariants} t={t} />
          </motion.div>

          {/* Tarjeta de experiencia */}
          <ExperienceCard cardVariants={cardVariants} t={t} />

          {/* Tarjeta de educación */}
          <EducationCard cardVariants={cardVariants} t={t} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
