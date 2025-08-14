"use client";

import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";
import toast, { Toaster } from "react-hot-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
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

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
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
            <Card className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden bg-gradient-to-br from-purple-600/10 to-blue-600/5">
              <div className="relative p-8 lg:p-12">
                <CardHeader>
                  <motion.div
                    variants={containerVariants}
                    className="text-center mb-8"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Mail className="w-8 h-8 filter brightness-0 invert" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        {t.contact.description1}
                      </CardTitle>
                    </motion.div>
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-600 mt-2"
                    >
                      {t.contact.description2}
                    </motion.p>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <Toaster />
                  <motion.form
                    variants={containerVariants}
                    onSubmit={onSubmit}
                    className="space-y-6"
                  >
                    <motion.div variants={itemVariants}>
                      <Label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.contact.name}
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "El nombre es obligatorio",
                        })}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.contact.email}
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "El email es obligatorio",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Por favor, introduce un email válido",
                          },
                        })}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.contact.message}
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message", {
                          required: "El mensaje es obligatorio",
                        })}
                        rows={5}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                      ></Textarea>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="text-center pt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block"
                          >
                            ⏳
                          </motion.span>
                        ) : (
                          <motion.span>{t.contact.send}</motion.span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
