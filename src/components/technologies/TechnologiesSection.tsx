"use client";

import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import SectionHeading from "@/components/helper/SectionHeading";
import StackManifest from "./StackManifest";

const translations: { [key: string]: TranslationKeys } = { es, en };

const TechnologiesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          path="~/stack"
          subtitle={t.technologies.subtitle}
          title={t.technologies.title}
        />

        <StackManifest technologies={t.technologies.technology} />
      </div>
    </section>
  );
};

export default TechnologiesSection;
