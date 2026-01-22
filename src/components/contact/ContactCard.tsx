import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "react-hot-toast";
import { motion, Variants } from "framer-motion";
import { TranslationKeys } from "../../../typing";
import ContactForm from "./ContactForm";

interface ContactCardProps {
  t: TranslationKeys;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  containerVariants: Variants;
  itemVariants: Variants;
  iconVariants: Variants;
}

const ContactCard = ({
  t,
  onSubmit,
  containerVariants,
  itemVariants,
  iconVariants,
}: ContactCardProps) => {
  return (
    <Card className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden bg-gradient-to-br from-purple-600/10 to-blue-600/5">
      <div className="relative p-8 lg:p-12">
        <CardHeader>
          <motion.div variants={containerVariants} className="text-center mb-8">
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
            <motion.p variants={itemVariants} className="text-gray-600 mt-2">
              {t.contact.description2}
            </motion.p>
          </motion.div>
        </CardHeader>
        <CardContent>
          <Toaster />
          <ContactForm
            t={t}
            onSubmit={onSubmit}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        </CardContent>
      </div>
    </Card>
  );
};

export default ContactCard;
