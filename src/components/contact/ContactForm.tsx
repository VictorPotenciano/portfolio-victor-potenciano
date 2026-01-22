import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { FormData, TranslationKeys } from "../../../typing";

interface ContactFormProps {
  t: TranslationKeys;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

const ContactForm = ({
  t,
  onSubmit,
  containerVariants,
  itemVariants,
}: ContactFormProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  return (
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
  );
};

export default ContactForm;
