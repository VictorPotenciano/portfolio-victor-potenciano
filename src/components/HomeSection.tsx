"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Typewriter } from "nextjs-simple-typewriter";
import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../typing";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      delay: custom,
    },
  }),
};

const HomeSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleDownload = () => {
    const pdfUrl = "/Curriculum-Victor-Potenciano.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Curriculum-Victor-Potenciano.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenedor principal */}
      <motion.div
        className="container mx-auto px-4 lg:px-8 flex flex-col items-center gap-8 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Foto */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          custom={0.7}
        >
          <Image
            src="/fotoperfil.jpg"
            alt="Foto de perfil de Victor Potenciano"
            priority
            width={300}
            height={300}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Texto */}
        <motion.div variants={itemVariants} custom={0.5}>
          <p className="text-lg md:text-xl mb-2 opacity-90">
            {t.home.greeting}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              <Typewriter
                words={t.home.titles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={120}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
          custom={0.3}
        >
          <motion.div variants={itemVariants} custom={0.3}>
            <Button
              asChild
              onClick={handleDownload}
              className="bg-white text-purple-600 px-8 py-6 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>{t.home.downloadCv}</span>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} custom={0.35}>
            <Link href="/#contact">
              <Button className="bg-purple-700/80 backdrop-blur-sm text-white px-8 py-6 rounded-full font-semibold hover:bg-purple-800 hover:scale-105 transition-all duration-300 shadow-lg border border-white/20 cursor-pointer">
                {t.home.contactMe}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Iconos */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
          custom={0.1}
        >
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
            aria-label={t.home.linkedinAlt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-10 h-10" />
            </motion.div>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/VictorPotenciano"
            aria-label={t.home.githubAlt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-10 h-10" />
            </motion.div>
          </Link>
          {/* WhatsApp */}
          <Link
            href="https://wa.me/+34660529420"
            aria-label={t.home.whatsappAlt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-10 h-10"
                style={{ fontSize: "2.5rem" }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
