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
import SectionHeading from "@/components/helper/SectionHeading";

const translations: { [key: string]: TranslationKeys } = { es, en };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          path="~/about"
          subtitle={t.about.subtitle}
          title={t.about.title}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.05, once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-6"
        >
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          >
            <DescriptionCard cardVariants={cardVariants} t={t} />
            <CertificateCard cardVariants={cardVariants} t={t} />
          </motion.div>

          <ExperienceCard cardVariants={cardVariants} t={t} />
          <EducationCard cardVariants={cardVariants} t={t} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
