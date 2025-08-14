"use client";

import { CircleStar, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import es from "@/translations/es";
import en from "@/translations/en";
import { TranslationKeys } from "../../typing";
import { useLanguage } from "@/context/LanguajeContext";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
        {/* Encabezado con animación */}
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

        {/* Contenido principal con stagger animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-8"
        >
          {/* Primera fila de tarjetas */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Tarjeta de descripción */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-shadow duration-300 h-full"
            >
              <CardContent className="p-8 lg:p-10">
                <div className="prose prose-lg max-w-none">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ amount: 0.3 }}
                    className="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3"
                  >
                    {t.about.description1}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ amount: 0.3 }}
                    className="text-gray-700 leading-relaxed text-lg mb-6"
                  >
                    {t.about.description2}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    viewport={{ amount: 0.3 }}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {t.about.description3}
                  </motion.p>
                </div>
              </CardContent>
            </motion.div>

            {/* Tarjeta de certificados */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <CardHeader className="mt-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  viewport={{ amount: 0.3 }}
                  className="text-center mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CircleStar className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800">
                    {t.about.certificates.title}
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="text-center">
                  {t.about.certificates.items.map((certificate, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      viewport={{ amount: 0.3 }}
                      className="mb-4"
                    >
                      <Link
                        href={certificate.url}
                        className="text-purple-600 hover:text-purple-800 font-semibold hover:underline transition-colors duration-300"
                      >
                        {certificate.name}
                      </Link>
                      <p className="text-gray-600 mt-2">{certificate.page}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </motion.div>

          {/* Tarjeta de educación */}
          <motion.div variants={cardVariants}>
            <Card className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  viewport={{ amount: 0.3 }}
                  className="text-center mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {t.about.education.title}
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {t.about.education.degrees.map((degree, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      viewport={{ amount: 0.3 }}
                      className={`border-l-4 ${
                        index % 2 === 0
                          ? "border-purple-500 hover:bg-purple-50"
                          : "border-blue-500 hover:bg-blue-50"
                      } pl-6 p-4 rounded-r-lg transition-colors duration-300`}
                    >
                      <p className="font-semibold text-gray-800 mb-1">
                        {degree.type}
                      </p>
                      <p
                        className={`font-bold ${
                          index % 2 === 0 ? "text-purple-600" : "text-blue-600"
                        } text-lg mb-2`}
                      >
                        {degree.name}
                      </p>
                      <p className="text-gray-600 mb-1">{degree.institution}</p>
                      <p className="text-sm text-gray-500">{degree.period}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
