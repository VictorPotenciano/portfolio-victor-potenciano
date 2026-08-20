import { Mail } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { motion, Variants } from "framer-motion";
import { TranslationKeys } from "../../../typing";
import ContactForm from "./ContactForm";

interface ContactCardProps {
  t: TranslationKeys;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

const ContactCard = ({
  t,
  onSubmit,
  containerVariants,
  itemVariants,
}: ContactCardProps) => {
  return (
    <div className="bg-surface rounded-xl border border-line p-8 lg:p-12">
      <motion.div variants={containerVariants} className="mb-8">
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-10 h-10 rounded-md border border-line flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {t.contact.description1}
          </h3>
        </motion.div>
        <motion.p variants={itemVariants} className="text-muted">
          {t.contact.description2}
        </motion.p>
      </motion.div>

      <Toaster />
      <ContactForm
        t={t}
        onSubmit={onSubmit}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </div>
  );
};

export default ContactCard;
