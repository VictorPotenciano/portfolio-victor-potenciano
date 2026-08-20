import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { FormData, TranslationKeys } from "../../../typing";

interface ContactFormProps {
  t: TranslationKeys;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

const fieldClass =
  "w-full p-3.5 rounded-md bg-ink border border-line text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all duration-300 t-input";

// Dispara el shake (transitions-dev) sobre .t-input cuando el campo falla
// la validación de react-hook-form; se revierte solo cuando el usuario
// corrige el valor (reValidateMode "onChange" limpia errors en vivo).
const useShakeOnError = (hasError: boolean, submitCount: number) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const input = wrap?.querySelector<HTMLElement>(".t-input");
    if (!wrap || !input) return;

    if (!hasError) {
      wrap.classList.remove("is-error");
      input.classList.remove("is-error", "is-shaking");
      return;
    }

    wrap.classList.add("is-error");
    input.classList.add("is-error");
    input.classList.remove("is-shaking");
    void input.offsetWidth;
    input.classList.add("is-shaking");
  }, [hasError, submitCount]);

  return wrapRef;
};

const ContactForm = ({
  t,
  onSubmit,
  containerVariants,
  itemVariants,
}: ContactFormProps) => {
  const {
    register,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<FormData>();

  const nameWrapRef = useShakeOnError(Boolean(errors.name), submitCount);
  const emailWrapRef = useShakeOnError(Boolean(errors.email), submitCount);
  const messageWrapRef = useShakeOnError(Boolean(errors.message), submitCount);

  return (
    <motion.form
      variants={containerVariants}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} ref={nameWrapRef} className="t-input-wrap">
        <Label
          htmlFor="name"
          className="block font-mono text-xs uppercase tracking-wide text-muted mb-2"
        >
          {t.contact.name}
        </Label>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "El nombre es obligatorio",
          })}
          className={fieldClass}
        />
        <p className="t-error-msg text-red-400 text-sm mt-1">
          {errors.name?.message}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} ref={emailWrapRef} className="t-input-wrap">
        <Label
          htmlFor="email"
          className="block font-mono text-xs uppercase tracking-wide text-muted mb-2"
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
          className={fieldClass}
        />
        <p className="t-error-msg text-red-400 text-sm mt-1">
          {errors.email?.message}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} ref={messageWrapRef} className="t-input-wrap">
        <Label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-wide text-muted mb-2"
        >
          {t.contact.message}
        </Label>
        <Textarea
          id="message"
          {...register("message", {
            required: "El mensaje es obligatorio",
          })}
          rows={5}
          className={`${fieldClass} resize-none`}
        ></Textarea>
        <p className="t-error-msg text-red-400 text-sm mt-1">
          {errors.message?.message}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-2">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-foreground px-8 py-6 rounded-md font-semibold hover:bg-accent/90 transition-all duration-300 cursor-pointer"
          >
            {isSubmitting ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ⏳
              </motion.span>
            ) : (
              <span>{t.contact.send}</span>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
