"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";
import toast from "react-hot-toast";
import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { motion, Variants } from "framer-motion";
import { FormData, TranslationKeys } from "../../../typing";
import ContactCard from "./ContactCard";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { handleSubmit, reset } = useForm<FormData>();
  const [, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const res = await sendEmail(data.name, data.email, data.message);
      if (res.success) {
        setError(null);
        reset();
        toast.success(t.contact.messageSend);
      } else {
        setError(res.message);
        toast.error(res.message || "No se pudo enviar el mensaje");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  });

  return (
    <section
      id="contact"
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
            {t.contact.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t.contact.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full origin-left"
          />
        </motion.div>

        {/* Tarjeta de contacto con animación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={cardVariants}>
            <ContactCard
              t={t}
              onSubmit={onSubmit}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
              iconVariants={iconVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
