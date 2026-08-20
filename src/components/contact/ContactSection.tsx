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
import SectionHeading from "@/components/helper/SectionHeading";

const translations: { [key: string]: TranslationKeys } = { es, en };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
    <section id="contact" className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          path="~/contact"
          subtitle={t.contact.subtitle}
          title={t.contact.title}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px", once: true }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <ContactCard
              t={t}
              onSubmit={onSubmit}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
